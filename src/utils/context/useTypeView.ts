import { useContext } from 'react';
import { TypeViewContext } from './typeViewContext.ts';

export const useTypeView = () => useContext(TypeViewContext);
