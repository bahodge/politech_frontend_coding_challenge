const sanitizeValues = values => {
  let newValues = Object.assign({}, values);

  Object.keys(values).map(key => {
    if (typeof values[key] === "string") {
      return (newValues[key] = values[key].trim());
    } else if (typeof values[key] === "number") {
      return (newValues[key] = parseInt(values[key]));
    }
    return newValues[key];
  });

  return newValues;
};

const sanitizeInteger = (object, field) => {
  let newObject = Object.assign({}, object);

  newObject[field] = parseInt(object[field]);

  return newObject;
};

const sanitizeString = (object, field) => {
  let newObject = Object.assign({}, object);

  newObject[field] = object[field].trim();

  return newObject;
};

export { sanitizeValues, sanitizeString, sanitizeInteger };
