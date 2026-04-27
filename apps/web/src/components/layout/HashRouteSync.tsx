'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function pathToHash(pathname: string) {
  const normalized = pathname === '/' ? 'home' : pathname.replace(/^\//, '').replace(/\//g, '-');
  return `#${normalized}`;
}

export function HashRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    const expectedHash = pathToHash(pathname);
    if (window.location.hash !== expectedHash) {
      history.replaceState(
        history.state,
        '',
        `${window.location.pathname}${window.location.search}${expectedHash}`
      );
    }
  }, [pathname]);

  return null;
}
