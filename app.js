const App = {
    data(){
        return {
            counter: 0, //должны быть видны в шаблоне
            titleCounter: 'Счетчик:',
            title: 'Список заметок',
            placeholderVue: 'Введите название заметки',
            inputValue: "",
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods:{
        inputChangeHandler(event){
            // console.log('inputChangeHandler', event.target.value);
            this.inputValue = event.target.value; // перерисовыем конкретно это место
        },
        addNewNote(event) {
            this.notes.push(this.inputValue);
            this.inputValue = "";
        },
        delNote(index){
            this.notes.splice(index, 1); // Удаляем заметку по индексу
        }
    }
}

Vue.createApp(App).mount('#app') // выбор корневого html

