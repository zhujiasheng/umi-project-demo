export default [
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
]
