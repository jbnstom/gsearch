const clipboard = require('clipboardy')
const opn = require('opn')

/**
 * Search the text saved in system's clipboard using the default web browser.
 */
const main = () => {
  const text = clipboard.readSync()
  if (text) {
    opn(`https://www.google.com/search?q=${text}`)
  }
}

main()
