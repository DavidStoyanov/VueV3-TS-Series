import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('case', {
    beforeMount(el, binding, vnode, prevVnode) {
        const pascal = () => {
            const array = el.innerHTML.split(/\s+/).map((x: string) => {
                return x.charAt(0).toUpperCase() + x.slice(1);
            })
            el.innerHTML = array.join(' ')
        }
        const camel = () => {
            throw new Error('unsupported')
        }

        switch (binding.arg) {
            case 'pascal': pascal(); break;
            case 'camel': camel(); break;
            default: break;
        }
    }
    
})

app.mount('#app')