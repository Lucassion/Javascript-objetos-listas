//let texto= "texto";
//let numero= 1;
//let booleano=true;

//let nome = prompt('Qual seu nome?');
//let valor= prompt('Qual o valor do seu empréstimo?');

//alert(`Olá ${nome}!`);
//alert(`Você gostaria de pegar R$${valor} de emprestimo, certo?`);

//let pretendePagar=confirm('Você pretende pagar o seu emprestimo?');

//alert('Ok! Obrigado por nos visitar!');

let lista = [5,6,7,8,9];

//lista.pop, lista.splice

//Object.nome= 'Lucas Kiyota da Costa';

let objeto={
    nome:'Lucas Kiyota da Costa',
    idade: 17,
    programador: true
};

let email = 'casalsaotop@paodebatata.com';

let kiyotinha = {
    nome:'Lucas',
    idade: 17,
    namorada: undefined,
    email: email,
    gatos:[
        {
            nome:'Tanquinho',
            raça:'SRD',
        },
        {
            nome:'Amarelo',
            raça:'Tomba tomba',
        }
    ]
};

let mariazinha = {
    nome:'Maria',
    idade:18,
    namorada: kiyotinha,
    email: email,
    cachorros:[
        {
            nome:'Pascoa',
            raça:'Tinta preta',
        },
    ],
};

kiyotinha.namorada = mariazinha;