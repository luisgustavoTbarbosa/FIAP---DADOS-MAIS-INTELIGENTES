let stringText = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>"


let roteirosSeparados
function separarRoteiros() {
    roteirosSeparados = stringText.split('<b>')
    roteirosSeparados.shift()
}
separarRoteiros()


//1 O nome das cidades avaliadas.
let cidades = []
function nomeCidade() {
    roteirosSeparados.forEach(item => {
        string = item
        indice1 = string.indexOf('*')
        indice2 = string.lastIndexOf('*')

        string = string.slice(indice1+1, indice2)
        cidades.push(string)
    })
}
nomeCidade()
console.log("1 - O nome das cidades avaliadas:")
console.log(cidades)


//2 - O conteúdo do roteiro A de cada cidade avaliada.
let roteiroA = []
function conteudoA() {
    roteirosSeparados.forEach((item) => {
        roteiro = item.split("#")
        roteiro = roteiro[1].split("<br>")
        roteiroA.push(roteiro[1].replaceAll(";", ","))
    })
}
conteudoA()
console.log("2 - O conteúdo do roteiro A de cada cidade avaliada:")
console.log(roteiroA)


//3 - Quantos locais são citados no roteiro A de cada cidade.
let qntLocaisRoteiroA = []
function qntA() {
    roteiroA.forEach((item) => {
        array = item.split(",")
        qntLocaisRoteiroA.push(array.length)
    })
}
qntA()
console.log("3 - Quantos locais são citados no roteiro A de cada cidade:")
console.log(qntLocaisRoteiroA)


//4 - O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
let pontosTuristicosCentro
function locaisCentro() {
    pontosCentro = roteirosSeparados[0].split("#Roteiro B")
    indice1 = pontosCentro[1].indexOf("<br>")
    pontosCentro = pontosCentro[1].slice(indice1+4)
    pontosCentro = pontosCentro.split("<br>")
    pontosTuristicosCentro = pontosCentro[0].replaceAll(";", ",")
}
locaisCentro()
console.log("4 - O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo:")
console.log(pontosTuristicosCentro)


//5 - O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.
let pontosTuristicosDowntown
function locaisDowntown() {
    pontosCentro = roteirosSeparados[1].split("#Roteiro B")
    indice1 = pontosCentro[1].indexOf("<br>")
    pontosCentro = pontosCentro[1].slice(indice1+4)
    pontosCentro = pontosCentro.split("<br>")
    pontosTuristicosCentro = pontosCentro[0]
    pontosTuristicosCentro = pontosTuristicosCentro.split(";")
    pontosTuristicosCentro.shift()
    pontosTuristicosCentro.pop()
    pontosTuristicosCentro [0] = pontosTuristicosCentro[0].trim()
    pontosTuristicosCentro = pontosTuristicosCentro.join()
}
locaisDowntown()
console.log("5 - O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles:")
console.log(pontosTuristicosCentro)