export const filter = (object, query, key) => {
    if (!query || !object) {
    /* jeśli searchfield jest pusty lub obiekt jest niezdefiniowana, zwróć całą oryginalny obiekt */
        return object;
    }
    return object.filter( element => {
        if (key in element){
            if (typeof(element[key]) === "string") // jeśli wartość pod danym kluczem jest stringiem
            {
                const result = element[key].toLowerCase(); // zmiana na małe znaki, by wyłapać wszystkie przypadki
                return result.includes(query.toLowerCase());
            }
            else if (typeof(element[key]) === "number") // jeśli wartość pod danym kluczem jest liczbą
            {
                if (element[key] === Number(query))
                    return element[key];
            }
        }
    });
  }
  
  export const sort = (array, key, descending=true) => {
    if (!array) {
        return;
    }
    const newArray = [...array];

    if (key === "publication_date")
        (descending) ? newArray.sort((a, b) => (b[key] - a[key])) : newArray.sort((a, b) => (a[key] - b[key]));
    else
        (descending) ? newArray.sort((a, b) => (a[key] > b[key])) : newArray.sort((a, b) => (a[key] < b[key]));
  
    return newArray;
  }