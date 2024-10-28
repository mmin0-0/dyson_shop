import { Link } from 'react-router-dom';

export default function Pagination() {
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
      ))}
      <div className="num-area">
        {
          [1].map((num) =>
            <Link to="#" key={num} className="on">{num}</Link>
          )
        }
      </div>
    </div>
  )
}