import type { FormEvent } from "react";
import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

interface IResponse {
  data: {
    DocumentId: string;
  };
}

const HelloWorld = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [approximateTime, setApproximateTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [locate, setLocate] = useState<string>("");
  const [reportedName, setReportedName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [unity, setUnity] = useState<string>("");
  const [complaint, setComplaint] = useState<string>("");
  const [file, setFile] = useState<File>();

  const showInputs = () => {
    setShow(!show);
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    const obj = {
      name,
      email,
      phone,
      approximateTime,
      date,
      locate,
      reportedName,
      subject,
      unity,
      complaint,
    };

    const response: IResponse = await axios.post(
      "/api/dataentities/OU/documents/",
      obj,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const id = response.data.DocumentId;
    const form = new FormData();

    form.append("file", file);

    await axios.post(
      `/api/dataentities/OU/documents/${id}/file/attachments`,
      form,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=---011000010111000001101001",
        },
      }
    );

    setSent(true);
  };

  return (
    <>
      {sent === false ? (
        <div className="container">
          <form onSubmit={sendForm} className="form-element">
            {show === true ? (
              <div className="conditional-inputs">
                <div className="name">
                  <span className="input-title">Nome</span>
                  <input
                    className="input-content"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="email">
                  <span className="input-title">E-mail</span>
                  <input
                    className="input-content"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="phone">
                  <span className="input-title">Telefone</span>
                  <input
                    className="input-content"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="identify-wrapper">
                <p className="identify-p">Você deseja se identificar?</p>
                <button className="identify-btn" onClick={() => showInputs()}>
                  Sim
                </button>
              </div>
            )}

            <div className="approximateTime">
              <span className="input-title">
                Horário Aproximado da Ocorrência
              </span>
              <input
                className="input-content"
                type="text"
                name="approximateTime"
                value={approximateTime}
                onChange={(e) => setApproximateTime(e.target.value)}
              />
            </div>

            <div className="date">
              <span className="input-title">Data da Ocorrência</span>
              <input
                className="input-content"
                type="text"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="locate">
              <span className="input-title">Local</span>
              <input
                className="input-content"
                type="text"
                name="locate"
                value={locate}
                onChange={(e) => setLocate(e.target.value)}
              />
            </div>

            <div className="reportedName">
              <span className="input-title">Nome Denunciado</span>
              <input
                className="input-content"
                type="text"
                name="reportedName"
                value={reportedName}
                onChange={(e) => {
                  setReportedName(e.target.value);
                }}
              />
            </div>

            <div className="subject">
              <span className="input-title">Assunto</span>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="FRAUDE, FURTO OU CORRUPÇÃO PÚBLICA">
                  FRAUDE, FURTO OU CORRUPÇÃO PÚBLICA
                </option>
                <option value="ASSÉDIO MORAL E/OU SEXUAL">
                  ASSÉDIO MORAL E/OU SEXUAL
                </option>
                <option value="CONFLITO DE INTERESSES">
                  CONFLITO DE INTERESSES
                </option>
                <option value="PROCESSOS INTERNOS">PROCESSOS INTERNOS</option>
                <option value="USO INDEVIDO DE INFORMAÇÕES PRIVILEGIADAS OU CONFIDENCIAIS">
                  USO INDEVIDO DE INFORMAÇÕES PRIVILEGIADAS OU CONFIDENCIAIS
                </option>
                <option value="DISCRIMINAÇÃO / PRECONCEITO">
                  DISCRIMINAÇÃO / PRECONCEITO
                </option>
                <option value="INFRAÇÕES RELACIONADAS A FORNECEDORES E/OU PRESTADORES DE SERVIÇO">
                  INFRAÇÕES RELACIONADAS A FORNECEDORES E/OU PRESTADORES DE
                  SERVIÇO
                </option>
                <option value="OUTROS">OUTROS</option>
              </select>
            </div>

            <div className="unity">
              <span className="input-title">Unidade de Negócio</span>
              <input
                className="input-content"
                type="text"
                name="unity"
                value={unity}
                onChange={(e) => setUnity(e.target.value)}
              />
            </div>

            <div className="complaint">
              <span className="input-title">Relato Denúncia/Reclamação</span>
              <textarea
                rows={3}
                cols={50}
                maxLength={500}
                className="complaint-content"
                name="complaint"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
              />
            </div>

            <div className="file">
              <label className="custom-file-upload">
                <input
                  className="input-content-file"
                  type="file"
                  name="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                Escolher Arquivo
              </label>
              {file ? (
                <>
                  <span className="filename">{file.name}</span>
                </>
              ) : null}
            </div>

            <button className="send-btn" type="submit">
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <div className="sent-form">
          <span className="sent-title">
            Formulário enviado.{" "}
            <p className="sent-content">Obrigado pelo contato!</p>
          </span>
        </div>
      )}
    </>
  );
};

export default HelloWorld;
