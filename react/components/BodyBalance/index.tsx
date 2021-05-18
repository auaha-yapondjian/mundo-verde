import React, { useEffect, useState, useRef, useCallback } from "react";
import "./styles.css";

const BodyBalance: React.FC = () => {
  const [embedTimeoutId, setEmbedTimeoutId] = useState<any>();
  const embedRef: any = useRef(null);

  const getEmbedLink = useCallback(() => {
    return `https://docs.google.com/gview?embedded=true&url=https://mundoverde.vteximg.com.br/arquivos/2021.04.29_BodyBalance_Elixir_1080x1920px.pdf`;
  }, []);

  const updateEmbedSrc = useCallback(() => {
    if (embedRef.current) {
      embedRef!.current!.src = getEmbedLink();
    }
  }, [getEmbedLink]);

  useEffect(() => {
    const intervalId = setInterval(updateEmbedSrc, 1000 * 3);
    setEmbedTimeoutId(intervalId);
  }, [updateEmbedSrc]);

  function embedLoaded() {
    clearInterval(embedTimeoutId);
  }

  return (
    <div className="container">
      <embed
        onLoad={embedLoaded}
        onError={updateEmbedSrc}
        className="embeded"
        type="text/html"
        ref={embedRef}
        src={getEmbedLink()}
      ></embed>
    </div>
  );
};

export default BodyBalance;
