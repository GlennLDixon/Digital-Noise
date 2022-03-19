const apiKey = process.env.REACT_APP_GLENN
const apiHost = "theaudiodb.p.rapidapi.com"
const apiUrl = "https://theaudiodb.p.rapidapi.com"

export const getTracksByArtistAndSong = async (artistName, trackName) => {
	try {
		const response = await fetch(
			`${apiUrl}/searchtrack.php?s=${artistName}&t=${trackName}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": apiHost,
				// "x-rapidapi-key": apiKey
			}
		});
		
		let data = await response.json();
		data = data.track;

		return data;
		} catch (error) {
			console.log(error);
		}
};


// export const getTracks = async (trackId) => {
// 	try {
// 	const response = await fetch(
// 		`${apiUrl}track.php?h=${trackId}`,
// 		{
// 		method: "GET",
// 		headers: {
// 			"x-rapidapi-host": apiHost,
// 			"x-rapidapi-key": apiKey
// 		},
// 	});

// 	const data = await response.json();
// 	return data;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };