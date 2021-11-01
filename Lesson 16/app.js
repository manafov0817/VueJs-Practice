new Vue({
    el: '#vue-app',
    data: {
        output: 'Avengers'
    },
    methods: {
        showMovie: function() {
            // console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    },
    computed: {

    }
})