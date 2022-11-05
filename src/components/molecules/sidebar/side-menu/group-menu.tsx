import React, { useMemo } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import type { Theme } from '@andideve/design-system';
import clsx from 'clsx';

import MenuContent from './menu-content';
import useNavlink from '@/hooks/use-navlink';
import { Menu } from '@/types/defaults';

function List({ children }: { children?: React.ReactNode }) {
  return <ul className="list-none flex flex-col">{children}</ul>;
}

const Anchor = styled.a<{ theme?: Theme }>(({ theme: { colors } }) => ({
  backgroundColor: 'transparent',
  svg: { color: colors.foreground.secondary },
  '&.active': {
    '&:before, &:after': { backgroundColor: colors.accent }, // background & vertical line
    '&, svg': { color: colors.accent },
  },
  '&:not(.active):hover, &:not(.active):focus': {
    backgroundColor: colors.background.elevated.secondary,
    svg: { color: colors.foreground.primary },
  },
}));

function Item({ label, to, icon }: Menu) {
  const { isActive } = useNavlink();
  const active = useMemo(() => isActive(to), [to]);
  return (
    <li>
      <Link href={to} passHref legacyBehavior>
        <Anchor
          aria-current={active ? 'page' : undefined}
          className={clsx(
            { active },
            'overflow-hidden relative flex items-center py-2 px-3 h-8 rounded-md',
            'before:opacity-10 before:absolute before:inset-0', // as background
            'after:absolute after:inset-y-0 after:left-0 after:my-2 after:w-[.125rem]', // as vertical line
          )}
        >
          <MenuContent icon={icon} label={label} className="z-10" />
        </Anchor>
      </Link>
    </li>
  );
}

const GroupMenu = { List, Item };

export default GroupMenu;
