import { JSX } from "react";
import { ExtendedThemeStyle, NdDefaultThemeName, ThemeStyle, I18nextProvider } from "nodoku-core";
export declare class BackgroundsProps {
    lng: string;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;
    bgColorStyle?: ExtendedThemeStyle;
    bgImageStyle?: ThemeStyle;
    constructor(lng: string, defaultThemeName: NdDefaultThemeName, bgColorStyle: ThemeStyle, bgImageStyle: ThemeStyle, i18nextProvider: I18nextProvider);
}
export declare function BackgroundsImpl(props: BackgroundsProps): Promise<JSX.Element>;
