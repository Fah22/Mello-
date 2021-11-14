import React from "react";
import Header from "../components/Header";
 
const Gallery = () => {

    return (
        <>
        <Header />
            <div className="container">
                <div className="grid-row">
                    <div className="grid-col">
                        <img src={process.env.PUBLIC_URL + '/images/ian-schneider-TamMbr4okv4-unsplash.jpg'} alt="Gallery 1"/>
                        <img src={process.env.PUBLIC_URL + '/images/kelly-sikkema-o2TRWThve_I-unsplash.jpg'} alt="Gallery 2"/>
                        <img src={process.env.PUBLIC_URL + '/images/kevin-jarrett-wkbQjSfc6Gw-unsplash.jpg'} alt="Gallery 3"/>
                        
                    </div>
                    <div className="grid-col">
                        <img src={process.env.PUBLIC_URL + '/images/oladimeji-odunsi-br7vCg8693o-unsplash.jpg'} alt="Gallery 4"/>
                        <img src={process.env.PUBLIC_URL + '/images/soundtrap-18DcGekC7qE-unsplash.jpg'} alt="Gallery 5"/>
                        <img src={process.env.PUBLIC_URL + '/images/vinicius-amnx-amano-DZ0MfTX_9sQ-unsplash.jpg'} alt="Gallery 6"/>
                    </div>
                    <div className="grid-col">
                        <img src={process.env.PUBLIC_URL + '/images/brooke-lark-cqOZcjOOmRw-unsplash.jpg'} alt="Gallery 7"/>
                        <img src={process.env.PUBLIC_URL + '/images/joanna-kosinska-1_CMoFsPfso-unsplash.jpg'} alt="Gallery 8"/>
                        <img src={process.env.PUBLIC_URL + '/images/tamara-gore-jfH6tHXvXlg-unsplash.jpg'} alt="Gallery 9"/>
                    </div>
                    <div className="grid-col">
                        <img src={process.env.PUBLIC_URL + '/images/markus-stephen-griffiths-hYskLMtgGgY-unsplash.jpg'} alt="Gallery 10"/>
                        <img src={process.env.PUBLIC_URL + '/images/neven-krcmarek-V4EOZj7g1gw-unsplash.jpg'} alt="Gallery 10"/>
                        <img src={process.env.PUBLIC_URL + '/images/ruslan-bardash-FnfMtI8w6-E-unsplash.jpg'} alt="Gallery 10"/>
                    </div>
                </div>
            </div>    
        </>
    )
};

export default Gallery;
