const listaDeUsuarios = [
    {
        login: 'fabio',
        password: '123',
        name: 'Fábio',
        age: 25
    },
    {
        login: 'layla',
        password: '123',
        name: 'Layla',
        age: 25
    },
    {
        login: 'danilo',
        password: '123',
        name: 'Danilo',
        age: 28
    }
];

const maisVelhos = listaDeUsuarios.filter(user => user.age > 25);
//console.log(maisVelhos);

const found = listaDeUsuarios.find(user => user.login === 'fabio' && user.password === '123');
//console.log(found);

const novosUsuarios = listaDeUsuarios.map(user => {
    return {...user, name: user.name.toUpperCase()};
});
//console.log(novosUsuarios);

const listaDeSalarios = [
    1000,
    2000,
    3000,
    4000,
    5000
];

const listaDeSalariosReajustados = listaDeSalarios.map(salario => salario * 1.03);
//console.log(listaDeSalariosReajustados);

console.log('1' === 1);
console.log(typeof '1');
console.log(typeof 1);