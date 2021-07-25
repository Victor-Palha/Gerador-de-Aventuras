function gerar(){
    var inicio = ['Enquanto estiverem viajando pela natureza, os personagens percebem a entrada de um local de aventura.','Enquanto estiverem viajando por uma estrada, os personagens são atacados por monstros que fogem para o local de aventura mais próximo.','Os aventureiros encontram um mapa em um cadáver. Além do mapa encontrado levar a aventura, o vilão da aventura deseja o mapa.','Um item mágico misterioso ou um vilão cruel teletransporte os personagens para o local de aventura.','Um estranho se aproxima dos personagens em uma taverna e os instiga a ir para o local de aventura.','Uma cidade ou vila precisa de voluntários para ir ao local de aventura.','Um PdM com quem os personagens se importam precisa deles para ir ao local de aventura.','Um PdM que os personagens devem obedecer ordena-os a ir ao local de aventura.','Um PdM que os personagens respeitam pede que eles vão ao local de aventura.','Uma noite, todos os personagens sonham com a entrada do local de aventura.','Um fantasma aparece e aterroriza uma vila. Pesquisas revelam que ele só pode ter o descanso eterno entrando no local de aventura.']
    inicio = inicio[Math.floor(Math.random() * inicio.length)];
    // Começo da aventura
    var dg = ['Uma construção em uma cidade','Catacumbas ou esgotos abaixo de uma cidade','Abaixo de uma casa depi fazenda','Abaixo de um cemitério','Abaixo de um castelo em ruínas','Abaixo de uma cidade em ruínas','Abaixo de um templo','um abismo','Frente a face de um penhasco','um deserto','uma floresta','uma geleira','um desfiladeiro','uma floresta','uma passagem de uma montanha','um pântano','Abaixo ou no topo de um platô','grutas marinhas','diversas mesas interligadas','um pico de uma montanha','um promontório','uma ilha Submersa']
    dg = dg[Math.floor(Math.random() * dg.length)]
    // Onde o local da missão se encontra
    var criador = ['Observador', 'Culto ou grupo religioso','Anões','Elfos (incluindo drow)','Gigantes','Hobgoblins','Humanos','Kuo-toa','Lich','Devoradores de mentes','Yuan-ti','Sem criador']
    criador = criador[Math.floor(Math.random() * criador.length)]
    //Quem construiu o local
    var elmalvado = ['Besta ou monstruosidade sem motivações específicas','Aberração propensa a corrupção ou dominação','Corruptor propenso a corrupção ou destruição','Dragão propenso a dominação ou saque','Gigante propenso a saquear','Morto-vivo com qualquer motivação','Fada com um objetivo misterioso','Humanoide cultista','Humanoide conquistador','Humanoide buscando vingança','Humanoide conspirador buscando governar','Humanoide mestre do crime','Humanoide incursor ou devastador','Humanoide sob uma maldição','Humanoide fanático desorientado']
    elmalvado = elmalvado[Math.floor(Math.random() * elmalvado.length)] // Vilão da história
    var climax = [
        'Os aventureiros enfrentam o vilão principal e um grupo de lacaios em uma batalha sangrenta para a conclusão.',
        'Os aventureiros perseguem o vilão enquanto desviam de obstáculos colocados para impedi-los, levando ao confronto final dentro ou fora do refúgio do vilão.',
        'As ações dos aventureiros ou do vilão resultam em um evento cataclísmico o qual os aventureiros devem escapar.',
        'Os aventureiros correm até o local onde o vilão está concluindo seu plano mestre, chegando exatamente no momento que o plano está prestes a se concluir.',
        'O vilão e dois ou três tenentes realizam rituais separados em um imenso salão. Os aventureiros devem impedir todos os rituais ao mesmo tempo.',
        'Um aliado trai os aventureiros quando eles estão prestes a concluir seu objetivo. (Use esse clímax com cuidado e não abuse dele.)',
        'Um portal se abre para outro plano de existência. As criaturas do outro lado saem, forçando os aventureiros a fechar o portal e lidarem com o vilão ao mesmo tempo.',
        'Armadilhas, perigos ou objetos animados se vltam contra os aventureiros enquanto o vilão principal ataca.',
        'A masmorra começa a desmoronar enquanto os aventureiros enfrentam o vilão principal, que tenta escapar em meio ao caos.',
        'Uma ameaça mais poderosa que os aventureiros aparece, destrói o vilão principal e então volta suas atenções para os personagens.',
        'Os aventureiros devem escolher se perseguem o vilão principal em fuga ou salvam um PdM com quem se importam ou um grupo de inocentes.',
        'Os aventureiros devem descobrir a fraqueza secreta do vilão principal antes de terem esperança de derrota-lo.'
    ]
    climax = climax[Math.floor(Math.random() * climax.length)]

    var tavern = document.querySelector('main')
    tavern.style.opacity = 1
    var res = document.getElementById('tavern')
    res.innerHTML=    `
                        <div class='grupo'>
                        <h2>O começo da aventura:</h2>
                        <p>A aventura se inicia quando:${inicio}</p>
                        <hr>
                        <br>
                        <h2>Local da missão:</h2>
                        <p>Os aventureiros se deparam com uma construção antiga em: [${dg}]</p>
                        <hr>
                        <br>
                        <h2>Criador do local:</h2>
                        <p>Que mais tarde se revela tendo sido construido por: ${criador}</p>
                        <hr>
                        <br>
                        <h2>Vilão da aventura:</h2>
                        <p>O grande vilão que se abriga e trama seus planos neste lugar, acaba sendo revelado como um: ${elmalvado}</p>
                        <hr>
                        <br>
                        <h2>Climax:</h2>
                        <p>No momento decisivo acaba que acontece [${climax}]</p>
                        </div>
                        <img class='adventure' src='img/aventure.jpg' alt=''>
                        `
}