new Vue({
    el: '#vue-app',
    data: {
        name: '',
        surname: ''
    },
    methods: {
        logName: function() {
            this.name = document.querySelector('#name').value;
        },
        logSurname: function() {
            this.surname = document.querySelector('#surname').value;
        }
    },
})