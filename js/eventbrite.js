class EventBrite {
  constructor() {
    this.token_OAuth = '2CZWF5RL3SHAE7RFJVG3';
    this.order = 'date';
  }

  async obtainEvents(eventInfo, category) {
    const resEvent = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventInfo}&sort_by=${this.order}&categories=${category}&token=${this.token_OAuth}`);

    const eventList = await resEvent.json();
    return {
      eventList
    }

  }


  async obtainCategories() {
    const responseCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_OAuth}`);

    const categories = await responseCategories.json();

    return {
      categories
    }
  }

}