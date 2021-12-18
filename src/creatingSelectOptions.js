export async function creatingSelectOptions(listHistorySelect) {
  const select = document.querySelector(".weather-select");
  select.innerHTML = `${listHistorySelect
    .map(
      (el, i) => `<option value="${i + 1}" class="select-item">${el}</option>`
    )
    .join("")}
          `;
}
