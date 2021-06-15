import React, { useEffect, useState } from "react";
import "./styles.css";

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
      const trackingDiv = document.querySelector(
        ".vtex-account__order-details .fl.w-40-ns.pv3.pl0"
      );

      const a = document.createElement("a");
      a.href = trackingUrl;
      a.setAttribute("target", "_blank");
      a.classList.add("link-rastreio");
      a.textContent = "Link de rastreio";

      trackingDiv.appendChild(a);
    }
  }, [orderId]);

  return null;
};

export default AccountOrdersObserver;
