<template>
    <div>
        <div>
            <column-chart :data="items" thousands="." title="Totaal aantal votes per song" xtitle="Song" ytitle="Aantal votes" :max="2500" width="65%" :colors="['#006ca2']" :messages="{empty: 'Geen data'}" ></column-chart>
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