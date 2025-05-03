// Create a react component called Respimg that outputs a figure element with optional figcaption and responsive images markup using srcset and sizes. the component receives an image uri and an optional caption

import React from 'react';

interface RespimgProps {
  src: string;
  caption?: string;
}

const Respimg = ({ src, caption }: RespimgProps) => {
  return (
    <figure className='relative'>
      <img
        src={src}
        srcSet={`${src}-small.jpg 480w, ${src}-medium.jpg 768w, ${src}-large.jpg 1200w`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
        alt={caption}
      />
      {caption && (
        <figcaption className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm w-full">
          {caption}
        </figcaption>
      )}

    </figure>
  );

}

export default Respimg;
