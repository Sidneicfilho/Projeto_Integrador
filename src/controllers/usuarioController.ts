// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
 
export const index = (req: Request, res: Response) => {
    res.redirect('/etapa1');
};
 
let formData: { nome?: string; endereco?: string; bairro?: string; cidade?: string; estado?: string; cep?: string; tel_res?: string; telefone?: string; tel_emergencia?: string; data_nascimento?: Date; sexo?: string; Profissao?: string; email?: string; } = {};
 
let formData2: {
    queixa?: string;
    podologo?: string;
    frequencia?: string;
    medicamentos?: string;
    medicamentos_quais?: string;
    alergico?: string;
    substancias?: string;
    posicao?: string[];
    calcado_numero?: string;
    calcado_tipo?: string;
    fumante?: string;
    menstruacao?: string;
    gestante?: string;
    dum?: Date;
    atividade?: string;
    atividade_frequencia?: string;
} = {};
 
let formData3: {
    osteoporose?: boolean;
    renal?: boolean;
    epilepsia?: boolean;
    quimioRadio?: boolean;
    hipotiroidismo?: boolean;
    hepatite?: boolean;
    onco?: boolean;
    cardiopatia?: boolean;
    hipertensao?: boolean;
    reumatismo?: boolean;
    hanseniase?: boolean;
    cirurgiaMMII?: boolean;
    marcaPasso?: boolean;
    hipotensao?: string;
    insulina?: string;
    dietaHidrica?: string;
    injetavel?: boolean;
    dietaAlimentar?: boolean;
    viaOral?: boolean;
    taxaGlicemica?: string;
} = {};
 
let formData4: {
    tipo_pisada?: string[];
    flexivel?: string[];
    rigido?: string[];
    espalmado?: string[];
    martelo?: string[];
    queda_metatarso?: string[];
    tipo_marcha?: string[];
    qual_marcha?: string;
    joelho?: string[];
    articulacao?: string[];
    sensibilidade?: string[];
} = {};
 
let formData5 = {
    unha_caracol: false,
    unha_cunha: false,
    unha_funil: false,
    unha_gancho: false,
    unha_involuta: false,
    unha_normal: false,
    unha_telha: false,
    unha_torques: false,
    pd_halux: false,
    pd_2: false,
    pd_3: false,
    pd_4: false,
    pd_5: false,
    pe_halux: false,
    pe_2: false,
    pe_3: false,
    pe_4: false,
    pe_5: false,
    onicoatrofia: false,
    onicocriptose: false,
    onicorrexe: false,
    granuloma: false,
    onicogrifose: false,
    onicolise: false,
    onicofose: false,
    psoriase_ungueal: false,
    onicomicose: false,
    outros_alteracoes_ungueais: ''
};
 
let formData6 = {
    bromidrose: false,
    hidrose: false,
    desidrose: false,
    isquemia: false,
    mal_perfurante: false,
    edema: false,
    tinea: false,
    psoriase: false,
    tungiase: false,
    verruga_plantar: false,
    calo_dorsal: false,
    queratose: false,
    calo_plantar: false,
    hiperqueratose: false,
    calo_interdigital: false,
    perfusao_pd_normal: false,
    perfusao_pd_palido: false,
    perfusao_pd_cianotico: false,
    perfusao_pe_normal: false,
    perfusao_pe_palido: false,
    perfusao_pe_cianotico: false,
    erisipela: false,
    outras_alteracoes_pele: ''
};
 
 
 
 
export const etapa1 = (req: Request, res: Response) => {
    res.render('etapa1');
};
 
export const etapa1Post = (req: Request, res: Response) => {
    const {
        nome, endereco, bairro, cidade,  estado, cep, tel_res, telefone, tel_emergencia, data_nascimento, sexo, Profissao, email
    } = req.body;
 
    formData.nome = nome;
    formData.endereco = endereco;
    formData.bairro = bairro;
    formData.cidade = cidade;
    formData.estado = estado;
    formData.cep = cep;
    formData.tel_res = tel_res;
    formData.telefone = telefone;
    formData.tel_emergencia = tel_emergencia;
    formData.data_nascimento = data_nascimento;
    formData.sexo = sexo;
    formData.Profissao = Profissao;
    formData.email = email;
 
    res.redirect('/etapa2');
 };
 
export const etapa2 = (req: Request, res: Response) => {
    res.render('etapa2');
};
 
