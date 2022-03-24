function responseFromServer(response) {
    if (!response.ok) { throw response.status; }
    return response.json();
}

export function gGetServer(url, getdata, final) {
    return fetch(url, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(responseFromServer).then(getdata).then(final)
}

export function gDeleteServer(url, deletedata, final) {
    return fetch(url, {
        method: 'Delete',
        headers: {
            'content-type': 'application/json',
        },
    }).then(responseFromServer).then(deletedata).then(final)
}

export function gPostServer(url, data, res, final) {
    return fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(responseFromServer).then(res).then(final)
}


