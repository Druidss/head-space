import { defineStore } from "pinia"


export const useFeatherweightStore = defineStore('featherweightStore', {
    state: () => ({
        pipeLine: [
            {id: 'PIANO', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'BASS', isPlaying: true, player: null},
            {id: 'ONESHOTS', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})