                const indikatoren = document.getElementsByClassName("indikator");
                indikatoren[0].classList.add("aktiv");

                const gleiter = document.getElementsByClassName("Gleitbehaelter");
                gleiter[0].classList.add("aktiv");

                var aktuellerIndex = 0;

                function umschalten(anzahl) {
                    var neuerIndex = aktuellerIndex + anzahl;

                    if(neuerIndex < 0) {
                        neuerIndex = gleiter.length -1;
                    }

                    if(neuerIndex > gleiter.length -1) {
                        neuerIndex = 0;
                    }

                    springeZuEintrag(neuerIndex);
                }

                function springeZuEintrag(neuerIndex) {
                    indikatoren[aktuellerIndex].classList.remove("aktiv");
                    gleiter[aktuellerIndex].classList.remove("aktiv");

                    indikatoren[neuerIndex].classList.add("aktiv");
                    gleiter[neuerIndex].classList.add("aktiv");

                    aktuellerIndex = neuerIndex;
                }