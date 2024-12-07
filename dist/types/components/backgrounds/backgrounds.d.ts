import { JSX } from "react";
import { ExtendedThemeStyle, NdDefaultThemeName, ThemeStyle, I18nextProvider } from "nodoku-core";
export type BackgroundsProps = {
    lng: string;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;
    bgColorStyle?: ExtendedThemeStyle;
    bgImageStyle?: ThemeStyle;
};
export declare function BackgroundsImpl(props: BackgroundsProps): Promise<JSX.Element>;
