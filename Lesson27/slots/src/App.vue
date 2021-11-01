<template>
    <div>
        <form-helper>
         
        </form-helper>
    </div>
</template>

<script>

// Imports
import formHelper from '../Components/formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {

        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>