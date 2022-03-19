import { useEffect, useState } from "react";
import React from "react";
import { FriendCard } from "./FriendCard";
import { getFriends, deleteFriend } from "../../modules/FriendsManager";
// import "./Friends.css"


export const FriendList = () => {

    const [friends, setFriends] = useState([]);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("digital_user"))); //sessionStorage gets the currently logged in user
    
    const handleDeleteFriend = id => {
        deleteFriend(id)
            .then(() => getFriends()
                .then(remainingFriends => setFriends(remainingFriends)));
    }

    console.log(friends)

    useEffect(() => {
        getFriends().then(friends => {
            setFriends(friends)
        })
    }, []);

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1><span>Friends List</span></h1>
            </div>
            <div>
                <div className="container-cards">
                    <section className="friend-list">
                        {friends.map(friend => <FriendCard key={friend.id} friend={friend} handleDeleteFriend={handleDeleteFriend} />)}
                    </section>
                </div>
            </div>
        </div>
    )
}