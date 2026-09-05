import { useState, useRef } from 'react';
import type { StudySettings } from '../types';
import { useCloudSync } from '../hooks/useCloudSync';

interface SettingsProps {
  settings: StudySettings;
  onUpdate: (settings: StudySettings) => void;
}

export function Settings({ settings, onUpdate }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const { syncStatus, lastSyncTime, exportToFile, importFromFile } = useCloudSync();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (key: keyof StudySettings, value: unknown) => {
    const updated = { ...localSettings, [key]: value };
    setLocalSettings(updated);
    onUpdate(updated);
  };

  const handleExport = () => {
    const data = {
      progress: JSON.parse(localStorage.getItem('cippe-progress') || '[]'),
      stats: JSON.parse(localStorage.getItem('cippe-stats') || '{}'),
      settings: localSettings,
      lastSync: new Date().toISOString(),
    };
    exportToFile(data);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = await importFromFile(file);
    if (data) {
      if (data.progress) localStorage.setItem('cippe-progress', JSON.stringify(data.progress));
      if (data.stats) localStorage.setItem('cippe-stats', JSON.stringify(data.stats));
      if (data.settings) onUpdate(data.settings);
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900">设置</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          番茄钟时长: {localSettings.tomatoDuration} 分钟
        </label>
        <input
          type="range"
          min="5"
          max="60"
          step="5"
          value={localSettings.tomatoDuration}
          onChange={(e) => handleChange('tomatoDuration', parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          休息时长: {localSettings.breakDuration} 分钟
        </label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={localSettings.breakDuration}
          onChange={(e) => handleChange('breakDuration', parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">音效</span>
        <button
          onClick={() => handleChange('soundEnabled', !localSettings.soundEnabled)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            localSettings.soundEnabled
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          {localSettings.soundEnabled ? '🔊 开启' : '🔇 关闭'}
        </button>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 mb-2">字体大小</span>
        <div className="flex gap-2">
          {(['small', 'medium', 'large'] as const).map((size) => (
            <button
              key={size}
              onClick={() => handleChange('fontSize', size)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                localSettings.fontSize === size
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {size === 'small' ? '小' : size === 'medium' ? '中' : '大'}
            </button>
          ))}
        </div>
      </div>

      {/* Cloud Sync Section */}
      <div className="border-t pt-6 mt-6">
        <h4 className="text-lg font-bold text-gray-900 mb-4">数据同步</h4>

        <div className="space-y-3">
          <button
            onClick={handleExport}
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            📥 导出学习数据
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            📤 导入学习数据
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
          />

          {lastSyncTime && (
            <p className="text-xs text-gray-500 text-center">
              上次同步: {lastSyncTime}
            </p>
          )}

          {syncStatus === 'syncing' && (
            <p className="text-sm text-blue-600 text-center">同步中...</p>
          )}
          {syncStatus === 'error' && (
            <p className="text-sm text-red-600 text-center">同步失败，请重试</p>
          )}
        </div>

        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>提示：</strong>点击"导出"可下载包含学习进度、统计数据和设置的 JSON 文件。
            在新设备上点击"导入"即可恢复数据。
          </p>
        </div>
      </div>
    </div>
  );
}
