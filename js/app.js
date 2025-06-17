//API-most rate:

  async function fetchTopBooks() {
    const query = "bestsellers June 2025";
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=3`
    );
    const data = await response.json();

    const bookDivs = ['b-1', 'b-2', 'b-3'];

    data.items?.forEach((book, index) => {
      const img =
        book.volumeInfo.imageLinks?.thumbnail ||
        book.volumeInfo.imageLinks?.smallThumbnail;

      if (img && bookDivs[index]) {
        const div = document.getElementById(bookDivs[index]);
        div.style.backgroundImage = `url(${img})`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
      }
    });
  }

  // Run the function when page loads
  window.addEventListener('DOMContentLoaded', fetchTopBooks);
