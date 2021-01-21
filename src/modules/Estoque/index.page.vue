<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <form-estoque :produto="editedItem"></form-estoque>
    </v-dialog>
    <v-dialog v-model="dialog_historico" max-width="700px" class="px-4">
      <historico-estoque :produto="historico_produto_selected" :desserts="historico_selected"></historico-estoque>
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

        <template v-slot:item.qtd="{ item }">
          <v-chip :color="getQtdColor(item)" dark>
            {{ item.qtd }}
          </v-chip>
          
        </template>
        <template v-slot:item.preco_venda="{ item }">
          {{ item.preco_venda }} AOA
        </template>
        <template v-slot:item.lucro_un="{ item }">
          {{ item.preco_venda - item.preco_compra }} AOA
        </template>
        <template v-slot:item.preco_compra="{ item }">
          {{ item.preco_compra }} AOA
        </template>
        <template v-slot:item.t_venda="{ item }">
          {{ item.preco_venda * item.qtd }} AOA
        </template>
        <template v-slot:item.t_compra="{ item }">
          {{ item.preco_compra * item.qtd }} AOA
        </template>
        <template v-slot:item.lucro="{ item }">
          <v-chip color="green" dark>
            {{ (item.preco_venda - item.preco_compra) * item.qtd }} AOA
          </v-chip>
        </template>
        <template v-slot:item.edit="{ item }">
          
          <v-icon class="mr-2" @click="update(item), (dialog = true)" color="primary">
            mdi-update
          </v-icon>
        </template>
        <template v-slot:item.historico="{ item }">
          <v-btn small color="primary" @click="searchHistorico(item)">
            Histórico
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import * as service from "./service.js";
import * as serviceProduto from "../Produto/service.js";
export default {
  data() {
    return {
      search: null,
      headers: [
        { text: "#", value: "id" },
        { text: "Descrição", value: "descricao" },
        { text: "Unidade", value: "unidade" },
        { text: "Preço compra UN", value: "preco_compra" },
        { text: "Preço venda UN", value: "preco_venda" },
        { text: "lucro UN", value: "lucro_un", sortable: true },
        { text: "Qtd", value: "qtd" },
        { text: "Total compra", value: "t_compra" },
        { text: "Total venda", value: "t_venda" },

        { text: "lucro", value: "lucro", sortable: true },
        { text: "", value: "edit", sortable: false },
        { text: "", value: "historico", sortable: false },
      ],
      desserts: [],
      dialog: false,
      dialog_historico: false,
      editedIndex: -1,
      editedItem: {},
      movimento: {
        pdvId: 1,
        produtoId: null,
        movimento: "in",
        qtd: null,
        preco: null
      },
      historico_selected: {},
      historico_produto_selected: null
    };
  },
  mounted() {
    this.readAll();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Actualizar estoque"
        : "Actualizar estoque";
    },
  },
  methods: {
    readAll() {
      serviceProduto.readAll().then((res) => {
        console.log(res);
        this.desserts = res.data;
      });
    },
    update(item) {
      this.editedItem = item;
      this.movimento.produtoId = item.id
    },
    deleteItem(item) {
      console.log(item);
      service.remove(item.id).then((res) => {
        console.log(res);
      });
    },
    searchHistorico(item){
      this.historico_produto_selected = item
      service.readById(item.id).then(
        res => {
          this.historico_selected = res.data
          this.dialog_historico = true
        }
      )
    },
    getQtdColor(item){
      if(item.qtd <= item.qtd_min) return "error"
      if(item.qtd > (item.qtd_min ) && item.qtd <= (item.qtd_max / 2)) return "orange"
      if(item.qtd > (item.qtd_max / 2) && item.qtd < item.qtd_max ) return "primary"
      if(item.qtd >= item.qtd_max) return "success"
    }
    
  },
};
</script>

<style></style>
