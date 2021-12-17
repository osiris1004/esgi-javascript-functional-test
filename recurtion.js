 const flattenObject = (object) => {
  const flattened = {}
  for(prop in object) {
      if(typeof object[prop] === "object") {
          flattened = [flattened, ...flattenObject(object[prop])]
      }else{
          [flattened, ...object[prop]]
      }
  }
  return flattened
};

flattenObject({"a": 1, "b": {"c": 2, "d": 3}}); // {"a": 1, "b.c": 2, "b.d": 3})