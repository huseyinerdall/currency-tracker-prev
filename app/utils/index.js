
function capitalize(str){
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// search in array of objects a specific value key
function search(nameKey, array){
    let res;
    for (var i=0; i < array.length; i++) {
        if (array[i].name === nameKey) {
            res = array[i];
        }
    }
    if(res){
        return res;
    }
    nameKey = capitalize(nameKey);
    for (var i=0; i < array.length; i++) {
        if (array[i].name === nameKey) {
            res = array[i];
        }
    }
    return res;
}




module.exports = {search};