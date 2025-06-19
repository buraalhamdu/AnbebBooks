async function fetchMostRated() {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=30');
  const data = await response.json();

  const mostRated = data.items
    .filter(book => book.volumeInfo.imageLinks?.thumbnail && book.volumeInfo.averageRating)
    .sort((a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating)
    .slice(0, 8);

  mostRated.forEach((book, index) => {
    const img = book.volumeInfo.imageLinks.thumbnail;
    const volumeId = book.id;

    const div = document.getElementById(`mr-${index + 1}`);
    if (div) {
      div.style.backgroundImage = `url('${img}')`;
      div.style.backgroundSize = 'cover';
      div.style.backgroundPosition = 'center';
      div.style.cursor = 'pointer';

      div.addEventListener('click', () => {
        window.location.href = `book-detail.html?id=${volumeId}`;
      });
    }
  });
}

async function fetchPopularFiction() {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=fiction+novels&maxResults=30');
  const data = await response.json();

  const books = data.items
    .filter(book => book.volumeInfo.imageLinks?.thumbnail)
    .slice(0, 8);

  books.forEach((book, index) => {
    const img = book.volumeInfo.imageLinks.thumbnail;
    const volumeId = book.id;

    const div = document.getElementById(`f-${index + 1}`);
    if (div) {
      div.style.backgroundImage = `url('${img}')`;
      div.style.backgroundSize = 'cover';
      div.style.backgroundPosition = 'center';
      div.style.cursor = 'pointer';

      div.addEventListener('click', () => {
        window.location.href = `book-detail.html?id=${volumeId}`;
      });
    }
  });
}

async function fetchPopularRomance() {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=romance+novels&maxResults=30');
  const data = await response.json();

  const books = data.items
    .filter(book => book.volumeInfo.imageLinks?.thumbnail)
    .slice(0, 8);

  books.forEach((book, index) => {
    const img = book.volumeInfo.imageLinks.thumbnail;
    const volumeId = book.id;

    const div = document.getElementById(`r-${index + 1}`);
    if (div) {
      div.style.backgroundImage = `url('${img}')`;
      div.style.backgroundSize = 'cover';
      div.style.backgroundPosition = 'center';
      div.style.cursor = 'pointer';

      div.addEventListener('click', () => {
        window.location.href = `book-detail.html?id=${volumeId}`;
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  fetchMostRated();
  fetchPopularFiction();
  fetchPopularRomance();
});
