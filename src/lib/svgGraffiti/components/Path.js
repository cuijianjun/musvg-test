import Stamper from './Stamper';

export default class Path extends Stamper {

  constructor(attrs = {}) {
    super('path', {
      'fill': '#fff',
      'stroke': '#fff',
      'stroke-width': 5,
      'fill-opacity': 1,
      'stroke-opacity': 1,
      'd': 'M250 150 L150 350 L350 350 Z',
      ...attrs
    });
  }

  d(chunk) {
    this.attrs['d'] = chunk;
    return this;
  }
}
