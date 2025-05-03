
/**
 * Props for the Respimg component.
 */
interface RespimgProps {
  /** The source URL of the image. */
  src: string;

  /** Optional caption for the image. */
  caption?: string;
}

/**
 * A responsive image component that supports multiple resolutions and includes an optional caption.
 */
const Respimg = ({ src, caption }: RespimgProps) => {
  // Validate the `src` prop to ensure it's a valid URL
  if (!src || typeof src !== 'string') {
    console.error('Invalid `src` prop provided to Respimg component.');
    return null;
  }

  return (
    <figure className='relative'>
      <img
        src={src}
        srcSet={`${src}-small.jpg 480w, ${src}-medium.jpg 768w, ${src}-large.jpg 1200w`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 1200px"
        alt={caption || 'Image'}
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
