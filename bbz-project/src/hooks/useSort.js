
// Zwraca nową tablice
// Liczby sortuje odwrotnie (descending = true, sortuje rosnąco )

const useSort = (array, key, descending=true) => {
    if (!array) {
        return;
    }
    const newArray = [...array];
    
    (descending) ? newArray.sort((a, b) => (a[key] > b[key])) : newArray.sort((a, b) => (a[key] < b[key]))

    return newArray;
}


export default useSort;

