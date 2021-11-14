import React from "react";

const Gallery = () => {

    const data = [
        {
            "id": 1,
            "image": "images/ian-schneider-TamMbr4okv4-unsplash.jpg"
        },
    
        {
            "id": 2,
            "image": "images/kelly-sikkema-o2TRWThve_I-unsplash.jpg",
        },
    
        {
            "id": 3,
            "image": "images/kevin-jarrett-wkbQjSfc6Gw-unsplash.jpg",
        },
    
        {
            "id": 4,
            "image": "images/oladimeji-odunsi-br7vCg8693o-unsplash.jpg",
        },
    
        {
            "id": 5,
            "image": "images/soundtrap-18DcGekC7qE-unsplash.jpg",
        },
    
        {
            "id": 6,
            "image": "images/vinicius-amnx-amano-DZ0MfTX_9sQ-unsplash.jpg"
        }
    ]

    return (
        <>
            {data.map((item) => (
                <div key={item.id} class="grid">
                    <div class="g-col-6 g-col-md-4">
                        <img src={item.image} alt="Gallery Pic" style={{ width: "200px", height: "200px"}}/>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Gallery;
