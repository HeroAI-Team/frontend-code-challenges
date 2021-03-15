/**
* Can you explain the differences between all those ways
* of passing function to a component?
*
* What happens when you click each of the buttons?
* inspired from https://medium.com/@baphemot/a-react-job-interview-recruiter-perspective-f1096f54dd16
*/

class App extends React.Component {
  
  constructor() {
    super(); 
    this.name = 'MyComponent';
    
    this.handleClick2 = this.handleClick1.bind(this);
  }
  
  handleClick1() {
    alert(this.name);
  }
  
  handleClick3 = () => alert(this.name);
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>click 1</button>
        <button onClick={this.handleClick2}>click 2</button>
        <button onClick={this.handleClick3}>click 3</button>
      </div>
    );
  }
}
