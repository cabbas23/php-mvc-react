import Card from '../components/Card.js';

function Tester(props) {

    const [counter, setCounter] = React.useState(0);
    function increment(){
        setCounter(counter+1);
    }

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <h1>This View is 100% react content.</h1>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <button className="btn btn-warning" onClick={increment}>Increment {counter}</button>
                </div>
            </div>
            <div className="row">
                {
                    testData.map((item, key) => {
                        return(
                            <div className="col-md-4 col-lg-3 mb-4">
                                <Card 
                                    cardKey={key} 
                                    bodyTxt={item.title}
                                    mvc="tester"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

/* class Test extends Component {
    constructor(props) {
        const [counter, setCounter] = React.useSate(1);
    }

    incrementCounter(){
        setCounter(counter+1);
    }
    
    render() {
        return(
            <div>
                This is a test 
            </div>
        );
    }
} */
  

ReactDOM.render(
  <React.StrictMode>
    <Tester />
  </React.StrictMode>,
  document.getElementById('root')
);