import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import ReactLoading from "react-loading";

// Styles
import {
  ShopContainer,
  StyledSelect,
  ContainerSelects,
  LoaderContainer,
} from "./styles";
// Components
import CardShop from "./CardShop/index";

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
  whatsapp: string | null;
};

type SelectProps = { value: string; label: string };

type FilterShops = (
  shops: Shop[],
  keyShop: "cidade" | "estado" | "nome_loja",
  filterActive: string
) => Shop[];

const NossasLojas: React.FC = () => {
  const observer = useRef(null);

  const [loading, setLoading] = useState<boolean>(true);

  const [shops, setShops] = useState<Shop[]>([]);
  const [shopsIsActive, setShopsIsActive] = useState<Shop[]>([]);
  const [shopsInWindow, setShopsInWindow] = useState<Shop[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [filterCityActive, setFilterCityActive] = useState<SelectProps>({
    value: "",
    label: "",
  });
  const [filterStateActive, setFilterStateActive] = useState<SelectProps>({
    value: "",
    label: "",
  });
  const [filterUnityActive, setFilterUnityActive] = useState<SelectProps>({
    value: "",
    label: "",
  });

  const allStates = Array.from(new Set(shops.map((item) => item.estado)));

  const allCities = Array.from(new Set(shops.map((item) => item.cidade)));
  const citiesFilter = shopsIsActive.map((item) => item.cidade);

  const allUnity = Array.from(new Set(shops.map((item) => item.nome_loja)));
  const unityFilter = shopsIsActive.map((item) => item.nome_loja);

  const citiesOfState =
    filterStateActive.value === ""
      ? allCities.sort()
      : Array.from(new Set(citiesFilter)).sort();

  const unityOfCities =
    filterCityActive.value == "" && filterStateActive.value === ""
      ? allUnity.sort()
      : Array.from(new Set(unityFilter)).sort();

  useEffect(() => {
    async function getShops() {
      const { data } = await axios.get(
        "/api/dataentities/LO/search?_fields=nome_loja,endereco,numero,complemento,bairro,cidade,estado,atendimento,telefone,telefone_2,whatsapp,aberta_ao_publico,delivery,drivethru,clube_mv",
        {
          headers: {
            "rest-range": "resources=0-500",
          },
        }
      );

      setShops(data);
      setShopsIsActive(data);
      setShopsInWindow(data.slice(0, 12));
      setLoading(false);
    }
    getShops();
  }, []);

  useEffect(() => {
    function filterShops() {
      const newShops = [...shops];

      const filterShops: FilterShops = (shops, keyShop, filterActive) => {
        if (filterActive !== "") {
          return shops.filter((shop) => shop[keyShop] === filterActive);
        } else {
          return shops;
        }
      };

      const filterState = filterShops(
        newShops,
        "estado",
        filterStateActive.value
      );
      const filterCity = filterShops(
        filterState,
        "cidade",
        filterCityActive.value
      );
      const filterUnity = filterShops(
        filterCity,
        "nome_loja",
        filterUnityActive.value
      );

      setShopsIsActive(filterUnity);
      setShopsInWindow(filterUnity.slice(0, 12));
    }
    filterShops();
  }, [filterCityActive, filterStateActive, filterUnityActive]);

  useEffect(() => {
    const newShopsInWindow = shopsIsActive.slice(
      shopsInWindow.length,
      shopsInWindow.length + 10
    );
    setShopsInWindow((currentShops) => [...currentShops, ...newShopsInWindow]);
  }, [currentPage]);

  function clearAllFilters() {
    setFilterCityActive({ label: "", value: "" });
    setFilterStateActive({ label: "", value: "" });
    setFilterUnityActive({ label: "", value: "" });
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1);
      }
    });
    intersectionObserver.observe(observer.current);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div>
      {loading ? (
        <LoaderContainer>
          <ReactLoading type="bubbles" color="#0E824C" />
        </LoaderContainer>
      ) : (
        <>
          {shops.length > 0 && (
            <ContainerSelects>
              <StyledSelect
                classNamePrefix="Select"
                placeholder="Selecione estado"
                name="state"
                value={
                  filterStateActive.value === "" ? null : filterStateActive
                }
                onChange={(e: SelectProps) => {
                  e ? setFilterStateActive(e) : clearAllFilters();
                }}
                isClearable
                options={allStates?.map((state) => ({
                  value: state,
                  label: state,
                }))}
              />
              <StyledSelect
                name="city"
                classNamePrefix="Select"
                isClearable
                placeholder="Selecione cidade"
                value={filterCityActive.value === "" ? null : filterCityActive}
                onChange={(e: SelectProps) => {
                  e ? setFilterCityActive(e) : clearAllFilters();
                }}
                options={citiesOfState?.map((city) => ({
                  value: city,
                  label: city,
                }))}
              />
              <StyledSelect
                name="unity"
                classNamePrefix="Select"
                placeholder="Selecione unidade"
                value={
                  filterUnityActive.value === "" ? null : filterUnityActive
                }
                onChange={(e: SelectProps) =>
                  e ? setFilterUnityActive(e) : clearAllFilters()
                }
                isClearable
                options={unityOfCities?.map((unity) => ({
                  value: unity,
                  label: unity,
                }))}
              />
            </ContainerSelects>
          )}
          <ShopContainer>
            {shopsInWindow.map((shop, index) => (
              <CardShop key={index} shop={shop} />
            ))}
          </ShopContainer>
        </>
      )}
      <pre ref={observer}></pre>
    </div>
  );
};

export default NossasLojas;
