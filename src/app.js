import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
// import Header from './components/Headers';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], title: '', author: '', date: ''};
  }

  render() {
    return (
      <div>
        <h3>Stage</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.title} />
          <input onChange={this.handleAuthorChange} value={this.state.author} />
          <input onChange={this.handleDateChange} value={this.state.date} />

          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      title: '',
      author: '',
      date: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.title} - {item.author} - {item.date}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, app);


// class App extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {};
//     this.state.filterText = "";
//     this.state.products = [
//       {
//         id: 1,
//         category: 'Sporting Goods',
//         price: '49.99',
//         qty: 12,
//         name: 'Football'
//       }, {
//         id: 2,
//         category: 'Sporting Goods',
//         price: '9.99',
//         qty: 15,
//         name: 'Baseball'
//       }, {
//         id: 3,
//         category: 'Sporting Goods',
//         price: '29.99',
//         qty: 14,
//         name: 'Basketball'
//       }, {
//         id: 6,
//         category: 'Electronics',
//         price: '199.99',
//         qty: 23,
//         name: 'Nexu 7'
//       }
//     ];
//
//   }
//   handleUserInput(filterText) {
//     this.setState({filterText: filterText});
//   };
//   handleRowDel(product) {
//     var index = this.state.products.indexOf(product);
//     this.state.products.splice(index, 1);
//     this.setState(this.state.products);
//   };
//
//   handleAddEvent(evt) {
//     var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
//     var product = {
//       id: id,
//       name: "",
//       price: "",
//       category: "",
//       qty: 0
//     }
//     this.state.products.push(product);
//     this.setState(this.state.products);
//   }
//
//   handleProductTable(evt) {
//     var item = {
//       id: evt.target.id,
//       name: evt.target.name,
//       value: evt.target.value
//     };
//     var products = this.state.products;
//
//     var neApp = products.map(function(product) {
//       for (var key in product) {
//         if (key == item.name && product.id == item.id) {
//           product[key] = item.value;
//
//         }
//       }
//       return product;
//     });
//     this.setState(neApp);
//     console.log(this.state.products);
//   };
//   render() {
//
//     return (
//       <div>
//         <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
//         <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
//       </div>
//     );
//
//   }
//
// }
// class SearchBar extends React.Component {
//   handleChange() {
//     this.props.onUserInput(this.refs.filterTextInput.value);
//   }
//   render() {
//     return (
//       <div>
//
//         <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
//
//       </div>
//
//     );
//   }
//
// }
//
// class ProductTable extends React.Component {
//
//   render() {
//     var onProductTableUpdate = this.props.onProductTableUpdate;
//     var rowDel = this.props.onRowDel;
//     var filterText = this.props.filterText;
//     var product = this.props.products.map(function(product) {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
//     });
//     return (
//       <div>
//
//
//       <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>price</th>
//               <th>quantity</th>
//               <th>category</th>
//             </tr>
//           </thead>
//
//           <tbody>
//             {product}
//
//           </tbody>
//
//         </table>
//       </div>
//     );
//
//   }
//
// }
//
// class ProductRow extends React.Component {
//   onDelEvent() {
//     this.props.onDelEvent(this.props.product);
//
//   }
//   render() {
//
//     return (
//       <tr className="eachRow">
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           "type": "name",
//           value: this.props.product.name,
//           id: this.props.product.id
//         }}/>
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           type: "price",
//           value: this.props.product.price,
//           id: this.props.product.id
//         }}/>
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           type: "qty",
//           value: this.props.product.qty,
//           id: this.props.product.id
//         }}/>
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           type: "category",
//           value: this.props.product.category,
//           id: this.props.product.id
//         }}/>
//         <td className="del-cell">
//           <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
//         </td>
//       </tr>
//     );
//
//   }
//
// }
// class EditableCell extends React.Component {
//
//   render() {
//     return (
//       <td>
//         <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
//       </td>
//     );
//
//   }
//
// }
//
// ReactDOM.render( <App / > , app);



// class App extends React.Component {
//
//   constructor(props) {
//       super(props);
//
//       this.state = {
//         //  data: 'Initial data...'
//         data: []
//       }
//
//       this.updateState = this.updateState.bind(this);
//
//    };
//
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//
//   render() {
//     return (
//         <div>
//           This is the React App
//           <Content headerPros={this.props.contentProp}/>
//           <input type='text' value={this.state.data} onChange={this.updateState} />
//           <h4>{this.state.data}</h4>
//
//           <h5>{this.props.appHeaderProp}</h5>
//
//         </div>
//     );
//   }
// }
//
// ReactDOM.render(<App appHeaderProp="header Props22222" contentProp="I am the Content Props" />, app);
