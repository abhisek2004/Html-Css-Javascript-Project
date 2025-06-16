if(localStorage.getItem("quotes")==null)
    localStorage.setItem("quotes",JSON.stringify([]))

function addQuoteHandler(event){
    event.preventDefault()
    var quote=document.getElementById('quote').value;
    var author=document.getElementById('author').value;
    let old=JSON.parse(localStorage.getItem("quotes"));
    old.push({quote,author})
    localStorage.setItem("quotes",JSON.stringify(old))
    alert("Quote Added")
    router('/')
}