import React from 'react';
import Logo from '../../components/Logo';
import './Home.scss'
import Switcher from '../../components/Switcher';
import admissaoIcon from '../../icons/admissaoIcon.svg'
import certificadoIcon from '../../icons/certificadoIcon.svg'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

function Home() {
    document.documentElement.scrollTop = 0;

    return(
        <motion.div id='fretadoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
        >   
            <Logo />
            <div className='container'>
                <h2>Menu</h2>
                <Link to='/admissao'>
                    <Switcher icon={admissaoIcon} name={'Admissão Padrão'} progress={0} />
                </Link>
                <Link to='/certificados'>
                    <Switcher icon={certificadoIcon} name={'Certificados'} progress={0} />
                </Link>
               
            </div>
            <div onClick={() => window.location.href = '/confirmacao'} id="btnVoltarHome">
                <button>Enviar</button>
            </div>
        </motion.div>
    );
}

export default Home;