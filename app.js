const App = {
    data(){
        return {
            counter: 0, //должны быть видны в шаблоне
            titleCounter: 'Счетчик:'
        }
    }
}

Vue.createApp(App).mount('#app') // выбор корневого html

