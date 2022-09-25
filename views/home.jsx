const React = require('react')
const Def = require('./home')

function home () {
    return (
        <Dev>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/salmon.jpg" alt="Salmon"/> 
                </div>
                Photo by <a href="https://unsplash.com/@ca_creative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CA Creative</a> on <a href="https://unsplash.com/s/photos/salmon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </main>
        </Dev>
    )
}

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
