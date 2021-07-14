import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: any;
  }
}

interface IDataLayer {
  event: string;
  transactionDate: string;
  transactionId: string;
  visitorAddressPostalCode: string;
  transactionPaymentType: Array<ITransactionPaymentType>;
  transactionShipping: number;
  transactionLatestShippingEstimate: Date;
  transactionTotal: number;
  transactionProducts: Array<IProducts>;
  visitorContactInfo: string[];
}

interface ITransactionPaymentType {
  installments: number;
  paymentSystemName:
    | "Boleto Bancário"
    | "Pix"
    | "Cartão de Crédito"
    | "Cartão de crédito"
    | "Mastercard"
    | "Visa";
}

interface IProducts {
  sellingPrice: number;
  quantity: number;
  skuName: string;
  sku: string;
  ean: string;
}

const EBit: React.FC = () => {
  const [data, setData] = useState<Array<IDataLayer>>([]);

  const insertScript = () => {
    const script = document.createElement("script");
    script.src = `https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?112670&lightbox=true`;
    script.id = "getSelo";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);
  };

  useEffect(() => {
    const getDataLayer = () => {
      if (window) {
        window.dataLayer = window.dataLayer || [];
        setData(window.dataLayer);

        if (data.length > 0) {
          insertScript();
        }
      }
    };

    getDataLayer();
  }, [data]);

  const handlePlatform = () => {
    return window.innerWidth <= 768 ? 1 : 0;
  };

  const handleSubtractDate = (date: Date) => {
    const today = new Date().getDate();
    const data = new Date(date).getDate();
    const total = data - today;
    return total;
  };

  const handleProductValue = (products: Array<IProducts>) => {
    const total = products.map((item) => {
      if (item.sellingPrice) {
        return item.sellingPrice;
      }
    });
    const joined = total.join("|");
    return joined;
  };

  const handleProductQuantity = (products: Array<IProducts>) => {
    const quantity = products.map((item) => {
      if (item.quantity) {
        return item.quantity;
      }
    });
    const joined = quantity.join("|");
    return joined;
  };

  const handleProductName = (products: Array<IProducts>) => {
    const name = products.map((item) => {
      if (item.skuName) {
        return item.skuName;
      }
    });
    const joined = name.join("|");
    return joined;
  };

  const handlePaymentType = (products: Array<ITransactionPaymentType>) => {
    const paymentType = products.map((item) => {
      if (item.paymentSystemName === "Boleto Bancário") {
        return "08";
      } else if (
        item.paymentSystemName === "Cartão de Crédito" ||
        item.paymentSystemName === "Cartão de crédito" ||
        item.paymentSystemName === "Mastercard" ||
        item.paymentSystemName === "Visa"
      ) {
        return "05";
      } else if (item.paymentSystemName === "Pix") {
        return "90";
      } else {
        return "14";
      }
    });
    return paymentType;
  };

  const handleProductSkuId = (products: Array<IProducts>) => {
    const skuId = products.map((item) => {
      if (item.sku) {
        return item.sku;
      }
    });
    const joined = skuId.join("|");
    return joined;
  };

  const handleProductEan = (products: Array<IProducts>) => {
    const ean = products.map((item) => {
      if (item.ean) {
        return item.ean;
      }
    });
    const joined = ean.join("|");
    return joined;
  };

  return (
    <>
      {data.length > 0 &&
        data.map((item: IDataLayer) => {
          if (item.event === "orderPlaced") {
            return (
              <>
                <param
                  key={item.transactionId}
                  id="ebitParam"
                  value={`email=${
                    item.visitorContactInfo[0]
                  }&storeId=112670&transactionId=${
                    item.transactionId
                  }&platform=${handlePlatform()}&gender=N&zipCode=${
                    item.visitorAddressPostalCode
                  }&parcels=${
                    item.transactionPaymentType[0].installments
                  }&deliveryTax=${
                    item.transactionShipping
                  }&deliveryTime=${handleSubtractDate(
                    item.transactionLatestShippingEstimate
                  )}&totalSpent=${
                    item.transactionTotal
                  }&value=${handleProductValue(
                    item.transactionProducts
                  )}&quantity=${handleProductQuantity(
                    item.transactionProducts
                  )}&productName=${handleProductName(
                    item.transactionProducts
                  )}&paymentType=${handlePaymentType(
                    item.transactionPaymentType
                  )}&sku=${handleProductSkuId(
                    item.transactionProducts
                  )}&productCondition=0&deliveryType=2&mktSaleId=1&ean=${handleProductEan(
                    item.transactionProducts
                  )}&cardFlag=7&invoiceEmissor=19`}
                />
                <a
                  key={item.transactionDate}
                  id="bannerEbit"
                  href="http://www.ebit.com.br/112670"
                  style={{
                    display: "block",
                    margin: "20px auto",
                    maxWidth: "468px",
                    width: "100%",
                  }}
                  target="_blank"
                ></a>
              </>
            );
          }
        })}
    </>
  );
};

export default EBit;
