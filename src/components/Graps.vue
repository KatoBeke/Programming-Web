<template>
    <div>
        <h2>Bar chart</h2>
        <div v-for="(song) in items" :key="song.id">
            <p>{{song}}</p>
        </div>
        <div>
            <bar-chart :data="items" thousands="." xtitle="Aantal votes" ytitle="Song" width="80%" height="300px" :colors="['#006ca2']" :messages="{empty: 'Geen data'}"></bar-chart>
        </div>
    </div>
</template>

<script>
export default ({
        name: "Graph",
        props: [
            "items",
        ],
    })
</script>
