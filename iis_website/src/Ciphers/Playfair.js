import React, { useState } from "react";

function PlayfairCipher() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [dencrypttext, setdencrypttext] = useState("");
  const [substitution, setSubstitution] = useState("");
  const [showEn, setShowEn] = useState(false)
  const [showDc, setShowDc] = useState(false)

  function generateKeyTable(key, ks, keyT) {
			let i, j, k = 0;
			let dicty = new Array(26).fill(0);
			for (i = 0; i < ks; i++) {
				let r = key[i].charCodeAt(0) - 97;
				if (key[i] !== 'j') {
					dicty[r] = 2;
				}
			}

			dicty['j'.charCodeAt(0) - 97] = 1;
			i = 0;
			j = 0;

			for (k = 0; k < ks; k++) {
				let r = key[k].charCodeAt(0) - 97;
				if (dicty[r] === 2) {
					dicty[r] -= 1;
					keyT[i][j] = key[k];
					j++;
					if (j === 5) {
						i++;
						j = 0;
					}
				}
			}

			for (k = 0; k < 26; k++) {
				if (dicty[k] === 0) {
					keyT[i][j] = String.fromCharCode(k + 97);
					j++;
					if (j === 5) {
						i++;
						j = 0;
					}
				}
			}
			return keyT;
		}

		function search(keyT, a, b, arr) {
			let i, j;
			if (a === 'j')
				a = 'i';
			else if (b === 'j')
				b = 'i';

			for (i = 0; i < 5; i++) {
				for (j = 0; j < 5; j++) {
					if (keyT[i][j] === a) {
						arr[0] = i;
						arr[1] = j;
					}
					else if (keyT[i][j] === b) {
						arr[2] = i;
						arr[3] = j;
					}
				}
			}
			return arr;
		}

		function prepare(str, ptrs) {
			if (ptrs % 2 !== 0) {
				str += 'z';
			}

			return [str, ptrs];
		}

		function encrypt(str, keyT, ps) {
			let i;
			let a = new Array(4).fill(0);
			let newstr = new Array(ps);

			for (i = 0; i < ps; i += 2) {
				let brr = search(keyT, str[i], str[i + 1], a);
				let k1 = brr[0];
				let k2 = brr[1];
				let k3 = brr[2];
				let k4 = brr[3];
				if (k1 === k3) {
					newstr[i] = keyT[k1][(k2 + 1) % 5];
					newstr[i + 1] = keyT[k1][(k4 + 1) % 5];
				}
				else if (k2 === k4) {
					newstr[i] = keyT[(k1 + 1) % 5][k2];
					newstr[i + 1] = keyT[(k3 + 1) % 5][k2];
				}
				else {
					newstr[i] = keyT[k1][k4];
					newstr[i + 1] = keyT[k3][k2];
				}
			}
			let res = "";

			for (let i = 0; i < newstr.length; i++) { res += newstr[i]; }
			return res;
		}

		function encryptByPlayfairCipher(str, key) {
			let ps, ks;
			let keyT = new Array(5);

			for (let i = 0; i < 5; i++) {
				keyT[i] = new Array(5);
			}
			str = str.trim();
			key = key.trim();
			str = str.toLowerCase();

			key = key.toLowerCase();
			ps = str.length;
			ks = key.length;
			[str, ps] = prepare(str, ps);

			let kt = generateKeyTable(key, ks, keyT);
			return encrypt(str, kt, ps);
		}

    function handleSubmit(event){
      event.preventDefault();
      var enc = encryptByPlayfairCipher(plaintext,substitution)
      setencrypttext(enc)
      setShowEn(true)
      setShowDc(false)
    }

    function handleDecryption(event) {
      event.preventDefault();
      var keyT = new Array(5);
      for (let i = 0; i < 5; i++) {
        keyT[i] = new Array(5);
      }
      var kt = generateKeyTable(substitution, substitution.length, keyT);
      var dec = decryptByPlayfairCipher(plaintext, kt);
      setdPlaintext(dec);
    }
    
    function decryptByPlayfairCipher(str, keyT) {
      let ps = str.length;
      let newstr = new Array(ps);
    
      for (let i = 0; i < ps; i += 2) {
        let a = new Array(4).fill(0);
        let brr = search(keyT, str[i], str[i + 1], a);
        let k1 = brr[0];
        let k2 = brr[1];
        let k3 = brr[2];
        let k4 = brr[3];
        if (k1 === k3) {
          newstr[i] = keyT[k1][(k2 + 4) % 5];
          newstr[i + 1] = keyT[k1][(k4 + 4) % 5];
        } else if (k2 === k4) {
          newstr[i] = keyT[(k1 + 4) % 5][k2];
          newstr[i + 1] = keyT[(k3 + 4) % 5][k2];
        } else {
          newstr[i] = keyT[k1][k4];
          newstr[i + 1] = keyT[k3][k2];
        }
      }
    
      // Remove padding 'z' character if present
      if (newstr[ps - 1] === 'z') {
        ps -= 1;
      }
    
      let res = "";
      for (let i = 0; i < ps; i++) {
        res += newstr[i];
      }
      setShowDc(true)
      setShowEn(false)
      return res;
    }

  

  return (
    <div>
    <h1>Playfair Cipher</h1>
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

export default PlayfairCipher;
