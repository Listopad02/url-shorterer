import {useEffect, useState} from "react";


export const useDebounce = (value, delay=900) => {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
}
