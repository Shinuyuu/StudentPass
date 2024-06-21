<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
<?php
include "conexao.php";

// Obtém os dados do formulário
$cd_etec = $_POST['cd_etec'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$confirma_senha = $_POST['confirma_senha'];
 

// Verifica se as senhas coincidem
if ($senha !== $confirma_senha) {
    die("As senhas não coincidem.");
}
$senha_hash = hash('sha256', $senha);
// Prepara a query SQL
$sql = "INSERT INTO cadastro (cd_etec, email, senha) VALUES ('$cd_etec', '$email', '$senha')";
$sql2 = "SELECT * FROM cadastro WHERE '$email' = email";
$resultado = $conexao->query($sql2);

// Verifica se encontrou algum registro  
// Executa a query SQL
if ($resultado->num_rows <= 0) {
    if (mysqli_query($conexao, $sql)) {
        header("Location: index.html");
    }
}
else {
    echo "Erro ao cadastrar: " . mysqli_error($conexao);
    echo '<script>
    history.back();
    </script>';
}

?>

</body>
</html>
