export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const lastURLsegment = (url) => {
  return url.split("/").slice(-2)[0];
};

export const tagNumber = (num) => {
  return `000${num}`.slice(-3);
};
