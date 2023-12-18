declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
}

// for assets

declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare const __PLATFORM__: 'desktop' | 'mobile';