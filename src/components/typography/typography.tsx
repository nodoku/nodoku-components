import {JSX} from "react";
import {ParagraphsImpl} from "../paragraphs/paragraphs";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {TypographyThemeImpl} from "./typography-theme";
import {NdTranslatedText} from "nodoku-core";
import HTMLElement from "node-html-parser/dist/nodes/html";
import parse from 'html-react-parser';

// export class TypographyProps {
//     lng: string;
//     block: NdContentBlock;
//     theme: TypographyThemeImpl;
//     defaultThemeName: NdDefaultThemeName;
//     i18nextProvider: I18nextProvider;
//
//     constructor(lng: string,
//                 block: NdContentBlock,
//                 theme: TypographyThemeImpl,
//                 defaultThemeName: NdDefaultThemeName,
//                 i18nextProvider: I18nextProvider) {
//
//         this.lng = lng;
//         this.block = block;
//         this.theme = theme;
//         this.defaultThemeName = defaultThemeName;
//         this.i18nextProvider = i18nextProvider;
//     }
// }

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



    const paragraphs = await ParagraphsImpl({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphStyle: {base: " ", decoration: " "},
        codeHighlightTheme: effectiveTheme.codeHighlightTheme!,
        listTheme: {listStyle: {base: " ", decoration: " "}, listItemStyle: {base: " ", decoration: " "}},
        defaultThemeName: defaultThemeName,
        i18nextProvider: i18nextProvider
    });


    return (
        <div className={`${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${effectiveTheme.contentContainerStyle?.base} ${effectiveTheme.contentContainerStyle?.decoration}`}>

                {/*{block.title &&*/}
                {/*    <h1>{t(block.title.key, block.title.ns)}</h1>*/}
                {/*}*/}
                {/*{block.subTitle &&*/}
                {/*    <h2>{t(block.subTitle.key, block.subTitle.ns)}</h2>*/}
                {/*}*/}
                {/*{block.h3 &&*/}
                {/*    <h3>{t(block.h3.key, block.h3.ns)}</h3>*/}
                {/*}*/}
                {/*{block.h4 &&*/}
                {/*    <h4>{t(block.h4.key, block.h4.ns)}</h4>*/}
                {/*}*/}
                {/*{block.h5 &&*/}
                {/*    <h5>{t(block.h5.key, block.h5.ns)}</h5>*/}
                {/*}*/}
                {/*{block.h6 &&*/}
                {/*    <h6>{t(block.h6.key, block.h6.ns)}</h6>*/}
                {/*}*/}

                {/*{paragraphs}*/}

                {block.htmlElements.map((elem: {htmlElem: HTMLElement, translatedTexts: NdTranslatedText[]}, i: number): JSX.Element => {
                    // return <div dangerouslySetInnerHTML={{__html: t(elem.translatedText.key, elem.translatedText.ns)}} />
                    if (elem.htmlElem.rawTagName === "h1") {
                        return <h1 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "h2") {
                        return <h2 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "h3") {
                        return <h3 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "h4") {
                        return <h4 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "h5") {
                        return <h5 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "h6") {
                        return <h6 className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "p") {
                        return <p className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "blockquote") {
                        return <blockquote className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}} />
                    } else if (elem.htmlElem.rawTagName === "pre") {
                        return <pre className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: elem.htmlElem.innerHTML}} />
                    } else if (elem.htmlElem.rawTagName === "figure") {
                        return (
                            <figure className={elem.htmlElem.classNames}>
                                <img src={t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)} alt={t(elem.translatedTexts[1].key, elem.translatedTexts[1].ns)}/>
                                {elem.translatedTexts.length > 2 && (
                                    <figcaption dangerouslySetInnerHTML={{__html: t(elem.translatedTexts[2].key, elem.translatedTexts[2].ns)}} />
                                )}
                            </figure>
                        )
                    } else if (elem.htmlElem.rawTagName === "ol") {
                        return (
                            <ol className={elem.htmlElem.classNames}>
                                {elem.translatedTexts.map(item => {
                                    return <li dangerouslySetInnerHTML={{__html: t(item.key, item.ns)}}/>
                                })}
                            </ol>
                        )
                    } else if (elem.htmlElem.rawTagName === "ul") {
                        return (
                            <ul className={elem.htmlElem.classNames}>
                                {elem.translatedTexts.map(item => {
                                    return <li dangerouslySetInnerHTML={{__html: t(item.key, item.ns)}}/>
                                })}
                            </ul>
                        )
                    } else if (elem.htmlElem.rawTagName === "img") {
                        return <img className={elem.htmlElem.classNames}
                                    src={t(elem.translatedTexts[0].key, elem.translatedTexts[0].ns)}
                                    alt={t(elem.translatedTexts[1].key, elem.translatedTexts[1].ns)}
                                    title={t(elem.translatedTexts[2].key, elem.translatedTexts[2].ns)} />
                    } else if (elem.htmlElem.rawTagName === "table") {
                        return <table className={elem.htmlElem.classNames} dangerouslySetInnerHTML={{__html: elem.htmlElem.innerHTML}} />
                    } else if (elem.htmlElem.rawTagName === "hr") {
                        return <hr />
                    }


                    // return <div>unknown element {elem.htmlElem.rawTagName} {elem.htmlElem.textContent}</div>
                    return <></>
                })}


            </div>
        </div>

    );

}