//这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置，
//而且上面的例子加载了全部的 antd 组件的样式（gzipped 后一共大约 60kb）。
//
// 此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使
//用 react-app-rewired （一个对 create-react-app 进行自定义配置的社区解决方案）。
//
// 引入 react-app-rewired 并修改 package.json 里的启动配置。由于新
//的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra。

const {override, fixBabelImports} = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);