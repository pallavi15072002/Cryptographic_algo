import React, { useState } from "react";
import "../Ciphers/common.css";

function Vernamcipher() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [dencrypttext, setdencrypttext] = useState("");
  const [substitution, setSubstitution] = useState("");
  const [showEn, setShowEn] = useState(false)
  const [showDc, setShowDc] = useState(false)

  // The Vernam cipher encryption function
function encryptVernam(plaintext, key) {
    // Remove spaces and convert to uppercase
    plaintext = plaintext.replace(/\s+/g, "").toUpperCase();
    key = key.replace(/\s+/g, "").toUpperCase();
  
    // Pad the key with extra characters if necessary
    let padding = plaintext.length - key.length;
    if (padding > 0) {
      key += getRandomString(padding);
    } else if (padding < 0) {
      plaintext += getRandomString(-padding);
    }
  
    // The encrypted message
    let ciphertext = "";
  
    // Loop through the plaintext and key, encrypting each character
    for (let i = 0; i < plaintext.length; i++) {
      let p = plaintext.charCodeAt(i) - 65;
      let k = key.charCodeAt(i) - 65;
      let c = (p + k) % 26;
      ciphertext += String.fromCharCode(c + 65);
    }
  
    return ciphertext;
  }
  
  // The Vernam cipher decryption function
  function decryptVernam(ciphertext, key) {
    // Remove spaces and convert to uppercase
    ciphertext = ciphertext.replace(/\s+/g, "").toUpperCase();
    key = key.replace(/\s+/g, "").toUpperCase();
  
    // Pad the key with extra characters if necessary
    let padding = ciphertext.length - key.length;
    if (padding > 0) {
      key += getRandomString(padding);
    } else if (padding < 0) {
      ciphertext += getRandomString(-padding);
    }
  
    // The decrypted message
    let plaintext = "";
  
    // Loop through the ciphertext and key, decrypting each character
    for (let i = 0; i < ciphertext.length; i++) {
      let c = ciphertext.charCodeAt(i) - 65;
      let k = key.charCodeAt(i) - 65;
      let p = (c - k + 26) % 26;
      plaintext += String.fromCharCode(p + 65);
    }
  
    return plaintext;
  }
  
  // Auxiliary function to generate a random string of a given length
  function getRandomString(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    return result;
  }

  function handleSubmit(event){
    event.preventDefault();
    setencrypttext(encryptVernam(plaintext, substitution))
    setShowEn(true)
    setShowDc(false)
  }

  function handleDecryption(event){
    event.preventDefault();
    setdPlaintext(decryptVernam(plaintext, substitution))
    setShowDc(true)
    setShowEn(false)
  }

  return (
    <div>
    <h1>Enter Cipher</h1>
    <form className="enc">
      <div id="container">
        <label htmlFor="plaintext" className="subheading">
          Plain text
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

export default Vernamcipher;
