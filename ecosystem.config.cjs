module.exports = {
  apps: [
    {
      name: 'qianlian',
      port: '3000',
      exec_mode: 'cluster', // 开启集群模式
      instances: 'max',      // 根据 CPU 核心数自动分配进程
      script: './.output/server/index.mjs'
    }
  ]
}