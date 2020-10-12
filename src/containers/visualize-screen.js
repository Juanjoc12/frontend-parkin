import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VisualizeScreen from '../screens/visualize-screen';
import { onGetUsers, onSelectUserEdit, deleteUser } from '../redux/actions';


const VisualizeScreenContainer = ({
    onGetAllUsers,
    onSelectUserEdit,
    users,
    onDeleteUser
}) => <VisualizeScreen 
    onGetAllUsers={onGetAllUsers}
    onSelectUserEdit={onSelectUserEdit}
    users={users}
    onDeleteUser={onDeleteUser}
/>


VisualizeScreenContainer.propTypes = {
    onGetAllUsers: PropTypes.func.isRequired,
    onSelectUserEdit: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        placa: PropTypes.string.isRequired
    }))
};

const mapStateToProps = (state) => ({
    users: state.users,
    selectedUser: state.selectedUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onGetAllUsers: onGetUsers,
    onSelectUserEdit,
    onDeleteUser: deleteUser
}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(VisualizeScreenContainer);