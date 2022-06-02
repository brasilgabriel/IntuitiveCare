<template>
    <div>
        <table class="table table-success table-striped table-sm">
            <thead id="thead">
                <tr>
                    <th>#</th>
                    <th>Registro ANS</th>
                    <th>CNPJ</th>
                    <th>Razão Social</th>
                    <th>Nome Fantasia</th>
                    <th>Modalidade</th>
                    <th>Logradouro</th>
                    <th>Número</th>
                    <th>Complemento</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>CEP</th>
                    <th>DDD</th>
                    <th>Telefone</th>
                    <th>Fax</th>
                    <th>Endereço Eletrônico</th>
                    <th>Representante</th>
                    <th>Cargo Representante</th>
                    <th>Data Registro ANS</th>
                </tr>
            </thead>

            <tbody>
                <tr v-bind:class="selecionar ? tr_selecionar : ''" @click="editar === true ? editarDados(dados.id) : excluir === true ? excluirDados(dados.id) : ''" v-for="dados in relatorio" v-bind:key="dados.id">
                    <td>
                        <b v-show="!selecionar">{{ dados.id + 1 }}</b>

                        <span v-show="editar && selecionar" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </span>  

                        <span v-show="excluir && selecionar">
                            <svg id="icon_lixeira" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </span>                                    
                    </td>
                    <td>{{ dados.registroANS }}</td>
                    <td>{{ dados.cnpj }}</td>
                    <td>{{ dados.razaoSocial }}</td>
                    <td>{{ dados.nomeFantasia }}</td>
                    <td>{{ dados.modalidade }}</td>
                    <td>{{ dados.logradouro }}</td>
                    <td>{{ dados.numero }}</td>
                    <td>{{ dados.complemento }}</td>
                    <td>{{ dados.bairro }}</td>
                    <td>{{ dados.cidade }}</td>
                    <td>{{ dados.uf }}</td>
                    <td>{{ dados.cep }}</td>
                    <td>{{ dados.ddd }}</td>
                    <td>{{ dados.telefone }}</td>
                    <td>{{ dados.fax }}</td>
                    <td>{{ dados.enderecoEletronico }}</td>
                    <td>{{ dados.representante }}</td>
                    <td>{{ dados.cargoRepresentante }}</td>
                    <td>{{ dados.dataRegistroANS }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Tabela extends Vue {
    @Prop() relatorio!: any;
    @Prop() selecionar!: boolean;
    @Prop() editar!: boolean;
    @Prop() excluir!: boolean;

    selecionado: boolean = false;
    tr_selecionar: string = 'tr_selecionar';  

    editarDados(id: number) {
        this.$emit('editarDado', this.relatorio[id]);
    }

    async excluirDados(id: number) {
        await fetch(`http://localhost:3000/relatorio/${id}`,{
            method: "DELETE"
        });

        this.$emit('atualizarDados');
    }
}
</script>

<style lang="scss" scoped>
    div {
        overflow-x: scroll;
        overflow-y: scroll;
        width: 80vw;
        height: 60vh;

        table {
            text-align: center;

            #thead{ 
                background-color: black;
                color: white;
            }

            tbody {
                .tr_selecionar td span {
                    svg {                    
                        width: 25px;
                        height: 25px;
                    }

                    #icon_lixeira {
                        color: #ff0019;
                    }
                }
                .tr_selecionar:hover {
                    cursor: pointer;
                    background-color: rgba(96, 96, 96, 0.337);
                }         
            }
        }
    }
</style>