export function withHash(path: string): string {
  const clean = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-');
  return `${path}#${clean}`;
}
