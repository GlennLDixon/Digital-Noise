import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPlayLists } from '../../modules/PlayListManager'
import { PlayListCard } from './PlayListCard'

export const PlayList = () => {
    const [playlists, setPlayLists] = useState([])


    useEffect(() => {
        getPlayLists().then(playlists => {
            setPlayLists(playlists)
        })
    }, [])
    console.log(playlists)

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1><span>PlayList</span></h1>
            </div>
            <div>
                <div className="container-cards">
                    <section className="playlist-list">
                        {playlists.map(list => 
                                <PlayListCard 
                                    key={list.id}
                                    list={list}
                                />
                            )
                        }
                    </section>
                </div>
            </div>
        </div>
    )
}