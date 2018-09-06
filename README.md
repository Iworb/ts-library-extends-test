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
