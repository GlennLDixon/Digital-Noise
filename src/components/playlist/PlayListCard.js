import { Link } from "react-router-dom"
export const PlayListCard = ({list}) => {
return (
    <Link to={`/playlist/${list.id}`}>
    <div className="container">
            {/* <img src={list.track} alt={list.track.name} /> */}
        <div className="trackList-Title">{list.title}</div>
    </div>
    </Link>
    )
}