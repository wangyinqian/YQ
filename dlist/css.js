function css(selector,csspro,cssvalue){
    const ele = query(selector);

    if(typeof csspro == "string")
    {
        if(cssvalue != undefined)
        { 
            ele.style[csspro] = cssvalue;
        }
        else{ throw "cssvalue value is undefined"; }
    }
    else
    {
        
    }
}

function query(selector){

    if(typeof selector == "string")
    {
        return document.querySelector(selector);
    }

    return selector;
}