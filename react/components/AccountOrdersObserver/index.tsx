import React, { useEffect, useState } from "react";

const AccountOrdersObserver: React.FC = () => {
  const [orderId, setOrderId] = useState<string>("");

  const defineOrder = () => {
    const { hash } = window?.location || {};
    const [, order] = hash?.split("#/orders/");
    setOrderId(order);
  };

  useEffect(() => {
    window.onload = () => defineOrder();
    window.addEventListener("hashchange", () => defineOrder());
  }, []);

  useEffect(() => {
    if (orderId) {
      const trackingUrl = `https://status.ondeestameupedido.com/tracking/1614/${orderId}`;
      console.log(trackingUrl);
    }
  }, [orderId]);

  return null;
};

export default AccountOrdersObserver;
