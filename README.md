# Build

```
npm i
gulp rebuild
```

# Steps to reproduce failure build

1. Create directory `src/services/other`.
2. Create file `other.ts` inside this directory with class:
```ts
export class OtherClass {
    other: string;
}
```
3. rebuild library like described above.

# Solution

Answer provided by [**Matt McCutchen**](https://stackoverflow.com/users/4468617/matt-mccutchen) [here](https://stackoverflow.com/questions/52204725/typescript-how-to-extend-class-from-ts-compiled-library).
TL;DR:
1. Add this to `build.conf.js`:
```js
browserify: {
    entries: ['src/index.ts']
},
```
2. Make all imports and exports in `src/index.ts`.

Solution WASN'T COMMITED to make it reproduceable for community.
