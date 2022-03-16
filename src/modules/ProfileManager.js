const remoteURL = 'http://localhost:8088'

export const addPlayList = (newPlayList) => {
    return fetch(`${remoteURL}/playlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlayList)
    }).then(response => response.json())
}