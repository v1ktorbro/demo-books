import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupOpenBook from '../PopupOpenBook/PopupOpenBook';
import PopupAddBook from '../PopupAddBook/PopupAddBook';
import initialDataBooks from '../../utils/initialDataBooks';

function App() {
  const [initialBooks, setInitialBooks] = useState(initialDataBooks);
  const [isAddNewBook, setIsAddNewBook] = useState(false);
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

  function onSubmitUpdDescriptionBook(evt, newDescription) {
    evt.preventDefault();
    const updNewDescriptionInArr = initialBooks.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.description = newDescription;
        setSelectedBook({...selectedBook, description: newDescription});
      }
      return book;
    })
    setInitialBooks(updNewDescriptionInArr);
  }

  function onSubmitUpdImageBook(evt, newLinkImage) {
    evt.preventDefault();
    const updNewDescriptionInArr = initialBooks.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.linkImage = newLinkImage;
        setSelectedBook({...selectedBook, linkImage: newLinkImage});
      }
      return book;
    })
    setInitialBooks(updNewDescriptionInArr);
  }

  function closeAllPopups() {
    setIsAddNewBook(false);
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
      <Header 
        openFormAddBook={() => setIsAddNewBook(true)}
      />  
      <Main 
        onBookClick={handleBookClick}
        initialBooks={initialBooks}
      />
      <PopupAddBook 
        isOpen={isAddNewBook}
        onClose={closeAllPopups}
      />
      <PopupOpenBook 
        isOpen={selectedBook.isOpen} 
        linkImage={selectedBook.linkImage}
        title={selectedBook.title}
        description={selectedBook.description}
        onClose={closeAllPopups}
        onSubmitUpdTitleBook={onSubmitUpdTitleBook}
        onSubmitUpdDescriptionBook={onSubmitUpdDescriptionBook}
        onSubmitUpdImageBook={onSubmitUpdImageBook}
      />
    </>  
  );
}

export default App;
