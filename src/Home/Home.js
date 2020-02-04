import React from 'react';
import Menu from '../Menu/Menu'


const testWriters = [
    {name: "Quinn", articles:[1,2,3]},
    {name: "Sean", articles: [4, 5, 6]}
]

// const constructWriters = function(writers, articles) {
//     writers.map(function(writer) {

//     })
// }

function Home() {
    return (
        <div>
            <main role="main">
                <header role="banner">
                    <h1>How to Stop Smiling.<br/>A blog</h1>
                </header>
                <div className="Writer-Menu">
                    {testWriters.map(writer => {
                        return (
                            <Menu 
                                name={writer.name}
                                articles={writer.articles}
                            />
                        )
                    })}
                </div>
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default Home;