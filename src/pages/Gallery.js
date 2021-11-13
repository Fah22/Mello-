import React from "react";
import '../components/Data';

const Gallery = () => {

    const data = [
        {
            "id": 1,
            "image": "./assets/ian-schneider-TamMbr4okv4-unsplash.jpg"
        },
    
        {
            "id": 2,
            "image": "./assets/kelly-sikkema-o2TRWThve_I-unsplash.jpg",
        },
    
        {
            "id": 3,
            "image": "./assets/kevin-jarrett-wkbQjSfc6Gw-unsplash.jpg",
        },
    
        {
            "id": 4,
            "image": "./assets/oladimeji-odunsi-br7vCg8693o-unsplash.jpg",
        },
    
        {
            "id": 5,
            "image": "./assets/soundtrap-18DcGekC7qE-unsplash.jpg",
        },
    
        {
            "id": 6,
            "image": "../assets/vinicius-amnx-amano-DZ0MfTX_9sQ-unsplash.jpg"
        }
    ]

    return (
        <>
            {data.map((image, index) => (
                <div key={index} class="grid">
                    <div class="g-col-6 g-col-md-4">
                        <img src={data.image} alt="Gallery Pic" />
                    </div>
                </div>
            ))}
        </>
    )
};

export default Gallery;
