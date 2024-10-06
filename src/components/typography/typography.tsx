import {JSX} from "react";
import {ParagraphsImpl} from "../paragraphs/paragraphs";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {TypographyThemeImpl} from "./typography-theme";


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

                {block.title &&
                    <h1>{t(block.title.key, block.title.ns)}</h1>
                }
                {block.subTitle &&
                    <h2>{t(block.subTitle.key, block.subTitle.ns)}</h2>
                }
                {block.h3 &&
                    <h3>{t(block.h3.key, block.h3.ns)}</h3>
                }
                {block.h4 &&
                    <h4>{t(block.h4.key, block.h4.ns)}</h4>
                }
                {block.h5 &&
                    <h5>{t(block.h5.key, block.h5.ns)}</h5>
                }
                {block.h6 &&
                    <h6>{t(block.h6.key, block.h6.ns)}</h6>
                }

                {paragraphs}



            </div>
        </div>

    );

}