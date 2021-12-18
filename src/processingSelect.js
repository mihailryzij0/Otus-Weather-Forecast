export async function processingSelect(handlerValueFunction) {
  const listHistory = document.querySelector("select");
  listHistory.addEventListener("change", async () => {
    const indexOption = listHistory.options.selectedIndex;
    const textContent = listHistory.options[indexOption].text;
    handlerValueFunction(textContent);
  });
}
