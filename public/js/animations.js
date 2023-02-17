// Gere l'animation du nav menu
function displayBackground(obj){
    obj.style.backgroundColor =  "rgba(250, 249, 249, 0.192)";
    obj.style.transition = "0.5s";
}
function deleteBackgroud(obj){
    obj.style.backgroundColor = "initial";
    obj.style.transition = "0.5s";
}


// Gere l'animation du bouter ajouter une tache
var addTaskButton = document.getElementById("add"); 

addTaskButton.addEventListener('mouseover', function(){
    this.style.backgroundColor = "rgba(18, 228, 217, 0.521)";
    this.style.color = "#fff";
    this.style.transition = "0.5s";
});

addTaskButton.addEventListener('mouseout', function(){
    this.style.backgroundColor = "initial";
    this.style.color = "rgba(18, 228, 217, 0.521)";
    this.style.transition = "0.5s";
});