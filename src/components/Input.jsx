export const DefaultInput = ({type, txt, inputType, id, placeholder, onChange, value}) => {
  return (
    <div className={`input-wrap ${type}`}>
      <label htmlFor={id} className="hide">{txt}</label>
      <input 
        type={inputType} 
        id={id} 
        placeholder={placeholder} 
        onChange={onChange} 
        value={value} />
      {inputType === 'search' && (
        <button type="submit" className="btn-search">검색</button>
      )}
    </div>
  )
};