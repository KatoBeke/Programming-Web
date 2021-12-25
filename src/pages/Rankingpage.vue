<template>
    <div>
        <button class="knop" @click="goToPage('home')">
            Go to home
        </button>
        <h1>
            Top <span> {{songs.length}} </span> songs
        </h1>
        <table>
            <thead>
                <tr>
                    <th>Positie</th>
                    <th>Artiest</th>
                    <th>Song</th>
                    <th>Votes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(song,count) in sortArray(songs)" :key="count">
                    <td>{{count+1}}</td>
                    <td>{{song.artist.name}}</td>
                    <td>{{song.title}}</td>
                    <td>{{song.vote}}</td>
                </tr>
            </tbody>
        </table>
        <div class="app">
            <h2>Bar Chart</h2>
            <div v-for="(song) in makeBarChart(songs)" :key="song.id">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rankingpage",
    data() {
        return {
            songs: [],
        }
    },
    mounted() {
            this.fetchSongs();
        },
    methods: {
        goToPage(page) {
            this.$emit("change-page",page)
        },
        // data methods
        fetchSongs() {
            // Get all songs
            const url = "http://webservies.be/eurosong/Songs";
            fetch(url)
                .then((response) => {
                        return response.json();
                })
                .then((songs) => {
                    this.fetchAllSongInformation(songs);
                });
        },
        fetchAllSongInformation(songs) {
            // Get all artist
            const url = "http://webservies.be/eurosong/Artists";
            fetch(url)
                .then((response) => {
                    // response is text, so convert to json
                    return response.json();
                })
                .then((artists) => {
                    // loop over array songs with forEach method
                    songs.map((song) => {
                        // find the artist in an array
                        const artist = artists.find((artist) => artist.id == song.artist);
                        // replace the id by the artist object
                        song.artist = artist;
                        song.vote = 0;

                        // return the new object
                        return song;
                    });
                    // change data of songs, so everything will get rerenderd;
                    this.songs = songs;
                })
                .then(() => {
                    this.songs.map((song) => {
                        let songId = song.id;
                        const url = "http://webservies.be/eurosong/Songs/"+songId+"/points";
                        fetch(url)
                        .then((response) => {
                            // response is text, so convert to json
                            return response.json();
                        })
                        .then((stemmen) => {
    
                            song.vote = stemmen;
                            return song;
                                
                        })
                    });
                });
            },
            sortArray(songs) {
                const aantal = songs.length;
                return (aantal,songs.slice().sort(function(a, b) {
                    return b.vote - a.vote;
                }));
            },
            makeBarChart(songs)
            {

            }
    }
}
</script>
