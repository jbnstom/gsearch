# GSearch

Search in the web whatever is in system's clipboard using Google as search provider.

## Dependencies

In Ubuntu (and propably other Linux) systems you must have the xsel command line utility installed `sudo apt install xsel`

## How to

* Assign a system shortcut for gsearch
* Select and copy some text you want to look for on internet
* Press the assigned gsearch shortcut
* Check the search results in a newly opened tab on default browser

## History

I had a Python - GTK3 script on my Linux systems for a long time, where I used it to search mostly text output from command line tools - servers, etc. I forgot to save it before zapping my system.

## Tools

This tool is made using ES6 and Node.js which in the end compiles as static binary using the nexe tool.

**Libraries used:**

* opn: Process handling https://github.com/sindresorhus/opn
* clipboardy: Clipboard access https://github.com/sindresorhus/clipboardy
* nexe: Bundle Node.js and create JS binary executables https://github.com/nexe/nexe

## Development

* Install nexe globally npm i -g nexe
* Modify the source code at your will
* Build binary using: `nexe index.js -r node_modules/clipboardy/fallbacks/linux/xsel -o gsearch`

**Note:** the build command will download - build and bundle Node.js which may take some time to finish.
#
