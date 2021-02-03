import {connect} from 'react-redux';
import AppNewsListWrapper from '../../app/news/AppNewsList.js';
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

const AppNewsListDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppNewsListWrapper);

export default AppNewsListDataContainers;

