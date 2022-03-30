        const indikatoren = document.getElementsByClassName("indikator");
        indikatoren[0].classList.add("aktiv");

        const slides = document.getElementsByClassName("slide");
        slides[0].classList.add("aktiv");

        var aktuellerIndex = 0;
        function umschalten(anzahl) {
            indikatoren[aktuellerIndex].classList.remove("aktiv");
            indikatoren[aktuellerIndex].classList.remove("aktiv");
        }