import React from 'react';

export interface SiteMetadata {
  title: string;
  description: string;
}

export interface Menu {
  label: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface MenuGroup {
  items: Menu[];
  category?: string;
}
