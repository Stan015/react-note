import MarkdownItMagicLink from 'markdown-it-magic-link'
import { defineConfig } from 'vite'
import '@slidev/cli'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            Nodejs: {
              link: 'https://nodejs.org',
              imageUrl: 'https://github.com/nodejs.png',
            },
            'Visual Studio Code': {
              link: 'https://code.visualstudio.com/download',
              imageUrl:
                'https://code.visualstudio.com/assets/images/code-stable.png',
            },
            Zed: {
              link: 'https://zed.dev',
              imageUrl: 'https://github.com/zed-industries.png',
            },
            Webstorm: {
              link: 'https://www.jetbrains.com/webstorm/',
              imageUrl: 'https://github.com/jetbrains.png',
            },
            NuxtLabs: {
              link: 'https://nuxtlabs.com',
              imageUrl: 'https://nuxtlabs.com/icon.png',
            },
            jQuery: 'https://github.com/jquery/jquery',
            TypeScript: 'https://github.com/microsoft/TypeScript',
            OXC: 'https://github.com/oxc-project/oxc',
            Rspack: 'https://github.com/web-infra-dev/rspack',
            Rollup: 'https://github.com/rollup/rollup',
            Parcel: 'https://github.com/parcel-bundler/parcel',
            Rolldown: 'https://github.com/rolldown/rolldown',
            webpack: 'https://github.com/webpack/webpack',
            turporepo: {
              link: 'https://turbo.build/',
            },
            Vitest: 'https://github.com/vitest-dev/vitest',
            Slidev: 'https://github.com/slidevjs/slidev',
            UnoCSS: 'https://github.com/unocss/unocss',
            Vue: 'https://github.com/vuejs/core',
            Pinia: {
              link: 'https://pinia.vuejs.org/',
            },
            React: {
              link: 'https://github.com/facebook/react',
              imageUrl: 'https://github.com/react.png',
            },
            Nuxt: 'https://github.com/nuxt/nuxt',
            npm: 'https://github.com/npm',
            yarn: 'https://github.com/yarnpkg',
            pnpm: 'https://github.com/pnpm/pnpm',
            bun: 'https://github.com/oven-sh/bun',
            deno: 'https://github.com/denoland/deno',
            snowpack: 'https://github.com/FredKSchott/snowpack',
            Svelte: 'https://github.com/sveltejs/svelte',
            Angular: 'https://github.com/angular/angular',
            Nextjs: {
              link: 'https://github.com/vercel/next.js/',
              imageUrl: 'https://github.com/nextjs.png',
            },
            Vite: 'https://github.com/vitejs/vite',
            ESLint: 'https://github.com/eslint/eslint',
            esbuild: 'https://github.com/evanw/esbuild',
            Netlify: {
              link: 'https://netlify.com',
              imageUrl: 'https://github.com/netlify.png',
            },
            Stackblitz: {
              link: 'https://stackblitz.com',
              imageUrl: 'https://github.com/stackblitz.png',
            },
            Codesandbox: {
              link: 'https://codesandbox.com',
              imageUrl: 'https://github.com/codesandbox.png',
            },
            Codepen: {
              link: 'https://codepen.io',
              imageUrl: 'https://github.com/codepen.png',
            },
            Stackoverflow: {
              link: 'https://stackoverflow.com',
              imageUrl: 'https://github.com/stackoverflow.png',
            },
            GitHub: {
              link: 'https://github.com',
              imageUrl: 'https://github.com/github.png',
            },
            Vercel: {
              link: 'https://vercel.com',
              imageUrl: 'https://github.com/vercel.png',
            },
            Prettier: 'https://github.com/prettier/prettier',
            TailwindCSS: {
              link: 'https://tailwindcss.com/',
              imageUrl: 'https://github.com/tailwindlabs.png',
            },
            ChatGPT: {
              link: 'https://chat.openai.com/',
              imageUrl: 'https://github.com/openai.png',
            },
            Figma: {
              link: 'https://figma.com',
              imageUrl: 'https://github.com/figma.png',
            },
            Slack: {
              link: 'https://slack.com',
              imageUrl: 'https://github.com/slackhq.png',
            },
            Discord: {
              link: 'https://discord.com',
              imageUrl: 'https://github.com/discord.png',
            },
            Git: {
              link: 'https://git-scm.com',
              imageUrl: 'https://github.com/git.png',
            },
            Python: {
              link: 'https://python.org',
            },
            HTML: {
              link: 'https://html.spec.whatwg.org/',
              imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',
            },
            CSS: {
              link: 'https://www.w3.org/TR/css-syntax-3/',
              imageUrl: 'https://github.com/css.png',
            },
            JavaScript: {
              link: 'https://www.ecma-international.org/ecma-262/10.0/index.html',
              imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
            },
          },
        })
      },
    },
  },
  optimizeDeps: {
    // TODO: only exclude in prod.
    include: [
      '@vue/compiler-sfc',
      'react',
      'react-dom/client',
      '@babel/standalone',
    ],
  },
})
