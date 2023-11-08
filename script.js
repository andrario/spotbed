// 017AjB2i13dhMsEIvacSnG

function enviaIdEpisodio(){
    idEpisodio = document.getElementById("textoEmbbed").value
    document.getElementById("divEmbbed").innerHTML = "<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/episode/" + idEpisodio + "?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
}

function enviaLinkYT(){
    idEpisodio = document.getElementById("textoEmbbedYT").value
    document.getElementById("divEmbbedYT").innerHTML = `<iframe width="99%" height="100%" src="https://www.youtube.com/embed/` + idEpisodio + `" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}