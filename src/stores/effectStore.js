import { defineStore } from "pinia"


/**
 * Pipeline has every Effect as Object with:
 * id: String Identification of Effect
 * value: current Value of Slider
 */
export const useEffectStore = defineStore('effectStore', {
    state: () => ({
        pipeLine: [
            {id: 'VOLUME', value: 10, sample:'DRUMS', connected: false, effectObject: null},
            {id: 'REVERB', value: 0,sample: 'DRUMS', connected: false, effectObject: null},
            {id: 'DELAY', value: 0,sample: '', connected: false, effectObject: null},
            {id: 'FILTER', value: 0,sample: '', connected: false, effectObject: null}
        ]
    }),
    actions: {
        setValue(newValue,Id) {
            this.pipeLine.forEach(element => {
                if (Id == element.id) {
                    element.value = newValue;
                }
            });
        }
    }
})