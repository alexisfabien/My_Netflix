import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {placeHolder: "Tapez votre film...", searchText: ""}
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-8 input-group'>
                    <input className='form-control input-lg' type='text' onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                    <span className='input-group-btn'>
                        <button className='btn' onClick={this.handleClick.bind(this)}>GO</button>
                    </span>
                </div>
            </div>
        )
    }


    handleChange(event) {
        this.setState({searchText: event.target.value});
    }

    handleClick(){
        // console.log('----------');
        // console.log('-----Bien click------');
        // console.log('------------');
        // console.log('SearchText', this.state.searchText);
        this.props.callBack(this.state.searchText);
    }
}

export default SearchBar;



// const SearchBar = () => {

//     const [placeHolder] = useState('Tapez votre film..');
//     const [searchText] = useState('');

//     return (
//         <div className='row'>
//             <div className = 'col-md-8'>
//                 <input type='text' className='form-control input-lg' placeholder={placeHolder} />
//                 <p>{searchText}</p>
//             </div>
//         </div>
//     )
// }

// export default  SearchBar;