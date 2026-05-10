import React from 'react';

const DetailsPage = async ({params}) => {
    const{id} =await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    const { imageUrl, price, destinationName, duration, country, description } =
    destination;

    return (
            <div>
                hello from details page
               <h2 className="text-xl font-bold">{destinationName}</h2>
        </div>
    );
};

export default DetailsPage;