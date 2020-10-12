import React from 'react';
import PropTypes from 'prop-types';
import '../css/principal.css';
import carro from '../imagenes/parqueaderos.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const MainScreen = ({ children }) => ( 
    <div className="contenedor">
        <section className="main">
            {children}
        </section> 
        <aside>
            <div className="imagen">
                <img src={carro} alt="logo" />
            </div> 
            <div>
                <Link className="btn btn-secondary medium verde border-radius" to="/create" > 
                   Crear 
                </Link>
                <Link className="btn btn-secondary medium verde border-radius" to="/"> 
                    Visualizar
                </Link>   
            </div> 
        </aside> 
    </div>
);

MainScreen.propTypes = {
}

export default MainScreen;