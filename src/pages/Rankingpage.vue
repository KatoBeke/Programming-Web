<template>
    <div>
        <button @click="goToPage('home')">
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
                <tr v-for="(song,count) in sortSongs(songs)" :key="count">
                    <td>{{count+1}}</td>
                    <td>{{song.artist.name}}</td>
                    <td>{{song.title}}</td>
                    <td>{{song.vote}}</td>
                </tr>
            </tbody>
        </table><br><br>
        <Graphs
            :items="sortsongsWithPoints(songsWithPoints)"
        />
    </div>
</template>

<script>
    //components
    import Graphs from "../components/Graps.vue";
    export default {
        name: "Rankingpage",
        components: {
            Graphs
        },
        data() {
            return {
                songs: [],
                songsWithPoints: [],
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
                //Alle songs krijgen
                const url = "http://webservies.be/eurosong/Songs";
                fetch(url)
                    .then((response) => {
                            return response.json();
                    })
                    .then((songs) => {
                        this.fetchAllSongInformation(songs);
                    })
            },
            fetchAllSongInformation(songs) {
                let songsWithPoints = [];
                //Alle artiesten van de songs krijgen
                const url = "http://webservies.be/eurosong/Artists";
                fetch(url)
                    .then((response) => {
                        //Text omzetten naar json
                        return response.json();
                    })
                    .then((artists) => {
                        songs.map((song) => {
                            //Artiest vinden van song
                            const artist = artists.find((artist) => artist.id == song.artist);
                            //Vervang het id door het artiest object
                            song.artist = artist;
                            song.vote = 0;

                            //Het nieuwe object teruggeven
                            return song;
                        });
                        //Data van liedjes wijzigen zodat alles opnieuw wordt gerenderd
                        this.songs = songs;
                    })
                    .then(() => {
                        this.songs.map((song) => {
                            let liedjesMetPunten = [];
                            let songId = song.id;
                            const url = "http://webservies.be/eurosong/Songs/"+songId+"/points";
                            fetch(url)
                            .then((response) => {
                                //Text omzetten naar json
                                return response.json();
                            })
                            .then((stemmen) => {
        
                                song.vote = stemmen; //Stemmen van liedjes
                                
                                liedjesMetPunten.push(song.title,song.vote) //Dit heb ik nodig voor mijn grafiek
                                return song; //Dit geeft alles terug van song --> dus zowel de titel van de song, als de artiest, als de songId en het aantal votes van de song
                            })
                            songsWithPoints.push(liedjesMetPunten); //Dit heb ik nodig voor mijn grafiek
                        });
                        return songsWithPoints; //Dit geeft de titels van de songs terug samen met het aantal votes van de song
                    });
                    this.songsWithPoints = songsWithPoints;
                },
            //Songs descending sorteren voor tabel
            sortSongs(songs) {
                const aantal = songs.length;
                return (aantal,songs.slice().sort(function(a, b) {
                    return b.vote - a.vote;
                }));
            },
            //Songs descending sorteren voor grafiek
            sortsongsWithPoints(songsWithPoints) {
                return songsWithPoints.slice().sort(function(a,b) {
                    return b[1]-a[1]
                });
            }
        }
    }
</script>
