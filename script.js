init()
function init(params) {
    var url = "https://api.covid19api.com/summary"
    var data = ``
    $.get(url, function (data) {
        console.log(data.Countries[77])

        data = `
        <td>${data.Countries[77].NewConfirmed} </td>
        <td>${data.Countries[77].NewDeaths} </td>
        <td>${data.Countries[77].TotalConfirmed} </td>
        `
        $("#data").html(data)
    }) 
}
let btn = document.querySelector('.btn')
btn.addEventListener("click",()=>{
    cleardata()
})

function cleardata() {
    $("#data").html("")
    init()
}
