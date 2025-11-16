export interface MenuItem {
    label: string;
    link?: string;
    isCollapsed?:boolean
    subItems?: MenuItem[];
    megaMenu?: boolean; // Optional flag for mega menu
  }

export interface MenuItemFooter {
  links: Items[];    
  bottamFooters: Items[];    
}

export interface Items{
  link:string;
  lable:string;
}