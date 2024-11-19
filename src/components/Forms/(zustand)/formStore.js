import { create } from 'zustand'

const useFormStore = create(
    (set) => ({
        inputValue: {},
        setIputValue: (callback) =>
            set(state => ({
                inputValue: callback(state.inputValue)
            })
        ),
    })
)

export { useFormStore }