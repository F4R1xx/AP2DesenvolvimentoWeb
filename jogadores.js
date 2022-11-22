let jogadores = [
    {
        "nome": "Gatito Fernández",
        "posicao": "Goleiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/gatito.png",
        "descricao": "Filho do goleiro Gato Fernández, que fez história e jogou na seleção paraguaia, Gatito seguiu a profissão do pai. Com passagens por clubes importantes da América do Sul, veio para o Brasil em 2014, teve boas atuações por Vitória e Figueirense, até chegar ao Botafogo.",
        "nome_completo": "Roberto Júnior Fernández Torres",
        "nascimento": "29/03/1988, em Assunção (PAR)",
        "altura_peso": "1,91m e 80kg"
    },
    {
        "nome": "Douglas Borges",
        "posicao": "Goleiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/douglas.png",
        "descricao": "Eleito o melhor goleiro do Campeonato Carioca de 2020, Douglas Borges chega para reforçar a meta alvinegra na temporada 2021. Experiente, o arqueiro chega para elevar o nível de competitividade na meta do Glorioso.",
        "nome_completo": "Douglas Borges",
        "nascimento": "30/03/1990, em Franca (SP)",
        "altura_peso": "1,86m e 88,9Kg"
    },
    {
        "nome": "Igo Gabriel",
        "posicao": "Goleiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/igo-gabriel.png",
        "descricao": "Cria das categorias de base do Botafogo, Igo Gabriel foi peça importante durante a temporada do do Sub-20 alvinegro, que foi campeão da Copa Rio OPG e vice-campeão da Copa do Brasil em 2021. Um dos destaques do time, o goleiro se firmou com excelentes atuações na base e agora espera repetir o sucesso incorporando o elenco profissional do Glorioso.",
        "nome_completo": "Igo Gabriel Santos Prereira",
        "nascimento": "13/10/2001, em Maceió-AL",
        "altura_peso": "1,90m"
    },
    {
        "nome": "Lucas Perri",
        "posicao": "Goleiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/lucasperri.png",
        "descricao": "Goleiro promissor, Lucas Perri iniciou sua trajetória no futebol com a camisa do São Paulo e obteve inúmeras convocações para as seleções brasileiras de base. Após um ano de bastante destaque pelo Náutico, o arqueiro chega ao Glorioso para agregar valor para a defesa da meta alvinegra.",
        "nome_completo": "Lucas Estella Perri",
        "nascimento": "12/10/1997, em Valinhos (SP)",
        "altura_peso": "1,97cm"
    },
    {
        "nome": "Hugo",
        "posicao": "Lateral",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/hugo.png",
        "descricao": "Jovem promissor, Hugo despontou no sub-20 do Botafogo e foi integrado gradativamente aos profissionais. O lateral-esquerdo trabalha com afinco para agarrar as oportunidades.",
        "nome_completo": "Hugo Gonçalves Ferreira Neto",
        "nascimento": "20/09/2001, em João Pessoa (PB)",
        "altura_peso": "1,75m e 67kg"
    },
    {
        "nome": "Carlinhos",
        "posicao": "Lateral",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/carlosemiliano.png",
        "descricao": "Lateral de muita intensidade e entrega em campo, Carlinhos vem para o Glorioso após passagem pelo Fortaleza. Com uma vasta experiência e rodagem no cenário do futebol brasileiro, o atleta chega para aumentar a competitividade na lateral-esquerda alvinegra.",
        "nome_completo": "Carlos Emiliano Pereira",
        "nascimento": "29/11/1986, em Piripiri (PI)",
        "altura_peso": "1,68m"
    },
    {
        "nome": "Rafael",
        "posicao": "Lateral",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/rafael-pereira.png",
        "descricao": "Escolhido pelo Botafogo desde sempre, chegou o momento de Rafael realizar o sonho de atuar em seu clube de coração. Com uma vasta experiência adquirida, após anos atuando entre os grandes do futebol europeu, o lateral se caracteriza por sua polivalência, um forte espírito de competitividade e boa técnica em campo.",
        "nome_completo": "Rafael Pereira da Silva",
        "nascimento": "09/07/1990, em Petrópolis (RJ)",
        "altura_peso": "1,72m"
    },
    {
        "nome": "Daniel Borges",
        "posicao": "Lateral",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/daniel-borges.png",
        "descricao": "Melhor lateral-direito da Série B de 2020, Daniel Borges chega ao Botafogo após ótima passagem pelo Mirassol no Campeonato Paulista. Com características ofensivas, o lateral possui boa vivência na competição e vem para ajudar o Alvinegro na temporada.",
        "nome_completo": "Daniel Fortunato Borges",
        "nascimento": "23/03/1993, em São José dos Campos (SP)",
        "altura_peso": "1,74m / Peso: 68Kg"
    },
    {
        "nome": "Saravia",
        "posicao": "Lateral",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/saravia.png",
        "descricao": "Adaptado ao futebol brasileiro, Renzo Savaria chega ao Botafogo após passagem pelo Porto. O lateral, que tem como características a força física e o apoio ao ataque, foi mais um reforço do início da Era John Textor.",
        "nome_completo": "Renzo Saravia",
        "nascimento": "16/06/1993, em Vila María, Argentina",
        "altura_peso": "1,78m"
    },
    {
        "nome": "Marçal",
        "posicao": "Lateral",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/marcal.png",
        "descricao": "Jogador de grande experiência no futebol internacional, Fernando Marçal volta ao Brasil após 12 anos para defender o Botafogo. O lateral-esquerdo, que se destaca pela força física e polivalência, chega após uma temporada na Premier League, onde defendeu o Wolverhampton.",
        "nome_completo": "Fernando Marçal Oliveira",
        "nascimento": "19/02/1989, em São Paulo (SP)",
        "altura_peso": "1,78m"
    },
    {
        "nome": "Joel Carli",
        "posicao": "Zagueiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/joelcarli.png",
        "descricao": "Reconhecido por sua raça, liderança e respeito pela camisa alvinegra, o zagueiro argentino retorna para agregar experiência ao elenco na missão de reconstrução em 2021. O xerife da defesa do Fogão possui mais do que 100 jogos pelo Botafogo e foi decisivo no título conquistado pelo Alvinegro, em 2018, diante do Vasco, no Maracanã.",
        "nome_completo": "Mauro Joel Carli",
        "nascimento": "19/10/1986, em Mar del Plata (ARG)",
        "altura_peso": "1,93m e 91kg"
    },
    {
        "nome": "Kanu",
        "posicao": "Zagueiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/kanu.png",
        "descricao": "Cria da base do Botafogo, o jovem sempre mostrou personalidade e bom posicionamento. Autor de gol na final do Campeonato Brasileiro Sub-20, conquistado pelo Botafogo, chegou aos profissionais em 2018 para mostrar seu futebol.",
        "nome_completo": "Victor Hugo Soares dos Santos",
        "nascimento": "07/03/1997, em Duque de Caxias (RJ)",
        "altura_peso": "1,86m e 74kg"
    },
    {
        "nome": "Philipe Sampaio",
        "posicao": "Zagueiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/philipe-sampaio.png",
        "descricao": "Formado no Santos, o defensor fez carreira e atuou por oito temporadas no futebol europeu. Conhecido como \"General\" na França, Sampaio fez parte da linha defensiva que ficou 700 minutos seguidos sem levar gols. Motivado com o desafio de construir uma nova história junto ao Glorioso, Sampaio chega como a primira contratação da Era John Textor.",
        "nome_completo": "Philipe Sampaio Azevedo",
        "nascimento": "11/11/1994, em São Paulo (SP)",
        "altura_peso": "1,91m"
    },
    {
        "nome": "Victor Cuesta",
        "posicao": "Zagueiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/cuesta.png",
        "descricao": "Experiente defensor, Victor Cuesta chega para agregar valor ao setor defensivo do Botafogo. Eleito um dos melhores zagueiros do Campeonato Brasileiro nas temporadas 2018 e 2020, o Argentino tem um espírito de liderança característicos e chega com vontade de construir uma história de glórias com a camisa alvinegra.",
        "nome_completo": "Víctor Leandro Cuesta",
        "nascimento": "19/11/1988, em La Plata, Argentina",
        "altura_peso": "1,87m"
    },
    {
        "nome": "Adryelson",
        "posicao": "Zagueiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/adryelson.png",
        "descricao": "Após uma breve passagem pelo futebol árabe, Adryelson chega ao Alvinegro para reforçar o setor defensivo. O zagueiro se destaca pela força, velocidade e impulsão.",
        "nome_completo": "Adryelson Shawann Lima Silva",
        "nascimento": "23/03/1998",
        "altura_peso": "1,82m"
    },
    {
        "nome": "Lucas Mezenga",
        "posicao": "Zagueiro",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/mezenga.png",
        "descricao": "Após disputar o Campeonato Carioca profissional pelo Nova Iguaçu, Mezenga foi observado pelo departamento captação das categorias de base do Botafogo e chegou para reforçar a equipe Sub-20. Em pouco tempo, o defensor mostrou potencial na base e logo teve a oportunidade de subir ao time principal. Com boa técnica e poder de marcação, Lucas busca agora se firmar no time de cima.",
        "nome_completo": "Lucas de Souza Mombra Rosa",
        "nascimento": "20/10/2001, em Rio de Janeiro-RJ",
        "altura_peso": "1,85cm"
    },
    {
        "nome": "kayque",
        "posicao": "Volante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/kayque.png",
        "descricao": "-",
        "nome_completo": "Kayque Luiz Pereira",
        "nascimento": "12/07/2000, no Rio de Janeiro (RJ)",
        "altura_peso": "1,76m e 78kg"
    },
    {
        "nome": "Del Piage",
        "posicao": "Volante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/romildo.png",
        "descricao": "-",
        "nome_completo": "Romildo Del Piage de Souza",
        "nascimento": "12/04/2000, em São José dos Campos (SP)",
        "altura_peso": "1,81m e 71kg"
    },
    {
        "nome": "Tchê Tchê",
        "posicao": "Volante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/tchetche.png",
        "descricao": "Volante de elevada qualidade técnica, Tchê Tchê coleciona conquistas na carreira. Tricampeão Brasileiro, da Copa do Brasil, entre outros títulos, o meia assume a histórica camisa 6 de Nilton Santos e chega ao Glorioso com o objetivo de ajudar na construção do novo projeto alvinegro.",
        "nome_completo": "Danilo das Neves Pinheiro",
        "nascimento": "30/08/1992, em São Paulo",
        "altura_peso": "1,75m"
    },
    {
        "nome": "Danilo Barbosa",
        "posicao": "Volante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/danilobarbosa.png",
        "descricao": "Volante moderno, Danilo tem um currículo que reune muita experiência no futebol europeu. Revelado pelo Vasco, saiu muito cedo do país e atuou em Portugal, Espanha, Bélgica e França, antes de voltar ao Brasil para ser campeão da Libertadores pelo Palmeiras. Motivado, o volante quer voltar a jogar futebol com alegria pelo Botafogo.",
        "nome_completo": "Danilo Barbosa da Silva",
        "nascimento": "28/02/1996, em Simões Filho, (BA)",
        "altura_peso": "1,83cm"
    },
    {
        "nome": "Lucas Piazon",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/lucas-piazon.png",
        "descricao": "Lucas Piazon retorna ao Brasil para atuar pela primeira vez como profissional e agregar valor ao elenco alvinegro com suas qualidades e experiências. Revelado pelo São Paulo e com convocações para a Seleção Brasileira de base, o meia foi negociado em 2011, ainda muito jovem, junto ao Chelsea. Lucas atuou também pelo futebol espanhol, holandês, alemão, italiano e português.",
        "nome_completo": "Lucas Domingues Piazón",
        "nascimento": "20/01/1994, em São Paulo (SP)",
        "altura_peso": "1,82m"
    },
    {
        "nome": "Patrick de Paula",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/patrick-paula.png",
        "descricao": "Bicampeão da Libertadores e oriundo da Taça das Favelas do Rio de Janeiro, Patrick de Paula chegou ao Botafogo como a contratação mais cara da história alvinegra. Meio-campista reconhecido pelo talento e vigor físico, PK tem o toque de versatilidade que todo time precisa em campo.",
        "nome_completo": "Patrick de Paula Carreiro",
        "nascimento": "08/09/1999, em Rio de Janeiro, RJ",
        "altura_peso": "1,78m"
    },
    {
        "nome": "Lucas Fernandes",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/lucas-fernandes.png",
        "descricao": "Meia de muita qualidade técnica, Lucas foi revelado pelo São Paulo e, desde muito jovem, se destacou com convocações para as Seleções Brasileiras de base. Após um período produtivo e de evolução no futebol português, Fernandes chega ao Botafogo para somar forças ao setor criativo da equipe.",
        "nome_completo": "Lucas Fernandes da Silva",
        "nascimento": "20/09/1997, em São Bernardo do Campo, SP",
        "altura_peso": "1,75m"
    },
    {
        "nome": "Eduardo",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/eduardo.png",
        "descricao": "Meio-campista objetivo e com alto poder de definição, Eduardo construiu uma carreira sólida fora do país. Com experiências no futebol português e francês, o meia conquistou inúmeros títulos e se tornou ídolo na Arábia Saudita. Motivado com o desafio de defender o Glorioso, Eduardo espera conquistar também a torcida alvinegra.",
        "nome_completo": "Carlos Eduardo de Oliveira Alves",
        "nascimento": "17/10/1989, em Ribeirão Preto (SP)",
        "altura_peso": "1,84cm"
    },
    {
        "nome": "Jeffinho",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/jeffinho.png",
        "descricao": "Com muita habilidade e ousadia em seu futebol, o jovem se destacou no Campeonato Carioca pelo Resende e foi uma das contratações para o time Sub-23 do Glorioso. Jeffinho é o clássico ponta que parte para cima e com esse cartão de visitas logo foi chamado para integrar a equipe profissional.",
        "nome_completo": "Jefferson Ruan Pereira dos Santos",
        "nascimento": "30/12/1999, em Volta Redonda (RJ)",
        "altura_peso": "1,76cm"
    },
    {
        "nome": "Luis Henrique",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/luishenrique.png",
        "descricao": "Cria da base alvinegra, Luis Henrique está nem sua segunda passagem pelo Glorioso. O atacante retorna após vivência futebol europeu, ainda mais desenvolvido fisicamente. Se destaca em campo por bastante força, velocidade e objetividade nas ações ofensivas.",
        "nome_completo": "Luis Henrique Tomaz de Lima",
        "nascimento": "14/12/2001, em João Pessoa (PB)",
        "altura_peso": "1,81cm"
    },
    {
        "nome": "Jacob Montes",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/jacob.png",
        "descricao": "Com passagens por Crystal Palace e RWD Molenbeek, Jacob Montes é um dos representantes do conceito multiclubes ideializado pelo acionista majoritário John Textor. O atleta norte-americano chega ao Botafogo para um intercâmbio e busca se adaptar a cultura brasileira.",
        "nome_completo": "Jacob Christian Montes",
        "nascimento": "20/10/1998, em Flórida-EUA",
        "altura_peso": "1,80cm"
    },
    {
        "nome": "Gabriel Pires",
        "posicao": "Meia",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/gabrielpires.png",
        "descricao": "Escolhido pelo Botafogo, Gabriel Pires é um meio-campo de muita qualidade técnica e com um bom toque de bola. Após fazer a base no Resende, o meia fez carreira na Europa e chega para realizar o sonho de atuar pelo clube de coração.",
        "nome_completo": "Gabriel Appelt Pires",
        "nascimento": "18/09/1993, Resende (RJ)",
        "altura_peso": "1,87cm"
    },
    {
        "nome": "DIEGO GONÇALVES",
        "posicao": "Atacante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/diego-goncalves.png",
        "descricao": "Atacante que gosta de atuar pelas beiradas do campo, Diego Gonçalves chega ao Glorioso após boas passagens por Figueirense e Mirassol. O ponta também possui experiência no futebol de Portugal e está motivado em desempenhar um bom papel pelo Alvinegro.",
        "nome_completo": "Diego Gonçalves",
        "nascimento": "22/09/1994, em Guarujá-SP",
        "altura_peso": "1,81m"
    },
    {
        "nome": "Victor Sá",
        "posicao": "Atacante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/victor-sa.png",
        "descricao": "Atacante com passagem longa pelo futebol internacional, Victor Sá retorna ao Brasil para defender o Botafogo. Habilidoso e rápido, o jogador se apresenta como uma das ferramentas ofensivas do Clube na temporada.",
        "nome_completo": "João Victor Sá",
        "nascimento": "27/03/1994, em São José dos Campos, SP",
        "altura_peso": "1,78m"
    },
    {
        "nome": "Matheus Nascimento",
        "posicao": "Atacante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/matheus-nascimento.png",
        "descricao": "Cria do Botafogo, centroavante goleador desde muito cedo, Matheus Nascimento tem passagem pela Seleção Brasileira sub-15 e diversos gols no início da carreira. Em 2020, com apenas 16 anos e muito futuro pela frente, assinou contrato e passou a treinar com os profissionais do Botafogo.",
        "nome_completo": "Matheus Nascimento de Paula",
        "nascimento": "03/03/2004, no Rio de Janeiro (RJ)",
        "altura_peso": "1,82m e 71kg"
    },
    {
        "nome": "Gustavo Sauer",
        "posicao": "Atacante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/gustavo-sauer.png",
        "descricao": "Após boas atuações no futebol português com a camisa do Boavista por quatro temporadas, Gustavo Sauer está empolgado com o novo desafio de vestir a camisa alvinegra. De volta ao Brasil, o atacante que possui um perfil completo para um jogador de frente, espera elevar o nível ofensivo da equipe e conquistar grandes objetivos pelo Glorioso.",
        "nome_completo": "Gustavo Affonso Sauerbeck",
        "nascimento": "em 30/04/1993, em Joinville, SC",
        "altura_peso": "1,81m"
    },
    {
        "nome": "Tiquinho Soares",
        "posicao": "Atacante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/tiquinho.png",
        "descricao": "Natural de Sousa, na Paraíba, Tiquinho Soares desenvolveu sua carreira no futebol português e conquistou muitos títulos na Europa. Goleador por onde passou, Soares volta ao seu país para assumir a missão ser o homem forte do ataque do Glorioso.",
        "nome_completo": "Francisco das Chagas Soares dos Santos",
        "nascimento": "17/01/1991, em Sousa (PB)",
        "altura_peso": "1,87cm"
    },
    {
        "nome": "Junior Santos",
        "posicao": "Atacante",
        "imagem": "https://www.botafogo.com.br/images/elenco2022/juniorsantos.png",
        "descricao": "Chegando do futebol asiático, Junior Santos é um atacante de bastante força e movimentação. O centroavante baiano, que é dono de um carisma peculiar fora do campo, chega para somar valor ao setor ofensivo do Alvinegro dentro das quatro linhas.",
        "nome_completo": "José Antonio dos Santos Júnior",
        "nascimento": "11/10/1994, em Conceição de Jacuípe (BA)",
        "altura_peso": "1,88cm"
    }
]
