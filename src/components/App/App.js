import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupOpenBook from '../PopupOpenBook/PopupOpenBook';
import PopupAddBook from '../PopupAddBook/PopupAddBook';

function App() {
  const [listBook, setListBook] = useState(initialDataBooks());
  const [isAddNewBook, setIsAddNewBook] = useState(false);
  const [valueInputSearch, setValueInputSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState({
    isOpen: false,
    id: '',
    linkImage: '',
    title: '',
    description: '',
  });

  function initialDataBooks() {
    if(localStorage.getItem("initialArr") == null) {
      localStorage.setItem("initialArr", "[]");
    }
    let initialData = JSON.parse(localStorage.getItem("initialArr"));
    return initialData;
  }

  function removeCardBook(_id) {
    const newArr = initialDataBooks().filter((book, bookId) => {
      return book.title !== selectedBook.title && book.description !== selectedBook.description;
    });
    localStorage.setItem("initialArr", JSON.stringify(newArr));
    closeAllPopups();
    setListBook(newArr);
    document.querySelector(".navigation__input-search").value="";
  }

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
    localStorage.setItem("initialArr", JSON.stringify(updNewTitleInArr));
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
    localStorage.setItem("initialArr", JSON.stringify(updNewDescriptionInArr));
    setListBook(updNewDescriptionInArr);
  }

  function onSubmitUpdImageBook(evt, newLinkImage) {
    evt.preventDefault();
    console.log(listBook);
    const updArr = listBook.map((book, bookId) => {
      if(bookId === selectedBook._id) {
        book.linkImage = newLinkImage;
        setSelectedBook({...selectedBook, linkImage: newLinkImage});
      }
      return book;
    })
    localStorage.setItem("initialArr", JSON.stringify(updArr));
    setListBook(updArr);
  }
  
  function clearFormAddBook() {
    const form = document.forms.addBook;
    const imageInput = form.querySelector(".popup-add-book__input-file-wrapper").querySelector(".popup-add-book__input-file");
    form.title.value = "";
    form.description.value = "";
    imageInput.value = "";
  }

  function onSubmitAddNewBook(evt, dataNewBook) {
    evt.preventDefault();
    let newArr = initialDataBooks();
    newArr.push(dataNewBook)
    localStorage.setItem("initialArr", JSON.stringify(newArr));
    setListBook(newArr);
    clearFormAddBook();
    closeAllPopups();
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

  const filteredSearchBooks = listBook.filter((book) => {
    return book.title.toLowerCase().includes(valueInputSearch.toLowerCase());
  })

  useEffect(() => {
    valueInputSearch.length === 0 ? setListBook(initialDataBooks()) : setListBook(filteredSearchBooks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInputSearch]);

  return (
    <>
      <Header 
        openFormAddBook={() => setIsAddNewBook(true)}
        setValueInputSearch={setValueInputSearch}
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
        removeBook={removeCardBook}
      />
    </>  
  );
}

export default App;
