import React from 'react';

import GroupCategory from './group-category';
import GroupMenu from './group-menu';
import { MenuGroup } from '@/types/defaults';

function List({ children }: { children?: React.ReactNode }) {
  return <ul className="list-none flex flex-col space-y-[1.625rem]">{children}</ul>;
}

function Item({ category, items }: MenuGroup) {
  return (
    <li className="overflow-x-hidden">
      {category && <GroupCategory label={category} className="ml-3 mb-[.625rem]" />}
      <GroupMenu.List>
        {items.map((menu) => (
          <GroupMenu.Item key={menu.to} {...menu} />
        ))}
      </GroupMenu.List>
    </li>
  );
}

export const SideMenu = { List, Item };

export default SideMenu;
