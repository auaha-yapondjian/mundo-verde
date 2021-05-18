import React, { useEffect, useState, useRef, useCallback } from "react";
import "./styles.css";

const WheyBalance: React.FC = () => {
  const [embedTimeoutId, setEmbedTimeoutId] = useState<any>();
  const embedRef: any = useRef(null);

  const getEmbedLink = useCallback(() => {
    return `https://docs.google.com/gview?embedded=true&url=https://www.mundoverde.vteximg.com.br/arquivos/2021.05.04_WheyBalance_Elixir_1080x1920px.pdf`;
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

export default WheyBalance;
