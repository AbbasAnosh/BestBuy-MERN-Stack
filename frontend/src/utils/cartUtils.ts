export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: any) => {
  //calculate item price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: any, item: any) => acc + item.price * item.qty,
      0
    )
  );
  //calculate shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 15);
  //calculate tax amount
  state.taxAmount = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  //calculate total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxAmount)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};

// const initialState = {
//   cartItems: localStorage.getItem("cart")
//    ? JSON.parse(localStorage.getItem("cart")!)
//     : [],
// }

// if (state.cartItems.length > 0) {
//   const existedItems = state.cartItems.find(
//     (p: any) => p._id === item._id
//   );
//   console.log(existedItems, "existedItems");

//   if (existedItems) {
//     state.cartItems = state.cartItems.map((p: any) =>
//       p._id === existedItems._id ? item : p
//     );
//   } else {
//     state.cartItems = [...state.cartItems, item];
//   }

//   // state.cartItems.push(item);
// } else {
//   state.cartItems = [item];
// }
// console.log(state.cartItems, "cartItems");
