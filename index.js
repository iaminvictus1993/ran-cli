#!/usr/bin/env node
var program = require('commander')
var fs = require('fs')

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
program.on('--help', () => {
    console.log('  Examples:')
    console.log()
    console.log('    $ vue init dirname')
    console.log()
})
function help() {
    program.parse(process.argv)
    if (program.args.length < 1) return program.help()
}
help()
