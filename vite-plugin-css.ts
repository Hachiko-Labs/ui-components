import type { Plugin, ResolvedConfig } from 'vite';
import fs from 'fs';
import path from 'path';

const cssImport = (): Plugin => {
  let config: ResolvedConfig;
  let cssFile: string | undefined = undefined;

  return {
    name: 'vite-plugin-css',
    apply: 'build',
    enforce: 'post',
    configResolved: (resolvedConfig) => {
      config = resolvedConfig;
    },
    writeBundle: (option, bundle) => {
      if (!config.build || !config.build.lib) {
        return;
      }

      const files = Object.keys(bundle);

      if (option.format === 'es') {
        cssFile = files.find((file) => file.endsWith('.css'));
      }

      if (cssFile === undefined) {
        return;
      }

      for (const file of files) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!bundle[file].isEntry) {
          continue;
        }
        const filePath = path.resolve('dist', file);
        const data = fs.readFileSync(filePath, {
          encoding: 'utf8',
        });

        const cssImport =
          option.format === 'es' ? `import './style.css'` : `require('./style.css')`;
        fs.writeFileSync(filePath, `${cssImport};\n${data}`);
      }
    }
  };
};

export { cssImport };
