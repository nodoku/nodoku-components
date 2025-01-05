export var NodokuComponentsTailwind;
(function (NodokuComponentsTailwind) {
    function tailwindConfig(nodeModules) {
        if (nodeModules === void 0) { nodeModules = "./node_modules"; }
        return [
            "./".concat(nodeModules, "/nodoku-components/esm/**/*.js"),
            "./".concat(nodeModules, "/nodoku-components/esm/**/*.jsx"),
            "./".concat(nodeModules, "/nodoku-components/schemas/**/*.jsx")
        ];
    }
    NodokuComponentsTailwind.tailwindConfig = tailwindConfig;
})(NodokuComponentsTailwind || (NodokuComponentsTailwind = {}));
