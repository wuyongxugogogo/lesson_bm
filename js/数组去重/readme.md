1、ES6的Set
    let arr = [1, 2, 3, 4];
    let arr2 = [...new Set(arr)];
2、双重for循环
    <!-- 
      function unique(arr){            
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
        return arr;
      }
    -->
3、filter()
    <!-- 
      function unique(arr) {
        return arr.filter(function(item, index, arr) {
          //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
          return arr.indexOf(item, 0) === index;
        });
      }
    -->
4、reduce()
    <!--
      let arr = [1,1,2,3,4,5,5,6]
      let arr2 = arr.reduce(function(ar,cur) {
        if(!ar.includes(cur)) {
          ar.push(cur)
        }
        return ar
      },[])
    -->