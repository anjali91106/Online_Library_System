import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBooks } from '../redux/booksSlice.js';

const FetchBooks = ({ query = 'fiction' }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await res.json();

        const formatted = data.items?.map((book) => ({
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors?.[0] || 'Unknown Author',
          description: book.volumeInfo.description || 'No description',
          rating: book.volumeInfo.averageRating || 0,
          thumbnail: book.volumeInfo.imageLinks?.thumbnail || '',
        })) || [];

        dispatch(setBooks(formatted));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [query, dispatch]);

  return null; // this component just fetches, doesn’t display
};

export default FetchBooks;
