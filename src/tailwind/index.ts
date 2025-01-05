export namespace NodokuComponentsTailwind {
    export function tailwindConfig(nodeModules: string = "./node_modules"): string[] {
        return [
            `./${nodeModules}/nodoku-components/esm/**/*.js`,
            `./${nodeModules}/nodoku-components/esm/**/*.jsx`,
            `./${nodeModules}/nodoku-components/schemas/**/*.jsx`
        ]
    }

}