import React from 'react';
import PropTypes from 'prop-types';
import EditForm from './edit'
import Layout from '../../components/layout';

const EditScreen = ({
    onEditUser,
    selectedUser,
    users
}) => {
    if (!selectedUser) {
        alert("Usted no ha seleccionado ningún usuario para editar")
    }
    const selectedUserInfo = users.find(user => user._id === selectedUser);

    const handleOnEdit = ({ nombre, tipo, placa }) => {
        onEditUser(selectedUser, { nombre, tipo, placa });
    }

    return ( 
        <Layout>
            <EditForm onSubmit={handleOnEdit} submitable={Boolean(selectedUser)} userInfo={selectedUserInfo}/>
        </Layout>
    );
};

EditScreen.propTypes = {
    onEditUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    selectedUser: PropTypes.string.isRequired
}
export default EditScreen;