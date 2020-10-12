import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
// import jsquery

class Visualizer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.onGetAllUsers();
    }    
    
    render() {
        const { users, onSelectUserEdit, onDeleteUser } = this.props;

        return (
            <div>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Nro Evento</th>
                            <th scope="col">Nombre del Propietario</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Placa</th>
                            <th scope="col">Eliminar</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.nombre}</td>
                                <td>{user.tipo}</td>
                                <td>{user.placa}</td>
                                <td><button type="button" class="btn btn-danger"onClick={() => onDeleteUser(user._id)}>Eliminar</button></td>
                                <td><Link to="/edit" type="button" class="btn btn-success" onClick={() => onSelectUserEdit(user._id)}>Editar</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

Visualizer.propTypes = {
    onGetAllUsers: PropTypes.func.isRequired,
    onSelectUserEdit: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        placa: PropTypes.string.isRequired
    }))
};

Visualizer.defaultProps = {
    users: []
};

export default Visualizer;

// obtain(fetch) {
//     fetch('http://localhost:3001/api/users/')
//         .then(res => res.json())
//         .then(data =>  {
//             this.setState({eventos: data});
//             console.log(JSON.stringify(this.state.eventos));
//         })
//         .catch(ex => console.error(ex));
// }