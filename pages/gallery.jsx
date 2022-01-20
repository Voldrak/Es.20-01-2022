import LayoutDefaults from "./../layout/index";
import { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.scss';

const loremPicsums = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/201/300",
    "https://picsum.photos/200/301",

];

export default function Gallery() {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(loremPicsums)
    }, []);

    return (
        <LayoutDefaults>
    <div className={styles.wrapper}>
        {images.map((img) => (<img src={img} alt={img} width={200} height={300} key={img} className={styles.img}/>
        ))}

    </div>
    </LayoutDefaults>
    );
}
