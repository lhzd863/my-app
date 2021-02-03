import {connect} from 'react-redux';
import MyDownload from '../../main/MyDownload.js';
import myDownloadAction from '../actions/MyDownloadAction.js';

const mapStateToProps = state => {
    var obj = [];
    for (var i=0,len=state.myDownloadReducer.length;i<len;i++) {
         obj.push(state.myDownloadReducer[i]);
    }
    return {
        flst: obj
    };
};

const mapDispatchToProps = dispatch => {
    return {
        flstDataCreate: (flst) => {
            dispatch(myDownloadAction(flst));
        }
    };
};

const MyDownloadContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(MyDownload);

export default MyDownloadContainers;

