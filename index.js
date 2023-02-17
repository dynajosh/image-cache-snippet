import React, { useState, useEffect } from 'react';

function ImageComponent(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function getImage() {
      const cachedImage = await caches.match(props.src);
      if (cachedImage) {
        const blob = await cachedImage.blob();
        setImage(URL.createObjectURL(blob));
      } else {
        const response = await fetch(props.src);
        const blob = await response.blob();
        setImage(URL.createObjectURL(blob));
        const cache = await caches.open('my-image-cache');
        cache.put(props.src, new Response(blob));
      }
    }
    getImage();
  }, [props.src]);

  return <img src={image} alt={props.alt} />;
}

export default ImageComponent;
