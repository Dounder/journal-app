// export const myMutations = (state, payload) => {

// }

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    state.entries = state.entries.map((el) => (el.id === entry.id ? entry : el))
}

export const addEntry = (state, entry) => {
    state.entries = [entry, ...state.entries]
}

export const deleteEntry = (state, id) => {
    state.entries = state.entries.filter((el) => el.id !== id)
}
