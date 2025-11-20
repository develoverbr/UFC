/**
 * Script JavaScript para Adição Simples
 * INSERÇÃO MODIFICADA PARA APARECER ANTES DA SEÇÃO DE DOWNLOADS
 */

// 1. Função para realizar a adição (Mantida a mesma)
function adicionarNumeros(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.error("Ambos os argumentos devem ser números.");
        return "Erro: Argumentos inválidos";
    }

    const soma = num1 + num2;
    return soma;
}

// 2. Função para exibir o resultado ANTES da seção de Downloads
function exibirResultadoAdicao(resultado) {
    // Cria um novo parágrafo para o resultado
    const resultadoElemento = document.createElement('p');
    resultadoElemento.id = 'resultado-adicao';
    resultadoElemento.style.padding = '15px'; // Adiciona um pouco de estilo
    resultadoElemento.style.backgroundColor = '#f0f0f0';
    resultadoElemento.style.borderLeft = '5px solid #007bff';
    resultadoElemento.style.marginTop = '20px';
    resultadoElemento.style.marginBottom = '20px';
    resultadoElemento.innerHTML = `⭐ **Resultado do JavaScript:** A soma de 5 e 10 é **${resultado}**.`;
    
    // Encontra a seção de Downloads (a próxima seção)
    const downloadSection = document.querySelector('.download-section');
    
    // Insere o novo elemento *antes* da seção de Downloads
    if (downloadSection) {
        // Usa insertBefore para colocar o novo parágrafo antes da seção de downloads
        downloadSection.parentNode.insertBefore(resultadoElemento, downloadSection);
    } else {
        console.error("Não foi possível encontrar o elemento .download-section para inserir o resultado.");
        // Se não encontrar, tenta inserir no final do main como fallback
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.appendChild(resultadoElemento);
        }
    }
}

// 3. Execução da lógica principal
document.addEventListener('DOMContentLoaded', () => {
    const numeroA = 5;
    const numeroB = 10;
    
    // Realiza o cálculo
    const resultadoDaSoma = adicionarNumeros(numeroA, numeroB);
    
    // Exibe na página HTML
    if (typeof resultadoDaSoma === 'number') {
        exibirResultadoAdicao(resultadoDaSoma);
    }
});