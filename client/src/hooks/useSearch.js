import {useMemo} from "react";

export const useSearch = (query, input) => {

    return useMemo(() => {
        return input.filter(item => item.itemTitle.toLowerCase().includes(query.toLowerCase()))
    }, [query, input])
}