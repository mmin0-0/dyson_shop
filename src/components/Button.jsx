export const DefaultBtn = ({children, type="button", color = "default", ...props}) => {
  return <button type={type} className={color} {...props}>{children}</button>
};

export const MoreBtn = ({text}) => {
  return (
    <button type="button" className="btn-more">
      <div className="btn-txt default">
        {text.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <div className="btn-txt hover">
        {text.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </button>
  )
};