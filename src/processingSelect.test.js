import { processingSelect } from "./processingSelect";

describe("", () => {
  let fn;
  let el;
  beforeEach(() => {
    fn = jest.fn((a) => a);
    el = document.createElement("div");
    document.body.append(el);
    el.innerHTML = ` <div class="weather-info__item">
          <select class="weather-list">
          <option>Москва</option>
          <option>Уфа</option>
          <option>Киров</option>
          </select>`;
  });

  it("passing a value to a function by the 'change' event", async () => {
    processingSelect(fn);
    const itemListHistory = el.querySelector("select");
    itemListHistory.options.selectedIndex = 1;
    itemListHistory.dispatchEvent(new Event("change"));
    expect(fn).toHaveBeenCalledWith("Уфа");
  });
});
