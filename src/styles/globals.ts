import type { CSSObject } from '@emotion/react';
import type { Theme } from '@andideve/design-system';

const global = ({ colors }: Theme): CSSObject => ({
  body: {
    fontFamily: String([
      '"Inter"',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      "'Open Sans'",
      "'Helvetica Neue'",
      'sans-serif',
    ]),
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
  strong: {
    fontWeight: 600,
  },
});

export default global;
