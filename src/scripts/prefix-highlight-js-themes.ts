import fs from "fs";
import postcss from "postcss";
import postcssSelectorPrefix from "postcss-selector-prefix"
import path from "path";

const dir = "./node_modules/highlight.js/styles";

const outDir = "./src/hljs/styles"

try {

    var outDirStat = fs.statSync(outDir);

    if (outDirStat.isDirectory()) {
        console.log("directory", outDir, "exists, deleting...")
        fs.rmSync(outDir, {recursive: true});
    }
    fs.mkdirSync(outDir, {recursive: true})
} catch (e) {
    fs.mkdirSync(outDir, {recursive: true})
}

const files: string[] = fs.readdirSync(dir);

for (const f of files) {

    const stat: fs.Stats = fs.statSync(`${dir}/${f}`);
    if (stat.isFile()) {
        if (f.endsWith(".css") && !f.endsWith(".min.css")) {

            console.log("processing", `${dir}/${f}`)

            var css = fs.readFileSync(`${dir}/${f}`, 'utf8').toString();

            const theme = f.substring(0, f.length - 4);
            const cssProcessor = postcss([postcssSelectorPrefix(`.hljs-theme-${theme}`)]);

            const res = cssProcessor.process(css)

            const outFile = `${outDir}/prefixed-${f}`
            fs.writeFile(outFile, res.css, err => {
                if (err) {
                    return console.error(err);
                }
                console.log(`${outFile}: File created!`);
            });

        } else if (!f.endsWith(".min.css")) {
            fs.cpSync(path.resolve(dir, f), path.resolve(outDir, f))
        }
    }

}
