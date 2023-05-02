import React, { useState } from 'react';
import '../Ciphers/common.css'

function Rail() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [key, setKey] = useState("");
  const [showEn, setShowEn] = useState(false)
  const [showDc, setShowDc] = useState(false)

  // Function to encrypt the plaintext using the substitution cipher
  function encryptRailFence(text, key) {
    let rail = new Array(key).fill().map(() => new Array(text.length).fill('\n'));
    let dir_down = false;
    let row = 0, col = 0;
    
    for (let i = 0; i < text.length; i++) {
        if (row === 0 || row === key - 1) dir_down = !dir_down;
        rail[row][col++] = text[i];
        dir_down ? row++ : row--;
    }
    
    let result = '';
    for (let i = 0; i < key; i++)
        for (let j = 0; j < text.length; j++)
        if (rail[i][j] !== '\n') result += rail[i][j];
    
    return result;
    }

    function decryptRailFence(cipher, key) {
        let rail = new Array(key).fill().map(() => new Array(cipher.length).fill('\n'));
        
        let dir_down = false;
        let row = 0 
        let col = 0;
        
        for (let i = 0; i < cipher.length; i++) {
            if (row === 0) dir_down = true;
            if (row === key - 1) dir_down = false;
    
            rail[row][col++] = '*';
            dir_down ? row++ : row--;
        }
    
        let index = 0;
        for (let i = 0; i < key; i++)
            for (let j = 0; j < cipher.length; j++)
            if (rail[i][j] === '*' && index < cipher.length) rail[i][j] = cipher[index++];
        let result = '';
        row = 0
        col = 0;
        for (let i = 0; i < cipher.length; i++) {
            if (row === 0) dir_down = true;
            if (row === key - 1) dir_down = false;
        
            if (rail[row][col] !== '*') result += rail[row][col++];
            dir_down ? row++ : row--;
        }
        
        return result;
        }

  // Handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    let encrypttext = encryptRailFence(plaintext, key);
    setencrypttext(encrypttext);
    setShowEn(true)
    setShowDc(false)
  }

  // Handle the decryption form submission
  function handleDecryption(event) {
    event.preventDefault();
    let dplaintext = decryptRailFence(plaintext, key);
    setdPlaintext(dplaintext);
    setShowDc(true)
    setShowEn(false)
  }

  return (
    <div>
      <h1>Rail Fence Cipher</h1>
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
            type="number"
            id="key"
            value={key}
            onChange={(event) => setKey(parseInt(event.target.value))}
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
export default Rail;
