import fs from "fs";
import postcss from "postcss";
import postcssSelectorPrefix from "postcss-selector-prefix";
import path from "path";
var dir = "./node_modules/highlight.js/styles";
var outDir = "./src/hljs/styles";
try {
    var outDirStat = fs.statSync(outDir);
    if (outDirStat.isDirectory()) {
        console.log("directory", outDir, "exists, deleting...");
        fs.rmSync(outDir, { recursive: true });
    }
    fs.mkdirSync(outDir, { recursive: true });
}
catch (e) {
    fs.mkdirSync(outDir, { recursive: true });
}
var files = fs.readdirSync(dir);
var _loop_1 = function (f) {
    var stat = fs.statSync("".concat(dir, "/").concat(f));
    if (stat.isFile()) {
        if (f.endsWith(".css") && !f.endsWith(".min.css")) {
            console.log("processing", "".concat(dir, "/").concat(f));
            css = fs.readFileSync("".concat(dir, "/").concat(f), 'utf8').toString();
            var theme = f.substring(0, f.length - 4);
            var cssProcessor = postcss([postcssSelectorPrefix(".hljs-theme-".concat(theme))]);
            var res = cssProcessor.process(css);
            var outFile_1 = "".concat(outDir, "/prefixed-").concat(f);
            fs.writeFile(outFile_1, res.css, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("".concat(outFile_1, ": File created!"));
            });
        }
        else if (!f.endsWith(".min.css")) {
            fs.cpSync(path.resolve(dir, f), path.resolve(outDir, f));
        }
    }
};
var css;
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
    var f = files_1[_i];
    _loop_1(f);
}
