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
            if (this.inputValue.length) {
            this.notes.push(this.inputValue);
            this.inputValue = "";
            }
        },
        toUpperCase(item){
          return item.toUpperCase();
        },
        delNote(index){
            this.notes.splice(index, 1); // Удаляем заметку по индексу
        },
        doubleCount(item){
            console.log('double count');
            return item*2
        }
    },
    computed:{
        doubleCountComputed(){
            console.log('double count');
            return (this.notes.length * 2);
        }
    }
}

Vue.createApp(App).mount('#app') // выбор корневого html

