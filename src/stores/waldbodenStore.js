import { defineStore } from "pinia"


export const useWaldbodenStore = defineStore('waldbodenStore', {
    state: () => ({
        pipeLine: [
            {id: 'RHODES', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'BASS', isPlaying: true, player: null},
            {id: 'GUITARS', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})