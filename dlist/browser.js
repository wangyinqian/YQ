function browser(){
   var _user = win.navigator.userAgent,_isAlert = false;

   var _browserName = _user.match(/(Chrome|MSIE|Firefox|rv|Version)[:|\/|\s]{1}([\w\.]+)/);

   if(_browserName)
   { 
      console.log("浏览器为"+_browserName[1]+",版本为"+_browserName[2]);
   }
}
