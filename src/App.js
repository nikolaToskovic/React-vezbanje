import React, {Component, Fragment} from 'react';
import './App.css';

import {Header} from './components/Header/Header'; 

import {BrowserRouter, Route} from 'react-router-dom';

import {CardsPage} from './pages/CardsPage/CardsPage';
import {FormPage} from './pages/FormPage/FormPage';
import CardDetailsPage from './pages/CardDetailsPage/CardDetailsPage';

import {connect} from 'react-redux';
import * as actionTypes from './store/actionTypes';

class App extends Component {

  state = {
      links: {
        form: '/form-page',
        cards: '/cards-page'
      }
  }

  onAgeUpdate = () => {
    this.props.updateAge(35);
  }

  onNameUpdate = () => {
    this.props.updateName('Milan')
  }

  render () {

    return (
      <Fragment>
        <BrowserRouter>
          <Header className="full-width" 
                links={this.state.links}
                data={[]}
                onSearch={(data) => this.onCardSearch(data) }
                />
          <button onClick={this.onAgeUpdate}>Change age</button>
          <button onClick={this.onNameUpdate}>Change name</button>
          <div className="main-content" onClick={this.props.updateAge}>
                {this.props.age}
                {this.props.name}
                <Route path={this.state.links.cards} exact component={CardsPage} />
                <Route path={this.state.links.form} exact component={FormPage} />
                <Route path='/cards/:id' exact component={CardDetailsPage} />

          </div>
          </BrowserRouter>
      </Fragment>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    age: state.age,
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAge: (age) => dispatch({type: actionTypes.UPDATE_AGE, value: age}),
    updateName: (name) => dispatch({type: actionTypes.UPDATE_NAME, value: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
