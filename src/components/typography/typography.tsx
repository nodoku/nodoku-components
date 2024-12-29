import {JSX} from "react";
import {
    mergeTheme,
    ts,
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
import {NdTrustedHtml} from "nodoku-core";
import {NdListItem} from "nodoku-core";
import {NdLink} from "nodoku-core";

export async function TypographyImpl(props: NdSkinComponentProps<TypographyTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageProvider,
        i18nextTrustedHtmlProvider,
        defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: TypographyThemeImpl = mergeTheme(theme, typographyDefaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextTrustedHtmlProvider(lng);

    // console.log("received t from i18nextProvider", t, lng)

    return (
        <div className={`${ts(effectiveTheme, "containerStyle")}`}>
            <div className={`${ts(effectiveTheme, "contentContainerStyle")}`}>
                {await Promise.all(block.htmlElements.map((elem, i) => renderElement(elem, i, t)))}
            </div>
        </div>
    );

    async function renderElement(elem: {
        htmlElem: HTMLElement,
        translatedText: (NdTranslatableText | NdContentImage | NdList | NdCode | NdCallToAction) }, i: number, t: (text: NdTranslatableText) => NdTrustedHtml): Promise<JSX.Element> {

        let imgElem: JSX.Element | undefined = undefined;
        if (elem.translatedText instanceof NdContentImage) {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            imgElem = await imageProvider({url: t(imgText.url).__html as string, alt: (imgText.alt ? t(imgText.alt) : "N/A") as string})
        }

        // console.log("in typography, rendering ... ", elem.htmlElem.rawTagName, elem.translatedText)

        const key = `typo-${i}`;

        if (elem.htmlElem.rawTagName === "h1") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h1 key={`typography-h1-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "h2") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h2 key={`typography-h2-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "h3") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h3 key={`typography-h3-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "h4") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h4 key={`typography-h4-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "h5") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h5 key={`typography-h5-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "h6") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h6 key={`typography-h6-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "p") {
            if (elem.translatedText instanceof NdCallToAction) {
                const pText: NdCallToAction = elem.translatedText as NdCallToAction;
                return <p key={`typography-cta-${key}`}>|<a className={elem.htmlElem.classNames} href={t(pText.ctaUrl).__html as string} dangerouslySetInnerHTML={t(pText.ctaTitle || pText.ctaUrl)}/>|</p>
            } else {
                const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
                return <p key={`typography-p-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
            }
        } else if (elem.htmlElem.rawTagName === "blockquote") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <blockquote key={`typography-bq-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={t(pText)} />
        } else if (elem.htmlElem.rawTagName === "pre") {
            const codeText: NdCode = elem.translatedText as NdCode;
            return (
                <div key={`typography-h1-${key}`} className={`${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration}`}>
                    {await HighlightedCodeImpl({
                        key: `${key}-code-${i}`,
                        code: codeText as NdCode,
                        theme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultThemeImpl,
                        defaultThemeName: defaultThemeName})}
                </div>
            )
        } else if (elem.htmlElem.rawTagName === "figure") {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            return (
                <figure key={`typography-fig-${key}`} className={elem.htmlElem.classNames}>
                    {imgElem}
                    {imgText.title && <figcaption dangerouslySetInnerHTML={t(imgText.title)} />}
                </figure>
            )
        } else if (elem.htmlElem.rawTagName === "ol") {
            const listText: NdList = elem.translatedText as NdList;
            return (
                <ol key={`typography-ol-${key}`} className={elem.htmlElem.classNames}>
                    {listText.items.map(i => drawListItem(key, i))}
                </ol>
            )
        } else if (elem.htmlElem.rawTagName === "ul") {
            const listText: NdList = elem.translatedText as NdList;
            return (
                <ul key={`typography-ul-${key}`} className={elem.htmlElem.classNames}>
                    {listText.items.map(i => drawListItem(key, i))}
                </ul>
            )
        } else if (elem.htmlElem.rawTagName === "img") {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            return <img key={`typography-img-${key}`} className={elem.htmlElem.classNames}
                        src={t(imgText.url).__html as string}
                        alt={imgText.alt ? t(imgText.alt).__html as string : "N/A"}
                        title={imgText.title ? t(imgText.title).__html as string : ""} />
        } else if (elem.htmlElem.rawTagName === "table") {
            return <table key={`typography-table-${key}`} className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: elem.htmlElem.innerHTML}} />
        } else if (elem.htmlElem.rawTagName === "hr") {
            return <hr key={`typography-hr-${key}`} />
        }

        return <></>

    }

    function drawListItem(key: string, item: NdListItem): JSX.Element {
        if (item.text instanceof NdLink) {
            const link = item.text as NdLink
            return (
                <li key={`${key}-${link.url.key}`}>
                    <a href={t(link.url).__html as string} dangerouslySetInnerHTML={t(link.urlText ? link.urlText : link.url)} />
                </li>
            )
        } else {
            return <li key={`${key}-${item.text.key}`} dangerouslySetInnerHTML={t(item.text)}/>
        }
    }

}