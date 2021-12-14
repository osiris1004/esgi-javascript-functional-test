const hasProperty = (property, object)=>{

        if(typeof property === 'string' ){
            if(typeof object === 'object'){
              console.log("True for 2 and 3")
                for(prop in object){
                  if(property === prop){
                    return true
                  }else{
                        if(typeof object[prop] === 'object'){
                          return hasProperty(property, object[prop]) 
                      }else{
                          return false;
                      }
                  }
              }
            }else{
              console.log("test 3")
              return false;
            }
            
        }else{
            console.log("test 2")
            return false;
        } 
  
}


console.log(hasProperty("location", {"location": {"longitude": 1.2345, "latitude": 5.4321}}))

