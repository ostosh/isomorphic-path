# isomorphic-path
A wrapper module that exposes node's path module in the browser and node contexts.
This is not a reimplementation of node's path module. Instead, this project simply
exposes the node module to both the browser and node runtimes.

Supported Methods (see official API: https://nodejs.org/api/path.html):
 * normalize
 * isAbsolute
 * join
 * dirname
 * basename
 * extname
 * format
 * parse
 * resolve (node only; throws exception in browser mode)
 * relative (node only; throws exception in browser mode)
