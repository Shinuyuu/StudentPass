<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleMirros.css">
    <!-- <script src="registro.js" type="text/Javascript"></script> -->
    <title>Registro-StudentPass</title>
    <style>
        .searchIcon {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        .searchBox {
            position: relative;
        }

        .searchInput {
            padding-right: 40px;
        }
        .BotaoCalendario {

        background-color: transparent;
        border: none;
        
        }
        .BotaoPesquisa {

        background-color: transparent;
        border: none;

        }
    </style>
</head>
<body class="backDesign2">
    <div class="fakeBody">
        <img src="studantePass.png" alt="logo" id="logo" />
        <a class="botao_voltar"  href="index.html">Sair</a>
        <div class="centered teste">
            <h1 class="centered">ETEC Adolpho Berezin</h1>
            <form class="searchBox" action="pesquisa.php" method="post">
                <input class="logInput searched searchInput" type="search" name="search" id="search" autocomplete="on" required>
                <button class="BotaoPesquisa"><input class="SearchIcon" type="image" src="SearchIcon.png" width="40" height="40" id="IconeP"></button>
                <select class="selectList" id="filter" name="filter" style="height:40px" required>
                    <option value="" selected disabled>Nenhum</option>    
                    <option value="nm">Nome</option>
                    <option value="rm">RM</option>
                </select>
                <?php
                    date_default_timezone_set('America/Sao_Paulo');
                    $dtNOW = date('Y-m-d');
                    echo '<input hidden type="date" name="dated" id="dated" value="'.$dtNOW.'" autocomplete="off">';
                ?>
            </form>

            <div class="rowFlex">
                <?php

                include "conexao.php";
                $selectedFilter = "none";
                //$hrNOW = date('H:i:s');

                $sql = "SELECT * FROM tb_entrada_saida as e,
                tb_matricula as m, 
                tb_turma as t 
                where e.dt_entrada = '$dtNOW'
                and e.fk_cd_matricula = m.cd_matricula
                and t.sg_turma = m.fk_sg_turma;";
                $result = $conexao->query($sql);
                $result2 = $conexao->query($sql);

                if ($result->num_rows > 0) {
                  // output data of each row
                  echo '<div class="entrance" id="entrance">
                        <div class="centered titleLabel">Entrada</div>
                        <div id="entranceGroup">';
                  while($row = $result->fetch_assoc()) {
                        if ($row['id_tipo'] == 0){ // bit 0 = entrada
                        echo '
                        <div class="upperBox centered">
                            <div class="innerFirstBox">
                                <div class="centered" style="width: 100%;">
                                <div class="nm_aluno" id="nm_aluno">Nome: '.$row['nm_aluno'].'</div>
                                <div class="rm_aluno" id="rm_aluno">RM: '.$row['rm_aluno'].'</div>
                            </div>
                            <div class="curso_aluno" id="curso_aluno">Curso: '.$row['sg_turma'].'</div>
                            <div class="randomImg"></div>
                        </div>
                            <div class="innerSecondBox">
                                <div class="txtLabel2">Saída</div>
                                <div class="roundedInner">
                                    <div class="txtLabel2 hour">'.$row['hr_entrada'].'</div>
                                    <div class="randomImg3"></div>
                                </div>
                            </div>
                        </div>
                        ';
                        }
                    }
                    echo '</div>
                    </div>';
                        
                    echo '<div class="exit" id="exit">
                        <div class="centered titleLabel">Saída</div>
                        <div id="exitGroup">';
                    while($row2 = $result2->fetch_assoc()) {
                        if ($row2['id_tipo'] == 1){ // bit 1 = saida
                            echo '
                            <div class="upperBox centered">
                                <div class="innerFirstBox">
                                    <div class="centered" style="width: 100%;">
                                    <div class="nm_aluno" id="nm_aluno">Nome: '.$row2['nm_aluno'].'</div>
                                    <div class="rm_aluno" id="rm_aluno">RM: '.$row2['rm_aluno'].'</div>
                                </div>
                                <div class="curso_aluno" id="curso_aluno">Curso: '.$row2['sg_turma'].'</div>
                                <div class="randomImg"></div>
                            </div>
                                <div class="innerSecondBox">
                                    <div class="txtLabel2">Saída</div>
                                    <div class="roundedInner">
                                        <div class="txtLabel2 hour">'.$row2['hr_entrada'].'</div>
                                        <div class="randomImg3"></div>
                                    </div>
                                </div>
                            </div>
                            ';
                        }
                    }
                    echo '</div>
                    </div>';
                }
                else{
                    echo '<div class="entrance" id="entrance">
                        <div class="centered titleLabel">Entrada</div>
                        <div id="entranceGroup">
                        </div>
                    </div>';

                    echo '<div class="exit" id="exit">
                        <div class="centered titleLabel">Saída</div>
                        <div id="exitGroup">
                        </div>
                    </div>';
                }

                $conexao->close();
                ?>
            </div>

            <form class="dataBox" action="pesquisa.php" method="post">
                <div class="calendarImg"></div>
                <?php
                    echo '<input class="logInput dated" type="date" name="dated" id="dated" value="'.$dtNOW.'" autocomplete="off">';
                    echo '<input hidden type="text" value="" id="filter" name="filter">';
                    echo '<input hidden type="search" value="" name="search" id="search">';
                ?>
                <button class= "BotaoCalendario"><img src="SearchIcon.png" alt=""></button>
                <img src="Icon_calendar2.png" alt="calendario">
            </form>
            <div class="etecIcon"></div>
          
          <!-- //////Tentativa de criar uma nova barra de pesquisa/////// -->
            <input id="searchbar" type="Text" name="Searchbar" placeholder="Pesquisa por nome" onkeyup="search()">

            <!-- /////////////////////// -->
        </div>

    </div>
</body>
</html>

