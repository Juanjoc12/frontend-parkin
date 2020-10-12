import React from 'react';
import Layout from '../../components/layout';
import PropTypes from 'prop-types';
import '../../css/principal.css';
import CreateForm from './form'

const MainScreen = ({
    onCreateUser
}) => ( 
    <Layout>
        <CreateForm onSubmit={onCreateUser}/>
    </Layout>
);

MainScreen.propTypes = {
    onGetAllUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

export default MainScreen;