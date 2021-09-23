<template>
<v-container>
    <v-main class=" col-md-5 mx-auto text-center mt-10" >

                <h1 class="text-center">Cadastro de usuários</h1>

         <v-text-field
            label='Nome'
            hide-details='auto'
            filled
            class="mb-4"
            v-model="user.name"
            >
        </v-text-field>

        <v-text-field
            label='email'
            type="email"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="user.email"
            >
        </v-text-field>
        
        <v-text-field
            label='Senha'
            type="password"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="user.password"
            >
        </v-text-field>

         <v-btn
            class="mb-6"
            color="success"
            @click="save"
            >
            Cadastrar
        </v-btn>   
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
            snackbar: false,
            alert: ''
        }
    },

    methods: {
        
        save() {
            api.post('/users', this.user).then(response => {
                this.alert = 'Registro cadastrado com sucesso'
                this.snackbar = true
                this.user = {
                    name: '',
                    email: '',
                    password: ''      
                }
            })
        }

    },
}
</script>