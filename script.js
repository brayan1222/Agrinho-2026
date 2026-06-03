// Banco de dados baseado estritamente no conteúdo do PDF fornecido
const odsData = [
    {
        id: 1,
        title: "Erradicação da Pobreza",
        content: "O agronegócio é o principal motor econômico de milhares de regiões rurais globalmente. Ao gerar empregos diretos e indiretos, o setor ajuda a elevar a renda de populações vulneráveis. O fortalecimento da agricultura familiar e a inclusão de pequenos produtores em cadeias de valor integradas são estratégias fundamentais para tirar comunidades da pobreza extrema."
    },
    {
        id: 2,
        title: "Fome Zero e Agricultura Sustentável",
        content: "Este é o núcleo do setor. O desafio do agronegócio é aumentar a produção global de alimentos para atender à crescente população mundial, garantindo que o acesso seja seguro, nutritivo e suficiente durante todo o ano. Isso exige a transição para sistemas de produção de alimentos sustentáveis e práticas agrícolas resilientes que aumentem a produtividade e a produção."
    },
    {
        id: 3,
        title: "Saúde e Bem-Estar",
        content: "O setor impacta a saúde pública através da produção de alimentos seguros e biofortificados. O manejo correto e seguro de defensivos agrícolas (pesticidas) e a eliminação de resíduos químicos na água e no solo são cruciais para proteger a saúde dos trabalhadores rurais e dos consumidores finais."
    },
    {
        id: 4,
        title: "Educação de Qualidade",
        content: "O agronegócio moderno é altamente tecnológico. Promover a capacitação técnica, a alfabetização digital no campo e o treinamento de jovens agricultores garante não apenas a sucessão familiar nas propriedades, mas também a aplicação de práticas mais sustentáveis e eficientes baseadas em conhecimento."
    },
    {
        id: 5,
        title: "Igualdade de Gênero",
        content: "As mulheres desempenham um papel vital na agricultura global, mas frequentemente enfrentam barreiras no acesso à terra, crédito e insumos. Garantir a igualdade de direitos, o protagonismo feminino na gestão de propriedades agrícolas e a liderança corporativa no setor agropecuário são passos essenciais para o desenvolvimento do setor."
    },
    {
        id: 6,
        title: "Água Potável e Saneamento",
        content: "A agricultura é a maior consumidora de água doce do planeta. O papel do agronegócio aqui envolve a adoção de tecnologias de irrigação eficiente (como gotejamento), o monitoramento do uso da água, o tratamento de efluentes agroindustriais e a proteção de bacias hidrográficas e matas ciliares."
    },
    {
        id: 7,
        title: "Energia Limpa e Acessível",
        content: "O agro é um grande fornecedor de soluções de energia renovável. A produção de biocombustíveis (etanol, biodiesel), a geração de bioenergia a partir de resíduos agrícolas (como o bagaço da cana-de-açúcar) e o uso de biogás proveniente dos dejetos da pecuária ajudam a diversificar e descarbonizar a matriz energética."
    },
    {
        id: 8,
        title: "Trabalho Decente e Crescimento Econômico",
        content: "O setor deve garantir condições de trabalho seguras e dignas para todos os operários do campo, erradicando rigidamente o trabalho análogo à escravidão e o trabalho infantil. A formalização do emprego e a proteção da saúde ocupacional caminham junto com o crescimento econômico sustentável do setor."
    },
    {
        id: 9,
        title: "Indústria, Inovação e Infraestrutura",
        content: "O conceito de 'Agtech' reflete a introdução de inteligência artificial, drones, sensores e agricultura de precisão nas fazendas. Investimentos in logística verde para o escoamento da safra e indústrias de processamento localizadas reduzem perdas pós-colheita e aumentam o valor agregado de forma sustentável."
    },
    {
        id: 10,
        title: "Redução das Desigualdades",
        content: "O agronegócio pode reduzir disparidades regionais ao descentralizar investimentos e infraestrutura para o interior dos países. Além disso, políticas que dão suporte técnico de ponta a pequenos produtores diminuem a lacuna econômica entre a agricultura de grande escala e a de subsistência."
    },
    {
        id: 11,
        title: "Cidades e Comunidades Sustentáveis",
        content: "Ao viabilizar cinturões verdes urbanos e cadeias curtas de suprimento (produção local), o agronegócio reduz a pegada de carbono do transporte de alimentos e garante o abastecimento regular das metrópoles, mitigando o êxodo rural desordenado ao manter o campo economicamente atrativo."
    },
    {
        id: 12,
        title: "Consumo e Produção Responsáveis",
        content: "Este objetivo demanda a redução severa do desperdício de alimentos ao longo das cadeias de produção e suprimento. Inclui também o manejo ecologicamente correto de resíduos (como a logística reversa de embalagens de defensivos) e a transparência por meio de certificações de rastreabilidade para os consumidores."
    },
    {
        id: 13,
        title: "Ação Contra a Mudança Global do Clima",
        content: "O agronegócio é tanto vítima quanto vetor das mudanças climáticas. Seu papel crítico envolve a redução de emissões de gases de efeito estufa (GEE) - por exemplo, através do manejo de pastagens para mitigar o metano da pecuária - e a maximização do sequestro de carbono no solo por meio do plantio direto e de sistemas integrados (ILPF)."
    },
    {
        id: 14,
        title: "Vida na Água",
        content: "A lixiviação de fertilizantes e pesticidas pode causar a eutrofização de rios e oceanos, destruindo ecossistemas aquáticos. O papel do setor é aplicar técnicas de conservação do solo e manejo integrado de pragas para evitar o escoamento de poluentes para corpos d'água. A aquicultura sustentável também entra diretamente neste objetivo."
    },
    {
        id: 15,
        title: "Vida Terrestre",
        content: "O desmatamento ilegal é um dos maiores desafios de imagem e sustentabilidade do setor. O agronegócio responsável atua no combate ao desmatamento, na conservação de florestas nativas dentro das propriedades, na recuperação de áreas degradadas e no fomento a sistemas agroflorestais que protegem a biodiversidade."
    },
    {
        id: 16,
        title: "Paz, Justiça e Instituições Eficazes",
        content: "A governança no campo envolve a regularização fundiária, o respeito estrito aos direitos territoriais de comunidades tradicionais e indígenas e a resolução pacífica de conflitos por terra. Instituições setoriais fortes e transparentes combatem a corrupção e promovem a conformidade legal (compliance)."
    },
    {
        id: 17,
        title: "Parcerias e Meios de Implementação",
        content: "Nenhum ODS será atingido isoladamente. O agronegócio se conecta a este objetivo por meio de alianças entre governos, indústrias, universidades e produtores para o desenvolvimento de novas tecnologias, linhas de crédito verde (como os Green Bonds) e compartilhamento de conhecimentos científicos voltados à sustentabilidade."
    }
];

const odsGrid = document.getElementById('odsGrid');
const searchInput = document.getElementById('odsSearch');

// Função para renderizar os cards na tela
function renderCards(data) {
    odsGrid.innerHTML = '';
    
    if(data.length === 0) {
        odsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888;">Nenhum ODS correspondente encontrado.</p>`;
        return;
    }

    data.forEach(ods => {
        const card = document.createElement('div');
        card.classList.add('ods-card');
        
        card.innerHTML = `
            <div class="ods-number">Objetivo ${ods.id}</div>
            <h3>${ods.title}</h3>
            <p>${ods.content}</p>
        `;
        
        odsGrid.appendChild(card);
    });
}

// Evento de busca/filtro em tempo real
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredOds = odsData.filter(ods => {
        return ods.title.toLowerCase().includes(searchTerm) || 
               ods.content.toLowerCase().includes(searchTerm) ||
               ods.id.toString() === searchTerm;
    });
    
    renderCards(filteredOds);
});

// Renderização inicial ao carregar a página
renderCards(odsData);
