
const IsNumberFunc = (theObj)=>{
    var regPos = /^\d+(\.\d+)?$/;
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
    if (regPos.test(theObj)||regNeg.test(theObj)) {
        return true;
    }
    return false;
};

export default IsNumberFunc;

