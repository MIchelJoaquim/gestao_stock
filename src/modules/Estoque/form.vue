<template>
  <v-card>
    <v-card-title>
      <span class="headline">Actualizar estoque</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="produto.descricao"
              label="Descricao"
              readonly
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="produto.qtd"
              label="Quantidade Existente"
              readonly
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="movimento.qtd"
              label="Quantidade entrada/saida"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" v-if="movimento.movimento == '1'">
            <v-text-field
              v-model="movimento.preco"
              label="Preco"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col>
            <v-radio-group v-model="movimento.movimento" row>
              <v-radio label="Entrada" color="success" value="1"></v-radio>
              <v-radio label="Saída" color="error" value="0"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">
        Cancelar
      </v-btn>
      <v-btn color="blue darken-1" text @click="save">
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import * as service from "./service.js";
export default {
  props: ["produto"],
  data() {
    return {
      movimento: {
        pdvId: 1,
        produtoId: null,
        movimento: 1,
        qtd: null,
        preco: null,
      },
    };
  },
  created(){
      if(!this.produto){
          this.produto = {
              descricao: null,
              qtd: null
          }
      }
  },
  methods: {
      close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
        this.movimento.pdvId = 1
        this.movimento.produtoId = this.produto.id
        service.create(this.movimento).then(
          res => {
              this.movimento = {}
            console.log(res);
          }
        )
      this.close();
    },
  }
};
</script>

<style></style>
