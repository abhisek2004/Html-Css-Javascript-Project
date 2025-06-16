const routes=[
    {
        path:"/",
        template:`<div id="quotes-container" class="w-100 py-5 px-2 d-flex flex-wrap"></div>`
    },
    {
        path:"/add-quote",
        template:`<div class="w-100 py-5 px-3">
        <div class="d-flex justify-content-end">
          <button onclick="router('/')" class="btn btn-dark me-5">Home</button>
        </div>
        <div class="d-flex justify-content-center">
            <form onsubmit="addQuoteHandler(event)" method="post" class="bg-light py-4 px-3 rounded" style="width: 320px;">
              <label for="author" class="form-label">Author</label>
              <input class="form-control" name="author" id="author" type="text" required/>
              <label for="quote" class="form-label mt-3">Quote</label>
              <textarea class="form-control" name="quote" id="quote" type="text" required></textarea>
              <button class="btn btn-primary mt-3 w-100" type="submit">Add</button>
            </form>
        </div>
    </div>`
    },
]

function router(path){
    window.history.pushState({},"",path)
    routes.forEach(route=>{
        if(route.path===path)
            document.getElementById("root").innerHTML=route.template;
        if(path==="/")
            renderQuotes()
    })
}

function renderQuotes(){
    document.getElementById("quotes-container").innerHTML=""
    JSON.parse(localStorage.getItem("quotes")).forEach((value)=>{
        document.getElementById("quotes-container").innerHTML+=`
        <div class="quote-container bg-dark py-4 px-4 rounded m-4">
                    <blockquote class="blockquote text-light fw-bold mb-4">
                      ${value.quote}
                    </blockquote>
                    <figcaption class="blockquote-footer text-light">
                      ${value.author}
                    </figcaption>
            </div>
        `
    })
}