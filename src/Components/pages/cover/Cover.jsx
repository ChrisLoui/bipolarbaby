import React from 'react';

const Cover = ({ coverPNG, title }) => {
    const coverPNGStyle = {
        backgroundImage: `url(${coverPNG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%" // Ensure it takes up the full height
    };

    return (
        <div className="h-full page-shadow" style={coverPNGStyle}>
    <div className="h-full flex justify-center items-center text-center">
        <div>
            <h1 className="text-7xl  font-sacramento">
                <span className="block">A <span className='font-primary'>BOOK</span></span>
                <span className="block">for</span>
            </h1>
            <div className="text-9xl text-primary font-extrabold font-sacramento">
            <span className="block">Kristine</span>
            </div>
        </div>
    </div>
</div>
    );
};

export default Cover;