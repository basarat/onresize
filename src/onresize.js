// https://developer.mozilla.org/en-US/docs/Web/Events/resize
var optimizedResize = (function () {
    var callbacks = [], running = false;
    var addedFirst = false;
    // fired on resize event
    function resize() {
        if (!running) {
            running = true;
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(runCallbacks);
            }
            else {
                setTimeout(runCallbacks, 66);
            }
        }
    }
    // run the actual callbacks
    function runCallbacks() {
        callbacks.forEach(function (callback) {
            callback();
        });
        running = false;
    }
    // adds callback to loop
    function addCallback(callback) {
        if (callback) {
            callbacks.push(callback);
        }
    }
    function removeCallback(callback) {
        if (callback) {
            var callbackIndex = callbacks.indexOf(callback);
            if (callbackIndex > -1)
                callbacks.splice(callbackIndex, 1);
        }
    }
    return {
        /** public method to add additional callback */
        on: function (callback) {
            if (!addedFirst) {
                window.addEventListener('resize', resize);
                addedFirst = true;
            }
            addCallback(callback);
            return { dispose: function () { return removeCallback(callback); } };
        },
        /** public method to remove an existing callback */
        off: function (callback) {
            removeCallback(callback);
        }
    };
}());
module.exports = optimizedResize;
