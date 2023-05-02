import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function DesExample() {
    const [plaintext, setPlaintext] = useState("");
    const [dplaintext, setdPlaintext] = useState("");
    const [encrypttext, setencrypttext] = useState("");
    const [dencrypttext, setdencrypttext] = useState("");
    const [substitution, setSubstitution] = useState("");
    const [showEn, setShowEn] = useState(false)
    const [showDc, setShowDc] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const encrypted = CryptoJS.DES.encrypt(plaintext, substitution).toString();
    setencrypttext(encrypted);
    setShowEn(true)
    setShowDc(false)
  };

  const handleDecryption = (event) => {
    event.preventDefault();
    const decrypted = CryptoJS.DES.decrypt(plaintext, substitution).toString(CryptoJS.enc.Utf8);
    setdPlaintext(decrypted);
    setShowDc(true)
    setShowEn(false)
  };

  return (
    <div>
    <h1>DES</h1>
    <form className="enc">
      <div id="container">
        <label htmlFor="plaintext" className="subheading">
          Enter text
        </label>
        <label>:</label>
        <input
          className="inputfield"
          type="text"
          id="plaintext"
          value={plaintext}
          onChange={(event) => setPlaintext(event.target.value)}
        />
      </div>
      <div id="container">
        <label htmlFor="key">Key</label>
        <label>:</label>
        <input
            type="text"
            id="substitution"
            className="inputfield"
            value={substitution}
            onChange={(event) => setSubstitution(event.target.value)}
          />
      </div>
      <div id="btn-div">
        <button type="submit" id="from-btn" onClick={handleSubmit}>Encrypt</button>
        <div className='space'></div>
        <button type="submit" id="from-btn" onClick={handleDecryption}>Decrypt</button>
        </div>
      </form>

      {showEn && <div id="output-text"><div>Encrypted message:</div>
      <div id="output-enc">{encrypttext}</div></div>}

      {showDc && <div id="output-text"><div>Decrypted message:</div><div id="output-enc">{dplaintext}</div></div>}
  </div>
);
}

export default DesExample;