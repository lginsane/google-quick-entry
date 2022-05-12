import { defineStore } from 'pinia'

interface ThemeState {
    theme: string
}
export const useThemeStore = defineStore({
    id: 'theme',
    state: (): ThemeState => ({
        theme: ''
    })
})
