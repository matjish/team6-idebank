function updateView() {
    const page = model.app.currentPage;
    if (page!='front'&&page!='dashboard') {
        document.getElementById('app').innerHTML = /*HTML*/`
            <button onclick="goTo('dashboard')">Tilbake</button>
        `
    } else {
        document.getElementById('app').innerHTML = /*HTML*/`
        `
    }
    if (page=='front') updateViewFront();
    else if (page=='dashboard') updateViewDashboard();
    else if (page=='') updateView___();
    else if (page=='aktiviteter') updateViewAktiviteter();
    else if (page=='venner') updateViewVenner();
    else if (page=='leggTilVenn') updateViewLeggTilVenner();
    else if (page=='aktivitetData') updateViewAktivitetDetaljer();
};

function updateViewFront() {
    document.getElementById('app').innerHTML += /*HTML*/`
        <h2>Idebanken</h2>
        <br>

        <button onclick="goTo('dashboard')">Login</button>
        <br>

        <p>Kontakt oss<p>
    `
}


function updateViewDashboard() {
    html = '';

    html += /*HTML*/`
        <h2>Dashboard</h2>
        <br>

        <button onclick="goTo('aktiviteter')">Dine aktiviteter</button>
        <br>
        <br>

        <button onclick="goTo('venner')">Venner</button>
        <br>
        <button>Utforsk</button>
        <br>

        <button onclick="goTo('front')">Logg ut</button>
    `


    document.getElementById('app').innerHTML += html
}

// Stjernetegn skal byttes ut med "favoritt" funksjon
function updateViewAktiviteter() {
    html = '';

    html += /*HTML*/`
        <h2>Aktiviteter</h2>
        <br>
        <br>
        `

        let tempNumb = 0;
        for (let aktiviteter of model.aktivitetData.aktiviteter) {
            html += /*HTML*/`
                <button onclick="goToActivity(${tempNumb})">
                    ${aktiviteter.navn} <div style="background-color: ${aktiviteter.starStatus};"></div>
                </button>
            `
            tempNumb += 1;
        }



    document.getElementById('app').innerHTML += html
}


function updateViewVenner() {
    html = '';

    html += /*HTML*/`
        <h2>Dine Venner</h2>
        <br>
        <ul>
    `

    for (let venner of model.profileData.venner) {
        html += /*HTML*/`
            <li>
                ${venner.navn} ${venner.status}
            </li>
        `;
    }

    html += /*HTML*/`
        <ul>
        <button onclick="goTo('leggTilVenn')">legg til en venn</button>
    `
    document.getElementById('app').innerHTML += html
}


function updateViewLeggTilVenner() {
    html = '';

    html += /*HTML*/`
        <button onclick="leggTilVenn()">legg til venner</button>

        <input
            oninput="model.viewState.leggTilVennerPage.navn = this.value"
        /><br>
    `


    document.getElementById('app').innerHTML += html
}


function updateViewAktivitetDetaljer() {
    html = '';
    const aktivitet = model.aktivitetData.aktiviteter[model.viewState.aktivitetDataPage.id]

    html += /*HTML*/`
        <h1>${aktivitet.navn}</h1>
        <img alt="no image found">
        <div>
            <p>Vanskelighetsgrad: ${aktivitet.vanskelighetsgrad}</p>
            <p>varighet: ${aktivitet.varighet}</p>
            <p>kategori: ${aktivitet.kategori}</p>
        </div>


        <p>kommenter</p>
        <p>* * * * *</p>
    `


    document.getElementById('app').innerHTML += html
}






function updateView___() {
    html = '';

    html += /*HTML*/`
        <div></div>
    `


    document.getElementById('app').innerHTML = html
}