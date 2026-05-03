declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    spy?: boolean;
    smooth?: boolean | string | number;
    duration?: number;
    offset?: number;
    onClick?: () => void;
  }

  export const Link: React.ComponentType<LinkProps>;
}
