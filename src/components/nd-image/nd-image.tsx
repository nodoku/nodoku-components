import {JSX} from "react";
import React from "react";
import {IconType} from "react-icons";
import {nameToReactIconHi2} from "./name-to-react-icon-hi2";
import {nameToReactIconHi} from "./name-to-react-icon-hi";
import {NdImageProps} from "nodoku-core";

export async function NdImageProviderImpl(props: NdImageProps): Promise<JSX.Element> {

    const {url, alt, title, imageStyle} = props;

    if (url.startsWith("icon:")) {
        const iconName = url.substring("icon:".length);

        let icon: IconType | undefined= undefined;
        if (iconName.startsWith("react-icons/hi:")) {
            icon = nameToReactIconHi(iconName.substring("react-icons/hi:".length));
        } else if (iconName.startsWith("react-icons/hi2")) {
            icon = nameToReactIconHi2(iconName.substring("react-icons/hi2:".length));
        }

        if (icon) {
            return icon(({size: imageStyle?.imageWidth}))
        }
    }

    return <img className={`${imageStyle?.base} ${imageStyle?.decoration}`} src={url} alt={alt}/>;

    // return <Image src={url} alt={alt || url} className={`${imageStyle?.base} ${imageStyle?.decoration}`}/>

}