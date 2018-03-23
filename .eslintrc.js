module.exports = {
    "extends": "standard",
    // add your custom rules here
    rules: {
        // allow async-await

        'generator-star-spacing': 'off',

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // 空格四格
        indent: ['error', 4],

        // 函数名与括号之间不需要空格
        'space-before-function-paren': ['error', 'never'],

        // 必须使用单引号
        'quotes': ['error', 'single'],

        // 要求注释前面需要有空行
        'lines-around-comment': ['error', {
            'beforeBlockComment': true,
            'beforeLineComment': true
        }],

        // 括号后面不做要求
        'padded-blocks': 'off',

        // 计算属性 []必须在同一行
        'standard/computed-property-even-spacing': 'off',

        'no-console': 'off'
    }
};