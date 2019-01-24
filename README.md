This repo demonstrates a build issue that occurs when importing js files with computed property syntax inside.

## How to reproduce

1. In the shell:

```sh
npm install
npm start
```

2. Confirm that the app runs fine at this point

3. Uncomment the following lines in src/bar.js:

```js
// const a = {
//   ['a']: 1,
// };
```

4. The build fails with an error
![build error image](https://user-images.githubusercontent.com/4413963/51668133-df4f8780-2004-11e9-9f81-3635e33146d0.png)
