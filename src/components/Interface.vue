<template>
    <header>
        <div>
            <img id="logo_intuitivecare" src="https://static.wixstatic.com/media/b91e09_95ec298e6ed645d197af640983985c6c~mv2.png/v1/fill/w_234,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_ic_v5_20210604_a4_logo_hQ.png" alt="Logo IntuitiveCare">
        </div> 
    </header>

    <section>  
        <div id="div_pesquisar">
            <p>Relação de Operadoras Ativas ANS</p>    
            <input id="input_pesquisar" v-model="pesquisa" @keyup="buscarRelatorio(pesquisa)" type="text" placeholder="Pesquisar dados">
        </div>   

        <div>
            <tabela :relatorio="relatorio"></Tabela>
        </div>

        <div id="div_opcoes">
            <Opcoes></Opcoes>
        </div>
    </section>    
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Tabela from './Tabela.vue';
import Opcoes from "./Opcoes.vue";

@Options({
  components: {
    Tabela,
    Opcoes
  },
})

export default class Interface extends Vue {
    relatorio: any = {};
    pesquisa: string = '';

    async buscarRelatorio(pesquisa: string) {

        if (this.pesquisa.length > 0) {
            const req = await fetch(`http://localhost:3000/relatorio?q=${pesquisa}`);
            const data = await req.json();

            this.relatorio = data;
        } else {
            const req = await fetch("http://localhost:3000/relatorio");
            const data = await req.json();
        
            this.relatorio = data;
        }     
    }

    mounted() {
        this.buscarRelatorio(this.pesquisa);
    }
}
</script>

<style lang="scss" scoped>
    header {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100vw;

        #div_pesquisar {
            display: flex;
            justify-content: space-between;
            width: 1100px;
            margin-top: 50px;

            p {
                font-size: 20px;
                color: #08c988;    
            }

            input {
                width: 400px;
                height: 30px;
                font-size: 17px;
                text-align: center;
                outline: none;
                border: none;
                border-radius: 10px;
                background-color: #08c988;          
            }

            input::-webkit-input-placeholder {
                color: white;
            }
        }

        #div_opcoes {
            width: 75%;
        }
    }
</style>