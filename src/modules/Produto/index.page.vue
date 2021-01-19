<template>
  <div>
    <v-card class="ma-8 pa-8">
      <v-card-title>
        Produtos
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          outlined
          dense
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as service from "./service.js";
export default {

  data() {
    return {
      search: null,
      headers: [
        { text: "Descrição", value: "descricao" },
        { text: "Unidade", value: "unidade" },
        { text: "Preço venda", value: "preco_venda" },
        { text: "Preço compra", value: "preco_compra" },
        { text: "lucro", value: "lucro" },
      ],
      desserts: [
        {
          descricao: "Cuca",
          unidade: "1pc",
          preco_venda: 166,
          preco_compra: 131,
          lucro: 35
        },
        {
          descricao: "Cuca 3/500",
          unidade: "3pc",
          preco_venda: 500,
          preco_compra: 393,
          lucro: 107
        },
        {
          descricao: "The Best",
          unidade: "1pc",
          preco_venda: 100,
          preco_compra: 60,
          lucro: 40
        },
        {
          descricao: "Aspen",
          unidade: "1pc",
          preco_venda: 50,
          preco_compra: 20,
          lucro: 30
        },
      ],
    };
  },
  mounted(){
      this.readAll()
  },
  methods: {
      readAll(){
          service.readAll().then(
              res => {
                  console.log(res);
                  this.desserts = res.data
              }
          )
      }
  }
};
</script>

<style></style>
