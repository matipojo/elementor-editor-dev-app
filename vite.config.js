import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup( build ) {
            build.onLoad( { filter: /.*\.js$/ }, async ( args ) => ( {
              loader: 'jsx',
              contents: fs.readFileSync( args.path, 'utf8' ),
            } ) );
          },
        },
      ],
    },
  },
})
