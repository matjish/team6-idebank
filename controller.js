function goTo(pageName) {
    model.app.currentPage = pageName;
    updateView()
}


function leggTilVenn() {
    const newRegistration = {
        navn: model.viewState.leggTilVennerPage.navn,
        status: "offline"
    };
    model.viewState.leggTilVennerPage.navn = '';
    model.profileData.venner.push(newRegistration);
    model.app.currentPage = 'venner';
    updateView()
}

function goToActivity(activityID) {
    model.viewState.aktivitetDataPage.id = activityID;
    model.app.currentPage = 'aktivitetData';
    updateView()
}