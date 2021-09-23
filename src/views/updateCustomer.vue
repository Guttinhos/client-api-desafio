<template>
<v-container>
   <v-main class=" col-md-6 mx-auto text-center mt-10" >
    <h1 class="text-center">Editar Cliente</h1>

         <v-text-field
            label='Nome'
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.name"
            >
        </v-text-field>

        <v-text-field
            label='CPF'
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.cpf"
            >
        </v-text-field>

        <v-text-field
            label='Telefone'
            type="phone"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.phones"
            >
        </v-text-field>

        <v-text-field
            label='Data de Nascimneto'
            type="date"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.birth_date"
            >
        </v-text-field>

        <v-text-field
            label='RG'
            
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.rg"
            >
        </v-text-field>

        <v-select
            :items="birth_state"
            filled
            label="Selecione o estado"
            v-model="customer.birth_state"
        ></v-select>


         <v-btn
            class="mb-6"
            color="success"
            @click="save"
        >
            Registrar
        </v-btn> 

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
            customer: {
                user_id: '1',
                name: '',
                cpf: '',
                phones: '',
                birth_date:'',
                rg:'',
                birth_state: '',
            },
            birth_state: ['BA', 'SP'],
            snackbar: false,
            alert: '',
        }
    },

    mounted() {
        const id = this.$route.params.id
        this.loadCustomer(id) 
    },

    methods: {
        
        loadCustomer(id) {
            api.get(`customers/${id}`).then(response => {
                this.customer = response.data
            })
        },

        save() {
            api.put(`customers/${this.customer.id}`, this.customer).then(response => {
                this.alert = 'Registro atualizado com sucesso'
                this.snackbar = true
            })
        }

    },
}
</script>