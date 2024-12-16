# Demo require esm in Nest.js

This is Nest.js template (no configuration change) using `p-limit`.

When you use Node.js 22.11.0 you have an error:

```
Error [ERR_REQUIRE_ESM]: require() of ES Module ./require-esm/node_modules/p-limit/index.js from ./require-esm/dist/app.service.js not supported.
Instead change the require of index.js in ./require-esm/dist/app.service.js to a dynamic import() which is available in all CommonJS modules.
```

When you use Node.js 22.12.0 there is no error.

## Licence

[MIT License](./LICENSE.md)
