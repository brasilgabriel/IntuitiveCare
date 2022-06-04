const router = require('express').Router();
import Operadora from '../models/Operadora';

router.post('/', async (req: any, res: any) => {
    const { id, registroANS, cnpj, razaoSocial, nomeFantasia, modalidade, logradouro,
        numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, enderecoEletronico,
        representante, cargoRepresentante, dataRegistroANS }: any = req.body;

    const operadora: any = {
        id,
        registroANS,
        cnpj, razaoSocial,
        nomeFantasia,
        modalidade,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        ddd,
        telefone,
        fax,
        enderecoEletronico,
        representante,
        cargoRepresentante,
        dataRegistroANS
    }

    try {
        await Operadora.create(operadora)
        res.status(201).json({ mensagem: 'Operadora cadastrada com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/', async (req: any, res: any) => {
    const { id, registroANS, cnpj, razaoSocial, nomeFantasia, modalidade, logradouro,
        numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, enderecoEletronico,
        representante, cargoRepresentante, dataRegistroANS } = req.query;

    try {
        const operadoras = await Operadora.find();

        // filtro para o resultado da pesquisa
        const resultado = operadoras.filter(operadora => {
            return id !== undefined ? operadora.id.includes(id)
                : registroANS !== undefined ? operadora.registroANS.includes(registroANS)
                    : cnpj !== undefined ? operadora.cnpj.includes(cnpj)
                        : razaoSocial !== undefined ? operadora.razaoSocial.includes(razaoSocial)
                            : nomeFantasia !== undefined ? operadora.nomeFantasia.includes(nomeFantasia)
                                : modalidade !== undefined ? operadora.modalidade.includes(modalidade)
                                    : logradouro !== undefined ? operadora.logradouro.includes(logradouro)
                                        : numero !== undefined ? operadora.numero.includes(numero)
                                            : complemento !== undefined ? operadora.complemento.includes(complemento)
                                                : bairro !== undefined ? operadora.bairro.includes(bairro)
                                                    : cidade !== undefined ? operadora.cidade.includes(cidade)
                                                        : uf !== undefined ? operadora.uf.includes(uf)
                                                            : cep !== undefined ? operadora.cep.includes(cep)
                                                                : ddd !== undefined ? operadora.ddd.includes(ddd)
                                                                    : telefone !== undefined ? operadora.telefone.includes(telefone)
                                                                        : fax !== undefined ? operadora.fax.includes(fax)
                                                                            : enderecoEletronico !== undefined ? operadora.enderecoEletronico.includes(enderecoEletronico)
                                                                                : representante !== undefined ? operadora.representante.includes(representante)
                                                                                    : cargoRepresentante !== undefined ? operadora.cargoRepresentante.includes(cargoRepresentante)
                                                                                        : dataRegistroANS !== undefined ? operadora.dataRegistroANS.includes(dataRegistroANS)
                                                                                            : ''
        })

        resultado.length === 0
            ? res.status(200).json(operadoras)
            : res.status(200).json(resultado)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.patch('/:id', async (req: any, res: any) => {
    const idOperadora = req.params.id;

    const { id, registroANS, cnpj, razaoSocial, nomeFantasia, modalidade, logradouro,
        numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, enderecoEletronico,
        representante, cargoRepresentante, dataRegistroANS }: any = req.body;

    const operadora: any = {
        id,
        registroANS,
        cnpj, razaoSocial,
        nomeFantasia,
        modalidade,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        ddd,
        telefone,
        fax,
        enderecoEletronico,
        representante,
        cargoRepresentante,
        dataRegistroANS
    }

    try {
        const operadoraAtualizada = await Operadora.updateOne({ _id: idOperadora }, operadora)
        res.status(200).json(operadora)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/:id', async (req: any, res: any) => {
    const id = req.params.id;

    const operadora = await Operadora.findOne({ _id: id });

    if (!operadora) {
        res.status(422).json({ mensagem: 'A operadora não foi encontrada' });
        return
    }

    try {
        await Operadora.deleteOne({ _id: id })
        res.status(200).json({ mensagem: 'Operadora removida com sucesso' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router;