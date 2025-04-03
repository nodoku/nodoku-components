import fs from "fs";
import path from "path";
import Mustache from "mustache"
import * as pjson from "../../package.json"


const globalPackageJsonTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "global-package.json.hbs")).toString()

const dist = path.resolve("./dist/esm/hljs/styles");

const hljsThemes: string[] = [];

fs.readdirSync(dist).forEach(file => {

    console.log("found ", file)

    if (file.endsWith(".css")) {
        hljsThemes.push(file.substring("prefixed-".length, file.length - ".css".length));
    }

    // modules.push(file)
    //
    // try {
    //     const stats: fs.Stats = fs.statSync(path.resolve(dist, file));
    //     if (stats.isDirectory()) {
    //         console.log("generating package.json for ", path.resolve(dist, `./esm/${iconsSrcFolder}/${file}/package.json`))
    //         const packageJson = Mustache.render(packageJsonTpl, {version: pjson.version});
    //         fs.writeFile(path.resolve(dist, `./${file}/package.json`), packageJson, () => {})
    //
    //         fs.readdirSync(path.resolve(distTypes, file)).forEach(f => {
    //             console.log("copying ", f)
    //             fs.copyFileSync(path.resolve(distTypes, file, f), path.resolve(dist, file, f))
    //         })
    //
    //     }
    // } catch (e) {
    //     console.log("error processing", path.resolve(dist, file), ": ", e)
    // }
})


type K1 = keyof typeof pjson.peerDependencies;
type K2 = keyof typeof pjson.dependencies;

const globalPackageJsonModel = {
    version: pjson.version,
    license: pjson.license,
    peerDeps: Object.keys(pjson.peerDependencies).map((pk, i) => ({
        name: pk,
        ver: pjson.peerDependencies[pk as K1],
        isLast: i === Object.keys(pjson.peerDependencies).length - 1,
    })),
    deps: Object.keys(pjson.dependencies).map((pk, i) => ({
        name: pk,
        ver: pjson.dependencies[pk as K2],
        isLast: i === Object.keys(pjson.dependencies).length - 1,
    })),
    hljsThemes: hljsThemes
}
const globalPackageJson = Mustache.render(globalPackageJsonTpl, globalPackageJsonModel);
fs.writeFile(path.resolve(path.resolve("./dist"), "package.json"), globalPackageJson, () => {})