const tecnologias = [
    'ReactJs',
    'NestJs',
    'C puro raiz',
    'Java'
];

const tecnologiasNomeAjustado = tecnologias.map(tec => tec.length > 5 ? tec.toUpperCase() : tec);
const tecnologiasUpperCase = tecnologias.filter(tec => tec.length > 5).map(tec => tec.toUpperCase());
console.log(tecnologiasNomeAjustado);
console.log(tecnologiasUpperCase);