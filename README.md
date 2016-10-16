# React-app-styleguidist

[react-styleguidist] integration for [create-react-app]

## Setup

If you already have project built with [create-react-app], you need to do the following to get styleguides for your components:

1. `npm install react-app-styleguidist --save-dev`
2. add the following line into your scripts section of your package.json:

```
"styleguide": "styleguidist server ./src/App.js"
```

Then run `npm run styleguide` and you will see styleguide with your `App` component. If you have different components structure, you should update this section according to your preferences, for example `./src/components/*.js`. It will build styleguide for all files that you have in your `components` folder.

Also, there is an [`example`](example) folder, that contains sample project with all necessary setup.

## Customize styleguide

See [react-styleguidist] main documentation for more details.


[react-styleguidist]: https://github.com/sapegin/react-styleguidist
[create-react-app]:https://github.com/facebookincubator/create-react-app
