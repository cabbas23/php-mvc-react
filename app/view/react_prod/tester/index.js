var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Card from '../components/Card.js';

function Tester(props) {
    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        counter = _React$useState2[0],
        setCounter = _React$useState2[1];

    function increment() {
        setCounter(counter + 1);
    }

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
            { className: "row mb-4" },
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "button",
                    { className: "btn btn-warning", onClick: increment },
                    "Increment ",
                    counter
                )
            )
        ),
        React.createElement(
            "div",
            { className: "row" },
            testData.map(function (item, key) {
                return React.createElement(
                    "div",
                    { className: "col-md-4 col-lg-3 mb-4" },
                    React.createElement(Card, {
                        cardKey: key,
                        bodyTxt: item.title,
                        mvc: "tester"
                    })
                );
            })
        )
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

ReactDOM.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(Tester, null)
), document.getElementById('root'));