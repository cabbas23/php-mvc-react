
function Card(props) {

    function btnCLicked(data, mvc) {
        var testConsole = ajaxGetJSON('test_get_json', JSON.stringify(data), mvc);
        alert(JSON.stringify(testConsole));
    }

    return React.createElement(
        "div",
        { className: "card" },
        React.createElement("img", { src: "https://mdbootstrap.com/img/new/standard/nature/111.jpg", load: "lazy", className: "card-img-top", alt: "..." }),
        React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
                "h5",
                { className: "card-title" },
                "Card: ",
                props.cardKey
            ),
            React.createElement(
                "p",
                { className: "card-text" },
                props.bodyTxt
            ),
            React.createElement(
                "button",
                { className: "btn btn-primary test-btn test", onClick: function onClick() {
                        btnCLicked(props.cardKey, props.mvc);
                    } },
                "AJAX test"
            )
        )
    );
}

export default Card;