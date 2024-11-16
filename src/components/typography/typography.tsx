import {JSX} from "react";
import {
    mergeTheme,
    NdCode,
    NdContentBlock,
    NdContentImage,
    NdList,
    NdSkinComponentProps,
    NdTranslatableText
} from "nodoku-core";
import {TypographyThemeImpl} from "./typography-theme";
import HTMLElement from "node-html-parser/dist/nodes/html";
import {it} from "node:test";

export async function TypographyImpl(props: NdSkinComponentProps<TypographyThemeImpl, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageUrlProvider,
        i18nextProvider,
        defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: TypographyThemeImpl = mergeTheme(theme, TypographyThemeImpl.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    return (
        <div className={`${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${effectiveTheme.contentContainerStyle?.base} ${effectiveTheme.contentContainerStyle?.decoration}`}>
                {await Promise.all(block.htmlElements.map(elem => renderElement(elem)))}
            </div>
        </div>
    );

    async function renderElement(elem: {
        htmlElem: HTMLElement,
        translatedText: (NdTranslatableText | NdContentImage | NdList | NdCode) }): Promise<JSX.Element> {

        let imgUrl = ""
        if (elem.translatedText instanceof NdContentImage) {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            imgUrl = await imageUrlProvider(t(imgText.url))
        }

        if (elem.htmlElem.rawTagName === "h1") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h1 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h2") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h2 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h3") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h3 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h4") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h4 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h5") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h5 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "h6") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <h6 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "p") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <p className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "blockquote") {
            const pText: NdTranslatableText = elem.translatedText as NdTranslatableText;
            return <blockquote className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(pText)}} />
        } else if (elem.htmlElem.rawTagName === "pre") {
            const codeText: NdCode = elem.translatedText as NdCode;
            return (
                <div className={`${effectiveTheme.preContainer?.base} ${effectiveTheme.preContainer?.decoration}`}>
                    <pre className={elem.htmlElem.classNames} dir={"ltr"}>
                        <code lang={codeText.lang}>
                            {codeText.code}
                        </code>
                    </pre>
                </div>
            )
        } else if (elem.htmlElem.rawTagName === "figure") {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            return (
                <figure className={elem.htmlElem.classNames}>
                    <img src={imgUrl} alt={imgText.alt ? t(imgText.alt) : "N/A"}/>
                    {imgText.title && <figcaption dangerouslySetInnerHTML={{__html: t(imgText.title)}} />}
                </figure>
            )
        } else if (elem.htmlElem.rawTagName === "ol") {
            const listText: NdList = elem.translatedText as NdList;
            return (
                <ol className={elem.htmlElem.classNames}>
                    {listText.items.map(item => <li key={item.key} dangerouslySetInnerHTML={{__html: t(item)}}/>)}
                </ol>
            )
        } else if (elem.htmlElem.rawTagName === "ul") {
            const listText: NdList = elem.translatedText as NdList;
            return (
                <ul className={elem.htmlElem.classNames}>
                    {listText.items.map(item => <li key={item.key} dangerouslySetInnerHTML={{__html: t(item)}}/>)}
                </ul>
            )
        } else if (elem.htmlElem.rawTagName === "img") {
            const imgText: NdContentImage = elem.translatedText as NdContentImage;
            return <img className={elem.htmlElem.classNames}
                        src={imgUrl}
                        alt={imgText.alt ? t(imgText.alt) : "N/A"}
                        title={imgText.title ? t(imgText.title) : ""} />
        } else if (elem.htmlElem.rawTagName === "table") {
            return <table className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: elem.htmlElem.innerHTML}} />
        } else if (elem.htmlElem.rawTagName === "hr") {
            return <hr />
        }

        return <></>

    }

}