import React, { useState } from 'react';

const Header = ({ getKeyword }) => {
    const imgLogo = 'logo.png';
    const [text, setText] = useState('');
    const onChange = (event) => {
        setText(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        getKeyword(text);
    };
    const onClick = (event) => {
        onSubmit(event);
    };
    return(
        <header className='flex justify-between items-center bg-slate-300'>
            <h1 className='flex justify-between items-center'>
                <img className='w-12' alt='logo' src={imgLogo}></img>
                Youtube
            </h1>
            <form onSubmit={onSubmit}>
                <input className='py' type='text' placeholder='Search' onChange={onChange} value={text}></input>
                <button onClick={onClick}>search</button>
            </form>
        </header>
    );
};

export default Header;