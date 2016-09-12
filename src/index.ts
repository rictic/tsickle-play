export class Foo {
  bar: string;
  constructor() {
    this.bar = 'baz';
  }
}

const c = new Foo();
console.log(`"${c.bar}"" from typescript`);
