import { Cascader } from 'antd';
import './App.css';
import CipherList from './Components/CipherList/cipher_list';
import MenuBar from './Components/Menubar/menu_bar';
import { useState } from 'react';
import Caesars from './Ciphers/Caesars';
import PlayfairCipher from './Ciphers/Playfair';
import Hillcipher from './Ciphers/Hill';
import Vigenerecipher from './Ciphers/Vigenere';
import Vernamcipher from './Ciphers/vernam';
import Rsa from './Ciphers/Rsa';
import DesExample from './Ciphers/Des';
import Diff from './Ciphers/Diff';
import Rail from './Ciphers/Rail';

function App() {
  const [showCiphers, setShowCiphers] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [showCaesars, setShowCaesars] = useState(false);
  const [showPlayfair, setShowPlayfair] = useState(false);
  const [showHill, setShowHill] = useState(false);
  const [showVigenere, setShowVigenere] = useState(false);
  const [showVernam, setShowVernam] = useState(false);
  const [showRsa, setShowRsa] = useState(false);
  const [showDes, setShowDes] = useState(false);
  const [showDiffie, setShowDiffie] = useState(false);
  const [showRail, setShowRail] = useState(false);

  function toggleCiphers(){
    setShowCiphers(!showCiphers);
  }

  function handleCaesars(){
    setShowMain(false)
    setShowCaesars(true)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handlePlayfair(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(true)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handleHill(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(true)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handleVigenere(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(true)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handleVernam(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(true)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handleRsa(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(true)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handleDes(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(true)
    setShowDiffie(false)
    setShowRail(false)
  }

  function handleDiffie(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(true)
    setShowRail(false)
  }

  function handleRail(){
    setShowMain(false)
    setShowCaesars(false)
    setShowPlayfair(false)
    setShowHill(false)
    setShowVigenere(false)
    setShowVernam(false)
    setShowRsa(false)
    setShowDes(false)
    setShowDiffie(false)
    setShowRail(true)
  }

  return (
    <div className="App">
      <div className='menu-bar'>
        <MenuBar showCipher={toggleCiphers}></MenuBar>
      </div>
      {
      showCiphers && 
      <div className='menu-items'>
        <CipherList caesars={handleCaesars} playfair={handlePlayfair} hill={handleHill} vigenere={handleVigenere} vernam={handleVernam} rsa={handleRsa} des={handleDes} diffie={handleDiffie} rail={handleRail}></CipherList>
        </div>
        }
      <div className='center-div'>
        {showMain && <div className='heading'>Welcome to Cipher Hub</div>}
        {showCaesars && <Caesars />}
        {showPlayfair && <PlayfairCipher />}
        {showHill && <Hillcipher />}
        {showVigenere && <Vigenerecipher />}
        {showVernam && <Vernamcipher />}
        {showRsa && <Rsa />}
        {showDes && <DesExample />}
        {showDiffie && <Diff />}
        {showRail && <Rail />}
      </div>
    </div>
  );
}

export default App;
