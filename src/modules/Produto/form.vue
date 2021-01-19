<template>
  <div>
    <v-row justify="center" class="pt-4">
      <v-col xs="10" sm="8" md="6">
        <v-card class="px-4 py-4 pb-4" style="text-align: center;">
          <h1>Cadastrar Produto</h1>
          <v-row class="pt-4">
            <v-col xs="12" sm="12">
              <v-text-field label="Descrição" outlined dense v-model="produto.descricao"></v-text-field>
            </v-col>
            <v-col xs="12" sm="12">
              <v-text-field label="Unidade" outlined dense></v-text-field>
            </v-col>
            <v-col xs="12" sm="12" md="6">
              <v-text-field
                label="Preço de compra"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col xs="12" sm="12" md="6">
              <v-text-field
                label="Preço de venda"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn color="primary">Salvar</v-btn>
            </v-col>
            <v-col>
              <v-btn color="error">Limpar</v-btn> </v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    
    <form action="post"></form>
  </div>
</template>

<script>
import * as ServiceProduto  from "./service.js";
import { Produto } from './produto.ts';
export default {
    data(){
        return {
            produto: Produto
        }
    },
    methods: {
        get(){
            
            
        },
        create(){

        }
    },
    mounted(){
        this.get()
    }
};
</script>

<style></style>
