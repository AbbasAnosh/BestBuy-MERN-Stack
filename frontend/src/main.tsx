import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store.ts";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useGetPayPalClientIdQuery } from "./slices/ordersApiSlice";

const PayPalWrapper = () => {
  const { data: paypal, isLoading: loadingPayPal } = useGetPayPalClientIdQuery(
    {}
  );

  if (loadingPayPal || !paypal) {
    return <div>Loading PayPal...</div>; // Or any other loading state you prefer
  }

  const initialOptions = {
    clientId: paypal.clientId, // Use the fetched clientId
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <App />
    </PayPalScriptProvider>
  );
};

const RootComponent = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <PayPalWrapper /> */}
    </Provider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<RootComponent />);
