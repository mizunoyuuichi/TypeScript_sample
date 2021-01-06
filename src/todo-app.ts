class Score {
  get totalScore() {
    const foods = new Foods();
    return foods.activeElementsScore.reduce((total, score) => toral + score, 0)
  }
  render() { // 表示を更新するのはrender
    document.querySelector('.socore__number')!.textContent = String(this.)
  }
}

class Food {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    // point: callback内でthisを正しく指せない .bind(this)を使え！
    this.element.classList.toggle("food--active");
  }
}
class Foods {
  private _activeElementsScore: number[] = [];
  private _activeElements: HTMLDivElement[] = [];
  get activeElementsScore() {
    this._activeElementsScore = []
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent))
      }
    })
  }
  get activeElements() {
    this._activeElements = []
    this.elements.forEach((element) => {
      if (element.classList.contains("food--active")) {
        this._activeElements.push(element);
      }
    });
  return this._activeElements; // note: getter で値の更新をしているのはNGだと思う、、
  }
  elements = document.querySelectorAelement) => {
      new Food(element);
    });
  }
}ll<HTMLDivElement>(".food");
  constructor() {
    this.elements.forEach((
const foods = new Foods();
