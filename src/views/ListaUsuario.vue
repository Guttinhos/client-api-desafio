
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
            Email
          <th class="text-left">
            
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="{ name: 'updateUser', params: {id:user.id}}">Editar</router-link> | 
            <router-link :to="{ name: 'deleteUser', params: {id:user.id}}">Excluir</router-link>
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
            users:[],
        }
    },

  mounted() {
    this.loadUsers()
  },

    methods: {

      loadUsers() {
            api.get(`users/`).then(response => {
                this.users = response.data
            })
        },

    },
}

</script>