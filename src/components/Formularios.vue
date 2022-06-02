<template>
        <section>
            <div id="div_titulos">
                <h2 v-if="botaoCriar">CRIAR NOVA OPERADORA</h2>
                <h2 v-else>EDITAR OPERADORA</h2>
            </div>

            <form>
                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Registro ANS:</b></label>
                    <label v-else class="form-label"><b>Registro ANS:</b> {{ dados.registroANS }}</label>
                    <input v-model="dadosInputs.registroANS" placeholder="Digite o valor desejado" type="number" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>CNPJ:</b></label>
                    <label v-else class="form-label"><b>CNPJ:</b> {{ dados.cnpj }}</label>
                    <input v-model="dadosInputs.cnpj" type="number" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Razão Social:</b></label>
                    <label v-else class="form-label"><b>Razão Social:</b> {{ dados.razaoSocial }} </label>
                    <input v-model="dadosInputs.razaoSocial" placeholder="Digite o valor desejado" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Nome Fantasia:</b></label>
                    <label v-else class="form-label"><b>Nome Fantasia:</b> {{ dados.nomeFantasia }}</label>
                    <input v-model="dadosInputs.nomeFantasia" type="text" placeholder="Digite o valor desejado" class="form-control">
                </div>
                
                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Modalidade:</b></label>
                    <label v-else class="form-label"><b>Modalidade:</b> {{ dados.modalidade }}</label>
                    <input v-model="dadosInputs.modalidade" placeholder="Digite o valor desejado" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Logradouro:</b></label>
                    <label v-else class="form-label"><b>Logradouro:</b> {{ dados.logradouro }}</label>
                    <input v-model="dadosInputs.logradouro" type="text" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Número:</b></label>
                    <label v-else class="form-label"><b>Número:</b> {{ dados.numero }} </label>
                    <input v-model="dadosInputs.numero" placeholder="Digite o valor desejado" type="number" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Complemento:</b></label>
                    <label v-else class="form-label"><b>Complemento:</b> {{ dados.complemento }}</label>
                    <input v-model="dadosInputs.complemento" type="text" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Bairro:</b></label>
                    <label v-else class="form-label"><b>Bairro:</b> {{ dados.bairro }}</label>
                    <input v-model="dadosInputs.bairro" placeholder="Digite o valor desejado" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Cidade:</b></label>
                    <label v-else class="form-label"><b>Cidade:</b> {{ dados.cidade }}</label>
                    <input v-model="dadosInputs.cidade" type="text" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>UF:</b></label>
                    <label v-else class="form-label"><b>UF:</b> {{ dados.uf }} </label>
                    <input v-model="dadosInputs.uf" placeholder="Digite o valor desejado" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>CEP:</b></label>
                    <label v-else class="form-label"><b>CEP:</b> {{ dados.cep }}</label>
                    <input v-model="dadosInputs.cep" type="number" placeholder="Digite o valor desejado" class="form-control">
                </div>
                
                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>DDD:</b></label>
                    <label v-else class="form-label"><b>DDD:</b> {{ dados.ddd }}</label>
                    <input v-model="dadosInputs.ddd" placeholder="Digite o valor desejado" type="number" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Telefone:</b></label>
                    <label v-else class="form-label"><b>Telefone:</b> {{ dados.telefone }}</label>
                    <input v-model="dadosInputs.telefone" type="number" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Fax:</b></label>
                    <label v-else class="form-label"><b>Fax:</b> {{ dados.fax }} </label>
                    <input v-model="dadosInputs.fax" placeholder="Digite o valor desejado" type="number" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Endereço Eletrônico:</b></label>
                    <label v-else class="form-label"><b>Endereço Eletrônico:</b> {{ dados.enderecoEletronico }}</label>
                    <input v-model="dadosInputs.enderecoEletronico" type="email" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Representante:</b></label>
                    <label v-else class="form-label"><b>Representante:</b> {{ dados.representante }}</label>
                    <input v-model="dadosInputs.representante" type="text" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Cargo Representante:</b></label>
                    <label v-else class="form-label"><b>Cargo Representante:</b> {{ dados.cargoRepresentante }} </label>
                    <input v-model="dadosInputs.cargoRepresentante" placeholder="Digite o valor desejado" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label v-if="botaoCriar" class="form-label"><b>Data Registro ANS:</b></label>
                    <label v-else class="form-label"><b>Data Registro ANS:</b> {{ dados.dataRegistroANS }}</label>
                    <input v-model="dadosInputs.dataRegistroANS" type="date" placeholder="Digite o valor desejado" class="form-control">
                </div>

                <div>
                    <button v-if="botaoCriar" @click="criarNovaOperadora()" type="button" class="btn btn-primary">Confirmar</button>
                    <button v-else @click="receberDadosNovos()" type="button" class="btn btn-primary">Confirmar</button>         
                </div>            
            </form>
        </section>      
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class Formularios extends Vue {
    @Prop() dados!: any;
    @Prop() botaoCriar!: boolean;

    dadosNovos: any = {};
    dadosInputs: any = {
        registroANS: '',
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
        modalidade: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        ddd: '',
        telefone: '',
        fax: '',
        enderecoEletronico: '',
        representante: '',
        cargoRepresentante: '',
        dataRegistroANS: ''
    };

    receberDadosNovos() {
        // loop para filtrar as propriedades vazias
        for (const dado in this.dadosInputs) {
            this.dadosInputs[dado] !== '' ? this.dadosNovos[dado] = this.dadosInputs[dado] : '';
        }

        this.atualizarDados()
    }

    async criarNovaOperadora() {
        const dataJSON = JSON.stringify(this.dadosInputs);

        await fetch(`http://localhost:3000/relatorio`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: dataJSON
        })

        // emitindo para atualizar os dados da tabela
        this.$emit('atualizarDados');
        this.$emit('operadoraCriada');
        this.limparInputs();
    }

    async atualizarDados() {
        const dataJSON = JSON.stringify(this.dadosNovos);

        await fetch(`http://localhost:3000/relatorio/${this.dados.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: dataJSON
        })

        this.$emit('atualizarDados');
        this.$emit('operadoraEditada');
        this.limparInputs();
    }

    limparInputs() {
        for (const dado in this.dadosInputs) {
            this.dadosInputs[dado] = '';
        }
    }
}
</script>

<style lang="scss">
    section {
        margin-top: 30px;

        #div_titulos h2 {
            font-weight: 600;
            font-size: 35px;
        }

        form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            width: 1000px;
        
            div {
                .form-control {
                    width: 400px;
                    background-color: #7885ff73;
                }

                .form-control:focus {
                    background-color: #7885ff73;
                }

                button {
                    width: 200px;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        section {
            #div_titulos h2 {
                font-size: 30px
            }

            form {
                width: 700px;

                div {
                    .form-label {
                        font-size: 15px;
                    }

                    .form-control {
                        width: 300px;
                    }
                    button {
                        width: 150px;
                    }
                }
            }
        }
    }
</style>