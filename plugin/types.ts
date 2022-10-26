import type { Configuration as ElectronBuilderConfiguration } from 'electron-builder';

export interface ViteElectronBuilderOptions {
  root?: string;
  mainFile?: string;
  preloadFile?: string | boolean;
  entryFile?: string;
  outdir?: string;
  tsconfig?: string | any;
  external?: string[];
  electronBuilderConfig?: string | ElectronBuilderConfiguration | any;
  afterEsbuildBuild?: () => Promise<void>;
}

export interface ResolvedViteElectronBuilderOptions extends Required<ViteElectronBuilderOptions> {
  env: Record<string, any>;
  command: 'build' | 'serve';
}
