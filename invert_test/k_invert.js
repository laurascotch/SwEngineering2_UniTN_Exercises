function k_invert(a, k){
    
    if(arguments.length!=2) return null;

    if(!(Array.isArray(a))) return null;

    if(k<0) return null;

    if(k>a.length) return null;

    for(i = 0; i<a.length; i++){
        if(a[i]<=0) return null;
        if(isNaN(a[i])) return null;
        if(!(Number.isInteger(a[i]))) return null; 
    }
    
    var b = a.splice(-k);

    var c = b.concat(a);

    //console.log(c);
    return c;

}

module.exports = k_invert;