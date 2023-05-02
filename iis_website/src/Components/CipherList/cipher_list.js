import React from "react";
import '../CipherList/cipher_list.css'

function CipherList(props){

    return(
        <div className="list-div">
            <div className="clm-1" id="clm">
                <div className="c1" onClick={props.caesars}>Caesars Cipher</div>
                <div className="c2" onClick={props.playfair}>Playfair Cipher</div>
                <div className="c3" onClick={props.hill}>Hill Cipher</div>
                <div className="c4" onClick={props.vigenere}>Vigenere Cipher</div>
                <div className="c5" onClick={props.vernam}>Vernam Cipher</div>
            </div>
            <div className="clm-2" id="line"></div>
            <div className="clm-3" id="clm">
                <div className="c6" onClick={props.rsa}>RSA</div>
                <div className="c7" onClick={props.des}>DES</div>
                <div className="c8" onClick={props.diffie}>Diffie-hellman</div>
                <div className="c9" onClick={props.rail}>Rail Fence</div>
                <div className="c10" id="hide">-</div>
            </div>
        </div>
    )
}

export default CipherList

// Caesars Cipher
// Playfair Cipher
// Hill Cipher
// Vigenere Cipher
// Vernam Cipher
// RSA
// DES
// Diffie-hellman