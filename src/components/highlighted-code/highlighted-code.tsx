import hljs from 'highlight.js';
import {mergeTheme, NdCode, NdDefaultThemeName} from "nodoku-core";
import {JSX} from "react"
import {HighlightedCodeThemeImpl} from "./highlighted-code-theme";


export class HighlightedCodeProps {
    code: NdCode;
    theme: HighlightedCodeThemeImpl;
    defaultThemeName: NdDefaultThemeName

    constructor(code: NdCode, theme: HighlightedCodeThemeImpl, defaultThemeName: NdDefaultThemeName) {
        this.code = code;
        this.theme = theme;
        this.defaultThemeName = defaultThemeName;
    }
}

export async function HighlightedCodeImpl(props: HighlightedCodeProps): Promise<JSX.Element> {

    const {code, theme, defaultThemeName} = props

    const effectiveTheme: HighlightedCodeThemeImpl = mergeTheme(theme, HighlightedCodeThemeImpl.defaultTheme);

    const html = hljs.highlight(code.code, {language: code.lang}).value;

    if (effectiveTheme.light) {
        await import(`../../hljs/styles/prefixed-${effectiveTheme.light}.css`);
    }
    if (effectiveTheme.dark) {
        await import(`../../hljs/styles/prefixed-${effectiveTheme.dark}.css`);
    }

    const lightClassName = `${effectiveTheme.lightDisplay} dark:hidden ${defaultThemeName === "light" ? "inline-block" : "hidden"}`
    const darkClassName = `${effectiveTheme.darkDisplay} light:hidden ${defaultThemeName === "dark" ? "inline-block" : "hidden"}`

    const pre = (
        <pre className={"text-pretty"}>
            <code lang={code.lang} className={"hljs"} dangerouslySetInnerHTML={{__html: html}}/>
        </pre>
    )


    const res: JSX.Element[] = [];
    if (theme.light) {
        res.push((
            <div className={`${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration} hljs-theme-${effectiveTheme.light} ${lightClassName}`}>
                {pre}
            </div>
        ))
    }
    if (theme.dark) {
        res.push((
            <div className={`${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration} hljs-theme-${effectiveTheme.dark} ${darkClassName}`}>
                {pre}
            </div>
        ))
    }

    return <div className={`${effectiveTheme.codeContainer?.base} ${effectiveTheme.codeContainer?.decoration}`}>{res}</div>

}