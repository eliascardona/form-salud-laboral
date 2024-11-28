import { create } from 'zustand'

const useFormStore = create((set) => ({
    inputValue: {},
    setInputValue: (newValue) => {
        set({ inputValue: newValue })
    }
}))

const useRequestBodyStore = create((set) => ({
    requestBody: {},
    setRequestBody: (newValue) => {
        set({ requestBody: newValue })
    }
}))

export { useFormStore, useRequestBodyStore }