<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include "conexao.php";


    // Obtém os dados do formulário  
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Consulta SQL para verificar se o usuário existe 
    $sql = "SELECT * FROM cadastro WHERE email='$email'";
    $resultado = $conexao->query($sql);

    // Verifica se encontrou algum registro  
    if ($resultado->num_rows > 0) {
        echo "Login realizado com sucesso!";
        header("Location: registro.php");
    } else {
        echo "Email ou senha incorretos.";
        header("Location: index.html");
        
    }

    // Fecha a conexão com o banco de dados 
    $conexao->close();
}
?>
