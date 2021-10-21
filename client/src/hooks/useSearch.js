import {useMemo} from "react";

export const useSearch = (query, input) => {

    return useMemo(() => {
        return input.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, input])
}