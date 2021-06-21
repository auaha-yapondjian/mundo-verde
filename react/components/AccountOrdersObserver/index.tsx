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
          const keyAccessDiv = document.createElement("div");
          const keyAccessSpan = document.createElement("span");
          const keyAccessLink = document.createElement("a");

          keyAccessDiv.classList.add("key-access-container");
          keyAccessSpan.classList.add("key-access-text");
          keyAccessLink.classList.add("key-access-link");

          if (orderNumber) {
            keyAccessSpan.innerHTML = `Chave de Acesso: ${orderNumber}`;

            keyAccessLink.innerHTML =
              "Consulte sua Nota Fiscal com a Chave de Acesso aqui";
            keyAccessLink.setAttribute("target", "_blank");
            keyAccessLink.href = `http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa&tipoConteudo=XbSeqxE8pl8=&nfe=${orderNumber}`;

            keyAccessDiv.appendChild(keyAccessLink);
            keyAccessDiv.appendChild(keyAccessSpan);
            element.parentElement?.prepend(keyAccessDiv);
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
        //www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa&tipoConteudo=XbSeqxE8pl8=&nfe=32210617018091000276550020003819911886885327
        http: trackingDiv.appendChild(a);
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
