// Função para carregar a seção
function loadSection(section) {
    fetch(`${section}.html`)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar a seção');
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Carregar a seção 'home' por padrão ao abrir a página
window.addEventListener('load', () => loadSection('home'));
