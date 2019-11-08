export const state = () => ({
    locales: ['th', 'en'],
    locale: 'th'
})
  
export const mutations = {
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale
        }
    }
}