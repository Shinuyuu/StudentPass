var selectedFilter = "none"

var fakeBDEntrance = [
    // Nome | RM | Entrada | Data
    aluno1=["Yukio Sato","14020","20:30","2024-04-01", "3R3"],
    aluno2=["Pedro Andreotti Sales","12045","07:50","2024-04-02", "3I3"],
    aluno3=["Ramon Mesquita","14053","12:30","2024-04-03", "3I3"],
    aluno4=["Arthur Kalinauskas","16032","21:00","2024-04-03", "3I3"],
    aluno5=["Roger da Silva","13551", "19:35", "2024-05-08", "3I3"]
];

var fakeBDExit = [
    // Nome | RM | Saida | Data
    aluno1=["Yukio Utiyama Sato","14020","22:30","2024-04-01", "3I3"],
    aluno2=["Pedro Andreotti Sales","12045","11:00","2024-04-02", "3I3"],
    aluno3=["Arthur Kalinauskas","16032","22:45","2024-04-03", "3I3"],
    aluno4=["Arthur Kalinauskas","16032","12:45","2024-04-04", "3I3"],
];

document.addEventListener("DOMContentLoaded",()=>{
    // Data Update NOW!
    var dating = new Date();
    var data = dating.getDay();
    var month = dating.getMonth()+1;
    var year = dating.getFullYear();
    var fullData = year+"-"+month.toString().padStart(2,"0")+"-"+data.toString().padStart(2,"0");
    document.getElementById("dated").value = fullData.toString();
    document.getElementById("dated").addEventListener("change",()=>{updtRegister()})
    document.getElementById("filter").addEventListener("change",()=>{
        selectedFilter = document.getElementById("filter").value;
    })
    updtRegister();
})

