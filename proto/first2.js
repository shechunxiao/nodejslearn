/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/light"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/light"));

})(this, function($protobuf) {
    "use strict";

    var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
    .addJSON({
      Example1: {
        fields: {
          stringVal: {
            type: "string",
            id: 1
          },
          bytesVal: {
            type: "bytes",
            id: 2
          }
        }
      }
    });

    return $root;
});
