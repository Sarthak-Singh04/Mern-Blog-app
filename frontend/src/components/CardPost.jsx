import React from 'react';

const CardPost = () => {
  return (
    <div className='post'>
      <div className='image'>
        <img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lmQVJmY8JkCZIdbDBA_cXQ.png' alt="blog img" />
      </div>
      <div className='text'>
        <h2>
          Web Apps in Python with Solara — A Streamlit Killer?
        </h2>
        <p className='info'>
          <a className='author' href="https://example.com">Aditya</a>
          <time>2023-05-06</time>
        </p>
        <p className='summary'>
          Creating web apps entirely in Python is an enticing idea. Setting up a web app requires both frontend and backend skills such as HTML, CSS, JavaScript (and the numerous frameworks) together with Python or some other server-side language on the backend. It’s a lot of work!
        </p>
      </div>
    </div>
  );
};

export default CardPost;