export const etapa2Post = (req: Request, res: Response) => {
    const {
        queixa, podologo, frequencia, medicamentos, medicamentos_quais, alergico, substancias, posicao,
        calcado_numero, calcado_tipo, fumante, menstruacao, gestante, dum, atividade, atividade_frequencia
       
    } = req.body;
 
    formData2.queixa = queixa;
    formData2.podologo = podologo;
    formData2.frequencia = frequencia;
    formData2.medicamentos = medicamentos;
    formData2.medicamentos_quais = medicamentos_quais;
    formData2.alergico = alergico;
    formData2.substancias = substancias;
    formData2.posicao = posicao;
    formData2.calcado_numero = calcado_numero;
    formData2.calcado_tipo = calcado_tipo;
    formData2.fumante = fumante;
    formData2.menstruacao = menstruacao;
    formData2.gestante = gestante;
    formData2.dum = dum;
    formData2.atividade = atividade;
    formData2.atividade_frequencia = atividade_frequencia;
   
    res.redirect('/ ');
};
 
/*export const etapa3 = (req: Request, res: Response) => {
    res.render('etapa3', { resumo: formData });
};*/
 
export const etapa3 = (req: Request, res: Response) => {
    res.render('etapa3', { resumo: formData });
};
 
export const etapa3Post = (req: Request, res: Response) => {
    const {
        osteoporose, renal, epilepsia, quimioRadio, hipotiroidismo, hepatite, onco,
        cardiopatia, hipertensao, reumatismo, hanseniase, cirurgiaMMII, marcaPasso, hipotensao, insulina,
        dietaHidrica, injetavel, dietaAlimentar, viaOral, taxaGlicemica
    } = req.body;
   
    formData3.osteoporose = osteoporose;
    formData3.renal = renal;
    formData3.epilepsia =   epilepsia;
    formData3.quimioRadio = quimioRadio;
    formData3.hipotiroidismo = hipotiroidismo;
    formData3.hepatite = hepatite;
    formData3.onco = onco;
    formData3.cardiopatia = cardiopatia;
    formData3.hipertensao = hipertensao;
    formData3.reumatismo = reumatismo;
    formData3.hanseniase = hanseniase;
    formData3.cirurgiaMMII = cirurgiaMMII;
    formData3.marcaPasso = marcaPasso;
    formData3.hipotensao = hipotensao;
    formData3.insulina = insulina;
    formData3.dietaHidrica = dietaHidrica;
    formData3.injetavel = injetavel;
    formData3.dietaAlimentar = dietaAlimentar;
    formData3.viaOral = viaOral;
    formData3.taxaGlicemica = taxaGlicemica;
   
   
    res.redirect('/etapa4');
};
 
export const etapa4 = (req: Request, res: Response) => {
    res.render('etapa4', { resumo: formData });
};
 
export const etapa4Post = (req: Request, res: Response) => {
    const {
        tipo_pisada,
        flexivel,
        rigido,
        espalmado,
        martelo,
        queda_metatarso,
        tipo_marcha,
        qual_marcha,
        joelho,
        articulacao,
        sensibilidade
    } = req.body;
 
   
    formData4.tipo_pisada = tipo_pisada;
    formData4.flexivel = flexivel;
    formData4.rigido = rigido;
    formData4.espalmado = espalmado;
    formData4.martelo = martelo;
    formData4.queda_metatarso = queda_metatarso;
    formData4.tipo_marcha = tipo_marcha;
    formData4.qual_marcha = qual_marcha;
    formData4.joelho = joelho;
    formData4.articulacao = articulacao;
    formData4.sensibilidade = sensibilidade;
 
   
    res.redirect('/etapa5');
};
 
export const etapa5 = (req: Request, res: Response) => {
    res.render('etapa5', { resumo: formData });
};
 
