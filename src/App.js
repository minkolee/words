import React from 'react';
import logo from './logo.svg';
import './App.scss';
import words from "./data/words";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            words: words
        }
    }

    render() {

        return (
            <div className="App">
                <table className='word'>
                    <thead>
                    <tr>
                        <th>WORD</th>
                        <th>MEANING</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.words.map(
                        word => (
                            <tr key={word.name}>
                                <td><span className='name'>{word.name}</span></td>
                                <td><span className='meaning'>{word.meaning}</span></td>
                            </tr>
                        )
                    )

                    }


                    </tbody>
                </table>
            </div>
        );
    }
}


export default App;
