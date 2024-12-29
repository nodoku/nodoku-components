import {JSX} from "react";
import React from "react";
import {NdImageProps} from "nodoku-core";

export async function imageProviderImpl(props: NdImageProps): Promise<JSX.Element> {

    const {url, alt, title, imageStyle} = props;

    return <img className={`${imageStyle?.base} ${imageStyle?.decoration}`} src={url} alt={alt} loading={"lazy"}/>;

    // return <Image src={url} alt={alt || url} className={`${imageStyle?.base} ${imageStyle?.decoration}`}/>

}

