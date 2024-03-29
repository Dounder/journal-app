import journalApi from '@/api/journalApi'
// export const myAction = async ({commit}) => {}

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    if (!data) return commit('setEntries', [])
    const entries = []
    for (let id of Object.keys(data)) entries.push({ id, ...data[id] })
    commit('setEntries', entries)
}
export const updateEntry = async ({ commit }, entry) => {
    const { text, date, picture } = entry
    const dataToUpdate = { text, date, picture }
    const resp = await journalApi.put(`/entries/${entry.id}.json`, dataToUpdate)
    console.log(resp)
    commit('updateEntry', { ...entry })
}
export const createEntry = async ({ commit }, entry) => {
    const { text, date, picture } = entry
    const dataToSend = { text, date, picture }

    const { data } = await journalApi.post('/entries.json', dataToSend)

    dataToSend.id = data.name

    commit('addEntry', dataToSend)
    return data.name
}
export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)
}
