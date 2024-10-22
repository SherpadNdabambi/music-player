setFooterYear();

function setFooterYear() {
  let date = new Date(),
    year = date.getFullYear();
  document.querySelector("#footerYear").textContent = year.toString();
}
