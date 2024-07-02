import { useEffect } from 'react';

const usePreloadImages = (imageUrls) => {
  useEffect(() => {
    const images = [];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      images.push(img);
    });
  }, [imageUrls]);
};

export default usePreloadImages;
