import { defineStore } from "pinia"


export const useSanctuaryStore = defineStore('sanctuaryStore', {
    state: () => ({
        pipeLine: [
            {id: 'CHORDS', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'BASS', isPlaying: true, player: null},
            {id: 'GUITARS', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})