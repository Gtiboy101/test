'use client'

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from 'next/image';

export default function SimpleGallery({ images, galleryID }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className="pswp-gallery grid-cols-3 grid gap-4" id={galleryID}>
      {images.map((image, index) => (
        <a
          className=""
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={image.thumbnailURL}
            height={image.height}
            width={image.width}
            alt={image.alt}
          />
        </a>
      ))}
    </div>
  );
}
