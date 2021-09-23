<template>
<v-container>
   <v-main class=" col-md-6 mx-auto text-center mt-10" >
       <div v-if="showForm">
    <h1 class="text-center">Exclusão de Cliente</h1>

         <v-text-field
            label='Nome'
            disabled
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.name"
            >
        </v-text-field>

        <v-text-field
            label='CPF'
            disabled
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.cpf"
            >
        </v-text-field>

        <v-text-field
            label='Telefone'
            disabled
            type="phone"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.phones"
            >
        </v-text-field>

        <v-text-field
            label='Data de Nascimneto'
            disabled
            type="date"
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.birth_date"
            >
        </v-text-field>

        <v-text-field
            label='RG'
            disabled
            hide-details='auto'
            filled
            class="mb-4"
            v-model="customer.rg"
            >
        </v-text-field>

        <v-select
            :items="birth_state"
            disabled
            filled
            label="Selecione o estado"
            v-model="customer.birth_state"
        ></v-select>


         <v-btn
            class="mb-6"
            color="error"
            @click="deleteCustomer"
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
            showForm: true,
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
            alert: ''
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
        
        deleteCustomer() {
            api.delete(`/customers/${this.customer.id}`).then(response => {
                this.alert = 'Registro excluido com sucesso'
                this.snackbar = true
                this.customer = {
                    user_id: '1',
                    name: '',
                    cpf: '',
                    phones: '',
                    birth_date:'',
                    rg:'',
                    birth_state: '',
                }
                this.showForm = false
            })
        }

    },
}
</script>