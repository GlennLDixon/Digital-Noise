import React from 'react'
import { FriendList } from '../friends/FriendList'
import { PlayListForm } from './NewPlayListForm'

export const ProfilePage = () => {

    return (
        <>
        <PlayListForm />
        <FriendList />
        </>
    )
}
