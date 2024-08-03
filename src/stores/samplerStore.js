import { defineStore } from "pinia"

export const useSamplerStore = defineStore('samplerStore', {
    state: () => ({
        pipeLine: [
            {id: 'PIANO', isPlaying: true},
            {id: 'DRUMS', isPlaying: true},
            {id: 'HORNS', isPlaying: true},
            {id: 'BASS', isPlaying: true},
            {id: 'SYTH', isPlaying: true}
        ]
    })
})