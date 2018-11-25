const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

const onlyInProduction = (fn) => {
  if (process.env.NODE_ENV === 'production') {
    return fn
  }
}

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    onlyInProduction(purgecss({
      content: ['./src/**/*.vue'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract (content) {
              return content.match(/[A-z0-9-:/]+/g) || []
            }
          },
          extensions: ['vue']
        }
      ]
    })),
    autoprefixer
  ].filter(Boolean)
}
