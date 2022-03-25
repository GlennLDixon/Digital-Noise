const remoteURL = 'http://localhost:8088'

const apiKey = process.env.REACT_APP_GLENN
const apiHost = "theaudiodb.p.rapidapi.com"
const apiUrl = "https://theaudiodb.p.rapidapi.com"

export const getPlayLists = () => {
	return fetch(`${remoteURL}/playlist`)
		.then(res => res.json());
} 

export const getPlayListById = (playListId) => {
	return fetch(`${remoteURL}/playlist/${playListId}`)
		.then(res => res.json());
}

export const getTrackById = async (trackId) => {
	try {
		const response = await fetch(
			`${apiUrl}/track.php?h=${trackId}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": apiHost,
				"x-rapidapi-key": apiKey
			}
		});
		
		let data = await response.json();
		data = data.track;

		return data;
		} catch (error) {
			console.log(error);
		}
};

export const getPlayListTracksById = (id) => {
	return fetch(`${remoteURL}/playListTracks?_expand=idtrack&playlistsId=${id}`)
	.then(res => res.json());
}

export const addTrack = (newTrack) => {
    return fetch(`${remoteURL}/playlisttracks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrack)
    }).then(response => response.json())
}