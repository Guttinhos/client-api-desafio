<template>
  <v-app>
    <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>TelApi</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          :to="{ name: 'RegistrarCliente'}"
          link
    >
         <v-list-item-content>
            <v-list-item-title>Cadastrar Cliente</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      
      <v-list dense>
        <v-list-item
          :to="{ name: 'Lista'}"
          link
    >
         <v-list-item-content>
            <v-list-item-title>Lista de Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense>
        <v-list-item
          :to="{ name: 'Registrarusuario'}"
          link
    >
         <v-list-item-content>
            <v-list-item-title>Cadastrar Usuario</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <v-list dense>
        <v-list-item
          :to="{ name: 'ListaUsuario'}"
          link
    >
         <v-list-item-content>
            <v-list-item-title>Lista de  Usuarios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
};
</script>
