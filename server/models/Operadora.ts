import mongoose from 'mongoose';

interface IOperadora {
    registroANS: string;
    cnpj: string;
    razaoSocial: string,
    nomeFantasia: string,
    modalidade: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string,
    ddd: string,
    telefone: string,
    fax: string,
    enderecoEletronico: string,
    representante: string,
    cargoRepresentante: string,
    dataRegistroANS: string,
}

const operadoraSchema = new mongoose.Schema<IOperadora>({
    registroANS: { type: String },
    cnpj: { type: String },
    razaoSocial: { type: String },
    nomeFantasia: { type: String },
    modalidade: { type: String },
    logradouro: { type: String },
    numero: { type: String },
    complemento: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    uf: { type: String },
    cep: { type: String },
    ddd: { type: String },
    telefone: { type: String },
    fax: { type: String },
    enderecoEletronico: { type: String },
    representante: { type: String },
    cargoRepresentante: { type: String },
    dataRegistroANS: { type: String }
});

export default mongoose.model<IOperadora>('Operadora', operadoraSchema)