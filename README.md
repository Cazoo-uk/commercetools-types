# Commercetools-types

Type definitions representing CommerceTools' data model and SDK components.

*Note*: CommerceTools have published their own NPM package for TypeScript: https://www.npmjs.com/package/@commercetools/typescript-sdk

This repo will likely not be updated.

## Useage

Reference this repo in your `dependencies` section of your project's `package.json`:

```typescript
"dependencies": {
    ...,
    "@cazoo/commercetools-types": "git+ssh://git@github.com:Cazoo-uk/commercetools-types.git#1.1.10",
    ...
}
```

You can then import the types as needed for your code, e.g.:

```typescript
import * as CT from "@cazoo/commercetools-types/data-model";
```