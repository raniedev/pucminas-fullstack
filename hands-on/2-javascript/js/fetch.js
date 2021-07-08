// function carga() {
//     fetch('https://reqres.in/api/users/').then(function(resp) {
//         console.log(resp);
//         if(resp.ok) {
//             return resp.json();
//         }
//     }).then(function(obj) {
//         console.log(obj);
//     }).catch ((erro) => console.log(erro));
// }

// function carga(n) {
//     fetch('https://reqres.in/api/users/' + n)
//         .then((resp) => resp.json())
//         .then((obj) => console.log(obj))
//         .catch((erro) => console.log(erro));
// }

function carga(n) {
    fetch('https://reqres.in/api/users/' + n)
        .then((resp) => resp.json())
        .then((obj) => carregaImagem(obj.data.avatar))
        .catch((erro) => console.log(erro));
}
    
function carregaImagem(avatar) {
    fetch(avatar)
        .then(resp => resp.blob())
        .then(b => {imagem.src = URL.createObjectURL(b)})
        .catch((erro) => console.log(erro));        
}

output.innerHTML = 
    `<input id="idUser" type="number" value="1">
    <button id="btn">Ver avatar</button><br>
    <img id="imagem" src="img/usuario.png" alt="Usuário">`
;

btn.onclick = () => carga(idUser.value);