const fs = require("fs")

// lit les arguments en entrée: 1er argument pour le mot et 2ème argument pour le nom du fichier
if (process.argv.slice(2).length === 2) {
    var mot = process.argv[2]
    var nomFichier = process.argv[3]
} else {
    var mot = "arbre"
    var nomFichier = "fr.txt"
}

function lireFichier(nomFichier) {
    try {
        var data = fs.readFileSync(nomFichier)
        return data.toString().split('\r\n')
    } catch (e) {
        console.log('Error:', e.stack)
    }
}

function trouverAnagrammes(mot, tableau) {
    var newTab = []
    tableau.forEach(motDuTableau => {
        if (isAnagrammes(mot, motDuTableau)) {
            newTab.push(motDuTableau)
        }
    })
    return newTab
}


function isAnagrammes(mot, motDuTableau) {
    var motProvisoire = motDuTableau.slice().split('')

    if (mot.length !== motProvisoire.length) return false
    else {
        for (lettre of mot) {
            var index = motProvisoire.indexOf(lettre)
            if (index !== -1) {
                motProvisoire.splice(index, 1)
            } else return false
        }
    }
    return true
}


const tab = lireFichier(nomFichier)
console.log("Mots du fichier '" + nomFichier + "':", tab)
console.log("Les anagrammes du mot '" + mot + "': ")
console.log(trouverAnagrammes(mot, tab))