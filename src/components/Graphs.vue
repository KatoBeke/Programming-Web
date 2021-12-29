<template>
    <div>
        <div>
            <column-chart :data="items" thousands="." title="Totaal aantal votes per song" xtitle="Song" ytitle="Aantal votes" :max="2500" width="65%" :colors="['#006ca2']" :messages="{empty: 'Geen data'}" ></column-chart>
            <vue-word-cloud
                animation-duration=3000
                animation-overlap=5
                 :color="([, weight]) => weight > 1000 ? 'red' :weight > 750 ? 'crimson' :weight > 500 ? 'salmon' :weight > 100 ? 'maroon' : 'brown'"
                font-size-ratio=0.09
                style="height: 450px;width: 650px;"
                :words="items"             
            />
        </div>
    </div>
</template>

<script>
    export default ({
            name: "Graph",
            props: [
                "items",
            ]
    })
</script>