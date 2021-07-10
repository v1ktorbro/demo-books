import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupOpenBook from '../PopupOpenBook/PopupOpenBook';
import initialDataBooks from '../../utils/initialDataBooks';

function App() {
  const [initialBooks, setInitialBooks] = useState(initialDataBooks);
  const [selectedBook, setSelectedBook] = useState({
    isOpen: false,
    id: '',
    linkImage: '',
    title: '',
    description: '',
  });

  function handleBookClick(linkImage, title, description, _id) {
    setSelectedBook({
      isOpen: true,
      _id: _id,
      linkImage: linkImage,
      title: title,
      description: description,
    });
  }

  function onSubmitUpdTitleBook(evt, newTitle) {
    evt.preventDefault();
    const updNewTitleInArr = initialBooks.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.title = newTitle;
        setSelectedBook({...selectedBook, title: newTitle});
      }
      return book;
    })
    setInitialBooks(updNewTitleInArr);
  }

  function closeAllPopups() {
    setSelectedBook({
      isOpen: false,
      _id: '',
      linkImage: '',
      title: '',
      description: '',
    });
  }

  return (
    <>
      <Header />  
      <Main 
        onBookClick={handleBookClick}
        initialBooks={initialBooks}
      />
      <PopupOpenBook 
        isOpen={selectedBook.isOpen} 
        linkImage={selectedBook.linkImage}
        title={selectedBook.title}
        description={selectedBook.description}
        onClose={closeAllPopups}
        onSubmitUpdTitleBook={onSubmitUpdTitleBook}
      />
    </>  
  );
}

export default App;
