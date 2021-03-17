import React, { useState } from "react";
import axios from "axios";

const HelloWorld = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [approximateTime, setApproximateTime] = useState("");
  const [date, setDate] = useState("");
  const [locate, setLocate] = useState("");
  const [reportedName, setReportedName] = useState("");
  const [subject, setSubject] = useState("");
  const [unity, setUnity] = useState("");
  const [file, setFile] = useState(null);

  const showInputs = () => {
    setShow(!show);
  };

  const sendForm = async (e) => {
    e.preventDefault();

    console.log(file);

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
    };

    const response = await axios.post("/api/dataentities/OU/documents/", obj, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const id = await response.DocumentId;
    await axios.post(
      `/api/dataentities/OU/documents/${id}/file/attachments`,
      file,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=---011000010111000001101001",
        },
      }
    );
  };

  return (
    <div className="container">
      <form onSubmit={sendForm}>
        {show === true ? (
          <div className="conditional-inputs">
            <div className="name">
              <span>Nome</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="email">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="phone">
              <span>Telefone</span>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div>
            <p>Você deseja se identificar?</p>
            <button onClick={() => showInputs()}>Sim</button>
          </div>
        )}

        <div className="approximateTime">
          <span>Horário Aproximado da Ocorrência</span>
          <input
            type="text"
            name="approximateTime"
            value={approximateTime}
            onChange={(e) => setApproximateTime(e.target.value)}
          />
        </div>

        <div className="date">
          <span>Data da Ocorrência</span>
          <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="locate">
          <span>Local</span>
          <input
            type="text"
            name="locate"
            value={locate}
            onChange={(e) => setLocate(e.target.value)}
          />
        </div>

        <div className="reportedName">
          <span>Nome Denunciado</span>
          <input
            type="text"
            name="reportedName"
            value={reportedName}
            onChange={(e) => {
              setReportedName(e.target.value);
            }}
          />
        </div>

        <div className="subject">
          <span>Assunto</span>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="unity">
          <span>Unidade de Negócio</span>
          <input
            type="text"
            name="unity"
            value={unity}
            onChange={(e) => setUnity(e.target.value)}
          />
        </div>

        <div className="file">
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HelloWorld;
