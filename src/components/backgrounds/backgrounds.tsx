import {JSX} from "react";
import {
    ExtendedThemeStyle,
    NdDefaultThemeName,
    ThemeStyle
} from "nodoku-core";


export type BackgroundsPropsImpl = {
    lng: string;
    defaultThemeName: NdDefaultThemeName;
    bgColorStyle?: ExtendedThemeStyle;
    bgImageStyle?: ThemeStyle;

}


export async function BackgroundsImpl(props: BackgroundsPropsImpl): Promise<JSX.Element> {

    const {
        lng,
        defaultThemeName,
        bgColorStyle,
        bgImageStyle
    } = props;

    const backgrounds: JSX.Element[] = [];

    const lightClassName = "light:inline-block dark:hidden " + (defaultThemeName === "light" ? "inline-block" : "hidden")
    const darkClassName = "light:hidden dark:inline-block " + (defaultThemeName === "dark" ? "inline-block" : "hidden")

    if (bgColorStyle?.css?.light) {
        backgrounds.push(<div key={"bg-color-css-light"}
            className={`bg-color-css-light absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${lightClassName}`}
            style={bgColorStyle?.css?.light}></div>);
    }
    if (bgColorStyle?.css?.dark) {
        backgrounds.push(<div key={"bg-color-css-dark"}
            className={`bg-color-css-dark absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${darkClassName}`}
            style={bgColorStyle?.css?.dark}></div>);
    }

    var style: React.CSSProperties = {}

    return (
        <>
            <div className={`nd-bg-image absolute top-0 left-0 right-0 bottom-0 ${bgImageStyle?.base} ${bgImageStyle?.decoration}`} style={style}></div>
            <div className={`nd-bg-color absolute top-0 left-0 right-0 bottom-0 ${bgColorStyle?.base} ${bgColorStyle?.decoration}`}>
                {backgrounds}
            </div>
        </>
    )


}