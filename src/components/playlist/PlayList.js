import {useEffect, useState} from "react"
import { getPlayLists } from "../../modules/PlayListManager.js"

export const PlayList = () => {
    const [lists, setList] = useState([])

    const getList = () => {
        console.log(getPlayLists())
        // return getPlayLists().then(playlistFromApi => {
        //         console.log(playlistFromApi)
        //         setList(playlistFromApi)
        //     })
        }
        
    useEffect(() => {    
        console.log("hello")
        getList();
    }, []);

    console.log(lists)

    return (
        <>
            <div className="container">
                {lists}    
            </div>
        </>
    )


}