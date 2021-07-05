import React, { useEffect } from "react";

const FranchiseForm: React.FC = () => {
  const insertScripts = () => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");

    script.src = `https://mundoverde.solutto.com.br/jquery-1.8.1.min.js`;
    script.type = "text/javascript";
    script.async = true;

    script2.src = `https://mundoverde.solutto.com.br/js/jquery/jquery.validate.1.11.1.customizado.min.js`;
    script2.type = "text/javascript";
    script2.async = true;

    script3.src = `https://mundoverde.solutto.com.br/js/jquery/jquery.mask.min.js`;
    script3.type = "text/javascript";
    script3.async = true;

    script4.src = `https://mundoverde.vteximg.com.br/arquivos/vtex-mundoverde-franquia.js`;
    script4.type = "text/javascript";
    script4.async = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
  };

  useEffect(() => {
    window.onload = () => insertScripts();
    window.addEventListener("load", () => insertScripts());
  }, []);

  return (
    <div className="container">
      <form
        role="form"
        className="form-horizontal"
        action="https://mundoverde.solutto.com.br/investidores_form.aspx"
        method="POST"
        noValidate={false}
      >
        <div className="form-group">
          <label htmlFor="Nome" className="control-label col-sm-2">
            Nome Completo
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="Nome"
              name="Nome"
              className="form-control"
              data-rule-required="true"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="control-label col-sm-2">
            E-mail
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="Email"
              name="Email"
              className="form-control"
              data-rule-required="true"
              data-rule-email="True"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Telefone" className="control-label col-sm-2">
            Telefone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="Telefone"
              name="Telefone"
              className="form-control"
              data-rule-required="true"
              data-rule-email="True"
              maxLength={50}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Faixas_Capital" className="control-label col-sm-2">
            Faixas de Capital
          </label>
          <div className="col-sm-10">
            <select
              name="Faixas_Capital"
              id="Faixas_Capital"
              className="form-control"
            >
              <option value="">* Selecione *</option>
              <option value="67">R$ 200.000,00</option>
              <option value="68">R$ 300.000,00</option>
              <option value="69">R$ 400.000,00</option>
              <option value="70">R$ 500.000,00</option>
              <option value="71">R$ 600.000,00</option>
              <option value="72">R$ 700.000,00</option>
              <option value="73">R$ 800.000,00</option>
              <option value="74">R$ 900.000,00</option>
              <option value="75">R$ 1.000.000,00</option>
              <option value="76">R$ 1.500.000,00</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Estado" className="control-label col-sm-2">
            Estado
          </label>
          <div className="col-sm-10">
            <select name="Estado" id="Estado" className="form-control">
              <option value="">* Selecione *</option>
              <option value="AC">AC - Acre</option>
              <option value="AL">AL - Alagoas</option>
              <option value="AM">AM - Amazonas</option>
              <option value="AP">AP - Amapá</option>
              <option value="BA">BA - Bahia</option>
              <option value="CE">CE - Ceará</option>
              <option value="DF">DF - Distrito Federal</option>
              <option value="ES">ES - Espírito Santo</option>
              <option value="GO">GO - Goiás</option>
              <option value="MA">MA - Maranhão</option>
              <option value="MG">MG - Minas Gerais</option>
              <option value="MS">MS - Mato Grosso Do Sul</option>
              <option value="MT">MT - Mato Grosso</option>
              <option value="PA">PA - Pará</option>
              <option value="PB">PB - Paraíba</option>
              <option value="PE">PE - Pernambuco</option>
              <option value="PI">PI - Piaui</option>
              <option value="PR">PR - Paraná</option>
              <option value="RJ">RJ - Rio de Janeiro</option>
              <option value="RN">RN - Rio Grande Do Norte</option>
              <option value="RO">RO - Rondônia</option>
              <option value="RR">RR - Roraima</option>
              <option value="RS">RS - Rio Grande Do Sul</option>
              <option value="SC">SC - Santa Catarina</option>
              <option value="SE">SE - Sergipe</option>
              <option value="SP">SP - São Paulo</option>
              <option value="To">To - Tocantins</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Obs" className="control-label col-sm-2">
            Observações
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="Obs"
              name="Obs"
              className="form-control"
              maxLength={2000}
            />
          </div>
        </div>
        <div className="col-sm-offset-2 col-sm-10 section-button">
          <button id="btnEnviar" type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FranchiseForm;
