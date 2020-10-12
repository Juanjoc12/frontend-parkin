import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditScreen from '../screens/edit-screen';
import { editUser } from '../redux/actions';

const EditScreenContainer = ({
    onEditUser,
    users,
    selectedUser
}) => <EditScreen
    onEditUser={onEditUser}
    users={users}
    selectedUser={selectedUser}
/>

EditScreenContainer.propTypes = {
    onEditUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    selectedUser: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    users: state.users,
    selectedUser: state.selectedUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onEditUser: editUser 
}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(EditScreenContainer);