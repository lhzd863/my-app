import {connect} from 'react-redux';
import AppNewsWrapper from '../../app/news/AppNews.js';
import AppNewsTagDataAction from '../actions/AppNewsTagDataAction.js';

const mapStateToProps = state => {
    return {
        news_tag: state.AppNewsTagDataReducer.news_tag
    };
};

const mapDispatchToProps = dispatch => {
    return {
        newsTagCreate: (news_tag) => {
            dispatch(AppNewsTagDataAction(news_tag));
        }
    };
};

const AppNewsDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppNewsWrapper);

export default AppNewsDataContainers;

