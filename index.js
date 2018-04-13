#!/usr/bin/env node
var program = require('commander')
var fs = require('fs')
var download = require('download-git-repo')

console.log('processArgv', process.argv)
// 文件操作
var fsOption = {

    // 创建目录
    mkdir: function(name) {
        fs.mkdir(name, 0o777, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log(name + '目录创建成功')
        })

    }
}
program
    .version('0.0.1')

program
    .command('init <name>')
    .description('初始化一个页面的功能')
    .action((name) => {
        fsOption.mkdir(name)
    })

program
    .command('download [args...]')
    .description('下载模板如: ran download rianran1993/html- dir')
    .action((args) => {
        console.log(Object.prototype.toString.call(args))
        download(args[0], args[1], function (err) {
          console.log(err ? 'Error' : 'Success')
        })
    })

program.on('--help', () => {
    console.log('  Examples:')
    console.log()
    console.log('    $ ran init dirname')
    console.log()    
    console.log('    $ ran download rianran1993/html- dirname')
    console.log()
})
function help() {
    program.parse(process.argv)
    if (program.args.length < 1) return program.help()
}
help()
