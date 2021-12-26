<template>
    <div>
        <button class="knoppen" id="vorige" @click="ChangeIndex(-1)">
            Previous song
        </button>
        
        <div v-for="(song,index) in items" :key="song.id">
            <div v-if="index == activeIndex" align="center">
                    <p>{{song.artist.name}} - {{song.title}}</p>
                <iframe :src="song.spotify" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>

        <div>
            <button class="knoppen" id="volgende" @click="ChangeIndex(1)">
                Next song
            </button>
        </div>
    </div>
    
</template>

<script>
    export default ({
        name: "Carousel",
        props: [
            "items",
            "activeIndex"
        ],
        methods: {
            ChangeIndex(value) {
                //copy, you can not change props directly
                let index = this.activeIndex;

                //-1 of 1
                index += value;
                //check if index is beginning of ending
                if(index < 0)
                {
                    index = this.items.length - 1;
                }
                else if(index == this.items.length)
                {
                    index = 0;
                }
                //change index in gamepage
                this.$emit("change-index",index);
            },
        }
    })
</script>
