
function Card(props){

    function btnCLicked(data, mvc){
        var testConsole = ajaxGetJSON('test_get_json', JSON.stringify(data), mvc);
        alert(JSON.stringify(testConsole));
    }

    return(
        <div className="card">
            <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" load="lazy" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card: {props.cardKey}</h5>
                <p className="card-text">{props.bodyTxt}</p>
                <button className="btn btn-primary test-btn test" onClick={() => {btnCLicked(props.cardKey, props.mvc)}}>AJAX test</button>
            </div>
        </div>
    );
}

export default Card; 