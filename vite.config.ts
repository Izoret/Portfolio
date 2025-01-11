import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    //base: '/~izoretr/Portfolio/',
    server: {
        host: true,
        port: 5173
    }
})
