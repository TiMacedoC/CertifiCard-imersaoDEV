const getHTML = document.getElementById('mainContent');
var check = true;

const social =
    `
    <a href="https://www.instagram.com/timacedoc/" target="_blank">
      <img class="logo" src="https://docs.google.com/uc?export=download&id=1yGInZMAtxlUCNb1Tbf1nwJ81TfPtJ7Q9"
        alt="instagram logo">
    </a>

    <a href="https://www.twitter.com/timacedoc/" target="_blank">
      <img class="logo" src="https://docs.google.com/uc?export=download&id=1PLCmxFtZex3_QPHMj7nyWxxe_OPcNlq5"
        alt="twitter logo">
    </a>

    <a href="https://github.com/TiMacedoC" target="_blank">
      <img class="logo" src="https://docs.google.com/uc?export=download&id=1idlHqSj1ncFAt1rYOIEAzk27kkl_R50y"
        alt="github logo">
    </a>

    <a href="https://www.linkedin.com/in/tiago-macedo-de-castro-845008208/" target="_blank">
      <img class="logo" src="https://docs.google.com/uc?export=download&id=12Q1Lg0VO8K6GerG-e_amrX7DM1TikFBI"
        alt="linkedin logo">
    </a>
    `

function changeContent() {
    if (check) {
        getHTML.insertAdjacentHTML('afterbegin', social);
        console.log(getHTML)
        check = false;
    }
}
