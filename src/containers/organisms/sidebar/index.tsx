import React from 'react';
import { Box, Typography } from '@andideve/design-system';
import clsx from 'clsx';
import { FiLogOut } from 'react-icons/fi';

import { SideButton, SideMenu } from '@/components/molecules/sidebar';
import SideMenuContent from '@/components/molecules/sidebar/side-menu/menu-content';
import Image from '@/components/atoms/image';
import { UI } from '@/config/constants';
import { MenuGroup } from '@/types/defaults';

export default function Sidebar({
  className,
  menuGroups,
  user,
  collapse,
}: {
  className?: string;
  menuGroups: MenuGroup[];
  user: { displayName: string; images: { width: number; url: string }[] };
  collapse?: boolean;
}) {
  return (
    <Box
      as="aside"
      width={collapse ? UI.sidebarCollapseWidth : UI.sidebarWidth}
      borderColor="separator.default"
      backgroundColor="background.elevated.primary"
      className={clsx('sidebar overflow-x-hidden flex flex-col border-r', className)}
      style={{ transition: `width ${UI.sidebarDuration}ms ease` }}
    >
      <Box
        height={UI.topbarHeight}
        borderColor="separator.default"
        className="sidebar__top flex items-center p-2 border-b"
      >
        <SideButton className="grow overflow-x-hidden" disabled>
          <Image
            src={user.images[0]?.url}
            alt={user.displayName}
            srcSet={String(user.images.map((img) => `${img.url} ${img.width ?? 320}w`))}
            className="mr-3 aspect-square min-w-[1.5rem] max-w-[1.5rem]"
          />
          <Typography as="span" size="sm" className="font-medium">
            {user.displayName}
          </Typography>
        </SideButton>
      </Box>
      <div className="sidebar__menu grow overflow-y-auto py-4 px-2">
        <SideMenu.List>
          {menuGroups.map((menuGroup, i) => (
            <SideMenu.Item key={i} {...menuGroup} />
          ))}
        </SideMenu.List>
      </div>
      <Box
        height={UI.topbarHeight}
        borderColor="separator.default"
        className="sidebar__bottom flex items-center p-2 border-t"
      >
        <SideButton className="grow overflow-x-hidden">
          <SideMenuContent icon={FiLogOut} label="Sign Out" className="overflow-x-hidden pl-1" />
        </SideButton>
      </Box>
    </Box>
  );
}
