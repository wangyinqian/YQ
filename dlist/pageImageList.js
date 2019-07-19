/**
 * @function getPageImageList 获取页面内使用的图片
 * @param {string|object} param1 可以是一个queryString，也可以是一个JSON数据
 * @param {object} win 当前窗口的window对象。通过此对象来决定获取哪个窗口下的图片 
 * @return {Array} 存有页内图片路径的数组
 */
function getPageImageList(param1,win){
	let imgList = [];
	//判断参数类型。stirng 则认定是queryString object 则认定是JSON对象
	if(typeof param1 == "string")
	{
		const page = win.document.querySelector(param1),
			  imgs = page.querySelectorAll("img");
		//循环获取src并进行去重
		Array.from(imgs).forEach(e=>{
			const src = /@!|\?x-oss/.test(e.src) ? e.src.split(/@!|\?x-oss/)[0] : e.src;

			imgList.indexOf(src) == -1 && imgList.push(src); 
		})
	}
	else
	{
		const regx = /(http|https):\/\/[\w./]+\.(jpg|gif|png|jpeg|webp)/g;

		const list = JSON.stringify(param1).match(regx);
		//如果list不为null则进行数组去重
		if(list){ imgList = [...new Set(list)];  }
	}

	return imgList;
}