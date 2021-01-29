// 播放量格式化
export function getCount(count){
    if(count<0) return;
    if(count<10000){
        return count
    }
    else if(Math.floor(count/10000)<10000){
        return Math.floor(count/1000)/10+'万'
    }
    else  {
        return Math.floor(count/10000000)/10+'亿'
    }
}
// 时间格式化
export function formatDate1(time, fmt) {
    let date = new Date(time);
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  
  // function padLeftZero(str) {
  //   return ('00' + str).substr(str.length);
  // };
export function formatMonthDay(time) {
  return formatDate1(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate1(time, "mm:ss");
}
  

  /**时间格式化函数 */
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(2 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};
// 实现深拷贝
export function deepClone (newObj, oldObj) {
  for (var k in oldObj) {
    var item = oldObj[k];
    if (item instanceof Array) {
      newObj[k] = [];
      deepClone(newObj[k], item)
    } else if (item instanceof Object) {
      newObj[k] = {};
      deepClone(newObj[k], item)
    } else {
      newObj[k] = item
    }
  }
}
