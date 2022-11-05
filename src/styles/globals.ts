import type { CSSObject } from '@emotion/react';
import type { Theme } from '@andideve/design-system';

const global = ({ config: { colorMode }, colors }: Theme): CSSObject => ({
  '::-webkit-scrollbar': {
    width: 16,
  },
  '::-webkit-scrollbar-track': {
    background: colors.background.primary,
  },
  '::-webkit-scrollbar-thumb': {
    border: '4px solid',
    borderColor: colors.background.primary,
    borderRadius: 9999,
    backgroundColor: colorMode === 'dark' ? colors.gray[1] : 'hsl(0, 0%, 76%)',
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
  },
  hr: {
    margin: '1.5rem 0',
    borderTop: '1px solid',
    borderColor: colors.separator.default,
  },
});

export default global;
