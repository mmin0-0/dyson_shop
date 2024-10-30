import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../store.js';
import { Strong, Span, P, TitWrap } from '../components/Text.jsx';
import { DefaultInput } from '../components/Input.jsx';
import { ImgWrap } from '../components/Image.jsx';
import { DefaultBtn } from '../components/Button.jsx';
import { useMediaContext } from '../MediaContext.js';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const { isMobile } = useMediaContext();
  const dispatch = useDispatch();

  const thead = ['전체선택', '수량', '주문금액', '배송정보'];
  const [hasRows, setHasRows] = useState(cartItems.length > 0);
  const [checkedItems, setCheckedItems] = useState(Array(cartItems.length).fill(false));
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setCheckedItems(Array(cartItems.length).fill(false));
    setSelectAll(false);
    setHasRows(cartItems.length > 0);
  }, [cartItems]);

  const handleCheckboxChange = (idx) => {
    const newCheckedItems = [...checkedItems];

    if (idx !== undefined) {
      newCheckedItems[idx] = !newCheckedItems[idx];
    }

    setCheckedItems(newCheckedItems);
    setSelectAll(newCheckedItems.every(item => item));
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCheckedItems(Array(cartItems.length).fill(newSelectAll));
  };

  const totalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.count * item.price, 0);
    return cartItems.length > 0 ? total + 3000 : 0;
  };

  return (
    <div className="inner cart con-box">
      <section id="board">
        <TitWrap>
          <Strong fontSize="2.4rem" fontWeight="bold">장바구니</Strong>
          <Span color="#000000">{cartItems.length}</Span>
        </TitWrap>
        <div className="cont-wrap">
          <div className="table-wrap">
            {isMobile ?
              <MobileTable
                cart={cartItems}
                hasRows={hasRows}
                dispatch={dispatch}
                checkedItems={checkedItems}
                handleCheckboxChange={handleCheckboxChange}
                selectAll={selectAll}
                handleSelectAllChange={handleSelectAllChange}
              />
              :
              <DesktopTable
                cart={cartItems}
                hasRows={hasRows}
                dispatch={dispatch}
                thead={thead}
                checkedItems={checkedItems}
                handleCheckboxChange={handleCheckboxChange}
                selectAll={selectAll}
                handleSelectAllChange={handleSelectAllChange}
              />}
            <ResultTable
              cart={cartItems}
              totalPrice={totalPrice}
            />
            <div className="table-wrap-bottom">
              <DefaultBtn className="order">주문하기</DefaultBtn>
              <Link to="/detail">계속 쇼핑하기</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function DesktopTable({ cart, hasRows, dispatch, thead, checkedItems, handleCheckboxChange, selectAll, handleSelectAllChange }) {
  return (
    <>
      {
        hasRows ? (
          <table className="shop-table">
            <caption>cart</caption>
            <colgroup>
              {thead.map((col, idx) =>
                <col key={idx} width={col === '전체선택' ? '*' : '180px'} />
              )}
            </colgroup>
            <thead>
              <tr>
                {thead.map((tit, idx) =>
                  <th key={idx}>
                    {
                      tit === '전체선택' ? (
                        <DefaultInput
                          type="check"
                          name="basket"
                          inputType="checkbox"
                          id="allCheck"
                          txt={tit}
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                      ) : (<div>{tit}</div>)
                    }
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <CartTableRow
                  key={idx}
                  item={item}
                  idx={idx}
                  isMobile={false}
                  dispatch={dispatch}
                  checked={checkedItems[idx]}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </tbody>
          </table>
        ) : (<div className="empty">항목이 없습니다.</div>)
      }
    </>
  )
}

function MobileTable({ cart, hasRows, dispatch, checkedItems, handleCheckboxChange, selectAll, handleSelectAllChange }) {
  return (
    <>
      {
        hasRows ? (
          <table className="shop-table mb">
            <caption>cart</caption>
            <colgroup>
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div>
                    <DefaultInput
                      type="check"
                      name="basket"
                      inputType="checkbox"
                      id="allCheck"
                      txt="전체선택"
                      checked={selectAll}
                      onChange={handleSelectAllChange}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <CartTableRow
                  key={idx}
                  item={item}
                  idx={idx}
                  isMobile={true}
                  dispatch={dispatch}
                  checked={checkedItems[idx]}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </tbody>
          </table>
        ) : (<div className="empty">항목이 없습니다.</div>)
      }
    </>
  )
}

function CartTableRow({ key, item, idx, isMobile, dispatch, checked, handleCheckboxChange }) {
  const shippingInfo = isMobile
    ? [
      { title: "배송비", content: "3,000원" },
      { title: "배송수단", content: "택배" },
      { title: "주문합계(총", count: item.count, total: (item.count * item.price + 3000).toLocaleString() + "원" }
    ]
    : [
      { title: "배송비", content: "3,000원" },
      { title: "배송수단", content: "택배" }
    ];

  return (
    <tr key={idx}>
      <td>
        <div className="img">
          <DefaultInput
            type="check"
            name="basket"
            inputType="checkbox"
            id={`check_0${idx}`}
            checked={checked}
            onChange={() => handleCheckboxChange(idx)}
          />
          <Link to={`/detail/${item.category}/${item.id}`} className="link-wrap">
            <ImgWrap src={item.img} alt={item.title} />
            <P>{item.title}</P>
          </Link>
          <Link to="#" className="remove" onClick={() => dispatch(removeItem(item.id))}>remove</Link>
        </div>
      </td>
      {!isMobile && (
        <td>
          <div>
            <div className="amount">
              <DefaultBtn onClick={() => dispatch(decrease(item.id))}>-</DefaultBtn>
              <Strong>{item.count}</Strong>
              <DefaultBtn onClick={() => dispatch(increase(item.id))}>+</DefaultBtn>
            </div>
          </div>
        </td>
      )}
      <td>
        <div>
          <div className="price">
            <P><span>{(item.count * item.price).toLocaleString()}</span> 원</P>
            {isMobile ? null : <DefaultBtn className="type02">바로구매</DefaultBtn>}
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="result">
            {
              shippingInfo.map((info, idx) =>
                <div className="flex-wrap" key={idx}>
                  <div>{info.title} {info.count !== undefined && `(${info.count} 개)`}</div>
                  <div>{info.total || info.content}</div>
                </div>
              )
            }
          </div>
        </div>
      </td>
    </tr>
  )
}

function ResultTable({ cart, totalPrice }) {
  const total = totalPrice();

  return (
    <table className="result-table">
      <caption>장바구니 합계 테이블</caption>
      <colgroup>
        <col width="*"></col>
      </colgroup>
      <thead>
        <tr>
          <th><P>총 주문 상품 <span>{cart.length}</span>개</P></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>
              <div className="price-wrap">
                {[
                  { label: '상품금액', value: (total - (cart.length > 0 ? 3000 : 0)).toLocaleString() },
                  { label: '배송비', value: '3,000' },
                  { label: '총 주문금액', value: total.toLocaleString() }
                ].map((item, idx) => (
                  <div key={idx}>
                    <p><span>{item.value}</span>원</p>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

// function CartTable({ cart }) {
//   const tbodyRef = useRef();
//   const dispatch = useDispatch();

//   const [hasRows, setHasRows] = useState(cart.length > 0);
//   const [checkedItems, setCheckedItems] = useState(Array(cart.length).fill(false));
//   const [selectAll, setSelectAll] = useState(false);

//   useEffect(() => {
//     setHasRows(tbodyRef.current?.querySelectorAll('tr').length > 0);
//   }, [cart]);

//   const handleCheckboxChange = (idx) => {
//     const newCheckedItems = [...checkedItems];

//     if (idx !== undefined) {
//       newCheckedItems[idx] = !newCheckedItems[idx];
//     } else {
//       const newSelectAll = !selectAll;
//       setSelectAll(newSelectAll);
//       newCheckedItems.fill(newSelectAll);
//     }

//     setCheckedItems(newCheckedItems);
//     setSelectAll(newCheckedItems.every(item => item));
//   };

//   const thead = ['전체선택', '수량', '주문금액', '배송정보'];

//   return (
//     <>
//       {
//         hasRows ? (
//           <>
//             <table className="shop-table">
//               <caption>장바구니 테이블</caption>
//               <colgroup>
//                 {thead.map((col, idx) =>
//                   <col key={idx} width={col === '전체선택' ? '*' : '180px'} />
//                 )}
//               </colgroup>
//               <thead>
//                 <tr>
//                   {thead.map((item, idx) =>
//                     <th key={idx}>
//                       {item === '전체선택' ? (
//                         <div className="flex-wrap center">
//                           <DefaultInput
//                             txt="전체선택"
//                             inputType="checkbox"
//                             type="check"
//                             id="allCheck"
//                             name="basket"
//                             checked={selectAll}
//                             onChange={() => handleCheckboxChange(idx)}
//                           />
//                           <Span>전체선택</Span>
//                         </div>
//                       ) : (
//                         <Span className="d-pc">{item}</Span>
//                       )
//                       }
//                     </th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody ref={tbodyRef}>
//                 {
//                   cart.map((item, idx) => {
//                     const shippingInfo = [
//                       { title: "배송비", content: "3,000원" },
//                       { title: "배송수단", content: "택배" },
//                       { title: "주문합계(총", count: item.count, total: (item.count * item.price + 3000).toLocaleString() + "원" }
//                     ];

//                     <tr id={item.id} key={idx}>
//                       <td className="img">
//                         <div className="flex-wrap pd-wrap">
//                           <DefaultInput
//                             type="check"
//                             name="basket"
//                             inputType="checkbox"
//                             id={`check_0${idx}`}
//                             checked={checkedItems[idx]}
//                             onChange={() => handleCheckboxChange}
//                           />
//                           <Link to={`detail/${item.category}/${item.id}`}>
//                             <ImgWrap src={item.img} alt={item.title} />
//                             <P>{item.title}</P>
//                           </Link>
//                         </div>
//                         <Link to="#" className="btn-remove" onClick={() => dispatch(removeItem(item.id))}>remove</Link>
//                       </td>
//                       <td className="hidden-sm">
//                         <div className="info-list">
//                           <div className="amount">
//                             <DefaultBtn onClick={() => { dispatch(decrease(item.id)) }}>-</DefaultBtn>
//                             <Strong>{item.count}</Strong>
//                             <DefaultBtn onClick={() => { dispatch(increase(item.id)) }}>+</DefaultBtn>
//                           </div>
//                           <div className="flex-wrap price">
//                             <div className="tit txt-bold">주문금액</div>
//                             <div className="cont txt-bold">{(item.count * item.price).toLocaleString()}</div>
//                           </div>
//                           <div className="result-list">
//                             {shippingInfo.map((info, idx) => (
//                               <div className="flex-wrap" key={idx}>
//                                 <div className="tit">{info.title}{info.count !== undefined && `(${info.count}개)`}</div>
//                                 <div className="cont">{info.total || info.content}</div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="hidden-lg">
//                         <div className="amount">
//                           <DefaultBtn onClick={() => { dispatch(decrease(item.id)) }}>-</DefaultBtn>
//                           <Strong>{item.count}</Strong>
//                           <DefaultBtn onClick={() => { dispatch(increase(item.id)) }}>+</DefaultBtn>
//                         </div>
//                       </td>
//                       <td className="hidden-lg">
//                         <div className="price">
//                           <p className="tit"><span className="txt-bold">{(item.count * item.price).toLocaleString()}</span> 원</p>
//                           <div className="btn-wrap">
//                             <DefaultBtn className="type02">바로구매</DefaultBtn>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="hidden-sm">
//                         <div className="btn-wrap">
//                           <DefaultBtn className="type02">바로구매</DefaultBtn>
//                         </div>
//                       </td>
//                       <td className="hidden-lg">
//                         <P>3,000 원</P>
//                         <Span>택배</Span>
//                       </td>
//                     </tr>
//                   }
//                   )
//                 }
//               </tbody>
//             </table>
//             <div className="table-wrap-bottom">
//               <button type="button" className="type03 list-remove">선택 상품 삭제</button>
//             </div>
//           </>
//         ) : (
//           <div className="empty">항목이 없습니다.</div>
//         )
//       }
//     </>
//   )
// }

