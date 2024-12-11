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

const useEnterpriseStore = create((set) => ({
    participantEmployees: 0,
    setParticipantEmployees: (numberOfP) => {
        set({ participantEmployees: numberOfP })
    }
}))

export { useFormStore, useEnterpriseStore, useRequestBodyStore }