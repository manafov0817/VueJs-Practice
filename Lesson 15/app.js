let data = {
    name: 'Yoshi'
}

Vue.component('greeting', {
    template: "<p>Hey there i am {{ name }} <button v-on:click='changeName'> Change Name</button></p>",
    data: function() {
        return data
    },
    methods: {
        changeName: function() {
            this.name = "Manafli"
        }
    }
})

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});