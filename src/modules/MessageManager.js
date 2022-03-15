const remoteURL = 'http://localhost:8088'

export const getMyMessages = (userId) => {
    return fetch(`${remoteURL}/messages?_expand=activeUserId&receiverId=${userId}`)
    .then(res => res.json())
} 

export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages`)
    .then(res => res.json())
} 

export const getUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
} 

export const getFriendsById = (friendsId) => {
    return fetch(`${remoteURL}/friends/${friendsId}?_expand=user`)
    .then(res => res.json())
}

export const getFriends = () => {
    return fetch(`${remoteURL}/friends`)
    .then(res => res.json())
}


export const deleteMessage = (id) => {
    return fetch(`${remoteURL}/messages/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}