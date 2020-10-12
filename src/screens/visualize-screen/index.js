import React from 'react';
import PropTypes from 'prop-types';
import '../../css/principal.css';
import Layout from '../../components/layout';
import Visualizer from './visualizer'

const MainScreen = ({
    onGetAllUsers,
    onSelectUserEdit,
    users,
    onDeleteUser
}) => ( 
    <Layout>
        <Visualizer 
            onGetAllUsers={onGetAllUsers}
            onSelectUserEdit={onSelectUserEdit}
            users={users}
            onDeleteUser={onDeleteUser}
        />
    </Layout>
);

MainScreen.propTypes = {
    onGetAllUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

export default MainScreen;