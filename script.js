function tomarDecisao(tipo) {
    const statusTexto = document.getElementById('status-texto');
    
    if (tipo === 'tecnologia') {
        statusTexto.innerHTML = "🌱 <strong>Excelente escolha!</strong> A irrigação inteligente economizou 40% de água e manteve a alta produção. Sua fazenda está mais sustentável!";
        statusTexto.style.color = "#2e7d32"; // Verde escuro
    } 
    else if (tipo === 'tradicional') {
        statusTexto.innerHTML = "⚠️ <strong>Atenção!</strong> A irrigação comum gerou desperdício de recursos hídricos e aumentou o custo da conta de energia. Tente alternativas ecológicas.";
        statusTexto.style.color = "#c62828"; // Vermelho
    } 
    else if (tipo === 'Preservacao') {
        statusTexto.innerHTML = "🦅 <strong>Incrível!</strong> Proteger as margens dos rios (APPs) evitou a erosão do solo e trouxe a fauna de volta. Equilíbrio perfeito atingido!";
        statusTexto.style.color = "#1565c0"; // Azul
    }
}