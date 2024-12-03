import {JSX} from "react";
import {
    mergeTheme,
    NdCode,
    NdContentBlock,
    NdContentImage,
    NdList,
    NdSkinComponentProps,
    NdTranslatableText,
    NdCallToAction
} from "nodoku-core";
import {TypographyThemeImpl} from "./typography-theme";
import HTMLElement from "node-html-parser/dist/nodes/html";
import {HighlightedCodeImpl} from "../highlighted-code/highlighted-code";
import {NodokuComponents} from "../../index";
import TypographyTheme = NodokuComponents.TypographyTheme;
import {typographyDefaultTheme} from "./typography-theme";
import {highlightedCodeDefaultThemeImpl} from "../highlighted-code/highlighted-code-theme";

export async function TypographyImpl(props: NdSkinComponentProps<TypographyTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageProvider,
        i18nextProvider,
        defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: TypographyThemeImpl = mergeTheme(theme, typographyDefaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // console.log("received t from i18nextProvider", t, lng)

    return (
        <div className={`${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${effectiveTheme.contentContainerStyle?.base} ${effectiveTheme.contentContainerStyle?.decoration}`}>
                {await Promise.all(block.htmlElements.map((elem, i) => renderElement(elem, i, t)))}
            </div>
        </div>
    );

    async function renderElement(elem: {
        htmlElem: HTMLElement,
        translatedText: (NdTranslatableText | NdContentImage | NdList | NdCode | NdCallToAction) }, i: number, t: (text: NdTranslatableText) => string): Promise<JSX.Element> {

        let imgElem: JSX.Element | undefined = undefined;
        if (elem.translatedText instanceof NdContentImage) {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            imgElem = await imageProvider({url: t(imgText.url), alt: (imgText.alt ? t(imgText.alt) : "N/A")})
        }

        // console.log("in typography, rendering ... ", elem.htmlElem.rawTagName, elem.translatedText)

        const key = `typo-${i}`;

        if (elem.htmlElem.rawTagName === "h1") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            // console.log("this is ptext in elem.htmlElem.rawTagName === \"h1\"", pText, t(pText))
            // return <h1 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
            return <h1 key={key} className={elem.htmlElem.classNames}> {t(pText)} </h1>
        } else if (elem.htmlElem.rawTagName === "h2") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h2 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h3") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h3 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h4") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h4 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h5") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h5 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h6") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h6 key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "p") {
            if (elem.translatedText instanceof NdCallToAction) {
                const pText: NdCallToAction = elem.translatedText as NdCallToAction;
                return <p key={key}><a className={elem.htmlElem.classNames} href={t(pText.ctaUrl)}>|{t(pText.ctaTitle || pText.ctaUrl)}|</a></p>
            } else {
                const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
                return <p key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
            }
        } else if (elem.htmlElem.rawTagName === "blockquote") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <blockquote key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "pre") {
            const codeText: NdCode = elem.translatedText as NdCode;
            return (
                <div key={key} className={`${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration}`}>
                    {await HighlightedCodeImpl({
                        code: codeText as NdCode,
                        theme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultThemeImpl,
                        defaultThemeName: defaultThemeName})}
                </div>
            )
        } else if (elem.htmlElem.rawTagName === "figure") {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            return (
                <figure key={key} className={elem.htmlElem.classNames}>
                    {/*<img src={imgElem} alt={imgText.alt ? t(imgText.alt) : "N/A"}/>*/}
                    {imgElem}
                    {imgText.title && <figcaption dangerouslySetInnerHTML={{__html: t(imgText.title)}} />}
                </figure>
            )
        } else if (elem.htmlElem.rawTagName === "ol") {
            const listText: NdList = elem.translatedText as NdList;
            return (
                <ol className={elem.htmlElem.classNames}>
                    {listText.items.map(item => <li key={`${key}-${item.key}`} dangerouslySetInnerHTML={{__html: t(item)}}/>)}
                </ol>
            )
        } else if (elem.htmlElem.rawTagName === "ul") {
            const listText: NdList = elem.translatedText as NdList;
            return (
                <ul className={elem.htmlElem.classNames}>
                    {listText.items.map(item => <li key={`${key}-${item.key}`} dangerouslySetInnerHTML={{__html: t(item)}}/>)}
                </ul>
            )
        } else if (elem.htmlElem.rawTagName === "img") {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            return <img key={key} className={elem.htmlElem.classNames}
                        src={t(imgText.url)}
                        alt={imgText.alt ? t(imgText.alt) : "N/A"}
                        title={imgText.title ? t(imgText.title) : ""} />
        } else if (elem.htmlElem.rawTagName === "table") {
            return <table key={key} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: elem.htmlElem.innerHTML}} />
        } else if (elem.htmlElem.rawTagName === "hr") {
            return <hr key={key} />
        }

        return <></>

    }

}