// 017AjB2i13dhMsEIvacSnG

function enviaIdEpisodio(){
    idEpisodio = document.getElementById("textoEmbbed").value
    document.getElementById("divEmbbed").innerHTML = "<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/episode/" + idEpisodio + "?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
}