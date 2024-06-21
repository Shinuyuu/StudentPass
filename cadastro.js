document.addEventListener("DOMContentLoaded", () => {
 
    function verify(){
 
        const limiteCaracteres = 3;
 
        const isContainsNumber = /^(?=.*[0-9]).*$/;
 
   
 
        var campo_CodigoEtec = document.getElementById("cd_etec");
 
   
 
        var campo_CodigoEtecConteudo = campo_CodigoEtec.value;
 
       
 
        if (isContainsNumber.test(campo_CodigoEtecConteudo.substring(campo_CodigoEtecConteudo.length-1,campo_CodigoEtecConteudo.length))){
 
            if(campo_CodigoEtecConteudo.length > limiteCaracteres){
 
                campo_CodigoEtec.value = campo_CodigoEtecConteudo.slice(0, limiteCaracteres);
 
            }
 
        }
 
        else{
 
            campo_CodigoEtec.value = campo_CodigoEtecConteudo.substring(0,campo_CodigoEtecConteudo.length-1);
 
        }
 
        console.log(campo_CodigoEtecConteudo);
 
   
 
    };
 
    document.getElementById("cd_etec").addEventListener("keyup",verify);
 
    document.getElementById("cd_etec").addEventListener("keypress",verify);
 
});
 
 
 
function mostrarSenha2(){
 
    var inputPass = document.getElementById('senha2')
 
    var btnShowPass = document.getElementById('btn-senha2')
 
 
 
    if(inputPass.type === 'password'){
 
        inputPass.setAttribute('type', 'text')
 
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
 
    }else{
 
        inputPass.setAttribute('type', 'password')
 
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
 
    }
 
}
 
 
 
function mostrarSenha3(){
 
    var inputPass = document.getElementById('senha3')
 
    var btnShowPass = document.getElementById('btn-senha3')
 
 
 
    if(inputPass.type === 'password'){
 
        inputPass.setAttribute('type', 'text')
 
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
 
    }else{
 
        inputPass.setAttribute('type', 'password')
 
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
 
    }
 
}