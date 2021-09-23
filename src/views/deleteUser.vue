<template>
<v-container>
    
    <v-main class=" col-md-5 mx-auto text-center mt-10" >
        <div v-if="showForm">
                <h1 class="text-center">Excluir Usuario</h1>
        
         <v-text-field
            label='Nome'
            disabled
            hide-details='auto'
            filled
            class="mb-4"
            v-model="user.name"
            >
        </v-text-field>

        <v-text-field
            label='email'
            disabled
            type="email"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="user.email"
            >
        </v-text-field>
    
        
         <v-btn
            class="mb-6"
            color="error"
            @click="save"
            >
            Excluir
        </v-btn>  
        </div>

        <v-snackbar
            v-model="snackbar"
        >
            {{ alert }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

</v-main>
</v-container>
</template>

<script>
import api from '@/config/axios.js'


export default {

    name: 'Home',

    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            },
            showForm: true,
            snackbar: false,
            alert: '',
        }
    },

    mounted() {
        const id = this.$route.params.id
        this.loadUser(id) 
    },

    methods: {
        
        loadUser(id) {
            api.get(`users/${id}`).then(response => {
                this.user = response.data
            })
        },

        save() {
            api.delete(`users/${this.user.id}`, this.user).then(response => {
                this.alert = 'Registro exluido com sucesso'
                this.snackbar = true
                this.showForm = false
            })
        }
        

    },
}
</script>