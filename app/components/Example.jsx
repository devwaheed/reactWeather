var React = require('react');
var {Link} = require('react-router');

var Example = function(props){
    return (
        <div>
            <h1 className="text-center">Example</h1>
            <p>Here are few Example Locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Peshawar">Peshawar, PAK</Link>
                </li>
                <li>
                    <Link to="/?location=Lahore">Lahore, PAK</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Example;