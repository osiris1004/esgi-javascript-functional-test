/*const object = ["jay","max","jack"]

 function recurtion(object, n){
     if(n<0){
         return n
     }else{
         console.log(object[n])
       
        return recurtion(object, n-1)


     }
 }

 console.log(recurtion(object,3))
hasProperty("location", {"location": {"longitude": 1.2345, "latitude": 5.4321}})

 //******************************** */

 hasProperty("location", {"location": {"longitude": 1.2345, "latitude": 5.4321}})
 var replaceKeysInObj = (property,object) => {
    const newObj = {};
    for (const key in obj){
      if(ogKey === key) {
        newObj[newKey] = obj[ogKey]
   } else if (typeof obj[ogKey] === 'object') {
     newObj[ogKey] = replaceKeysInObj(obj[ogKey], key, newKey);
   } else {
     newObj[ogKey] = obj[ogKey]
   }
 }
 return newObj
};