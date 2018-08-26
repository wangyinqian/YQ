function style(selector,cssname){
    const  ele = query(selector);

    if(cssname)
    {
        const styled = getComputedStyle(ele),style = ele.style;

        if(typeof cssname == "string")
        {
            const value = style[cssname] || styled[cssname];

            return value ? value : null;
        }
        else
        {
            let  cssData = {},value = "";

            cssname.forEach(e=>{
                value = style[cssname] || styled[cssname];

                if(value){ cssData[e] = value; }
            });

            return cssData;
        }
    }
    
    return all(ele);
}

function all(ele){

    function _style(ele){
        const styled = Object.assign(getComputedStyle(ele),ele.style);

        const cssStyled = JSON.stringify(styled,(key,value)=>value ? value : undefined);

        cssData.push(cssJSON.parse(cssStyled));
    }

    function _all(list){
        let eleList = [];

        for (let i = 0,len = list.length; i < len; i++) {
            const child = list[i].children;

            for(let j = 0,count = child.length;j < count;j++)
            {
                const ele = child[j];

                _style(ele);
        
                if(ele.children.length){ eleList.push(ele.children); }
            }
            
        }

        return eleList ? _all(eleList) : cssData;
    }

    let children = ele.children,cssData = [];

    _style(ele);

    return children.length ? _all([children]) : cssData;
}

function query(selector){

    if(typeof selector == "string")
    {
        return document.querySelector(selector);
    }

    return selector;
}