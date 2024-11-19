import { create } from 'zustand'

const useFormStore = create(
    (set) => ({
        inputValue: {},
        setInputValue: (callback) => 
            set(state => ({
                inputValue: callback(state.inputValue)
            })
        ),
    })
)

export { useFormStore }