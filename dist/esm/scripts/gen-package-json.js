import fs from "fs";
import path from "path";
import Mustache from "mustache";
import * as pjson from "../../package.json";
var globalPackageJsonTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "global-package.json.hbs")).toString();
var dist = path.resolve("./dist/esm/hljs/styles");
var hljsThemes = [];
fs.readdirSync(dist).forEach(function (file) {
    console.log("found ", file);
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
});
var globalPackageJsonModel = {
    version: pjson.version,
    peerDeps: Object.keys(pjson.peerDependencies).map(function (pk, i) { return ({
        name: pk,
        ver: pjson.peerDependencies[pk],
        isLast: i === Object.keys(pjson.peerDependencies).length - 1,
    }); }),
    deps: Object.keys(pjson.dependencies).map(function (pk, i) { return ({
        name: pk,
        ver: pjson.dependencies[pk],
        isLast: i === Object.keys(pjson.dependencies).length - 1,
    }); }),
    hljsThemes: hljsThemes
};
var globalPackageJson = Mustache.render(globalPackageJsonTpl, globalPackageJsonModel);
fs.writeFile(path.resolve(path.resolve("./dist"), "package.json"), globalPackageJson, function () { });
