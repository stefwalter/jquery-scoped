(function(jq) {
    "use strict";
    jq.scoped = function scoped(/* ... */) {
        var scope = undefined;

        function init(/* ... */) {
            return jq.fn.init.apply(this, arguments);
        }

        function jQueryScoped(selector, context) {
            return new init(selector, context || scope);
        }

        var prototypes = [ { }, jq.fn ];
        prototypes.push.apply(prototypes, Array.prototype.slice.call(arguments, 1));

        init.prototype = jq.extend.apply(jq, prototypes);
        init.prototype.constructor = jQueryScoped;

        scope = new jQueryScoped(arguments[0]);
// console.log("scope is", arguments[0], scope, scope.constructor);

        return jQueryScoped;
    };
}(jQuery));
