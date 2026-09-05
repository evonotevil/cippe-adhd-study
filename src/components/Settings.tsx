import { useState } from 'react';
import type { StudySettings } from '../types';

interface SettingsProps {
  settings: StudySettings;
  onUpdate: (settings: StudySettings) => void;
}

export function Settings({ settings, onUpdate }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleChange = (key: keyof StudySettings, value: unknown) => {
    const updated = { ...localSettings, [key]: value };
    setLocalSettings(updated);
    onUpdate(updated);
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
    </div>
  );
}
