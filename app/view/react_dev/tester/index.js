import Card from '../components/Card.js';

function Tester(props) {
    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <h1>This View is 100% react content.</h1>
            </div>
            <div className="row">
                {
                    testData.map((item, key) => {
                        return(
                            <div className="col-sm-4 mb-4">
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

ReactDOM.render(
  <React.StrictMode>
    <Tester />
  </React.StrictMode>,
  document.getElementById('root')
);