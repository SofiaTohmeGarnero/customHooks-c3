import { useState, useEffect } from "react";

export default function useFetch(region) {
    let [paises, setPaises] = useState();
    let [isLoaded, setIsLoaded] = useState(false);

    // algo parecido a un DidMount...
    useEffect(() => {

        async function fetchData() {
            let response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            let datos = await response.json();
            setPaises(datos)
            setIsLoaded(true)
        }

        try {
            fetchData()
        }
        catch (error) {
            console.log()
        }

    }, [])

    return { paises, isLoaded }
}