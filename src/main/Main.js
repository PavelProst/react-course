import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <main>
                    <article>
                        <h1>Article</h1>
                        <h2>sub 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam at cum deleniti
                            dignissimos dolore doloremque ea enim eum exercitationem odit, possimus, quae similique
                            ullam
                            vel veritatis vero voluptates.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo magnam magni
                            repellendus? Alias
                            asperiores consequuntur dolores eaque eligendi impedit ipsam ipsum modi nostrum praesentium
                            quasi
                            quos
                            reiciendis suscipit, ullam!</p>
                    </article>
                </main>
            </div>
        )
    }
}

export default Main;