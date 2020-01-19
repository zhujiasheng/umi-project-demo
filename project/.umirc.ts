import { IConfig } from 'umi-types';
import routes from './config/routes';
import plugins from './config/plugins';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  exportStatic: true,
  hash:true,
  routes,
  plugins,
}

export default config;
