import { create } from 'zustand'

const useFormStore = create((set) => ({
    inputValue: {},
    setInputValue: (newValue) => {
        set({ inputValue: newValue })
    }
}))

const unsubscribe = useFormStore.subscribe(
    (state) => state.inputValue,
    (newInputValue) => {
        console.log('new state', newInputValue)
    }
)
unsubscribe()

export { useFormStore }