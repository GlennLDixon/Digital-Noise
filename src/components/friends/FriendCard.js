import React from "react";
import { Link } from "react-router-dom";
// import "./Friends.css"

export const FriendCard = ({friend, handleDeleteFriend}) => {
    return (
        <div className="friendCard">
                {/* <Link to={`/friends/${friend.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                </Link> */}
                <h3>{friend.name}</h3>
                <div className="img-wrapper">
                    <img className="friend__img" src={friend} alt="profile pic here"></img>
                </div>
                <div className="button-wrapper">
                    <button id="bn1" type="button" onClick={() => handleDeleteFriend(friend.id)}>Unfollow</button>
                </div>
        </div>
    )
}