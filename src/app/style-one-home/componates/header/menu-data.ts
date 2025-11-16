import { Items, MenuItem, MenuItemFooter } from "./menu-modal";

export const MENUITEMS: MenuItem[] = [
  {
    label: 'Home',
    isCollapsed: true,
    subItems: [
      { label: 'Home Style 1', link: '/' },
      { label: 'Home Style 2', link: '/index-2' },
      { label: 'Home Style 3', link: '/index-3' },
    ],
  },
  { label: 'About us', link: '/about' },
  {
    label: 'Services',
    isCollapsed: true,
    subItems: [
      { label: 'Services', link: '/services' },
      { label: 'Services Details', link: '/services-details' },
    ],
  },
  {
    label: 'Project',
    isCollapsed: true,
    subItems: [
      { label: 'Project', link: '/project-grid' },
      { label: 'Project Details', link: '/project-details' },
    ],
  },
  {
    label: 'Blog',
    isCollapsed: true,
    subItems: [
      { label: 'Blog', link: '/blog-list' },
      { label: 'Blog Details', link: '/blog-details' },
    ],
  },
  { label: 'Contact', link: '/contact' },
];

export const MENUITEMSFORFOOTER: MenuItemFooter = {
  links: [
    { link: '/about', lable: 'About us' },
    { link: '/contact', lable: 'Contact-us' },
    { link: '/blog-details', lable: 'Blogs' },
    { link: '/contact', lable: 'Policy' },
    { link: '/contact', lable: 'Refund' },
  ],
  bottamFooters: [
    { link: '/about', lable: 'About us' },
    { link: '/contact', lable: 'Contact-us' },
  ],
};

export const ONEPAGEITEM: Items[] = [
  { link: 'home', lable: 'Home' },
  { link: 'about', lable: 'About us' },
  { link: 'service', lable: 'Service' },
  { link: 'project', lable: 'Project' },
  { link: 'blog', lable: 'Blog' },
  { link: 'contact', lable: 'Contact' },
]



