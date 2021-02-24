/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/

const companiesList = document.querySelector(".companies");

async function getCompanies() {
  const getCompanies = await fetch(
    "http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2"
  );
  const companies = await getCompanies.json();

  renderCompanies(companies);
  hideCompaniesData();
}

function renderCompanies(array) {
  //console.log(array);
  companiesList.innerHTML = array
    .map(
      (company, index) =>
        `
        <div class='company-container' data-index='${index + 1}'>
        <div>${index + 1}</div>
        <div>${company.company}</div>
        <div>${company.balance}</div>
        <div class='register-date' data-date='${company.registered}'>${
          company.registered
        }</div>
        <div class='company-address'  data-address='${company.address.city}'>${
          company.address.city
        }</div>
        </div>
        `
    )
    .join("");
}

function hideCompaniesData() {
  const companies = document.querySelector(".companies").children;
  for (company of companies) {
    const date = company.querySelector(".register-date");
    const address = company.querySelector(".company-address");

    date.innerText = "Show Date";
    address.innerText = "Show Address";

    date.addEventListener("click", function showDate(e) {
      e.target.innerText = e.target.dataset["date"];
    });
    address.addEventListener("click", function showAddress(e) {
      e.target.innerText = e.target.dataset["address"];
    });
  }
}

getCompanies();
