import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Styles
import { CardComponent, CardAddress, CardStatus } from "./style";

type Shop = {
  aberta_ao_publico: boolean;
  atendimento: string;
  bairro: string;
  cidade: string;
  clube_mv: boolean;
  complemento: string | null;
  delivery: boolean;
  drivethru: boolean;
  endereco: string;
  estado: string;
  nome_loja: string;
  numero: string;
  telefone: string;
  telefone_2: string | null;
  whatsapp?: string | null;
};

type CardShopProps = {
  shop: Shop;
};

export default function CardShop({ shop }: CardShopProps) {
  return (
    <CardComponent>
      <img
        src="https://mundoverde.vtexassets.com/assets/vtex.file-manager-graphql/images/fd042353-ad48-48e2-ba15-4ab300704f8e___39e29fd86464a0f1ce7cac1293d25cae.png"
        alt="Mundo Verde"
        width="140"
      />
      <CardAddress>
        <h4>{shop?.nome_loja}</h4>
        <p>
          {`${shop?.endereco}, ${shop?.numero}${
            shop?.complemento ? `, ${shop.complemento}` : ""
          }, ${shop?.bairro} - ${shop?.cidade}/${shop?.estado}`}
        </p>
        {/* <p>Horário de Atendimento: {shop?.atendimento}</p> */}
        <p>
          {shop?.telefone &&
            `
          Tel:
            (${shop?.telefone?.substring(0, 2)})
             ${shop?.telefone?.substring(2, 6)} -
             ${shop?.telefone?.substring(6, shop?.telefone?.length)}
            `}
          {shop?.telefone_2 &&
            `
                / (${shop?.telefone_2?.substring(0, 2)})
                ${shop?.telefone_2?.substring(2, 6)} -
                ${shop?.telefone_2?.substring(6, shop?.telefone_2?.length)}
              `}
        </p>
      </CardAddress>

      {/* <CardStatus>
        {shop?.aberta_ao_publico && (
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#0E824C" />
            Aberto ao Público
          </p>
        )}
        {shop?.delivery && (
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#0E824C" />
            Delivery
          </p>
        )}
        {shop?.clube_mv && (
          <p>
            <FontAwesomeIcon icon={faCheckCircle} color="#0E824C" />
            Clube Mundo Verde
          </p>
        )}
        {shop?.whatsapp && (
          <a
            className="whatsapp"
            href={
              window.innerWidth < 768
                ? `https://api.whatsapp.com/send?phone=55${shop.whatsapp}`
                : `https://web.whatsapp.com/send?phone=55${shop.whatsapp}`
            }
            target="_blank"
            style={{ color: "#0e824c" }}
          >
            <FontAwesomeIcon icon={faWhatsapp} color="#0E824C" />
            {`
                (${shop?.whatsapp?.substring(0, 2)})
                ${shop?.whatsapp?.substring(
                  2,
                  shop?.whatsapp?.length === 11 ? 7 : 6
                )} -
                ${shop?.whatsapp?.substring(
                  shop?.whatsapp?.length === 11 ? 7 : 6,
                  shop?.whatsapp?.length
                )}
             `}
          </a>
        )}
        <a
          target="_blank"
          href={`https://www.google.com.br/maps/search/
          ${
            shop.endereco &&
            shop.endereco
              .toLowerCase()
              .replace(/(?:^|\s)\S/g, (e) => e.toUpperCase())
          }/
          ${
            shop.numero &&
            shop.numero
              .toLowerCase()
              .replace(/(?:^|\s)\S/g, (e) => e.toUpperCase())
          }/
          ${
            shop.bairro &&
            shop.bairro
              .toLowerCase()
              .replace(/(?:^|\s)\S/g, (e) => e.toUpperCase())
          }/
          ${
            shop.cidade &&
            shop.cidade
              .toLowerCase()
              .replace(/(?:^|\s)\S/g, (e) => e.toUpperCase())
          }/
          ${
            shop.estado &&
            shop.estado
              .toLowerCase()
              .replace(/(?:^|\s)\S/g, (e) => e.toUpperCase())
          }/
        `}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} color="#0E824C" />
          Ver no mapa
        </a>
      </CardStatus> */}
    </CardComponent>
  );
}
