import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            tipo: "",
            placa: ""
        };;
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
        return (
            <div>
                <div className="form-group row">
                    <label for="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.onKeyPress('nombre')} value={this.state.Nombre} id="inputNombre" placeholder="Nombre" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputTipo" className="col-sm-2 col-form-label">Tipo</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.onKeyPress('tipo')} value={this.state.Tipo} id="inputTipo" placeholder="Tipo" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPlaca" className="col-sm-2 col-form-label">Placa</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.onKeyPress('placa')} value={this.state.Placa} id="inputPlaca" placeholder="Placa" />
                    </div>
                </div>
                    <div className="form-group row">
                    <div className="col-sm-10">
                        <Link to="/" type="submit" className="btn btn-primary" onClick={this.handleOnSubmit}>Crear</Link>
                    </div>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
};

export default Form;