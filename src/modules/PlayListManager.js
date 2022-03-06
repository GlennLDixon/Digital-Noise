export const getPlayLists = () => {
    fetch("https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotify23.p.rapidapi.com",
		"x-rapidapi-key": "c18d2254bamsh3f06d44bec19ee0p13fe26jsnb057da6bc53e"
	}
})
.then(result => result.json())
.then(data => {return data})
}