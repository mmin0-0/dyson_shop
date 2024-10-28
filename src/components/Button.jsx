export const DefaultBtn = ({ children, type = "button", className, color = "default", onClick, ...props }) => {
  return <button
    type={type}
    className={`${className} ${color}`} onClick={onClick}
    {...props}>
    {children}</button>
};

export const MoreBtn = ({ text }) => {
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

export const Pagination({number}) {
  const paginationBtn = [
    {
      type: 'prev',
      content: [
        { title: '맨앞', className: 'first' },
        { title: '이전', className: 'prev' }
      ]
    }, {
      type: 'next',
      content: [
        { title: '다음', className: 'next' },
        { title: '맨뒤', className: 'last' }
      ]
    }
  ];

  return (
    <div className="pagination">
      {paginationBtn.map((btn) => (
        btn.type === 'prev' && (
          <div key={btn.type} className={`arrow-group ${btn.type}`}>
            {btn.content.map((item) => (
              <Link
                to="#"
                key={`${btn.type}-${item.className}`}
                className={item.className}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )
      ))}
      <div className="num-area">
        {
          [1].map((num) =>
            <Link to="#" key={num} className="on">{num}</Link>
          )
        }
      </div>
      {paginationBtn.map((btn) => (
        btn.type === 'next' && (
          <div key={btn.type} className={`arrow-group ${btn.type}`}>
            {btn.content.map((item) => (
              <Link
                to="#"
                key={`${btn.type}-${item.className}`}
                className={item.className}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )
      ))}
    </div>
  )
}