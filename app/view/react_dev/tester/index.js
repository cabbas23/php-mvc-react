import Card from '../components/Card.js';

function Tester(props) {
    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <h1>This View is 100% react content.</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <Card 
                        titleTxt="test" 
                        bodyTxt="this is a test" 
                        mvc="tester"
                    />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <Tester />
  </React.StrictMode>,
  document.getElementById('root')
);