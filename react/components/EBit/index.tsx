import React, { useEffect } from "react";

const EBit: React.FC = () => {
  useEffect(() => {
    const insertScript = async () => {
      const banner = document.getElementById("bannerEbit");
      if (banner) {
        if (window) {
          const string = window.location.href;
          const url = new URL(string);
          const transactionId = `${url.searchParams.get("og")}-01`;

          const param = document.createElement("param");
          param.id = "ebitParam";
          param.value = `&storeId=112670&transactionId=${transactionId}`;

          const script = document.createElement("script");
          script.src = `https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?112670&lightbox=true`;
          script.id = "getSelo";
          script.type = "text/javascript";
          script.async = true;

          document.body.appendChild(param);
          document.body.appendChild(script);
        }
      }
    };

    insertScript();
  }, []);

  return (
    <>
      <a
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
};

export default EBit;
