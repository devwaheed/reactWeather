var React = require('react');


var About =  (props)=>{
    return (
        <div>
            <h3 className="text-center">About </h3>
            <p>React Mosam is built using React and Foundation</p>
            <p>Tools used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
            </ul>
        </div>
        
    )
}

module.exports = About;