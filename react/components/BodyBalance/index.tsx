import React from "react";
import "./styles.css";

const BodyBalance: React.FC = () => {
  return (
    <div className="container">
      <embed
        className="embeded"
        type="text/html"
        src="https://docs.google.com/gview?embedded=true&url=https://mundoverde.vteximg.com.br/arquivos/2021.04.29_BodyBalance_Elixir_1080x1920px.pdf"
      ></embed>
    </div>
  );
};

export default BodyBalance;
