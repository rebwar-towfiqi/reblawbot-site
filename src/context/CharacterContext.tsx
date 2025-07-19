'use client';

import { createContext, ReactNode,useContext, useState } from 'react';

// نوع کانتکست
type CharacterContextType = {
  selectedCharacter: string | null;
  selectCharacter: (id: string) => void;
};

// ایجاد کانتکست با مقدار اولیه
const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

// پراوایدر کانتکست
export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const selectCharacter = (id: string) => {
    setSelectedCharacter(id);
  };

  return (
    <CharacterContext.Provider value={{ selectedCharacter, selectCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

// هوک شخصی‌سازی‌شده برای استفاده از کانتکست
export const useCharacter = (): CharacterContextType => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
