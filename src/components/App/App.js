import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupOpenBook from '../PopupOpenBook/PopupOpenBook';
import { useState } from 'react';

function App() {

  const [selectedBook, setSelectedBook] = useState({
    isOpen: false,
    linkImage: '',
    title: '',
    description: '',
  });

  function handleBookClick(linkImage, title, description) {
    setSelectedBook({
      isOpen: true,
      linkImage: linkImage,
      title: title,
      description: description,
    });
  }

  function closeAllPopups() {
    setSelectedBook({
      isOpen: false,
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
      />
      <PopupOpenBook 
        isOpen={selectedBook.isOpen} 
        linkImage={selectedBook.linkImage}
        title={selectedBook.title}
        description={selectedBook.description}
        onClose={closeAllPopups}
      />
    </>  
  );
}

export default App;
