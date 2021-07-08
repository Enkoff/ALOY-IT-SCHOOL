import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import NewsMain from './News-main';

const News = props => {
    return (
        <div>
           <Header />
            <NewsMain />
           <Footer />
       </div>
    );
};


export default News;