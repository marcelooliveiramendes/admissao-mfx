import React, { useState } from 'react';
import Logo from '../../components/Logo';
import './TituloEleitoral.scss';
import titulo from '../../img/titulo.png'
import BtnActions from '../../components/BtnActions';
import CameraFunctions from '../../components/CameraFunctions';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


import TextField from '@mui/material/TextField';

function TituloEleitor() {
  const [tituloLoaded, setTituloLoaded] = useState(false)

  document.documentElement.scrollTop = 0;

  const navigate = useNavigate();
  const cancelAction = () => {  
    navigate("/admissao");
  }
  
  const handleCapture = (e) => {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        const readerTarget = e.target;
          document.querySelector('#tituloImg').src = readerTarget.result;
          document.querySelector('#tituloImg').style.display = 'block'
          setTituloLoaded(true)
        
      })
      reader.readAsDataURL(file)
    } else {
      setTituloLoaded(false)
    }
  }

  return (
    <motion.div id='fretadoContainer' 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ ease: "easeOut", duration: 1 }}
    >   
        <Logo />
        <div className='containerFoto'>
            <h2>Título de Eleitor</h2>
            <div className="content">
                <form action="">
                  <TextField type="tel" id="txt_tituloEleitor" label="Nº título de eleitor" variant="outlined" inputmode="numeric" pattern="[0-9]*"/>
                </form>
                {!tituloLoaded && <img src={titulo} alt=""/>}
                <div className='imgPreview'>
                  <img src={titulo} alt="" id="tituloImg" style={{display: 'none'}}/>
                </div>
                <br />
                {!tituloLoaded &&(
                  <>
                    <h3>Envie seu título de eleitor</h3>
                    <p>Tire uma foto de seu documento aberto.</p>
                  </>
                )}
                <br />
                <CameraFunctions funcao={handleCapture}/>
            </div>            
        </div>
        <footer>
          <BtnActions cancelFuncion={cancelAction} saveFunction={cancelAction} /> 
        </footer>
    </motion.div>
  );
}

export default TituloEleitor;