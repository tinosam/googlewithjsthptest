function luck() {
    var luck = document.getElementById("luck").value;
    alert(luck);
}  




    let found=document.querySelector("#found");

    let mot_cle = document.querySelector("#mot_cle");

    found.addEventListener("click", function () {
        let mot_cle2 = mot_cle.value;
        let motespace = mot_cle2.replace(" ", "+");
        //REDIRECTION
        document.location.href = `https://www.google.fr/#q=${motespace}`;

    });

/*function found() {
    var found = document.getElementById("found").value;

    document.location.href=`https://www.google.fr/#q=${found}`;
}  */