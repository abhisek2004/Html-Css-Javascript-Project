let codeArea = document.getElementById('code_area')

codeArea.addEventListener('keyup', function(){
    let codes = codeArea.innerText
    let output = document.getElementById('code_output')
    output.srcdoc = codes
})

let codeEditor = CodeMirror(codeArea, {
    /* theme: '3024-day', */
    value:
`<style>
/*Your css here*/
</style>

<body>
<!--Your HTML here-->
</body>

<script>
//Your script here
</script>`,
    autofocus: true,
    autoCloseBrackets: true,
    autoCloseTags: true

})

let screenSize = screen.width
//console.log(screenSize)

if(screenSize >= 768){
    codeEditor.setSize(null, '84vh')
} else {
    codeEditor.setSize(null, '40vh')
    let title = document.getElementById('title')
    title.innerHTML = '< HTML Editor />'
}