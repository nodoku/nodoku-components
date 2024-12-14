import { JSX } from "react";
import { ExtendedThemeStyle, NdDefaultThemeName, ThemeStyle } from "nodoku-core";
export type BackgroundsPropsImpl = {
    lng: string;
    defaultThemeName: NdDefaultThemeName;
    bgColorStyle?: ExtendedThemeStyle;
    bgImageStyle?: ThemeStyle;
};
export declare function BackgroundsImpl(props: BackgroundsPropsImpl): Promise<JSX.Element>;
