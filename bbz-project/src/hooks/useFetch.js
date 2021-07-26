

const useFetch = (baseUrl) => {

    const get = async (url) => {
        try {
            const response = await fetch(`${baseUrl+url}`);
            const responseJSON = await response.json();
            return responseJSON
        }
        catch (error) {
            console.log(error);
        }
    }

    const addRecord = async (url, data) => {
        try {
            const response = await fetch(`${baseUrl+url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            return await response.json();
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteRecord = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            return await response.json();
        }
        catch (error) {
            console.log(error);
        }
    }

    const editRecord = async (url, data) => {
        try {
            const response = await fetch(`${baseUrl+url}`, {
                method: "PUT",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            return await response.json();
        }
        catch (error) {
            console.log(error);
        }
    }

    const exportToPDF = async (url) => {
        try {
            const response = await fetch(`${baseUrl+url}`);
            const file = await response.json();
            return file;
        }
        catch (error) {
            console.log(error);
        }
    }

    const exportToXLS = async (url) => {
        try {
            const response = await fetch(`${baseUrl+url}`);
            const file = await response.json();
            return file;
        }
        catch (error) {
            console.log(error);
        }
    }

    return { get, addRecord, deleteRecord, editRecord, exportToPDF, exportToXLS }
}

export default useFetch;