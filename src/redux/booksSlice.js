// redux/bookSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk("books/fetchBooks", async (query = "fiction") => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await res.json();
  return data.items?.map((book, index) => ({
    id: index + 1,
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors?.[0] || "Unknown",
    image: book.volumeInfo.imageLinks?.thumbnail,
    description: book.volumeInfo.description?.slice(0, 100) + "...",
    pages: book.volumeInfo.pageCount || "N/A",
    published: book.volumeInfo.publishedDate,
    category: book.volumeInfo.categories?.[0] || "General",
    language: book.volumeInfo.language,
  }));
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle", // loading, succeeded, failed
    error: null,
  },
  reducers: {
    setBooks: (state, action) => {state.items = action.payload},
    addBook: (state, action) => {state.books.push(action.payload)}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setBooks, addBook} = bookSlice.actions;
export default bookSlice.reducer;
