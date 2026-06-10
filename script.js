var input = document.getElementById("in")
var table = document.getElementById("list")

function addtask(){
    var tablerow = document.createElement("tr")
    tablerow.innerHTML = `<td>${input.value}</td>
                            <td  class = "btn"><button onclick="removetask(this)">Done</button></td>`
    table.append(tablerow)
    input.value = ""
}

function removetask(button){
    button.parentElement.parentElement.remove()
}