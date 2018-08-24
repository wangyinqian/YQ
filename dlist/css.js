function css(selector,csspro,cssvalue){
    const ele = query(selector); //获取元素节点对象
    //判断参数是否是字符串。如果是字符串则表示修改单个样式，是对象则表示修改多个样式
    if(typeof csspro == "string")
    {   //判断值是否为合法值
        if(cssvalue !== undefined && cssvalue !== null && !Number.isNaN(cssvalue)) 
        {   //赋值
            ele.style[csspro] = cssvalue;
        }
        else{ throw `${csspro} value is ${cssvalue}`; } //抛出异常
    }
    else
    {   //获取元素的css样式
        let cssText = ele.style.cssText;
        //循环对象列表
        Object.keys(csspro).forEach(e=>{
            //把键值转换为合法的css属性
            const key = e.replace(/([A-Z]{1})/g,e=>`-${e.toLowerCase()}`);
            //取得要修改样式的值
            let value = csspro[e];
            //判断值是否为合法值
            if(value !== undefined && value !== null && !Number.isNaN(value))
            {   //拼接css
                value = `${key}:${typeof value == "string" ? value : value + "px"};`
                //判断元素行内是否已包含需要修改的样式
                if(cssText && cssText.indexOf(key) != -1)
                {   //把老样式的值替换为最新值
                    cssText = cssText.replace(new RegExp(`${key}:([ \\w]+);`,"i"),()=>value);
                }
                else{ cssText += value; } //拼接css
            }
            else{ throw `${e} value is ${value}`; } //抛出异常
        })
        //给元素赋值
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
