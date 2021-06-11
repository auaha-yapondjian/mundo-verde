import React, { useEffect, useState } from "react";
import { canUseDOM, useRuntime } from "vtex.render-runtime";
import axios from "axios";

const AccountOrdersObserver: React.FC = () => {
  const [orderId, setOrderId] = useState<string>("");
  const [invoiceKey, setInvoiceKey] = useState<string>("");
  const [orderStatus, setOrderStatus] = useState<string>("");
  const [retirada, setRetirada] = useState<boolean>(false);
  const { hints } = useRuntime();

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
      axios
        .get(`/api/oms/pvt/orders/${orderId}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then(({ data }) => {
          if (!data) return;

          const { invoiceKey } = data?.packageAttachment?.packages?.[0] || {};

          console.log(data);

          setInvoiceKey(invoiceKey);
        });
    }
  }, [orderId]);

  const runPageWorkAround = (orderNumber: string) => {
    if (canUseDOM) {
      const pedidoTitle = document.querySelector(".vtex-pageHeader__title");
      const condition = /account#/.test(window?.location?.href);

      if (pedidoTitle && condition) {
        setTimeout(() => {
          fiscalNote(orderNumber);
          setStatusPrincipal();
          removeElements();
          setPayment();

          const tablesArea = document.querySelectorAll(
            ".vtex-my-orders-app-3-x-productTable"
          );

          const deliveryItensContainer = document.createElement("div");
          const deliveryItensTitle = document.createElement("h3");

          const tableItemsContainers = document.querySelectorAll(
            ".w-100.pv7.fl > div.flex.flex-column"
          );

          waitForElementVar(
            ".w-100.pv7.fl > div.flex.flex-column",
            () => {
              const deliveryAreaReference: any = tableItemsContainers?.[0];
              const deliveryAreaReferenceFather =
                deliveryAreaReference?.parentNode;

              deliveryItensTitle.innerHTML =
                !retirada && orderStatus == "invoiced"
                  ? "Itens Entregues"
                  : "Itens";

              deliveryItensContainer?.append(deliveryItensTitle);
              deliveryItensContainer.classList.add("my-account-itens-table");
              deliveryItensContainer.classList.add(
                "my-account-itens-delivered"
              );

              const notDeliveryItensContainer = document.createElement("div");
              const notDeliveryItensTitle = document.createElement("h3");
              notDeliveryItensTitle.innerHTML = "Itens Removidos";
              notDeliveryItensContainer?.append(notDeliveryItensTitle);
              notDeliveryItensContainer.classList.add("my-account-itens-table");
              notDeliveryItensContainer.classList.add("notDelivered");
              notDeliveryItensContainer.classList.add(
                "my-account-itens-delivered"
              );

              const tablesHeaders = document.querySelectorAll(
                ".my-account-itens-table.my-account-itens-delivered"
              );
              tablesHeaders?.forEach((element) => {
                element.remove();
              });

              if (tablesArea) {
                for (let i = 0; i < tablesArea.length; i++) {
                  if (i == 0 && deliveryAreaReferenceFather) {
                    deliveryAreaReferenceFather.insertBefore(
                      deliveryItensContainer,
                      deliveryAreaReference.nextSibling
                    );
                  }

                  if (i == 1 && tablesArea.length > 1) {
                    waitForElementVar(
                      ".vtex-my-orders-app-3-x-productTable",
                      () => {
                        const [, element] = document.querySelectorAll(
                          ".vtex-my-orders-app-3-x-productTable"
                        ) as any;

                        if (
                          element &&
                          !element.parentNode?.querySelector(".notDelivered")
                        ) {
                          element.parentNode?.insertBefore(
                            notDeliveryItensContainer,
                            element
                          );
                        }
                      },
                      true
                    );
                  }
                }
              }
            },
            true
          );
        }, 100);
      }
    }
  };

  const removeElements = () => {
    const historyArea = document.querySelectorAll(".mv7");
    const pacote = document.querySelectorAll(".mb0.lh-copy");
    const progressBar = document.querySelectorAll(
      ".myo-progress-bar.flex-column"
    );

    if (historyArea) {
      historyArea.forEach((element) => {
        element.remove();
      });
    }

    if (progressBar) {
      progressBar.forEach((element) => {
        element.innerHTML = " ";
      });
    }

    if (pacote) {
      pacote.forEach((element) => {
        element.remove();
      });
    }

    const allDeliveryDate = document.querySelectorAll(
      ".w-100.pv7.fl > .flex.flex-column > .flex.flex-column"
    );
    const deliveryBlueBar = document.querySelectorAll(
      ".w-100.pv7.fl > .flex.flex-column > .myo-margin-right"
    );

    allDeliveryDate?.forEach((element) => {
      element.remove();
    });

    deliveryBlueBar?.forEach((element) => {
      element.remove();
    });

    const moreInfoArea = document.querySelectorAll("ul.o-0 > li");
    if (moreInfoArea) {
      for (let index = 0; index < moreInfoArea.length; index++) {
        const element = moreInfoArea[index];

        if (index != 0) {
          element.remove();
        }
      }
    }
  };

  const fiscalNote = (orderNumber: string) => {
    const fiscalNoteArea = document.querySelectorAll(".no-underline.c-link");
    if (fiscalNoteArea) {
      fiscalNoteArea.forEach((element) => {
        if (element.innerHTML === "Ver nota fiscal") {
          const codeElementDIV = document.createElement("div");
          const codeElementP = document.createElement("p");

          if (orderNumber) {
            codeElementP.innerHTML = `Chave de acesso: ${orderNumber}`;
            element.classList.remove("none");
            codeElementDIV.append(codeElementP);
            codeElementDIV.classList.add("code-fiscal-number-my-account");

            const fiscalnotes = document.querySelectorAll(
              ".code-fiscal-number-my-account"
            );
            if (fiscalnotes.length) {
              fiscalnotes.forEach((element) => {
                element.remove();
              });
            }
            element.parentElement?.prepend(codeElementDIV);
          } else {
            element.classList.add("none");
          }
        }
      });
    }
  };

  const setStatusPrincipal = () => {
    const abaPrincipal = document.querySelector(".fl.w-40-ns");
    let mainProgress = document.createElement("div");

    var lastStatus: any = !hints.mobile
      ? document.querySelector(
          "tbody > tr.pa3.bt.bw1:first-child > td.pa3.w-20"
        )
      : document.querySelectorAll(
          "tbody > tr.pa3.bt.bw1:first-child > td.pa3"
        )[1];

    if (!lastStatus) {
      lastStatus = document.querySelector(".w-100.pv7.fl .flex-row-l div .mr3");
    } else {
      var deliveryDate = !hints.mobile
        ? document.querySelector(".flex-column > div > span.mr3 > span")
            ?.innerHTML
        : document.querySelector(
            "tbody > tr.pa3.bt.bw1:first-child > td.pa3.w-20 > .flex.flex-column"
          )?.textContent;
    }

    if (lastStatus) {
      mainProgress.classList.add("main-progress");
      mainProgress.append("Status: ");
      mainProgress.append(lastStatus.innerHTML);
      if (deliveryDate) {
        mainProgress.append(" | ");
        mainProgress.append(
          !hints.mobile
            ? deliveryDate
            : `${deliveryDate.slice(0, 10) + " às " + deliveryDate.slice(10)}`
        );
      }
      abaPrincipal?.append(mainProgress);
    }

    const status = document.querySelectorAll(".fl.w-40-ns .main-progress");
    for (let i = status.length - 1; i > 0; i--) {
      status[i - 1].remove();
    }
  };

  const setPayment = () => {
    let paymentValue: any =
      document.querySelector(".dib > .dib") ||
      document.querySelector(".dib > .db");
    let aditionalInformation: any = document.querySelector(".dib > section");
    const paymentMultiplier = document.querySelector(".dib > .db > .fw5");
    const paymentRealValue = document.querySelector(
      ".dib.fr.f6.fw5.c-on-base.w-50.tr"
    )?.innerHTML;

    if (paymentValue) {
      paymentValue.innerHTML = paymentRealValue;
      paymentValue.append(paymentMultiplier);
      paymentValue.style.display = "none";
    }

    if (aditionalInformation) {
      aditionalInformation.style.display = "none";
    }
  };

  useEffect(() => {
    waitForElementVar(".vtex-pageHeader__title", () => {
      runPageWorkAround(invoiceKey);
    });
  }, [invoiceKey]);

  return null;
};

export default AccountOrdersObserver;
