export abstract class Component<State> {
  state!: State;
  el: HTMLElement;
  constructor(el: HTMLElement) {
    this.el = el;
    this.onMount();
  }

  abstract subscribeEvents(): void;

  async setState(patch: Partial<State>) {
    this.state = { ...this.state, ...patch };
  }
  abstract getCityWeather(): void;
  abstract onMount(): void;

  abstract render(): void;
}
