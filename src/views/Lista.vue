
<template>
<v-container>
  <v-main class=" col-md-6 mx-auto text-center mt-10" >
        <h1 class="text-center mb-7 mt-7">Listagem de Clientes</h1>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            CPF
          </th>
            <th class="text-left">
            Telefone
          </th>
          <th class="text-left">
            
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in customers"
          :key="customer.id"
        >
          <td>{{ customer.name }}</td>
          <td>{{ customer.cpf }}</td>
          <td>{{ customer.phones }}</td>
          <td>
            <router-link :to="{ name: 'updateCustomer', params: {id:customer.id}}">Editar</router-link> | 
            <router-link :to="{ name: 'deleteCustomer', params: {id:customer.id}}">Excluir</router-link>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
   </v-main>
  </v-container>
</template>

<script>

import api from '@/config/axios.js'

export default {

    name: 'Lista',

    data(){
        return {
            customers:[],
        }
    },

  mounted() {
    this.loadCustomers()
  },

    methods: {

      loadCustomers() {
            api.get(`customers/`).then(response => {
                this.customers = response.data
            })
        },

    },
}

</script>