import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat() {
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>Név</th>
                <th>Mennyiség</th>
                <th>Ár</th>
            </tr>
        `;
        
        GYUMOLCSOK.forEach(gyumolcs => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${gyumolcs.nev}</td>
                <td>${gyumolcs.mennyiseg}</td>
                <td>${gyumolcs.ar}</td>
            `;
            row.addEventListener('click', () => vasarol(gyumolcs));
        });
    
        document.getElementById('feladat_1').appendChild(table);
    }
    

// 2. feladat
function osszesit() {
        const feladat2 = document.getElementById('feladat_2');
        const table = document.createElement('table');
    
        const osszesGyumolcs = vasarolt.reduce((osszeg, gyumolcs) => osszeg + gyumolcs.ar, 0);
    
        table.innerHTML = `
            <tr>
                <td>Összesítés</td>
                <td>${vasarolt.length} termék</td>
                <td>${osszesGyumolcs} Ft</td>
            </tr>
        `;
    
        feladat2.appendChild(table);
}

// 3. feladat
function vasarol(gyumolcs) {
    if (!vasarolt.includes(gyumolcs)) {
        vasarolt.push(gyumolcs);
        updateVasaroltList();
    }
}

function updateVasaroltList() {
    const feladat3 = document.getElementById('feladat_3');
    feladat3.innerHTML = "<p>Megvásárolt termékek:</p>";
    
    vasarolt.forEach(gyumolcs => {
        const elem = document.createElement('div');
        elem.textContent = gyumolcs.nev;
        feladat3.appendChild(elem);
    });

    document.getElementById('torles').classList.remove('hide');
}



// 4. feladat
function torolEsemeny() {
    function torolEsemeny() {
        vasarolt.length = 0;
        updateVasaroltList();
        document.getElementById('torles').classList.add('hide');
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        letrehozTablazat();
        osszesit();
        document.getElementById('torles').addEventListener('click', torolEsemeny);
    });
}