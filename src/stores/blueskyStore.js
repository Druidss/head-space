import { defineStore } from "pinia"


export const useBlueskyStore = defineStore('blueSkyStore', {
    state: () => ({
        pipeLine: [
            {id: 'CHORDS', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'BASS', isPlaying: true, player: null},
            {id: 'ONESHOTS', isPlaying: true, player: null},
            {id: 'SYNTH', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})