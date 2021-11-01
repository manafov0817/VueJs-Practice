let one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Hello from app one :)';
        }
    }
});

let two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'Vue App Two'

    },
    methods: {
        changeTitle: function() {
            one.title = 'Something else';
        }
    },
    computed: {
        greet: function() {
            return 'Yo dudes this is app 2 speaking to ya :)';
        }
    }
})