<template>
  <v-app>

   <v-main>
           <v-card width="500px" class="mx-auto mt-10">
               <v-card-title>Tel Login</v-card-title>
               <v-card-text>
                   <v-text-field 
                   label="Username"
                   prepend-icon="mdi-account-circle" />
                   <v-text-field 
                   label="Senha" 
                   :type="mostrarSenha ? 'text' : 'password'"
                   prepend-icon="mdi-lock"
                   :append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
                   @click:append="mostrarSenha = !mostrarSenha"/>
               </v-card-text>

               <v-divider></v-divider>
               <v-card-actions>
                   <v-btn color="info">Logar</v-btn>
                   <v-spacer></v-spacer>
                   <v-btn color="success">Registrar</v-btn>
               </v-card-actions>
           </v-card>
    </v-main>   
  </v-app>
</template>

<script>
export default {
    data()
    {
        return{
            mostrarSenha:false
        }
    }
}
</script>