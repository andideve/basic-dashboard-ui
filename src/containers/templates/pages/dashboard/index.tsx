import React, { useEffect, useState } from 'react';
import { Box } from '@andideve/design-system';
import { FiGrid, FiBell, FiSettings, FiHelpCircle, FiFile, FiUser, FiTrash } from 'react-icons/fi';

import Page from '../../page';
import Sidebar from '@/containers/organisms/sidebar';
import { UI } from '@/config/constants';
import { MenuGroup } from '@/types/defaults';

export { Section } from '../../page';

const menuGroups: MenuGroup[] = [
  {
    items: [
      { label: 'Dashboard', to: '/dashboard', icon: FiGrid },
      { label: 'Updates', to: '#inbox', icon: FiBell },
      { label: 'Settings', to: '#settings', icon: FiSettings },
      { label: 'Help', to: '#help', icon: FiHelpCircle },
    ],
  },
  {
    category: 'Group 1',
    items: [
      { label: 'All Documents', to: '#shares', icon: FiFile },
      { label: 'Shared with Me', to: '#shared-with-me', icon: FiUser },
      { label: 'Trash', to: '#trash', icon: FiTrash },
    ],
  },
];

export default function DashboardPage({ children }: { children?: React.ReactNode }) {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);

  const onWindowResize = () => {
    setSidebarCollapse(window.document.documentElement.clientWidth <= 576);
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <Page>
      <Sidebar
        menuGroups={menuGroups}
        user={{
          displayName: 'Andi',
          images: [{ width: 128, url: '/images/default_avatars/3.png' }],
        }}
        collapse={sidebarCollapse}
        className="fixed inset-y-0 left-0 z-[999]"
      />
      <Box
        as="main"
        ml={sidebarCollapse ? UI.sidebarCollapseWidth : UI.sidebarWidth}
        style={{ transition: `margin-left ${UI.sidebarDuration}ms ease` }}
      >
        {children}
      </Box>
    </Page>
  );
}
