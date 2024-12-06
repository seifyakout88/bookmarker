var siteName = document.getElementById("siteName")
var siteURL = document.getElementById("siteURL")
var addBtn = document.getElementById("addBtn")


var webContainer = []

function add_webSite() {
    var taskName = siteName.value
    var taskURL = siteURL.value
    webContainer.push(taskName)
    console.log(taskURL);
    displayWeb()
    siteName.value = "" 
    // siteURL.value = "" 
}

function displayWeb() {
    var webBOX = ""
            for (var i = 0; i < webContainer.length; i++) {
            webBOX += `
                    <tr class="fw-normal">
                        <td>
                            ${i + 1}
                        </td>
                        <td>
                            <span>${webContainer[i]}</span>
                        </td>
                        <td>
                            <a style="cursor: pointer;" class="visit btn btn-primary" onclick="visitSite ()">visite</a>
                        </td>
                        <td>
                            <a style="cursor: pointer;" class="delete btn btn-danger" onclick="deleteWeb(${i})">delete</a>
                        </td>
                    </tr>
        `
    }
    document.getElementById("allTasks").innerHTML = webBOX;
}


function deleteWeb(index) {
            webContainer.splice(index, 1)
            displayWeb()
}


function visitSite () {
        var input = document.getElementById("siteURL").value;
            if (input.length > 0) {
                if (!input.startsWith('http://') && !input.startsWith('https://')) {
                    input = 'https://' + input;
                }
                window.open(input, '_blank');
            }
}

