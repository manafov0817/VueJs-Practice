new Vue({
    el: '#vue-app',
    data: {
        name: 'Məhəmməd',
        surname: 'Manafov',
        website: 'http://manafov.site/',
        websiteTag: '<a href="http://manafov.site/">Manafov\'s site </a>',
        age: 20,
        x: 0,
        y: 0
    },
    methods: {
        greet: function() {
            return `Hello there ${this.name}`
        },
        saysomething: function(giventext) {
            return giventext;
        },
        add: function(year) {
            this.age += year;
        },
        subtract: function(year) {
            this.age += year;
        },
        mousetracker: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY
        }
    }

});