import { API_BASE_URL, URL_SEARCH_PARAMS } from "../utils/config";
import type { IUserData, IAccessToken, ISearchParams } from "../types/data";

type IObjectSearch = {
    items: [];
}

export const fetchAuthorization = async (userdata: IUserData) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/account/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json-patch+json',
            Accept: 'application/json',
        },
        body: JSON.stringify(userdata)
    })

    const data = await response.json() as IAccessToken;
    return data;
}

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