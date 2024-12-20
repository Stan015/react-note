/* eslint-disable no-new-func */
import { defineCodeRunnersSetup } from '@slidev/types'

export default defineCodeRunnersSetup(() => {
  return {
    // Support Vue SFC
    async vue(code) {
      const Vue = await import('vue')
      const { parse, compileScript } = await import('@vue/compiler-sfc')

      // Compile the script, note this demo does not handle Vue styles
      const sfc = parse(code)
      let scripts = compileScript(sfc.descriptor, {
        id: sfc.descriptor.filename,
        genDefaultAs: '__Component',
        inlineTemplate: true,
      }).content

      // console.log(scripts)
      // console.log(sfc)

      // Replace Vue imports to object destructuring
      // Only for simple demo, it doesn't work with imports from other packages
      scripts = scripts.replace(
        /import (\{[^}]+\}) from ['"]vue['"]/g,
        (_, imports) => `const ${imports.replace(/\sas\s/g, ':')} = Vue`,
      )
      scripts += '\nreturn __Component'

      // console.log(scripts)

      // Create function to evaluate the script and get the component
      // Note this is not sandboxed, it's NOT secure.
      const component = new Function(`return (Vue) => {${scripts}}`)()(Vue)

      // console.log(component)

      // Mount the component
      const app = Vue.createApp(component)
      const el = document.createElement('div')
      app.mount(el)

      return {
        element: el,
      }
    },
    async jsx(code) {
      const React = await import('react')
      const ReactDOM = await import('react-dom/client')
      const Babel = await import('@babel/standalone')

      const result = Babel.transform(code, {
        presets: ['react'],
      })

      let Component = new Function(`return (React) => ${result.code}`)()(React)
      let app = React.createElement(Component)
      const el = document.createElement('div')
      el.className = 'jsx-runner'

      // style
      el.style.width = '100%'
      el.style.height = '50vh'
      // el.style.minHeight = '400px';
      el.style.overflow = 'auto'

      ReactDOM.createRoot(el).render(app)

      return {
        element: el,
      }
    },
  }
})
