import { API_BASE_URL, URL_SEARCH_PARAMS } from "../utils/config";
import type { ISearchParams, IObjectSearch } from "../types/data";

export const fetchObjectSearch = async (data: ISearchParams) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/objectsearch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json-patch+json',
            Accept: 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(URL_SEARCH_PARAMS(data))
    })

    return await response.json() as IObjectSearch;
}