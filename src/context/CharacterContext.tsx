'use client';

import { createContext, ReactNode,useContext, useState } from 'react';

export type Character = {
  id: string;
  name: string;
  image: string;
};

type CharacterContextType = {
  character: Character | null;
  setCharacter: (character: Character) => void;
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [character, setCharacter] = useState<Character | null>(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter باید داخل CharacterProvider استفاده شود');
  }
  return context;
};
