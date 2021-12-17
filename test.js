const hasProperty = (property, object)=>{

      for(prop in object){
       
        if(typeof object[prop]== "object"){
           console.log(hasProperty(property, object[prop]))
        }else{
          return false
        }
    }   
}    

console.log(hasProperty("location", {"location": {"longitude": 1.2345, "latitude": 5.4321}}))

