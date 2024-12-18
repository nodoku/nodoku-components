import hljs from 'highlight.js';
import {mergeTheme, NdCode, NdDefaultThemeName} from "nodoku-core";
import {JSX} from "react"
import {highlightedCodeDefaultThemeImpl} from "./highlighted-code-theme";
import {NodokuComponents} from "../../index";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import {ts} from "nodoku-core";


export type HighlightedCodePropsImpl = {
    key: string;
    code: NdCode;
    theme: HighlightedCodeTheme;
    defaultThemeName: NdDefaultThemeName

}

export async function HighlightedCodeImpl(props: HighlightedCodePropsImpl): Promise<JSX.Element> {

    const {key, code, theme, defaultThemeName} = props

    const effectiveTheme: HighlightedCodeTheme = mergeTheme(theme, highlightedCodeDefaultThemeImpl);

    const html = hljs.highlight(code.code, {language: code.lang}).value;

    // if (effectiveTheme.hljsLightTheme) {
    //     await import(`../../hljs/styles/prefixed-${effectiveTheme.hljsLightTheme}.css`);
    // }
    // if (effectiveTheme.hljsDarkTheme) {
    //     await import(`../../hljs/styles/prefixed-${effectiveTheme.hljsDarkTheme}.css`);
    // }

    const lightClassName = `${effectiveTheme.lightDisplay} ${defaultThemeName === "light" ? "dark:hidden" : "hidden"}`
    const darkClassName = `${effectiveTheme.darkDisplay} ${defaultThemeName === "dark" ? "light:hidden" : "hidden"}`

    const pre = (
        <pre className={`pre ${effectiveTheme.pre?.base} ${effectiveTheme.pre?.decoration}`}>
            <code lang={code.lang} className={"hljs"} dangerouslySetInnerHTML={{__html: html}}/>
        </pre>
    )


    const res: JSX.Element[] = [];
    if (effectiveTheme.hljsLightTheme) {
        res.push((
            <div key={"light-theme-code-highlight"} className={`preContainer ${ts(effectiveTheme, "preContainer")} hljs-theme-${effectiveTheme.hljsLightTheme} ${lightClassName}`}>
                {pre}
            </div>
        ))
    }
    if (effectiveTheme.hljsDarkTheme) {
        res.push((
            <div key={"dark-theme-code-highlight"} className={`preContainer ${ts(effectiveTheme, "preContainer")} hljs-theme-${effectiveTheme.hljsDarkTheme} ${darkClassName}`}>
                {pre}
            </div>
        ))
    }

    return <div key={key} className={`codeContainer ${ts(effectiveTheme,  "codeContainer")}`}>{res}</div>

}