// script.js

// Salvar dados no sessionStorage
function saveData() {

    //saveData da pagina ETAPA1 
    if (document.getElementById('nome')) {
        sessionStorage.setItem('nome', document.getElementById('nome').value);
    }
    if (document.getElementById('email')){
        sessionStorage.setItem('email', document.getElementById('email').value);
    }
    if (document.getElementById('endereco')){
        sessionStorage.setItem('endereco', document.getElementById('endereco').value);
    }
    if (document.getElementById('bairro')){
        sessionStorage.setItem('bairro', document.getElementById('bairro').value);
    }
    if (document.getElementById('cidade')){
        sessionStorage.setItem('cidade', document.getElementById('cidade').value);
    }
    if (document.getElementById('estado')){
        sessionStorage.setItem('estado', document.getElementById('estado').value);
    }
    if (document.getElementById('cep')){
        sessionStorage.setItem('cep', document.getElementById('cep').value);
    }
    if (document.getElementById('tel_res')){
        sessionStorage.setItem('tel_res', document.getElementById('tel_res').value);
    }
    if (document.getElementById('telefone')){
        sessionStorage.setItem('telefone', document.getElementById('telefone').value);
    }
    if (document.getElementById('tel_emergencia')){
        sessionStorage.setItem('tel_emergencia', document.getElementById('tel_emergencia').value);
    }
    if (document.getElementById('contato')){
        sessionStorage.setItem('contato', document.getElementById('contato').value);
    }
    if (document.getElementById('data_nascimento')){
        sessionStorage.setItem('data_nascimento', document.getElementById('data_nascimento').value);
    }
    if (document.getElementById('profissao')){
        sessionStorage.setItem('profissao', document.getElementById('profissao').value);
    }
        
    
        //saveData da ETAPA2
    if (document.getElementById('queixa_principal')) {
        sessionStorage.setItem('queixa_principal', document.getElementById('queixa_principal').value);
    }
    if (document.querySelector('input[name="frequencia_podologo"]:checked')) {
        sessionStorage.setItem('frequencia_podologo', document.querySelector('input[name="frequencia_podologo"]:checked').value);
    }
    if (document.getElementById('frequencia_visita_podologo')) {
        sessionStorage.setItem('frequencia_visita_podologo', document.getElementById('frequencia_visita_podologo').value);
    }
    if (document.querySelector('input[name="uso_medicamento"]:checked')) {
        sessionStorage.setItem('uso_medicamento', document.querySelector('input[name="uso_medicamento"]:checked').value);
    }
    if (document.getElementById('tipo_medicamento')) {
        sessionStorage.setItem('tipo_medicamento', document.getElementById('tipo_medicamento').value);
    }
    if (document.querySelector('input[name="possui_alergia"]:checked')) {
        sessionStorage.setItem('possui_alergia', document.querySelector('input[name="possui_alergia"]:checked').value);
    }  
    if (document.getElementById('alergia_substancia')) {
        sessionStorage.setItem('alergia_substancia', document.getElementById('alergia_substancia').value);
    } 
    if (document.querySelector('input[name="posicao_trabalho"]:checked')) {
        sessionStorage.setItem('posicao_trabalho', document.querySelector('input[name="posicao_trabalho"]:checked').value);
    }  
    if (document.getElementById('numero_calcado')) {
        sessionStorage.setItem('numero_calcado', document.getElementById('numero_calcado').value);
    } 
    if (document.getElementById('tipo_calcado')) {
        sessionStorage.setItem('tipo_calcado', document.getElementById('tipo_calcado').value);
    }
    if (document.querySelector('input[name="tipo_palmilha"]:checked')) {
        sessionStorage.setItem('tipo_palmilha', document.querySelector('input[name="tipo_palmilha"]:checked').value);
    } 
    if (document.querySelector('input[name="fumante"]:checked')) {
        sessionStorage.setItem('fumante', document.querySelector('input[name="fumante"]:checked').value);
    } 
    if (document.querySelector('input[name="ciclo_menstrual"]:checked')) {
        sessionStorage.setItem('ciclo_menstrual', document.querySelector('input[name="ciclo_menstrual"]:checked').value);
    } 
    if (document.querySelector('input[name="gestante"]:checked')) {
        sessionStorage.setItem('gestante', document.querySelector('input[name="gestante"]:checked').value);
    } 
    if (document.querySelector('input[name="amamentando"]:checked')) {
        sessionStorage.setItem('amamentando', document.querySelector('input[name="amamentado"]:checked').value);
    } 
    if (document.querySelector('input[name="atividade_fisica"]:checked')) {
        sessionStorage.setItem('atividade_fisica', document.querySelector('input[name="atividade_fisica"]:checked').value);
    } 
    if (document.getElementById('frequencia_atividade_fisica')) {
        sessionStorage.setItem('frequencia_atividade_fisica', document.getElementById('frequencia_atividade_fisica').value);
    }
    if (document.getElementById('tipo_esporte')) {
        sessionStorage.setItem('tipo_esporte', document.getElementById('tipo_esporte').value);
    }
    if (document.getElementById('calcado_esporte')) {
        sessionStorage.setItem('calcado_esporte', document.getElementById('calcado_esporte').value);
    }
    

     //saveData ETAPA3
     if (document.querySelector('input[name="osteoporose"]:checked')) {
        sessionStorage.setItem('osteoporose', document.querySelector('input[name="osteoporose"]:checked').value);
    }
    if (document.querySelector('input[name="renal"]:checked')) {
        sessionStorage.setItem('renal', document.querySelector('input[name="renal"]:checked').value);
    }
    if (document.querySelector('input[name="epilepsia"]:checked')) {
        sessionStorage.setItem('epilepsia', document.querySelector('input[name="epilepsia"]:checked').value);
    }
    if (document.querySelector('input[name="hipotiroidismo"]:checked')) {
        sessionStorage.setItem('hipotiroidismo', document.querySelector('input[name="hipotiroidismo"]:checked').value);
    }
    if (document.querySelector('input[name="hepatite"]:checked')) {
        sessionStorage.setItem('hepatite', document.querySelector('input[name="hepatite"]:checked').value);
    }
    if (document.querySelector('input[name="cardiopatia"]:checked')) {
        sessionStorage.setItem('cardiopatia', document.querySelector('input[name="cardiopatia"]:checked').value);
    }
    if (document.querySelector('input[name="hipertensao"]:checked')) {
        sessionStorage.setItem('hipertensao', document.querySelector('input[name="hipertensao"]:checked').value);
    }  
    if (document.querySelector('input[name="reumatismo"]:checked')) {
        sessionStorage.setItem('reumatismo', document.querySelector('input[name="reumatismo"]:checked').value);
    } 
    if (document.querySelector('input[name="quimioRadio"]:checked')) {
        sessionStorage.setItem('quimioRadio', document.querySelector('input[name="quimioRadio"]:checked').value);
    }       
    if (document.querySelector('input[name="hanseniase"]:checked')) {
        sessionStorage.setItem('hanseniase', document.querySelector('input[name="hanseniase"]:checked').value);
    }    
    if (document.querySelector('input[name="oncologico"]:checked')) {
        sessionStorage.setItem('oncologico', document.querySelector('input[name="oncologico"]:checked').value);
    } 
    if (document.querySelector('input[name="cirurgia_mmii"]:checked')) {
        sessionStorage.setItem('cirurgia_mmii', document.querySelector('input[name="cirurgia_mmii"]:checked').value);
    }  
    if (document.querySelector('input[name="marca_passo"]:checked')) {
        sessionStorage.setItem('marca_passo', document.querySelector('input[name="marca_passo"]:checked').value);
    }        
    if (document.querySelector('input[name="alteracoes"]:checked')) {
        sessionStorage.setItem('alteracoes', document.querySelector('input[name="alteracoes"]:checked').value);
    }            
    if (document.querySelector('input[name="hipotensao"]:checked')) {
        sessionStorage.setItem('hipotensao', document.querySelector('input[name="hipotensao"]:checked').value);
    }    
    if (document.querySelector('input[name="insulina"]:checked')) {
        sessionStorage.setItem('insulina', document.querySelector('input[name="insulina"]:checked').value);
    }  
    if (document.querySelector('input[name="dieta_hidrica"]:checked')) {
        sessionStorage.setItem('dieta_hidrica', document.querySelector('input[name="dieta_hidrica"]:checked').value);
    }
    if (document.getElementById('injetavel')) {
        sessionStorage.setItem('injetavel', document.getElementById('injetavel').value);
    }
    if (document.getElementById('dieta_alimentar')) {
        sessionStorage.setItem('dieta_alimentar', document.getElementById('dieta_alimentar').value);
    }
    if (document.getElementById('via_oral')) {
        sessionStorage.setItem('via_oral', document.getElementById('via_oral').value);
    }
    if (document.getElementById('taxa_glicemica')) {
        sessionStorage.setItem('taxa_glicemica', document.getElementById('taxa_glicemica').value);
    }
   
   
    //ETAPA 4

    document.getElementById('submit-button').addEventListener('click', () => {
        // Seleciona apenas os checkboxes dentro do contêiner #condicoes-pe
        const checkboxes = document.querySelectorAll('#condicoes_pe input[type="checkbox"]');
      
        const selecoes = [];
        checkboxes.forEach((checkbox) => {
          selecoes.push({
            id_condicao_pe: parseInt(checkbox.dataset.condicao),
            id_lado_pe: parseInt(checkbox.value),
            selecionado: checkbox.checked
          });
        });
      
        console.log(selecoes); // Envia ou processa os dados normalmente
      });

    // Salvar os dados temporariamente no sessionStorage
const form = document.getElementById('form-avaliacao');
const submitButton = document.getElementById('submit-button');

form.addEventListener('change', () => {

    // Obtém os valores dos inputs
    const tipoMarcha = document.querySelector('input[name="tipo_marcha"]:checked') ? document.querySelector('input[name="tipo_marcha"]:checked').value : '';
    const joelho = document.querySelector('input[name="joelho"]:checked') ? document.querySelector('input[name="joelho"]:checked').value : '';
    const articulacao = document.querySelector('input[name="articulacao"]:checked') ? document.querySelector('input[name="articulacao"]:checked').value : '';
    const sensibilidade = document.querySelector('input[name="sensibilidade_dor"]:checked') ? document.querySelector('input[name="sensibilidade_dor"]:checked').value : '';

    // Salva os dados no sessionStorage
    sessionStorage.setItem('tipo_marcha', tipoMarcha);
    sessionStorage.setItem('joelho', joelho);
    sessionStorage.setItem('articulacao', articulacao);
    sessionStorage.setItem('sensibilidade_dor', sensibilidade);

    // Cria um objeto com os dados atuais
    const avaliacao = {
        tipo_marcha: tipoMarcha,
        joelho: joelho,
        articulacao: articulacao,
        sensibilidade: sensibilidade,
    };

    // Salva no sessionStorage
    sessionStorage.setItem('avaliacao', JSON.stringify(avaliacao));
});

// Ao clicar em "Enviar", imprime os dados salvos e envia ao backend
submitButton.addEventListener('click', () => {
    // Recupera os dados salvos
    const data = JSON.parse(sessionStorage.getItem('avaliacao')) || {};

    // Verifica os dados antes de enviar
    console.log('Dados a serem enviados:', data);

    // Aqui você pode enviar os dados ao backend usando fetch:
    fetch('/salvar-avaliacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((response) => response.text())
        .then((result) => alert(result))
        .catch((error) => console.error('Erro ao enviar:', error));
});




}









// Avançar para a próxima etapa
function nextStep() {
    saveData();
    let nextPage = '';

    if (window.location.pathname.includes('etapa1')) {
        nextPage = '/etapa2';
    } else if (window.location.pathname.includes('etapa2')) {
        nextPage = '/etapa3';
    } else if (window.location.pathname.includes('etapa3')) {
        nextPage = '/etapa4'
    }

    if (nextPage) {
        window.location.href = nextPage;
    }
}

// Voltar para a etapa anterior
function previousStep() {
    
    saveData();
    let prevPage = '';

    if (window.location.pathname.includes('etapa3')) {
        prevPage = '/etapa2'; // Verifique se /etapa2 renderiza corretamente
    } else if (window.location.pathname.includes('etapa2')) {
        prevPage = '/etapa1'; // Verifique se /etapa1 renderiza corretamente
    }

    if (prevPage) {
        window.location.href = prevPage;
    }
}

// Exibir dados resumidos na etapa 3
function showResumo() {
    const nome = sessionStorage.getItem('nome') || "Não informado";
    const email = sessionStorage.getItem('email') || "Não informado";
    const endereco = sessionStorage.getItem('endereco') || "Não informado";
    const cidade = sessionStorage.getItem('cidade') || "Não informado";
    
    const resumo = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
    const resumoDiv = document.getElementById('resumo');
    if (resumoDiv) {
        resumoDiv.innerHTML = resumo;
    }
}
//Essa função já é chamada no final do script.js, na verificação:
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Enviar o formulário (por exemplo, para um backend)
function submitForm() {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor
}

// Mostrar resumo apenas na etapa 3
if (window.location.pathname.includes('etapa3')) {
    showResumo();
}

// Preencher os campos com os dados salvos no sessionStorage quando voltar para uma etapa
function populateForm() {
    if (document.getElementById('nome')) {
        document.getElementById('nome').value = sessionStorage.getItem('nome') || '';
    }
    if (document.getElementById('email')) {
        document.getElementById('email').value = sessionStorage.getItem('email') || '';
    }
    if (document.getElementById('endereco')) {
        document.getElementById('endereco').value = sessionStorage.getItem('endereco') || '';
    }
    if (document.getElementById('cidade')) {
        document.getElementById('cidade').value = sessionStorage.getItem('cidade') || '';
    }
    if (document.getElementById('estado')) {
        document.getElementById('estado').value = sessionStorage.getItem('estado') || '';
    }
}

// Preencher os campos ao carregar a página
window.onload = populateForm;
