import {JSX} from "react";
import React from "react";
import {IconType} from "react-icons";
import {NdImageProps} from "nodoku-core";

export async function imageProviderImpl(props: NdImageProps): Promise<JSX.Element> {

    const {url, alt, title, imageStyle} = props;

    // if (url.startsWith("icon:")) {
    //     const iconName = url.substring("icon:".length);
    //
    //     // let icon: IconType | undefined;
    //     // if (iconName.startsWith("react-icons/")) {
    //     //      icon = nameToReactIcon(iconName.substring("react-icons/".length));
    //     // }
    //     const icon: JSX.Element | undefined = await NdIconProviderImpl(iconName, {size: imageStyle?.imageWidth || "32"})
    //     // if (iconName.startsWith("react-icons/hi:")) {
    //     //     icon = nameToReactIconHi(iconName.substring("react-icons/hi:".length));
    //     // } else if (iconName.startsWith("react-icons/hi2")) {
    //     //     icon = nameToReactIconHi2(iconName.substring("react-icons/hi2:".length));
    //     // }
    //
    //
    //     if (icon) {
    //         return (
    //             <div className={`${imageStyle?.base} ${imageStyle?.decoration}`}>
    //                 {icon}
    //             </div>
    //         )
    //     }
    // }

    return <img className={`${imageStyle?.base} ${imageStyle?.decoration}`} src={url} alt={alt} loading={"lazy"}/>;

    // return <Image src={url} alt={alt || url} className={`${imageStyle?.base} ${imageStyle?.decoration}`}/>

}

