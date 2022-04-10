// @ts-nocheck
import { md } from "./plugins/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
import prismjs from 'babel-plugin-prismjs';
export default {
  base: './',
  assetsDir: 'assets',
  plugins: [
    md(),
    //没有有
    prismjs({
      // languages: ['json'],
       languages: 'all',
       plugins: ["line-numbers"],
       theme: "okaidia",
       css: true
    })  
  ],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
};