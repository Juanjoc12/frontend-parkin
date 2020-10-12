import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
// import jsquery

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: props.userInfo.nombre,
            tipo: props.userInfo.tipo,
            placa: props.userInfo.placa
        };;

        console.log(this.state, 'xd');
    }

    onKeyPress = field => {
        return evt => {
            const val = evt.target.value;
            const newState = { ...this.state }
            newState[field] = val;
            this.setState(newState);
        }
    }

    handleOnSubmit = () => {
        const { nombre, tipo, placa } = this.state;
        this.props.onSubmit({ nombre, tipo, placa });
    }

    render() {
        const { submitable } = this.props;

        const { nombre, tipo, placa } = this.state;
        
        return (
            <div>
                <div className="form-group row">
                    <label for="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.onKeyPress('nombre')} value={nombre} id="inputNombre" placeholder="Nombre" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputTipo" className="col-sm-2 col-form-label">Tipo</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.onKeyPress('tipo')} value={tipo} id="inputTipo" placeholder="Tipo" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPlaca" className="col-sm-2 col-form-label">Placa</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.onKeyPress('placa')} value={placa} id="inputPlaca" placeholder="Placa" />
                    </div>
                </div>
                    <div className="form-group row">
                    <div className="col-sm-10">
                        {submitable && (
                            <Link to="/" type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Actualizar</Link>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    userInfo: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        placa: PropTypes.string.isRequired
    }),
    onSubmit: PropTypes.func.isRequired,
    submitable: PropTypes.bool
};

Form.defaultProps = {
    userInfo: {},
    submitable: true
};

export default Form;