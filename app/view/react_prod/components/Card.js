
function Card(props) {
    var test = 'test';

    var btnCLicked = function btnCLicked(data, mvc) {
        var testConsole = ajaxGetJSON('test_get_json', JSON.stringify(data), mvc);
        alert(JSON.stringify(testConsole));
    };

    return React.createElement(
        'div',
        { className: 'card' },
        React.createElement('img', { src: 'https://mdbootstrap.com/img/new/standard/nature/111.jpg', className: 'card-img-top', alt: '...' }),
        React.createElement(
            'div',
            { className: 'card-body' },
            React.createElement(
                'h5',
                { className: 'card-title' },
                props.titleTxt
            ),
            React.createElement(
                'p',
                { className: 'card-text' },
                props.bodyTxt
            ),
            React.createElement(
                'a',
                { href: '#', className: 'btn btn-primary test-btn test', onClick: function onClick() {
                        btnCLicked(props.titleTxt, props.mvc);
                    } },
                test
            )
        )
    );
}

export default Card;