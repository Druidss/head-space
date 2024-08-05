import { defineStore } from "pinia"


export const useHarshwindsStore = defineStore('harshwindsStore', {
    state: () => ({
        pipeLine: [
            {id: 'CHORDS', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'SAMPLE', isPlaying: true, player: null},
            {id: 'SAXOPHONE', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})