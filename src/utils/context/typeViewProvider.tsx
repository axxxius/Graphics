import { ReactNode, useMemo, useState } from 'react';
import { ComponentType, TypeViewContext } from './typeViewContext.ts';

interface TypeViewProviderProps {
  children: ReactNode;
}

export const TypeViewProvider = ({ children }: TypeViewProviderProps) => {
  const [type, setType] = useState<ComponentType>('line');

  const handleClick = (prev: any) => {
    setType(prev);
  };

  const value = useMemo(
    () => ({
      type,
      setType,
      handleClick
    }),
    [type, setType, handleClick]
  );

  return <TypeViewContext.Provider value={value}>{children}</TypeViewContext.Provider>;
};
