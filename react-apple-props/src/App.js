import React,{ Component } from 'react';
import Header from "./components/Header";
import Alert from './components/Alert';
import Main from './components/Main';
import Second from './components/Second';
import Third from './components/ThirdComponent/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Footer from './components/Footer';
import YoutubeVideos from './components/YoutubeVideos';
import { Route, Routes } from 'react-router-dom';
import Iphone from './components/pages/Iphone';
import SingleAppleProduct from './components/pages/SingleAppleProduct';
class App extends Component {
  render(){
    return (
      <div className="App">
       <Header /> 
       <Routes>
        <Route path='/' element={
        <><Alert/>
        <Main />
        <Second />
       <Third />
       <Fourth/>
       <Fifth/>
       <Sixth />
       <YoutubeVideos />
        </>
      }/>
       <Route path='/iphone' element={<Iphone/>}/>
       <Route path='/iphone/:productID' element={<SingleAppleProduct/>}/>
       
      
       </Routes>
       <Footer />
      </div>
    );
  }

}

export default App;
