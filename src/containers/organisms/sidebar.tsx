import React from 'react';
import { Typography } from '@andideve/design-system';
import { FiLogOut } from 'react-icons/fi';

import {
  Sidebar as SideRoot,
  SideEdge,
  SideContent,
  SideMenu,
} from '@/components/molecules/sidebar';
import SideMenuContent from '@/components/molecules/sidebar/side-menu/menu-content';
import Image from '@/components/atoms/image';
import { MenuGroup } from '@/types/defaults';

export default function Sidebar({
  className,
  menuGroups,
  user,
  collapse,
  onLogout,
}: {
  className?: string;
  menuGroups: MenuGroup[];
  user: { displayName: string; images: { width: number; url: string }[] };
  collapse?: boolean;
  onLogout?(): void;
}) {
  return (
    <SideRoot collapse={collapse} className={className}>
      <SideEdge placement="top">
        <SideEdge.Button disabled>
          <Image
            src={user.images[0]?.url}
            alt={user.displayName}
            srcSet={String(user.images.map((img) => `${img.url} ${img.width ?? 320}w`))}
            className="mr-3 aspect-square min-w-[1.5rem] max-w-[1.5rem]"
          />
          <Typography as="span" size="sm" className="font-medium">
            {user.displayName}
          </Typography>
        </SideEdge.Button>
      </SideEdge>
      <SideContent>
        <SideMenu.List>
          {menuGroups.map((menuGroup, i) => (
            <SideMenu.Item key={i} {...menuGroup} />
          ))}
        </SideMenu.List>
      </SideContent>
      {onLogout && (
        <SideEdge placement="bottom">
          <SideEdge.Button onClick={onLogout}>
            <SideMenuContent icon={FiLogOut} label="Sign Out" className="overflow-x-hidden pl-1" />
          </SideEdge.Button>
        </SideEdge>
      )}
    </SideRoot>
  );
}