var updtRegister = () => {

    // Clear Children
        document.getElementById("entrance").removeChild(document.getElementById("entranceGroup"));
        var entranceNew = document.createElement("div");
        entranceNew.id = "entranceGroup";
        document.getElementById("entrance").appendChild(entranceNew);

        document.getElementById("exit").removeChild(document.getElementById("exitGroup"));
        var exitNew = document.createElement("div");
        exitNew.id = "exitGroup";
        document.getElementById("exit").appendChild(exitNew);

        /*document.getElementById("foto").removeChild(document.getElementById("foto"));
        var foto = document.createElement("div");
        document.getElementById("Fotinha").appendChild(foto);*/

        //NESSE ESPAÇO EU VOU TENTAR COLOCAR A FOTO(N TENHO A MENOR IDEIA DE COMO FAZ) = "SOS"
    
    // Entrance
    for (let i = 0; i < fakeBDEntrance.length; i++) {
        if (fakeBDEntrance[i][3] == document.getElementById("dated").value){
        // First Box of Entrance

        var dived = document.createElement("div");
        dived.classList.add("upperBox");
        dived.classList.add("centered");

        var innerFirstBox = document.createElement("div");
        innerFirstBox.classList.add("innerFirstBox");

        var centeredMaxwidth = document.createElement("div");
        centeredMaxwidth.classList.add("centered");
        centeredMaxwidth.style.width = "100%";

        var nm_aluno = document.createElement("div");
        nm_aluno.classList.add("nm_aluno");
        nm_aluno.id = "nm_aluno";
        nm_aluno.textContent = "Nome: "+fakeBDEntrance[i][0].toString();

        var rm_aluno = document.createElement("div");
        rm_aluno.classList.add("rm_aluno");
        rm_aluno.id = "rm_aluno";
        rm_aluno.textContent = "RM: "+fakeBDEntrance[i][1].toString();

        var curso_aluno = document.createElement("div");
        curso_aluno.classList.add("curso_aluno");
        curso_aluno.id = "curso_aluno";
        curso_aluno.textContent = "Curso: "+fakeBDEntrance[i][4].toString();


        var randomImg = document.createElement("div");
        randomImg.classList.add("randomImg");


        centeredMaxwidth.appendChild(nm_aluno);
        centeredMaxwidth.appendChild(rm_aluno);
        innerFirstBox.appendChild(centeredMaxwidth);
        innerFirstBox.appendChild(curso_aluno);
        innerFirstBox.appendChild(randomImg);


        // Second box of Entrance

        var innerSecondBox = document.createElement("div");
        innerSecondBox.classList.add("innerSecondBox");

        var txtLabel2 = document.createElement("div");
        txtLabel2.classList.add("txtLabel2");
        txtLabel2.textContent = "Entrada";

        var roundedInner = document.createElement("div");
        roundedInner.classList.add("roundedInner");

        var hour = document.createElement("div");
        hour.classList.add("txtLabel2");
        hour.classList.add("hour");
        hour.id = "hour";
        hour.textContent = fakeBDEntrance[i][2].toString();

        var randomImg2 = document.createElement("div");
        randomImg2.classList.add("randomImg2");

        roundedInner.appendChild(hour);
        roundedInner.appendChild(randomImg2);
        innerSecondBox.appendChild(txtLabel2);
        innerSecondBox.appendChild(roundedInner);

        // Final adjust on Entrance

        dived.appendChild(innerFirstBox);
        dived.appendChild(innerSecondBox);
        document.getElementById("entranceGroup").appendChild(dived);
        }
    }


    // Exit Boxs

    for (let i = 0; i < fakeBDExit.length; i++) {
        if (fakeBDExit[i][3] == document.getElementById("dated").value){

        // First Box of Exit

        var dived = document.createElement("div");
        dived.classList.add("upperBox");
        dived.classList.add("centered");

        var innerFirstBox = document.createElement("div");
        innerFirstBox.classList.add("innerFirstBox");

        var centeredMaxwidth = document.createElement("div");
        centeredMaxwidth.classList.add("centered");
        centeredMaxwidth.style.width = "100%";

        var nm_aluno = document.createElement("div");
        nm_aluno.classList.add("nm_aluno");
        nm_aluno.id = "nm_aluno";
        nm_aluno.textContent = "Nome: "+fakeBDExit[i][0].toString();

        var rm_aluno = document.createElement("div");
        rm_aluno.classList.add("rm_aluno");
        rm_aluno.id = "rm_aluno";
        rm_aluno.textContent = "RM: "+fakeBDExit[i][1].toString();

        var curso_aluno = document.createElement("div");
        curso_aluno.classList.add("curso_aluno");
        curso_aluno.id = "curso_aluno";
        curso_aluno.textContent = "Curso: "+fakeBDExit[i][4].toString()

        var randomImg = document.createElement("div");
        randomImg.classList.add("randomImg");


        centeredMaxwidth.appendChild(nm_aluno);
        centeredMaxwidth.appendChild(rm_aluno);
        innerFirstBox.appendChild(centeredMaxwidth);
        innerFirstBox.appendChild(curso_aluno);
        innerFirstBox.appendChild(randomImg);


        // Second box of Exit

        var innerSecondBox = document.createElement("div");
        innerSecondBox.classList.add("innerSecondBox");

        var txtLabel2 = document.createElement("div");
        txtLabel2.classList.add("txtLabel2");
        txtLabel2.textContent = "Saída";

        var roundedInner = document.createElement("div");
        roundedInner.classList.add("roundedInner");

        var hour = document.createElement("div");
        hour.classList.add("txtLabel2");
        hour.classList.add("hour");
        hour.textContent = fakeBDExit[i][2].toString();

        var randomImg3 = document.createElement("div");
        randomImg3.classList.add("randomImg3");

        roundedInner.appendChild(hour);
        roundedInner.appendChild(randomImg3);
        innerSecondBox.appendChild(txtLabel2);
        innerSecondBox.appendChild(roundedInner);

        // Final adjust on Exit

        dived.appendChild(innerFirstBox);
        dived.appendChild(innerSecondBox);
        document.getElementById("exitGroup").appendChild(dived);
        }
    }
}

