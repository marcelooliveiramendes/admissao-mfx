import React from 'react';
import './Certificados.scss'

import Logo from '../../components/Logo';
import addIcon from '../../icons/add.svg'

import { Link } from 'react-router-dom';
import Card from '../../components/Card';

// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


function Certificados() {
    // const navigate = useNavigate();
    // const cancelAction = () => {  
    //     navigate("/admissao");
    // }
    document.documentElement.scrollTop = 0;

    return (
        <motion.div id='fretadoContainer' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
    >   
            <Logo />
            <div className='containerCertificados'>
                <h2>Certificados</h2>
                <div className="content">
                    <div className="cadastroCertif">
                        <p>
                            Observações sobre os certificados que devem ser anexados.
                        </p>
                        <Link to='/certificados-cadastro' className='btnCadastrarNovoDep'>
                            <button><img src={addIcon} alt="" /> Adicionar</button>
                        </Link>    

                    </div>
                    

                    <div className="certificados">
                        <Card />
                    </div>
                </div>
            </div>
        </motion.div>

    );
}

export default Certificados;