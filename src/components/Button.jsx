import { useState } from "react";

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

export const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <a
          href="#"
          onClick={(e) => handlePageChange(e, currentPage - 1)}
          className="prev"
        >이전</a>
      )}
      {Array.from({length: totalPages}, (_,i) => (
          <a 
            key={i}
            href="#"
            onClick={(e) => handlePageChange(e, i + 1)}
            className={currentPage === i + 1 ? 'on':''}
          >{i + 1}</a>
      ))}
      {totalPages > 1 && currentPage < totalPages && (
        <a
          href="#"
          onClick={(e) => handlePageChange(e, currentPage + 1)}
          className="next"
        >다음</a>
      )}
    </div>
  )
};