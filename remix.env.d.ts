/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module '@remix-run/dev/server-build' {
  import type { ServerBuild } from '@remix-run/node';
  export = ServerBuild;
}

declare global {
  const PORT: number;
}

export {}; 