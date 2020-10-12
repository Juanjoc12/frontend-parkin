import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateScreen from '../screens/create-screen';
import { createUser } from '../redux/actions';

const CreateScreenContainer = ({
    onCreateUser
}) => <CreateScreen 
    onCreateUser={onCreateUser}
/>

CreateScreenContainer.propTypes = {
    onCreateUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    onCreateUser: createUser 
}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(CreateScreenContainer);