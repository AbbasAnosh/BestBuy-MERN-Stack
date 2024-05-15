export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: any) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: any, item: any) => acc + item.price * item.qty,
      0
    )
  );

  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 15);

  state.taxAmount = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxAmount)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
