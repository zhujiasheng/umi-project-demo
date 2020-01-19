export default [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: {
      immer: true
    },
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
