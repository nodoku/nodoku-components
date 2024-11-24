import hljs from 'highlight.js';
import {mergeTheme, NdCode, NdDefaultThemeName} from "nodoku-core";
import {JSX} from "react"
import {highlightedCodeDefaultThemeImpl} from "./highlighted-code-theme";
import {NodokuComponents} from "../../index";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;


export class HighlightedCodeProps {
    code: NdCode;
    theme: HighlightedCodeTheme;
    defaultThemeName: NdDefaultThemeName

    constructor(code: NdCode, theme: HighlightedCodeTheme, defaultThemeName: NdDefaultThemeName) {
        this.code = code;
        this.theme = theme;
        this.defaultThemeName = defaultThemeName;
    }
}

export async function HighlightedCodeImpl(props: HighlightedCodeProps): Promise<JSX.Element> {

    const {code, theme, defaultThemeName} = props

    const effectiveTheme: HighlightedCodeTheme = mergeTheme(theme, highlightedCodeDefaultThemeImpl);

    const html = hljs.highlight(code.code, {language: code.lang}).value;

    if (effectiveTheme.hljsLightTheme) {
        await import(`../../hljs/styles/prefixed-${effectiveTheme.hljsLightTheme}.css`);
    }
    if (effectiveTheme.hljsDarkTheme) {
        await import(`../../hljs/styles/prefixed-${effectiveTheme.hljsDarkTheme}.css`);
    }

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
            <div className={`preContainer ${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration} hljs-theme-${effectiveTheme.hljsLightTheme} ${lightClassName}`}>
                {pre}
            </div>
        ))
    }
    if (effectiveTheme.hljsDarkTheme) {
        res.push((
            <div className={`preContainer ${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration} hljs-theme-${effectiveTheme.hljsDarkTheme} ${darkClassName}`}>
                {pre}
            </div>
        ))
    }

    return <div className={`codeContainer ${effectiveTheme.codeContainer?.base} ${effectiveTheme.codeContainer?.decoration}`}>{res}</div>

}