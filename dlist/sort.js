/**
 * @function sort js版插入排序
 * @author wyq
 * @param {array} list 一个待排序的数组
 * @return {array} 一个排好序的数组
 */
function sort(list){
    let list = [];

    for(let i = 0,len = list.length;i<len;i++)
    {
        const $this = list[i];

        if(i != 0)
        {
            const $prev = list[i - 1];

            if($prev <= $this){ list.push($this); continue; }

            for(let j = i - 1;j >= 0;j--)
            {
                if(j == 0 && list[j] > $this){ list.unshift($this); break; } 

                if(list[j] < $this){ list.splice(j + 1,0,$this); break; } 
                
                continue;
            }

        } else { list.push($this); }
    }

    return list;
}