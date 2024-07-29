import { defineStore } from "pinia"

export const useEffectStore = defineStore('effectStore', {
    state: () => ({
        pipeLine: [
            {id: 'VOLUME', value: 10, sample:''},
            {id: 'REVERB', value: 0,sample: ''},
            {id: 'DELAY', value: 0,sample: ''},
            {id: 'FILTER', value: 0,sample: ''}
        ]
    })
})