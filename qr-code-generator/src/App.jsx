import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleQR = function (evnt) {
    evnt.preventDefault();
    setData(evnt.target[0].value);
    evnt.target[0].value = "";
  };
  return (
    <div className="app">
      <QR data={data} />
      <InputForm handleQR={handleQR} />
    </div>
  );
}

function QR({ data }) {
  return (
    <div className="qr-box">
      {data ? (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=250x250`}
          alt="qr code for your text"
        />
      ) : (
        <p>Your QR goes here</p>
      )}
    </div>
  );
}

function InputForm({ handleQR }) {
  return (
    <div>
      <form className="input-form" onSubmit={handleQR}>
        <input type="text" placeholder="text or link" />
        <button type="submit">Get QR</button>
      </form>
    </div>
  );
}

export default App;
