function k_invert(a, k){
    
    if(k<=0) return null;

    if(k>a.length) return null;

    for(i = 0; i<a.length; i++){
        if(a[i]<=0) return null;
    }
    
    var b = a.splice(-k);

    var c = b.concat(a);

    return c;

}