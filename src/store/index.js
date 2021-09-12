import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [{ id: 1, name: "Mironov Ernest Arvovich", tel: "8(911)-195-37-13", bonusFields: [{ name: "Adress", value: "Saint - Petersburg" }] }]
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    removeContact(state, id) {
      let idx = state.contacts.findIndex(contact => contact.id === id)
      state.contacts.splice(idx, 1)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))

    },
    updateContact(state, contact) {
      const idx = state.contacts.findIndex(c => c.id === contact.id)

      state.contacts[idx] = contact

      localStorage.setItem('contacts', JSON.stringify(state.contacts))

    },
  },
  actions: {
    createContact({ commit }, contact) {
      commit('createContact', contact)
    },
    removeContact({ commit }, id) {
      commit('removeContact', id)
    },
    updateContact({ commit }, contact) {
      commit('updateContact', contact)
    },
  },
  modules: {
  },
  getters: {
    contacts: s => s.contacts,
    getContactById: s => id => JSON.parse(JSON.stringify(s.contacts.find(t => t.id === id)))
  }
})
