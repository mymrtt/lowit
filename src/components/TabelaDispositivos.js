// import React from 'react';

// import axios from 'axios';

// export default class TabelaDispositivos extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/environments`)
//       .then(res => {
//         console.log(res)
//         const persons = res.data.data.environments;
//         console.log(persons)
//         console.log('-------------------')
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           { this.state.persons.map(person => <li>{person.name}</li>)}
//         </ul>
//       </div>
//     )
//   }
// }