import React from 'react';
import Typography from '@material-ui/core/Typography';
import model from './natureModel.jsx';
import Page from './Page.jsx';

const Pages = {};

model.forEach(page => {
  Pages[page.name] = () => 
    <Page name={page.name} body={page.about} image={page.imageLink} key={page.name} location={page.location} facts={page.facts} />;
});

console.log(Pages);

export default Pages;
