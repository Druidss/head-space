import { defineStore } from "pinia"


export const useAtpeaceStore = defineStore('atpeaceStore', {
    state: () => ({
        pipeLine: [
            {id: 'RHODES', isPlaying: true, player: null},
            {id: 'DRUMS', isPlaying: true, player: null},
            {id: 'VIBRAPHONE', isPlaying: true, player: null},
            {id: 'AMBIENCE', isPlaying: true, player: null},
            {id: 'SYNTHS', isPlaying: true, player: null}
        ],
        play: null,
        stop: null
    })
})