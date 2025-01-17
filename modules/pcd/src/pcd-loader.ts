// loaders.gl, MIT license

import type {Loader, LoaderOptions} from '@loaders.gl/loader-utils';
import {PCDMesh} from './lib/pcd-types';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

/**
 * Worker loader for PCD - Point Cloud Data
 */
export const PCDLoader: Loader<PCDMesh, never, LoaderOptions> = {
  name: 'PCD (Point Cloud Data)',
  id: 'pcd',
  module: 'pcd',
  version: VERSION,
  worker: true,
  extensions: ['pcd'],
  mimeTypes: ['text/plain'],
  options: {
    pcd: {}
  }
};
