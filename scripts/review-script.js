window.addEventListener("load", function () {
    let table = document.getElementById('table_head');
    let template = document.getElementById('reviewTemplate');
    let warning = document.getElementById('warning')

// Получение данных из формы и добавление в список
    function addReview(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let text = document.getElementById("text").value;

        if (checkString(name) || checkString(text)) {
            console.log(checkString(name) + " " + checkString(text))
            warning.textContent = "inserted strings are empty || nan"
            return false;
        } else {
            let review = {
                name: name,
                text: text,
            };
            console.log('element added')
            let reviewList = JSON.parse(localStorage.getItem("reviewList")) || [];
            reviewList.push(review);
            localStorage.setItem("reviewList", JSON.stringify(reviewList));
            displayReviews();
            warning.textContent = ""

        }
    }

    function displayReviews() {
        let reviewsList = JSON.parse(localStorage.getItem("reviewList")) || [];

        //убиваем всех детей до первого (имя,текст)
        if (table.children.length != 0) {
            while (table.firstChild) {
                if (table.children.length == 1) {
                    break;
                }
                table.removeChild(table.lastChild);
            }
        }

        for (let i = 0; i < reviewsList.length; i++) {

            let clonedNode = template.content.cloneNode(true);
            let td = clonedNode.querySelectorAll("td");

            let name_val = reviewsList[i].name;
            let text_val = reviewsList[i].text;

            td[0].textContent = name_val;
            td[1].textContent = text_val;

            table.appendChild(clonedNode);

        }
    }

    document.getElementById("review_form").addEventListener("submit", addReview);
    document.getElementById("review_form").addEventListener("submit",function (e) {
        e.preventDefault()
        if (warning.textContent.length <= 0) {
            console.log('cleared')
            clearOutput();
        } else
            return
    })
    displayReviews();

    function clearOutput() {
        document.getElementById("name").value = "";
        document.getElementById("text").value = "";
    }

    function checkString(string) {
        if (typeof string === "string") {
            console.log(!isNaN(string), string.length < 1, /\d/.test(string), string)
            return !isNaN(string) || string.length < 1 || /\d/.test(string);
        } else
            return false;
    }
});