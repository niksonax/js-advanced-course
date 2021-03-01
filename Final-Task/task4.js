/*
  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2
    2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
    3. На основе данных посторить табличку

    | index | company | email | phone | address |

    4. создать кнопу которая скрывает показывает address
*/

async function getCompanies() {
  const companiesData = await fetch(
    "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2"
  ).then((res) => res.json());

  return companiesData;
}

async function renderCompanies() {
  const companiesData = await getCompanies();
  const parent = document.getElementById("companies-table");

  const companiesTable = new Table(companiesData, parent);
  companiesTable.render();
}

class Table {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent;
  }

  render() {
    this.parent.append(this.buildHeader());
    this.parent.append(this.buildBody());
  }

  buildHeader() {
    const tableHeader = document.createElement("thead");
    tableHeader.innerHTML = `<tr>
                                <td>№</td>
                                <td>Company</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Address</td>
                            </tr>`;

    return tableHeader;
  }

  buildBody() {
    const tableBody = document.createElement("tbody");

    this.data.forEach((element, index) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = ` <td>${index + 1}</td>
                                <td>${element.company}</td>
                                <td>${element.email}</td>
                                <td>${element.phone}</td>
                                <td>
                                    <span class='hidden'>${
                                      element.address
                                    }</span>
                                    <button class='show-address-btn'>Show Address</button>
                                </td>`;

      newRow
        .querySelector(".show-address-btn")
        .addEventListener("click", (e) => {
          e.target.parentNode.querySelector("span").classList.toggle("show");
        });

      tableBody.append(newRow);
    });

    return tableBody;
  }
}

renderCompanies();
