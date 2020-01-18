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
        { path: '/page6', component: '../pages/page6' },
        { path: '/page7', component: '../pages/page7' },
        { path: '/page8', component: '../pages/page8' },
        { path: '/page9', component: '../pages/page9' },
        { path: '/page10', component: '../pages/page10' },
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
