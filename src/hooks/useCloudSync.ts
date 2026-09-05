import { useState, useCallback } from 'react';

const BIN_ID = 'cippe-study-data';
const API_KEY = '$2a$10$demo_key_for_cippe_sync'; // 用户需要替换为自己的 API key

interface SyncData {
  version?: number;
  progress: any[];
  stats: any;
  settings: any;
  activeSession?: any;
  randomSettings?: any;
  lastSync: string;
}

export function useCloudSync() {
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);

  const getApiKey = useCallback(() => {
    return localStorage.getItem('cippe-api-key') || API_KEY;
  }, []);

  const syncToCloud = useCallback(async (data: SyncData) => {
    const apiKey = getApiKey();
    setSyncStatus('syncing');

    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': apiKey,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSyncStatus('success');
      setLastSyncTime(new Date().toLocaleString());
      return true;
    } catch (error) {
      console.error('Sync to cloud failed:', error);
      setSyncStatus('error');
      return false;
    }
  }, [getApiKey]);

  const syncFromCloud = useCallback(async () => {
    const apiKey = getApiKey();
    setSyncStatus('syncing');

    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          'X-Master-Key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSyncStatus('success');
      setLastSyncTime(new Date().toLocaleString());
      return result.record as SyncData;
    } catch (error) {
      console.error('Sync from cloud failed:', error);
      setSyncStatus('error');
      return null;
    }
  }, [getApiKey]);

  const exportToFile = useCallback((data: SyncData) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cippe-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const importFromFile = useCallback((file: File): Promise<SyncData | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          resolve(data as SyncData);
        } catch {
          resolve(null);
        }
      };
      reader.onerror = () => resolve(null);
      reader.readAsText(file);
    });
  }, []);

  return {
    syncStatus,
    lastSyncTime,
    syncToCloud,
    syncFromCloud,
    exportToFile,
    importFromFile,
  };
}
