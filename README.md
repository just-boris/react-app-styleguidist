:warning: *Do not use this!* Since v 5.0, react-styleguidist itself works with create-react-app just well.

# React-app-styleguidist

[react-styleguidist] integration for [create-react-app]

## Setup

If you already have project built with [create-react-app], you need to do the following to get styleguides for your components:

1. `npm install react-app-styleguidist --save-dev`
2. add the following line into your scripts section of your package.json:

```
"styleguide": "styleguidist server ./src/App.js"
```

Then run `npm run styleguide` and you will see styleguide with your `App` component. If you have different components structure, you should update this section according to your preferences, for example `'./src/components/**/!(*.test).js'`. This pattern will match all your components files, except tests.

Also, there is an [`example`](example) folder, that contains sample project with all necessary setup.

## Customize styleguide

See [react-styleguidist] main documentation for more details.

## Ejecting

For some more advanced features you might need to change some configuration options. This package supposed to be zero-configuration tool (except components paths), so you need to use react-styleguidist directly. To do this, you can run `eject` command and follow the instructions in the terminal:

```
./node_modules/.bin/styleguidist eject
```
This command will add `styleguide.config.js` with all previously used options, but now they are belong to yor project, so you can edit them.


[react-styleguidist]: https://github.com/sapegin/react-styleguidist
[create-react-app]:https://github.com/facebookincubator/create-react-app
