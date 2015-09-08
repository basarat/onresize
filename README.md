# onresize 🌹
An optimized window.resize function

```js
var onresize = require('onresize');
// start process
var {dispose} = onresize.on(function() {
    console.log('Resource conscious resize callback!')
});

// once done
dispose();
```

Also: 
* comes with TypeScript definitions built in
* returns an object that has a `dispose` function to unhook the handler

To learn more on why you would want to use this [checkout this article](https://developer.mozilla.org/en-US/docs/Web/Events/resize).