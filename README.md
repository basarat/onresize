# onresize
An optimized window.resize function

```js
var onresize = require('onresize');
// start process
onresize.on(function() {
    console.log('Resource conscious resize callback!')
});
```

Also: 
* comes with TypeScript definitions built in
* returns an object that has a `dispose` function to unhook the handler

To learn more : https://developer.mozilla.org/en-US/docs/Web/Events/resize
