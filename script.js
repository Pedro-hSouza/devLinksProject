function toggleMode() {

    //pegar a tag html
    const html = document.documentElement
    //tirar ou colocar a class 'light'
    html.classList.toggle('light')
    
    //substituir a imagem
    //pegar a tag img
    const img = document.querySelector('#profile img')
    
    
    
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        //mudar alt
        img.setAttribute('alt', 'Mayk sorrindo com um fundo gradient azul e roxo usando óculos de sol')
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        //mudar alt
        img.setAttribute('alt', 'Mayk sorrindo com um fundo gradient azul e roxo usando óculos')
    }
    
    
    
    
}