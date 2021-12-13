const object = [1,2,3]
n = object.length
console.log(recurtion(object,n))

 function recurtion(object, n){
     let i
     if(i==n){
         i = 0
         return 
     }else{
         console.log(object[i])
         i++
          recurtion(object, n)


     }
 }

 