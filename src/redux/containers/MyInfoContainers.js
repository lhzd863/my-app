import {connect} from 'react-redux';
import MyInfoPage from '../../main/MyInfoPage.js';
import {updUserNameAction, updUserIdAction, updAliasAction, updMailAction} from '../actions/MyInfoAction.js';

const mapStateToProps = state => {
    return {
        username: state.userNameReducer.username,
        userid: state.userIdReducer.userid,
        alias: state.userAliasReducer.alias,
        mail: state.userMailReducer.mail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updUserNameCreater: (username) => {
            dispatch(updUserNameAction(username));
        },
        updUserIdCreater: (userid) => {
            dispatch(updUserIdAction(userid));
        },
        updAliasCreater: (alias) => {
            dispatch(updAliasAction(alias));
        },
        updMailCreater: (mail) => {
            dispatch(updMailAction(mail));
        }
    };
};

const MyInfoContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(MyInfoPage);

export default MyInfoContainers;

