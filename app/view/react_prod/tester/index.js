import Card from '../components/Card.js';

function Tester(props) {
    return React.createElement(
        "div",
        { className: "container mt-5" },
        React.createElement(
            "div",
            { className: "row mb-4" },
            React.createElement(
                "h1",
                null,
                "This View is 100% react content."
            )
        ),
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-sm-4" },
                React.createElement(Card, {
                    titleTxt: "test",
                    bodyTxt: "this is a test",
                    mvc: "tester"
                })
            )
        )
    );
}

ReactDOM.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(Tester, null)
), document.getElementById('root'));