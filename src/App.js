import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Thomas De Rouck',
        bio: 'Etudiant en full stack JS',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU1KHZwBAzuqIooGV4EnMgvmbI9h3ZHhm3ermxmxTEQ&s',
        profession: 'Marketing'
      },
      shows: false,
      intervalId: null
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log('Interval tick');
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Show</button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
