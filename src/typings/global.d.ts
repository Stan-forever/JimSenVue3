declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    children?: MenuOptions[];
    meta: MenuProps;
  }
  interface MenuProps {
    icon: string;
    title: string;
    isLink: string;
    isHide: string;
    isFull: string;
    isAffix: string;
    isKeepAlive: string;
  }
}
