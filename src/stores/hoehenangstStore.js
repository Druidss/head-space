import { defineStore } from "pinia"


export const useHoehenangstStore = defineStore('hoehenangstStore', {
    state: () => ({
        pipeLine: [
            {id: 'GUITARS', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'BASS', isPlaying: true, player: null},
            {id: 'SAMPLE', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})