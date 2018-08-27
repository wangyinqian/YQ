/**
 * @function attr 设置和获取html元素节点自定义属性。
 * @param {string,element} selector css表达式或元素节点
 * @param {string,object,array} proname 自定义属性键名或存有一组自定义属性的数组或自定义属性的键值对象
 * @param {string} [provalue] 自定义属性值 可选
 */
function attr(selector,proname,provalue){
    var ele = query(selector);

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
        proname = proname.join("|");

        var html = ele.outerHTML,reg = new RegExp(`(${proname})="([\\w]*)`,"g");
       
        html = html.substring(0,html.indexOf(">"));

        var list = html.match(reg),attrList = {};

        if(list && list.length){list.forEach(e=>{var val = e.split("=\"");attrList[val[0]] = val[1];});}

        return attrList;
    }
    else{ Object.keys(proname).forEach(e=>{ ele.setAttribute(e,proname[e]); }) }
}

function query(selector){

    if(typeof selector == "string")
    {
        return document.querySelector(selector);
    }

    return selector;
}