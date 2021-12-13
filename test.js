const object = {"location": {"longitude": 1.2345, "latitude": 5.4321}}
const property = "location"

const hasProperty = (property, object)=>{

// trueOrFalse
const trueOrFalse = {t_True : true, t_False : false}
//should return false when the property is not a string

if(typeof(property) !== "string"){
  console.log(trueOrFalse.t_False+" test 1")
  return trueOrFalse.t_False
}
//should return false when the object is not an object
if(typeof(property) !== "object"){
    console.log(trueOrFalse.t_False+" test 2")
    return trueOrFalse.t_False
}

for(const key in object){
       //) should return true when a property is inside an object
        if(property === object[key]){
          console.log(trueOrFalse.t_True+" test 3")
          return trueOrFalse.t_True
        }else{
          //should return false when a property is not inside an object
          console.log(trueOrFalse.t_False+" test 5")
        
        }
       //should return true when a property is really deeply nested inside an object
        if(property === object[key][property]){
          console.log(trueOrFalse.t_True+" test 4")
          return trueOrFalse.t_False
        }else{
          // should return false when a property is not deeply nested inside an object
          console.log(trueOrFalse.t_False+" test 6")
        }
    }
}


console.log(hasProperty(property, object))