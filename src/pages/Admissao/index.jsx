import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import Switcher from '../../components/Switcher';
// import dadosPessoaisIcon from '../../icons/dadosPessoaisIcon.svg'
// import fotoIcon from '../../icons/fotoIcon.svg'
// import rgIcon from '../../icons/rgIcon.svg'
import Button from '@mui/material/Button';
import './Admissao.scss'
import getLocalUserData from '../../functions/getLocalUserData.js'
import { motion } from "framer-motion"

// import { Container } from './styles';

function Admissao() {
    const [percentual, setPercentual] = useState(0)

    useEffect(() => {
        setPercentual(getLocalUserData())
    
    }, [])
    

  return (
    <motion.div id='fretadoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
    >   
        <Logo />
        <div className='container'>
            <h2>Admissão Padrão</h2>
            <p>Precisamos de algumas informações sobre você. Para isso, tenha em mãos os seus documentos e de seu dependentes.</p>
            <br />
            <Link to='/dados-pessoais'>
                <Switcher icon={''} name={'Dados Pessoais'} progress={percentual[0]} />
            </Link>
            <Link to='/foto'>
                <Switcher icon={''} name={'Foto'} progress={20} />
            </Link>
            <Link to='/rg'>
                <Switcher icon={''} name={'RG'} progress={20} />
            </Link>
            <Link to='/titulo-eleitor'>
                <Switcher icon={''} name={'Título de Eleitor'} progress={20} />
            </Link>
            <Link to='/certidao-casamento'>
                <Switcher icon={''} name={'Comprovante de Nascimento ou Casamento'} progress={20} />
            </Link>
            <Link to='/carteira-trabalho'>
                <Switcher icon={''} name={'Carteira de Trabalho'} progress={20} />
            </Link>
            <Link to='/cnh'>
                <Switcher icon={''} name={'CNH'} progress={20} />
            </Link>
            <Link to='/reservista'>
                <Switcher icon={''} name={'Certificado de Reservista'} progress={20} />
            </Link>
            <Link to='/comprovante-residencia'>
                <Switcher icon={''} name={'Dados do Endereço'} progress={20} />
            </Link>
            <Link to='/dependentes'>
                <Switcher icon={''} name={'Dependentes'} progress={20} />
            </Link>

            <footer>
                <Link to='/' className={'btnVoltar'}>
                    <Button variant="contained" size="large" >
                        Voltar
                    </Button>

                </Link>
            </footer>
        </div>
    </motion.div>
  );
}

export default Admissao;