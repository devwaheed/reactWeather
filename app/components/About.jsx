var React = require('react');


var About =  (props)=>{
    return (
        <div>
            <h2 className="text-center page-title">About </h2>
            <p>React Mosam is built using React and Foundation</p>
            <p>Tools used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>  
            </ul>
        </div>       
    );
}

module.exports = About;