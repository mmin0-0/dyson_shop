export const TitWrap = ({children, type, textAlign}) => {
  const style = {
    textAlign: textAlign || 'left'
  };
  const typeClass = type ? `${type}` : '';
  return (
    <div className={`tit-wrap ${typeClass}`} style={style}> 
      {children}
    </div>
  )
};

export const TitInfo = ({tag, tit}) => {
  return (
    <div className="tit-info">
      <span>{tag}</span>
      <strong>{tit}</strong>
    </div>
  )
};

export const InfoTxt = ({children, className}) => {
  return (
    <div className={`info-txt ${className}`}>
      {children}
    </div>
  )
};

export const Span = ({children, color, fontSize}) => {
  const style = {
    color: color || 'rgba(255,255,255, .65)',
    fontSize: fontSize || '1.4rem'
  };
  return <span style={style}>{children}</span>
};

export const P = ({children, className, fontWeight, lineHeight}) => {
  const style = {
    fontWeight: fontWeight || 400,
    lineHeight: lineHeight || '1.4'
  };
  return <p className={className} style={style}>{children}</p>
};

export const Strong = ({children, fontWeight, fontSize, lineHeight, display}) => {
  const style = {
    fontWeight: fontWeight || 500,
    fontSize: fontSize || '1.8rem',
    lineHeight: lineHeight || '1.4',
    display: display || 'block'
  };
  return <strong style={style}>{children}</strong>
};

export const Ul = ({items, className}) => {
  if(!items || items.length === 0){
    return null;
  }

  return (
    <ul className={className}>
      {items.map((item, idx) => 
        <li key={idx}>{item}</li>
      )}
    </ul>
  )
};
