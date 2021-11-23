# React-JS Slider Posts App

<br />

O projeto consome dados de um arquivo e renderiza os dados num elemento do tipo Slider, apresentando dados de reviews postados.

<br />

#### React Project (the 15 Projects) - Freecodecamp.org

Conjunto de projetos de frontend inspirados na apresentação do professor **Johm Smilga** para aprofundar no conhecimento do framework React-JS e JavaScript. [^1]

<br />

[John Smilga complete Gatsby Airtable Design Project](https://gatsby-airtable-design-project.netlify.app/)

<br />

Assim, como funcionalidade principal, que é o Slider, o professor Smilga usa **position absolute** para posicionar os dados do arquivo de posts sendo renderizados no centro da tela. Mas o problema é que eles acabam ficando sobrepostos um ao outro na parte central da tela.

<br />

### Imagem com os dados sendo renderizados sobrepostos ao centro:

![Imagem com os dados sendo renderizados sobrepostos ao centro](/public/images/renderização-com-a-propriedade-position-absolute.png)

<br />

### Imagem mostrando como teria sido a renderização default sem a propriedade position absolute ao centro da tela:

![Imagem mostrando como teria sido a renderização default](/public/images/renderização-padrão-sem-position-absolute.png)

<br />

### Imagem da tela do professor Smilga apresentando as propriedades CSS que vão participar do processo para desembaralhar as imagens do Slider:

![Imagem da funcionalidade acrescida de Aniversariantes do Dia](/public/images/imagem-mostrada-pelo-prof-smilga.png)

<br />

Abaixo, temos os código CSS que por meio da propriedade transform e da função translateX(), faz com que as imagens seja remanejadas para os lados, deixando apenas a imagem ativa ao centro!!!

```
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}
```

<br />

Outras três propriedades CSS que estão colaborando na criação do efeito são:

<br />

```
.section-center {
  ...
  outras
  propriedades
  CSS
  ...
  height: 450px;
  overflow: hidden;
}

article {
  ...
  outras
  propriedades
  CSS
  ...
  opacity: 0;
  ...
  outras
  propriedades
  CSS
  ...
}
```

<br />

Assim, as propriedades **Overflow** vai esconder as imagens fora da Window do browser, **Opacity** fará todas as imagens transparentes, exceto a imagem ativa.

<br />

E a propriedade **Height** é essencial quando trabalhamos com a propriedade de posicionamento absoluto, porque aqui as imagens perdem a característica default HTML de pertencerem ao Flow do documento.

<br />

### Todas as imagens transparentes jogadas para a direita com **translateX(100%)**:

![As imagens transparentes jogadas para a direita](</public/images/as-imagens-para-direita-com-translateX(100).png>)

<br />

### A imagem ativa sendo colocada ao centro com **translateX(0)**:

![A imagem ativa sendo colocada ao centro](</public/images/imagem-ativa-ao-centro-com-translateX(0).png>)

<br />

### Imagem do processo de criação da funcionalidade de slide:

![Imagem da funcionalidade acrescida de Aniversariantes do Dia](/public/images/demonstração-da-funcionalidade-pelo-professor-smilga.png)

<br />

Nesta parte do script controlamos a distribuição de classes CSS para posicionar as imagens do Slider.
Em especial podemos observar a segunda **if clause**, por meio da qual garantimos que haverá sempre imagens posicionadas à esquerda da renderização do Slider que corre em ambas as direções:

<br />

```
let position = 'nextSlide';

if (personIndex === index) {
    position = 'activeSlide';
}
if (
personIndex === index - 1 ||
(index === 0 && personIndex === people.length - 1)
) {
    position = 'lastSlide';
}

return (
    <article key={id} className={position} >...
```

<br />

Usando um **useEffect()** para monitorar o índice dos dados sendo renderizados para garantir que sempre haja uma continuidade:

<br />

```
useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
```

<br />

### Usando funcionalidade de Intervalo para ter mudanças automáticas de imagens no slider:

![Imagem da funcionalidade de Intervalo de mudanças automáticas de imagens no slider](/public/images/usando-intervalos-automaticos-para-renderizar-novas-imagens.png)

<br />

Usando outro **useEffect()** para monitorar as mudanças de índice dos dados e aplicar intervalo de tempo para mudanças automáticas nas imagens sendo renderizadas.

<br />

Observe ainda a presença de uma função de Callback para fazer limpeza dos intervalos passados e evitar **Leaks** de memória na aplicação:

<br />

```
useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
```

<br />
<br />

[^1] John Smilga - Freecodecamp.org.
