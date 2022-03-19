import React, {useState, useEffect} from 'react'
import { addFriend } from '../../modules/FriendsManager';
import { getUsers } from '../../modules/UserManager';
import { getFriends } from '../../modules/FriendsManager';
import { UserCard } from './UserCard';

export const UserList = () => {
    const [users, setUsers] = useState([]);

    const followUser = (event, newFollowedUser) => {
        event.preventDefault();
        if (newFollowedUser.id === event.target.id) return;
        const newFriend = {
            ...newFollowedUser, 
            activeUserId: JSON.parse(sessionStorage.getItem("digital_user")).id
        }
        addFriend(newFriend);
    }

    useEffect(() => {
        getUsers().then(users => {
            setUsers(users);
        });
        
    },[])


    return (
        <div className="container">
            {users.map((user) => <UserCard key={user.id} user={user} followUser={followUser} />)}
        </div>
    )
}