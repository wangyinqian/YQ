/**
 * @function attr 设置和获取html元素节点自定义属性。
 * @param {string,element} selector css表达式或元素节点
 * @param {string,object,array} proname 自定义属性键名或存有一组自定义属性的数组或自定义属性的键值对象
 * @param {string} [provalue] 自定义属性值 可选
 */
function attr(selector,proname,provalue){
    const ele = query(selector);

    if(typeof proname == "string")
    {
        if(provalue !== undefined)
        { 
            ele.setAttribute(proname,provalue); 
        }
        else
        {
            return ele.getAttribute(proname);
        }
    }
    else if(Array.isArray(proname))
    {
        let attrList = {};
        
        proname.forEach(e=>{const value = ele.getAttribute(e); if(value){ attrList[e] = value; } })

        return attrList;
    }
    else
    {
        Object.keys(proname).forEach(e=>{ ele.setAttribute(e,proname[e]); })
    }
}

function query(selector){

    if(typeof selector == "string")
    {
        return document.querySelector(selector);
    }

    return selector;
}