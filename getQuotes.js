const getQuotes = () => {
  return new Promise((resolve, reject) => {
    const myObj = {
      name: "joe",
    };
    resolve(myObj);
    reject(() => {
      throw new Error("Something went wrong!");
    });
  });
};

console.log(getQuotes());

export default getQuotes;
