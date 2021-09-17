class Carro {

    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }

};


class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string, listaDeCarros:Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {

    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: any): any {
        this.carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }

}

// Criar carros

let carroA = new Carro('Dodge Journey', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Cerato', 4);


// Mostrar a lista de Carros

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Recife', listaDeCarros);



