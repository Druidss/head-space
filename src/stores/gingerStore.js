import { defineStore } from "pinia"
export const useGingerStore = defineStore('gingerStore', {
    state: () => ({
        pipeLine: [
            {id: 'PIANO', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'BASS', isPlaying: true, player: null},
            {id: 'RHODES', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null},
        ],
        play: null,
        stop: null
    })
})

export const useSamplerStore = () => {console.log("WRONG STORE IN USE");}