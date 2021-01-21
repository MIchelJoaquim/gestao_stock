import Vue from 'vue'
import VueRouter from 'vue-router'
import beforeEach from "./beforeEach";

import Home from "../modules/home/home.page";
import NotFound from "../modules/home/notFound.page";
import ProdutoPage from "../modules/Produto/index.page";
import ProdutoAdd from "../modules/Produto/form";
import EstoquePage from "../modules/Estoque/index.page";
Vue.use(VueRouter);
 
const router =  new VueRouter({
    routes:[
        // {
        //     name: '/',
        //     path: '/', 
        //     component: Loja,
        //     meta: {
        //         layout: 'defaultLayout'
        //     }
        // },
        {
            name: 'home',
            path: '/', 
            component: Home,
            // meta: {
            //     layout: 'defaultLayout'
            // }
        },
        {name: "Produtos", path:"/produtos/listar", component: ProdutoPage},
        {name: "Estoque", path:"/estoque", component: EstoquePage},
        {name: "Cadastrar Produtos", path:"/produtos/cadastrar", component: ProdutoAdd},
        
        {
            name: 'Pagina nao encontrada', path: '/*', component: NotFound,
            // meta: {
            //     layout: 'defaultLayout'
            // }
        },
        
    ],
    mode: 'history'
});

router.beforeEach(beforeEach);

export default router;