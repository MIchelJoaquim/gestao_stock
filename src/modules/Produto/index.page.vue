<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <form-edit-produto :produto="editedItem" @edited="dialog = false"></form-edit-produto>
    </v-dialog>
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
      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:item.preco_venda="{ item }">
          <v-chip color="blue" dark>
            {{ item.preco_venda }}
          </v-chip>
        </template>
        <template v-slot:item.lucro="{ item }">
          <v-chip color="green" dark>
            {{ item.preco_venda - item.preco_compra }}
          </v-chip>
        </template>
        <template v-slot:item.edit="{ item }">
          <v-icon class="mr-2" @click="editItem(item)" color="primary">
            mdi-update
          </v-icon>
        </template>
        <template v-slot:item.delete="{ item }">
          <v-icon @click="deleteItem(item)" color="error">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
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
        { text: "#", value: "id" },
        { text: "Descrição", value: "descricao" },
        { text: "Unidade", value: "unidade" },
        { text: "Qtd Mínima", value: "qtd_min" },
        { text: "Qtd Máxima", value: "qtd_max" },
        { text: "Preço venda", value: "preco_venda" },
        { text: "Preço compra", value: "preco_compra" },
        { text: "lucro", value: "lucro",  sortable: true },
        { text: "", value: "edit",  sortable: false },
        { text: "", value: "delete", sortable: false},
        { text: "", value: "edit_preco", sortable: false},
      ],
      desserts: [
        {
          descricao: "Cuca",
          unidade: "1pc",
          preco_venda: 166,
          preco_compra: 131,
          lucro: 35,
        },
        {
          descricao: "Cuca 3/500",
          unidade: "3pc",
          preco_venda: 500,
          preco_compra: 393,
          lucro: 107,
        },
        {
          descricao: "The Best",
          unidade: "1pc",
          preco_venda: 100,
          preco_compra: 60,
          lucro: 40,
        },
        {
          descricao: "Aspen",
          unidade: "1pc",
          preco_venda: 50,
          preco_compra: 20,
          lucro: 30,
        },
      ],
      dialog: false,
      editedItem: null
    };
  },
  mounted() {
    this.readAll();
  },
  methods: {
    readAll() {
      service.readAll().then((res) => {
        console.log(res);
        this.desserts = res.data;
      });
    },
    editItem(item){
        // console.log(item);
        this.editedItem = item
        this.dialog = true
    },
    deleteItem(item){
        console.log(item);
        service.remove(item.id).then(
            res => {
                console.log(res);
            }
        )
    },

  },
};
</script>

<style></style>
