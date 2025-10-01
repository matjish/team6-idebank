const model = {
    app: {
        currentPage: "front",

    },

    viewState: {
        leggTilVennerPage: {
            navn: "",
        },
        aktivitetDataPage: {
            id: 0
        }
    },

    profileData: {
        venner: [
            {navn: "Geir", status: "online"},
            {navn: "Martin", status: "online"},
            {navn: "Rebecka", status: "idle"},
            {navn: "Terje", status: "offline"},
        ],
    },

    aktivitetData: {
        aktiviteter: [
            {navn: "Fotball", varighet: "60min", vanskelighetsgrad: 3, kategori: "Sport", starStatus: "yellow"},
            {navn: "Styrketrening", varighet: "45min", vanskelighetsgrad: 4, kategori: "Styrke", starStatus: ""},
            {navn: "Dans", varighet: "30min", vanskelighetsgrad: 5, kategori: "Sport", starStatus: ""},
            {navn: "Friidrett", varighet: "30min", vanskelighetsgrad: 4, kategori: "Sport", starStatus: ""},
        ]
        
    },
};