

const Image = ({ src, height, width, className, alt }:any) => {
  return (
    <div>
      <img
        src={src}
        height={height}
        width={width}
        className={className}
        alt={alt}
      />
    </div>
  );
};

export default Image;
