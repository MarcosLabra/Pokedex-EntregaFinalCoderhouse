export class PokemonDetail {
  constructor(height, weight, image, types) {
    this.height = height;
    this.weight = weight;
    this.image = image;
    this.types = types;
  }
}

export class PokemonListItem {
  constructor(id, name, url, sprite) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.sprite = sprite;
  }
}