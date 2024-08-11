import { defineStore } from "pinia"


/**
 * Pipeline has every Effect as Object with:
 * id: String Identification of Effect
 * value: current Value of Slider
 */
export const useEffectStore = defineStore('effectStore', {
    state: () => ({
        pipeLine: [
            {id: 'VOLUME', value: 10,selected: false, connected: false, effectObject: null},
            {id: 'REVERB', value: 0, selected: false,connected: false, effectObject: null},
            {id: 'DELAY', value: 0,selected: false, connected: false, effectObject: null},
            {id: 'BITCRUSHER', value: 0, selected: false,connected: false, effectObject: null}
        ],
        sample: "",
    }),
    actions: {
        setValue(newValue,Id) {
            this.pipeLine.forEach(element => {
                if (Id == element.id) {
                    element.value = newValue;
                }
            });
        },
        reset() {
            this.pipeLine.forEach(element => {
                element.connected = false;
                element.effectObject = null;
                element.selected = false;
            })
        }
    }
})