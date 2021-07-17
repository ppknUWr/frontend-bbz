
// Funkcja do filtrowania obiektów po danym kluczu

const useFilter = (object, query, key) => {
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
    })
}

export default useFilter;