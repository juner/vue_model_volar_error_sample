# vue_volar_error_sample

volar 0.37.8 + vue 2 error sample.

| `volar_vue` | `vue 2` | `vue 3`
| -- | -- | --
| `volar 0.37.7` | ![volar 0.37.7 \ vue 2](./assets/vue2%2Bvolar0.37.7.png) | ![volar 0.37.7 \ vue 3](./assets/vue3%2Bvolar0.37.7.png)
| `volar 0.37.8` | ![volar 0.37.8 \ vue 2](./assets/vue2%2Bvolar0.37.8.png) | ![volar 0.37.8 \ vue 3](./assets/vue3%2Bvolar0.37.8.png)

## How to fix

Replace `"experimentalCompatMode": 2` with `"target": 2` in `tsconfig.json`

https://github.com/johnsoncodehk/volar/issues/1457#issuecomment-1155940938

![fixed](./assets/fixed_vue2%2Bvolar0.37.8.png)