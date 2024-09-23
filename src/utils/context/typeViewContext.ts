import { createContext } from 'react';

export type ComponentType = 'line' | 'ellipse' | 'polygon';

interface TypeViewContextProps {
  type: ComponentType;
  handleClick: (type: string) => void;
}

export const TypeViewContext = createContext<TypeViewContextProps>({
  type: 'line',
  handleClick: () => {}
});
