import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupOpenBook from '../PopupOpenBook/PopupOpenBook';
import PopupAddBook from '../PopupAddBook/PopupAddBook';
import initialDataBooks from '../../utils/initialDataBooks';

function App() {
  const [listBook, setListBook] = useState(initialDataBooks);
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
    const updNewTitleInArr = listBook.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.title = newTitle;
        setSelectedBook({...selectedBook, title: newTitle});
      }
      return book;
    })
    setListBook(updNewTitleInArr);
  }

  function onSubmitUpdDescriptionBook(evt, newDescription) {
    evt.preventDefault();
    const updNewDescriptionInArr = listBook.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.description = newDescription;
        setSelectedBook({...selectedBook, description: newDescription});
      }
      return book;
    })
    setListBook(updNewDescriptionInArr);
  }

  function onSubmitUpdImageBook(evt, newLinkImage) {
    evt.preventDefault();
    const updNewDescriptionInArr = listBook.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.linkImage = newLinkImage;
        setSelectedBook({...selectedBook, linkImage: newLinkImage});
      }
      return book;
    })
    setListBook(updNewDescriptionInArr);
  }
  
  function clearFormAddBook() {
    const form = document.forms.addBook;
    form.title.value = "";
    form.description.value = "";
    form.linkImage.value = "";
  }

  function onSubmitAddNewBook(evt, dataNewBook) {
    evt.preventDefault();
    setListBook([...listBook, dataNewBook].reverse());
    closeAllPopups();
    clearFormAddBook();
  }

  function closeAllPopups() {
    setIsAddNewBook(false);
    clearFormAddBook();
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
        listBook={listBook}
      />
      <PopupAddBook 
        isOpen={isAddNewBook}
        onClose={closeAllPopups}
        onSubmit={onSubmitAddNewBook}
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
