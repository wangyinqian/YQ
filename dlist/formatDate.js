//格式化日期字符串
function fomatDate(pattern,time,lang,opts = {}){
    const _date = new Date(Number(time) * 1000 || new Date().getTime()); //获取日期对象

    if(!lang)
    {
        const _dateTime = _date.toLocaleString().split(" "), //分隔本地化的日期字符串
              _d = _dateTime[0].split(/\/|-/), //分隔年月日部分 
              _t = _dateTime[1].split(":");  //分隔时间部分

        const _data = {y:_d[0],M:_d[1],d:_d[2],h:_t[0],m:_t[1],s:_t[2]} //把年月日时间通过指定的键存储起来
    
        return pattern.replace(/[yMdhms]?/g,(r,n,p)=>_data[r] ? _data[r] < 10 ? ("0" + _data[r]) : _data[r] : ""); //通过替换日期表达式返回指定格式的日期字符串
    }
    else
    {   //参数映射表
        const _dateHash = {y:"year",M:"month",d:"day",h:"hour",m:"minute",s:"second",short:"short",writAll:"long",fill:"2-digit"};

        let _format = {};
        //设置年月日等显示方式设置
        pattern.split(" ").forEach(e=>{_format[_dateHash[e]] = _dateHash[opts[e]] || "numeric";})
        
        if(typeof opts.param == "object"){ Object.assign(_format,opts.param);  }
        //返回生成后的日期
        return _date.toLocaleString(lang,_format);
    }
}
