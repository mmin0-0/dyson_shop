export const ImgWrap = ({src, alt}) => {
  return(
    <div className="img-wrap">
      <img src={src} alt={alt} />
    </div>
  )
};

export const HoverImgWrap = ({src, alt, srcHover, altHover}) => {
  return (
    <div className="img-wrap">
      <img src={src} alt={alt} className="default" />
      <img src={srcHover} alt={altHover} className="hover" />
    </div>
  )
};