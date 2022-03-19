import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getFriends } from "../../modules/FriendsManager";
import { deleteFriend } from "../../modules/FriendsManager";
// import "./Friends.css"

export const UserCard = ({ user, followUser}) => {
    const [friends, setFriends] = useState([]);
    
    const handleDeleteFriend = id => {
        deleteFriend(id)
            .then(() => getFriends()
                .then(remainingFriends => setFriends(remainingFriends)));
    }

    useEffect(() => {
        getFriends().then(friends => {
            setFriends(friends);
        });
    }, []);
    
    return (
        <div className="UserCard">
                {/* <Link to={`/friends/${friend.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                </Link> */}
                <h3>{user.name}</h3>
                <div className="img-wrapper">
                    <img className="user__img" src={user} alt="profile pic here"></img>
                </div>
                {/* Checking the friends array to see if the user id matches friend id */}
                { !friends.find(friend => friend.id === user.id) ? (<div className="button-wrapper">
                    <button id="bn1" type="button" onClick={(e) => followUser(e, user)}>Follow</button>
                </div>) : (
                
                <div className="button-wrapper">
                    <button id="bn1" type="button" onClick={(e) => handleDeleteFriend(user.id)}>Unfollow</button>
                </div>)}
        </div>
    )
}