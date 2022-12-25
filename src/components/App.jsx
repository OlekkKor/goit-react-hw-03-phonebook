import { Component } from 'react';
import { getElement } from './Service/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    error: '',
    largeImageURL: '',
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    try {
      if (
        prevState.page !== this.state.page ||
        prevState.query !== this.state.query
      ) {
        // this.setState({ isLoading: true });
        const response = getElement(this.state.query, this.state.page);
        console.dir(response);

        response.then(({ hits, total, totalHits }) => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
          }));
        });
      }
      
    } catch (error) {
      this.setState({ error: error.message });
    } finally { 
      // this.setState({ isLoading: false }) 
      }
  }

  onFormSubmit = info => {
    this.setState({
      query: info,
      page: 1,
      images: [],
      error: '',
    });
  };

  onImageClick = link => {
    this.setState({
      largeImageURL: link,
    });
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {this.state.isLoading && (<Loader />)} 
        <ImageGallery
          img={this.state.images}
          onImageClick={this.onImageClick}
        />
        {this.state.images.length > 1 && (
          <Button onButtonClick={this.onButtonClick} />
        )}

        {this.state.largeImageURL.length > 0 && (
          <Modal
            largeImgUrl={this.state.largeImageURL}
            onImageClick={this.onImageClick}
          />
        )}
      </>
    );
  }
}
