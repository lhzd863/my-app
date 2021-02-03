
const IsNameCharFunc = (theObj)=>{
    var regNeg = /^[a-zA-Z]{1}\w*$/;
    if (regNeg.test(theObj)) {
        return true;
    }
    return false;
};

export default IsNameCharFunc;

