import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, addItem, removeItem } from '../store.js';
import { Strong, Span, P, TitWrap } from '../components/Text.jsx';
import { DefaultInput } from '../components/Input.jsx';
import { ImgWrap } from '../components/Image.jsx';
import { DefaultBtn } from '../components/Button.jsx';

function Cart({ price }) {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!cartItems || cartItems.length === 0) {
    return <div>장바구니에 항목이 없습니다.</div>;
  }

  // const totalPrice = () => {
  //   const total = state.cart.reduce((total, item) => total + item.count * item.price, 0);
  //   return state.cart.length > 0 ? total + 3000 : 0;
  // };

  return (
    <div className="inner cart con-box">
      <section id="board">
        {/* <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>가격: {item.price}</p>
              <p>수량: {item.count}</p>
            </div>
          ))}
        </div> */}
        <TitWrap>
          <Strong fontSize="2,4rem" fontWeight="bold">장바구니</Strong>
          <Span color="#000000">{cartItems.length}</Span>
        </TitWrap>
        <div className="cont-wrap">
          <div className="table-wrap">
            <Table cart={cartItems} />
          </div>
          {/* <CartTable cart={cartItems} /> */}
          {/* <ResultTable
            cart={cartItems}
            dispatch={dispatch}
            totalPrice={totalPrice}
          /> */}
          <div className="bottom-btn">
            <button type="button" className="btn-order">주문하기</button>
            <Link to="/detail">계속 쇼핑하기</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Table({ cart }) {
  const tbodyRef = useRef();
  const dispatch = useDispatch();

  const thead = ['전체선택', '수량', '주문금액', '배송정보'];
  const [hasRows, setHasRows] = useState(cart.length > 0);
  return (
    <>
      {
        hasRows ? (
          <table>
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
                        />
                      ) : (<div>{tit}</div>)
                    }
                  </th>
                )}
              </tr>
            </thead>
            <tbody ref={tbodyRef}>
              {
                cart.map((item, idx) => {
                  const shippingInfo = [
                    { title: "배송비", content: "3,000원" },
                    { title: "배송수단", content: "택배" },
                    { title: "주문합계(총", count: item.count, total: (item.count * item.price + 3000).toLocaleString() + "원" }
                  ];

                  return (
                    <tr key={idx}>
                      <td className="img-cont">
                        <div>
                          <DefaultInput
                            type="check"
                            name="basket"
                            inputType="checkbox"
                            id={`check_0${idx}`}
                          />
                          <Link to={`detail/${item.category}/${item.id}`}>
                            <ImgWrap src={item.img} alt={item.title} />
                            <P>{item.title}</P>
                          </Link>
                          <Link to="#" className="btn-remove" onClick={() => dispatch(removeItem(item.id))}>remove</Link>
                        </div>
                      </td>
                      <td className="hidden-sm">
                        <div>
                          <div className="amount">
                            <DefaultBtn>-</DefaultBtn>
                            <Strong>{item.count}</Strong>
                            <DefaultBtn>+</DefaultBtn>
                          </div>
                          <div className="price">
                            <Strong>주문금액</Strong>
                            <Strong>{(item.count * item.price).toLocaleString()}</Strong>
                          </div>
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
                      <td className="hidden-lg">
                        <div>
                          <div className="amount">
                              <DefaultBtn>-</DefaultBtn>
                              <Strong>{item.count}</Strong>
                              <DefaultBtn>+</DefaultBtn>
                            </div>
                          </div>
                      </td>
                      <td className="hidden-lg">
                        <div>
                          <div className="price">
                            <P><span>{(item.count * item.price).toLocaleString()}</span> 원</P>
                            <DefaultBtn className="type02">바로구매</DefaultBtn>
                          </div>
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  )
                }
                )
              }
            </tbody>
          </table>
        ) : (<div className="empty">항목이 없습니다.</div>)
      }
    </>
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

// function ResultTable({ cart, dispatch, totalPrice }) {
//   const total = totalPrice();

//   return (
//     <div className="table-wrap">
//       <table className="shop-result-table">
//         <caption>장바구니 합계 테이블</caption>
//         <colgroup>
//           <col width="*"></col>
//         </colgroup>
//         <thead>
//           <tr>
//             <th className="hidden-lg"><p className="txt">총 주문 상품 <span>{cart.length}</span>개</p></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className="price-wrap">
//                 <div className="price-item">
//                   <p><span>{(total - (cart.length > 0 ? 3000 : 0)).toLocaleString()}</span>원</p>
//                   <span>상품금액</span>
//                 </div>
//                 <div className="price-item">
//                   <p>3,000원</p>
//                   <span>배송비</span>
//                 </div>
//                 <div className="price-item">
//                   <p><span>{total.toLocaleString()}</span>원</p>
//                   <span>총 주문금액</span>
//                 </div>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }
export default Cart;