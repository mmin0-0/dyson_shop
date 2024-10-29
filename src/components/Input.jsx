export const DefaultInput = ({type, txt, inputType, id, name, placeholder, onChange, value}) => {
  return (
    <div className={`input-wrap ${type}`}>
      <input 
        type={inputType} 
        id={id} 
        name={name}
        placeholder={placeholder} 
        onChange={onChange} 
        value={value} />
      <label htmlFor={id} className={type === 'check' ? '':'hide'}>{txt}</label>
      {inputType === 'search' && (
        <button type="submit" className="btn-search">검색</button>
      )}
    </div>
  )
};