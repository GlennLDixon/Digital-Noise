import React from 'react'
import { FriendList } from '../friends/FriendList'
import { PlayListForm } from '../playlist/NewPlayListForm'
import { PlayList } from '../playlist/PlayList'

export const ProfilePage = () => {

    return (
        <>
        <PlayListForm />
        <FriendList />
        <PlayList />
        </>
    )
}
