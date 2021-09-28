import React from "react"
import "./styles.css"
import Accordion from "./Accordion"

function Collapsible() {
  return (
    <div className="Collapsible">
      <Accordion
        title="Investimentos"
        content="<p>É importante obter informações detalhadas quanto ao capital de giro e investimento mensal necessário até o ponto de equilíbrio entre receitas e despesas do negócio. Esse tempo de maturação varia de acordo com a localização do empreendimento e com as características particulares. É essencial que o candidato tenha reserva de capital suficiente para cobrir suas despesas pessoais nos primeiros meses do empreendimento.</p>
        <h3>Taxa de Franquia:</h3>
        <p>(R$ 65.000,00) Remunera o franqueador pela concessão do direito de uso da marca.</p>
        <h3>Taxa de Royalties:</h3>
        <p>(5%) Percentual fixo aplicado sobre o faturamento bruto mensal da loja franqueada.</p>
        <h3>Fundo de Marketing:</h3>
        <p>(1,5%) Percentual mensal aplicado sobre o faturamento bruto mensal da loja. Tem como finalidade constituir um fundo cooperado para ser aplicado na própria divulgação da marca.</p>
        "
      />
      <Accordion
        title="Taxas"
        content="
        <p>É importante obter informações detalhadas quanto ao capital de giro e investimento mensal necessário até o ponto de equilíbrio entre receitas e despesas do negócio. Esse tempo de maturação varia de acordo com a localização do empreendimento e com as características particulares. É essencial que o candidato tenha reserva de capital suficiente para cobrir suas despesas pessoais nos primeiros meses do empreendimento.</p>
        <h3>Taxa de Franquia:</h3>
        <p>(R$ 65.000,00) Remunera o franqueador pela concessão do direito de uso da marca.</p>
        <h3>Taxa de Royalties:</h3>
        <p>(5%) Percentual fixo aplicado sobre o faturamento bruto mensal da loja franqueada.</p>
        <h3>Fundo de Marketing:</h3>
        <p>(1,5%) Percentual mensal aplicado sobre o faturamento bruto mensal da loja. Tem como finalidade constituir um fundo cooperado para ser aplicado na própria divulgação da marca.</p>
        "
      />
    </div>
  );
}

export default Collapsible