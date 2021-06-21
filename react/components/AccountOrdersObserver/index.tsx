import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const AccountOrdersObserver: React.FC = () => {
  const [orderId, setOrderId] = useState<string>("");

  const defineOrder = () => {
    const { hash } = window?.location || {};
    const [, order] = hash?.split("#/orders/");
    setOrderId(order);
  };

  const waitForElementVar = (
    target: any,
    callback: any,
    all: boolean = false,
    callbackFalse?: any,
    props = { interval: 500, limitTries: 50 }
  ) => {
    var { interval, limitTries } = props;
    var tries = 0;

    var checkExist = setInterval(function () {
      if (!all && document.querySelector(target)) {
        clearInterval(checkExist);
        callback && callback();
      } else if (all && document.querySelectorAll(target)?.length) {
        clearInterval(checkExist);
        callback && callback();
      } else {
        tries++;
        if (tries > limitTries) {
          clearInterval(checkExist);
          callbackFalse && callbackFalse();
          console.log(
            `waitForElementVar :: element "${target}" not found [this is not an error]`
          );
        }
      }
    }, interval);
  };

  const accessKey = (orderNumber: string) => {
    const fiscalNoteArea = document.querySelectorAll(".no-underline.c-link");
    if (fiscalNoteArea) {
      fiscalNoteArea.forEach((element) => {
        if (
          element.innerHTML.toLowerCase() == "ver nota fiscal" ||
          element.innerHTML.toLowerCase() == "ver cupom fiscal"
        ) {
          const div = document.createElement("div");
          const span = document.createElement("span");
          div.classList.add("key-access-container");
          span.classList.add("key-access-text");
          if (orderNumber) {
            span.innerHTML = `Chave de Acesso: ${orderNumber}`;
            div.appendChild(span);
            element.parentElement?.prepend(div);
          }
        }
      });
    }
  };

  useEffect(() => {
    window.onload = () => defineOrder();
    window.addEventListener("hashchange", () => defineOrder());
  }, []);

  useEffect(() => {
    const appendBtn = async (orderId: string) => {
      if (orderId) {
        const response = await axios.get(`/api/oms/pvt/orders/${orderId}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const { invoiceKey } =
          response?.data?.packageAttachment?.packages[0] || {};
        accessKey(invoiceKey);

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
    };

    waitForElementVar(
      ".vtex-account__order-details .fl.w-40-ns.pv3.pl0",
      () => {
        appendBtn(orderId);
      }
    );
  }, [orderId]);

  return null;
};

export default AccountOrdersObserver;
