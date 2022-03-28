import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1050, 'The Avengers', 700, 2012, 'USA', 'Avengers assemble!', 'action, fantasy, adventure', 137));
  expect(cart.items).toEqual([
    {id: 1001, name: "War and Piece", author: "Leo Tolstoy", price: 2000, pages: 1225},
    {id: 1008, name: "Meteora", author: "Linkin Park", price: 900},
    {id: 1050, name: "The Avengers", price: 700, year: 2012, country: "USA", slogan: "Avengers assemble!", genre: "action, fantasy, adventure", time: 137}
  ]);
});

test('sum', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1050, 'The Avengers', 700, 2012, 'USA', 'Avengers assemble!', 'action, fantasy, adventure', 137));
  const result = cart.sum();
  expect(result).toBe(3600);
});

test('discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1050, 'The Avengers', 700, 2012, 'USA', 'Avengers assemble!', 'action, fantasy, adventure', 137));
  const result = cart.discount(5);
  expect(result).toBe(3420);
});

test('delete item', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1050, 'The Avengers', 700, 2012, 'USA', 'Avengers assemble!', 'action, fantasy, adventure', 137));
  cart.delete(1001);
  expect(cart.items).toEqual([
    {id: 1008, name: "Meteora", author: "Linkin Park", price: 900},
    {id: 1050, name: "The Avengers", price: 700, year: 2012, country: "USA", slogan: "Avengers assemble!", genre: "action, fantasy, adventure", time: 137}
  ]);
});

