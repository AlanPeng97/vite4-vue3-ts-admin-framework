module.exports = {
  printWidth: 130, // 超过最大值换行
  tabWidth: 2, // 一个 tab 代表几个空格
  useTabs: true, // 是否使用 tab 进行缩进(默认false:空格 | true:tab)
  semi: true, // 行尾是否使用分号(默认true:有 | false:没有)
  singleQuote: false, // 使用单引号(默认false:双引号 | true:单引号)
  quoteProps: "as-needed", // 是否自动给对象属性加引号 (默认as-needed:只给需要加的单个属性加 | consistent:有属性需要加时给所有属性加 | preserve:保持输入状态)
  trailingComma: "es5", // 多行时尽可能打印尾随逗号(默认es5：obj、arr会加，ts type不加 | none:都不加 | all:尽可能加，包括ts的type>"
  bracketSpacing: true, // 对象大括号之间是否有空格，(默认true:有 | false:没有)
  arrowParens: "always", //  (x) => {} 箭头函数参数只有一个时是否要有小括号 (默认always:加 | avoid：不加)
  proseWrap: "preserve", // 默认 preserve .因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: "css", // 在html中空格是否是敏感的 (默认css:遵守CSS显示属性的默认值 | strict:空格被认为是敏感的 | ignore:空格被认为是不敏感的)
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进 (默认false:无缩进 | true:有缩进)
  endOfLine: "lf", // 换行符使用 lf 结尾是 (默认lf | crlf | cr | auto)
};