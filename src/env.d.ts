/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  VITE_API_PUBLIC_URL: string;
  VITE_GOOGLE_MAPS_API_KEY: string;
}
