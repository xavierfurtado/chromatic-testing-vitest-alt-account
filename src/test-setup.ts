import { ThemeProvider } from '@emotion/react';
import { render as baseRender } from 'vitest-browser-react';
import { createElement, type ReactNode } from 'react';
import { theme } from './tokens/theme';

const ThemeWrapper = ({ children }: { children: ReactNode }) =>
  createElement(ThemeProvider, { theme, children });

export const render = (ui: ReactNode) =>
  baseRender(ui, { wrapper: ThemeWrapper });
