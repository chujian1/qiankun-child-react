// yarn add react-app-rewired // 使用react-app-rewired进行配置文件的重写，命令需要修改成react-app-rewired去执行
module.exports = {
  webpack: (config) => {
    config.output.library = 'child-react'
    config.output.libraryTarget = 'umd'
    config.output.publicPath = 'http://localhost:20000/'
    return config
  },
  devServer: (configFunction) => {
    // devServer要求返回一个函数
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      // 以下端口修改直接写在.env文件中，默认会去这个文件中拿环境变量
      // PORT=20000
      // WDS_SOCKET_PORT=20000 // 默认的socket服务也是3000，修改成20000，防止热更新出错
      config.headers = {
        'Access-Control-Allow-Origin': '*'
      }
      return config
    }
  }
}