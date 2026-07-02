document.getElementById("nonno").addEventListener("click", () =>{
    console.log("1. Nonno cliccato scende");
}, {capture: true});

document.getElementById("genitore").addEventListener("click", () =>{
    console.log("2. Genitore cliccato scende");
}, {capture: true});

document.getElementById("figlio").addEventListener("click", (event) =>{
    console.log("3. Figlio cliccato (target)");
    event.stopPropagation();
});

document.getElementById("figlio").addEventListener("click", () =>{
    console.log("Altro figlio");
});

document.getElementById("genitore").addEventListener("click", () =>{
    console.log("4. Genitore cliccato sale");
});

document.getElementById("nonno").addEventListener("click", () =>{
    console.log("5. Nonno cliccato sale");
});