export const etapa5Post = (req: Request, res: Response) => {
    const {
        unha_caracol,
        unha_cunha,
        unha_funil,
        unha_gancho,
        unha_involuta,
        unha_normal,
        unha_telha,
        unha_torques,
        pd_halux,
        pd_2,
        pd_3,
        pd_4,
        pd_5,
        pe_halux,
        pe_2,
        pe_3,
        pe_4,
        pe_5,
        onicoatrofia,
        onicocriptose,
        onicorrexe,
        granuloma,
        onicogrifose,
        onicolise,
        onicofose,
        psoriase_ungueal,
        onicomicose,
        outros_alteracoes_ungueais
    } = req.body;
 
    // Atualizando o objeto formData5 com os dados recebidos do formulário
    formData5.unha_caracol = unha_caracol || false;
    formData5.unha_cunha = unha_cunha || false;
    formData5.unha_funil = unha_funil || false;
    formData5.unha_gancho = unha_gancho || false;
    formData5.unha_involuta = unha_involuta || false;
    formData5.unha_normal = unha_normal || false;
    formData5.unha_telha = unha_telha || false;
    formData5.unha_torques = unha_torques || false;
    formData5.pd_halux = pd_halux || false;
    formData5.pd_2 = pd_2 || false;
    formData5.pd_3 = pd_3 || false;
    formData5.pd_4 = pd_4 || false;
    formData5.pd_5 = pd_5 || false;
    formData5.pe_halux = pe_halux || false;
    formData5.pe_2 = pe_2 || false;
    formData5.pe_3 = pe_3 || false;
    formData5.pe_4 = pe_4 || false;
    formData5.pe_5 = pe_5 || false;
    formData5.onicoatrofia = onicoatrofia || false;
    formData5.onicocriptose = onicocriptose || false;
    formData5.onicorrexe = onicorrexe || false;
    formData5.granuloma = granuloma || false;
    formData5.onicogrifose = onicogrifose || false;
    formData5.onicolise = onicolise || false;
    formData5.onicofose = onicofose || false;
    formData5.psoriase_ungueal = psoriase_ungueal || false;
    formData5.onicomicose = onicomicose || false;
    formData5.outros_alteracoes_ungueais = outros_alteracoes_ungueais || '';
 
    // Aqui você pode redirecionar ou fazer outra lógica de processamento
    res.redirect('/etapa6'); // Redirecionamento para a próxima etapa
};
 
export const etapa6 = (req: Request, res: Response) => {
    res.render('etapa6', { resumo: formData });
};
 
export const etapa6Post = (req: Request, res: Response) => {
    const {
        bromidrose,
        hidrose,
        desidrose,
        isquemia,
        mal_perfurante,
        edema,
        tinea,
        psoriase,
        tungiase,
        verruga_plantar,
        calo_dorsal,
        queratose,
        calo_plantar,
        hiperqueratose,
        calo_interdigital,
        perfusao_pd_normal,
        perfusao_pd_palido,
        perfusao_pd_cianotico,
        perfusao_pe_normal,
        perfusao_pe_palido,
        perfusao_pe_cianotico,
        erisipela,
        outras_alteracoes_pele
    } = req.body;
 
    // Atualizando o objeto formData6 com os dados recebidos do formulário
    formData6.bromidrose = bromidrose || false;
    formData6.hidrose = hidrose || false;
    formData6.desidrose = desidrose || false;
    formData6.isquemia = isquemia || false;
    formData6.mal_perfurante = mal_perfurante || false;
    formData6.edema = edema || false;
    formData6.tinea = tinea || false;
    formData6.psoriase = psoriase || false;
    formData6.tungiase = tungiase || false;
    formData6.verruga_plantar = verruga_plantar || false;
    formData6.calo_dorsal = calo_dorsal || false;
    formData6.queratose = queratose || false;
    formData6.calo_plantar = calo_plantar || false;
    formData6.hiperqueratose = hiperqueratose || false;
    formData6.calo_interdigital = calo_interdigital || false;
    formData6.perfusao_pd_normal = perfusao_pd_normal || false;
    formData6.perfusao_pd_palido = perfusao_pd_palido || false;
    formData6.perfusao_pd_cianotico = perfusao_pd_cianotico || false;
    formData6.perfusao_pe_normal = perfusao_pe_normal || false;
    formData6.perfusao_pe_palido = perfusao_pe_palido || false;
    formData6.perfusao_pe_cianotico = perfusao_pe_cianotico || false;
    formData6.erisipela = erisipela || false;
    formData6.outras_alteracoes_pele = outras_alteracoes_pele || '';
 
    // Aqui você pode redirecionar ou fazer outra lógica de processamento
    res.redirect('/etapa7'); // Redirecionamento para a próxima etapa
};
 
export const etapa7 = (req: Request, res: Response) => {
    res.render('etapa7', { resumo: formData });
};
 
export const etapa7Post = (req: Request, res: Response) => {
    const { endereco, cidade } = req.body;
    formData.endereco = endereco;
    formData.cidade = cidade;
    res.redirect('/etapa8');
};
 
 
export const submit = async (req: Request, res: Response) => {
    try {
        await Usuario.create(formData);
        res.send('Cadastro concluído com sucesso!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};