#!/usr/bin/env node
var program = require('commander')
var chalk = require('chalk')
var ora = require('ora')
var download = require('download-git-repo')

program
    .version(require('./package.json').version)

program
    .command('init <dir>')
    .description('下载脚手架模板')
    .action((dir) => {
        var spinner = ora('开始下载模板...')
        spinner.start()
        download('rianran1993/vetemplate', dir, function(err) {
            spinner.stop()
            console.log(err ? ('下载模板失败：' + err.message) : '下载模板成功')
        })
    })

program.on('--help', () => {
    console.log('  例子:')
    console.log()
    console.log(chalk.green('    $ ran init dirname'))
    console.log()
})
function help() {
    program.parse(process.argv)
    if (program.args.length < 1) return program.help()
}
help()
