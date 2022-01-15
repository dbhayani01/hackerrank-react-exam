import React from 'react';

const Articles = ({ articles }) => {
    return (
        <>
        <br/>
            <table class="table table-dark">
                <tbody>
                    <tr>
                        <th>Index</th>
                        <th>Upvotes</th>
                        <th>Time</th>
                    </tr>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td>{article['index']}</td>
                            <td>{article['count']}</td>
                            <td>{article['time']}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Articles;