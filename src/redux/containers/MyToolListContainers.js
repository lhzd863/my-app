import {connect} from 'react-redux';
import MyToolList from '../../main/My-ToolList.js';
import ArrayDataAction from '../actions/ArrayDataAction.js';

const mapStateToProps = state => {
    var obj = [];
    for (var i=0,len=state.ArrayDataReducer.length;i<len;i++) {
         obj.push(state.ArrayDataReducer[i]);
    }
    return {
        data: obj
    };
};

const mapDispatchToProps = dispatch => {
    return {
        arrayDataCreate: (data) => {
            dispatch(ArrayDataAction(data));
        }
    };
};

const MyToolListContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(MyToolList);

export default MyToolListContainers;

