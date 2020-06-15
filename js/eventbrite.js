class EventBrite {
  constructor() {
    this.token_OAuth = '2CZWF5RL3SHAE7RFJVG3';
    this.order = 'date';
  }

  async obtainCategories() {
    const responseCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_OAuth}`);

    const categories = await responseCategories.json();

    return {
      categories
    }
  }

}