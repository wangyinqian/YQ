function css(selector,csspro,cssvalue){
    const ele = query(selector);
    //判断参数是否是字符串。如果是字符串则表示修改单个样式，是对象则表示修改多个样式
    if(typeof csspro == "string")
    {   //判断值是否为合法值
        if(cssvalue !== undefined && cssvalue !== null && !Number.isNaN(cssvalue)) 
        { 
            ele.style[csspro] = cssvalue;
        }
        else{ throw `cssvalue value is ${cssvalue}`; }
    }
    else
    {
        let cssText = ele.style.cssText;

        Object.keys(csspro).forEach(e=>{
            const key = e.replace(/([A-Z]{1})/g,e=>`-${e.toLowerCase()}`);

            let value = csspro[e];

            if(value !== undefined && value !== null && !Number.isNaN(value))
            {
                value = `${key}:${typeof value == "string" ? value : value + "px"};`

                if(cssText && cssText.indexOf(key) != -1)
                {
                    cssText = cssText.replace(new RegExp(`${key}:([ \\w]+);`,"i"),()=>value);
                }
                else{ cssText += value; }
            }
            else{ throw `cssvalue value is ${value}`; }
        })

        ele.style.cssText = cssText;
    }
}

function query(selector){

    if(typeof selector == "string")
    {
        return document.querySelector(selector);
    }

    return selector;
}
