import React, { useState } from "react";
import "../Ciphers/common.css";

function Diff() {
  const [p, setp] = useState("");
  const [g, setg] = useState("");
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [show, setShow] = useState(false)

  function power(a, b, p) {
    if (b === 1) return a;
    else return Math.pow(a, b) % p;
  }
  
  var x, y, ka, kb;
  x = power(g, a, p);
  y = power(g, b, p);
  ka = power(y, a, p);
  kb = power(x, b, p);

  function handleSubmit(event){
    event.preventDefault();
    power(a,b,p)
    setShow(true)
  }

  return (
    <div>
    <h1>Diff-hellman</h1>
    <form onSubmit={handleSubmit} className="enc">
      <div id="container">
        <label htmlFor="p" className="subheading">
        Value of P
        </label>
        <label>:</label>
        <input
          className="inputfield"
          type="text"
          id="p"
          value={p}
          onChange={(event) => setp(event.target.value)}
        />
      </div>
      <div id="container">
        <label htmlFor="g">Value of G:</label>
        <label>:</label>
        <input
            type="text"
            id="g"
            className="inputfield"
            value={g}
            onChange={(event) => setg(event.target.value)}
          />
      </div>
      <div id="container">
        <label htmlFor="a">Private key a for Alice</label>
        <label>:</label>
        <input
          type="text"
          id="a"
          value={a}
          onChange={(event) => seta(event.target.value)}
        />
      </div>
      <div id="container">
        <label htmlFor="b">Private key b for bob</label>
        <label>:</label>
        <input
          type="text"
          id="b"
          value={b}
          onChange={(event) => setb(event.target.value)}
        />
      </div>
      <div id="btn-div">
      <button type="submit" id="from-btn">Enter</button>
      </div>
    </form>
    {show && <>
        <div id="output-text"><div>Secret key is:</div><div id="output-enc">{ka}</div></div>
    </>}
    
  </div>
);
}

export default Diff;
