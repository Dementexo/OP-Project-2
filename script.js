let pageContainer = document.getElementById('container');

for (i=1; i<=256; i++){
    let newDiv = document.createElement("div");
    newDiv.id = 'gridBox' + i;
    newDiv.style.flex = 'auto';
    newDiv.style.display = 'inline-block';
    newDiv.style.backgroundColor = 'white';
    newDiv.style.borderStyle = 'solid';
    newDiv.style.borderColor = 'black';
    newDiv.style.borderWidth = 'thin';
    pageContainer.append(newDiv);
}