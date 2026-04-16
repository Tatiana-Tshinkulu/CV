let table = document.getElementById("tableCompetences");

if(table){
    let competences = [
        { nom: "Programmation", detail: "Java(JavaFX, JUnit), C#, Bash, HTML/CSS" },
        { nom: "JavaScript", detail: "DOM, Events, JSON" },
        { nom: "Microsoft Office", detail: "Word, PowerPoint, Excel, Navision(ERP)" },
        { nom: "Magasin/Stock", detail: "Caisse, réception, gestion marchandises" },
        { nom: "Relation client", detail: "Accueil, conseil, fidélisation" },
        { nom: "Couture", detail: "Machine, tricot, crochet, patronnage" }
    ];

    competences.forEach(function(comp) {
        let ligne = "<tr>";
        ligne += "<td>" + comp.nom + "</td>";
        ligne += "<td>" + comp.detail + "</td>"
        ligne += "</tr>";

        table.innerHTML += ligne;
    });

    let titre = document.getElementById("nbrComp");
    titre.textContent = "Voici mes différentes compétences (" + competences.length + ")";

}