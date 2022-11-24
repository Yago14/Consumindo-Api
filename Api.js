const mudar = document.querySelector('#mudar')

mudar.addEventListener('click', (mudar) => {

    const pesquisar = document.querySelector('#pesquisar').value;

    // mudar.preventDefault()
    console.log('teste')

    const fetchApi = async () => {
        const url = `https://rickandmortyapi.com/api/character/${pesquisar}`;
        fetch(url)
            .then((Response) => {
                Response.json().then((data) => {


                    const img = data.image;
                    document.querySelector('#img').setAttribute('src', img)
                    document.querySelector('#nome').innerHTML = `<h1>name :</h1>${data.name}`
                    document.querySelector('#criado').innerHTML = `<h3>Criado(a) em :</h3>${data.created}`
                    document.querySelector('#especie').innerHTML = `<h3>Espécie :</h3>${data.species}`
                    document.querySelector('#genero').innerHTML = `<h3>Gênero :</h3>${data.gender}`
                    document.querySelector('#local').innerHTML = `<h3>Localidade :</h3>${data.location.name}`



                  


                })
            })
    }
    fetchApi()


}
);




