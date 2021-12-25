<template>
    <div>
        <div>
            <column-chart :data="items" thousands="." xtitle="Song" ytitle="Aantal votes" :max="2500" width="60%" :colors="['#006ca2']" :messages="{empty: 'Geen data'}" ></column-chart>
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