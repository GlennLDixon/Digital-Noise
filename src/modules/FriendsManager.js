const remoteURL = "http://localhost:8088"

export const getFriends = () => {
    return fetch (`${remoteURL}/friends`)
    .then(res => res.json())
}
 
export const getFriendById = (friendId) => {
  return fetch(`${remoteURL}/friends/${friendId}?_expand=user`)
  .then(res => res.json())
}

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

export const addFriend = (newFriend) => {
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
}