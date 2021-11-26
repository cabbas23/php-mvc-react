
function Card(props){
    var test = 'test';

    const btnCLicked = (data, mvc) =>{
        var testConsole = ajaxGetJSON('test_get_json', JSON.stringify(data), mvc);
        alert(JSON.stringify(testConsole));
    }

    return(
        <div className="card">
            <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titleTxt}</h5>
                <p className="card-text">{props.bodyTxt}</p>
                <a href="#" className="btn btn-primary test-btn test" onClick={() => {btnCLicked(props.titleTxt, props.mvc)}}>{test}</a>
            </div>
        </div>
    );
}

export default Card; 