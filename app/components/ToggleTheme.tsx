// components/ToggleTheme.tsx
import React from 'react';
import { ThemeType } from '../hooks/theme';

interface ToggleThemeProps {
  onThemeChange: (theme: ThemeType) => void;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ onThemeChange }) => {
  return (
    <div>
      <button onClick={() => onThemeChange('light')} style={{ margin: '5px', padding: '10px' }}>
        Light Theme
      </button>
      <button onClick={() => onThemeChange('dark')} style={{ margin: '5px', padding: '10px' }}>
        Dark Theme
      </button>
      <button onClick={() => onThemeChange('grey')} style={{ margin: '5px', padding: '10px' }}>
        Grey Theme
      </button>
    </div>
  );
};

export default ToggleTheme;
