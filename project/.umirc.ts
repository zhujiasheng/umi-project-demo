import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  hash:true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/page1' },
        { path: '/login', component: '../layouts/login' },
        { path: '/page1', component: '../pages/page1' },
        { path: '/page2', component: '../pages/page2' },
        { path: '/page3', component: '../pages/page3' },
        { path: '/page4', component: '../pages/page4' },
        { path: '/page5', component: '../pages/page5' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'project',
      dll: true,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
