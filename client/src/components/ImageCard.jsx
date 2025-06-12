import React from 'react';

const ImageCard = ({ image, onDelete }) => (
  <div className="border rounded p-2 shadow-md">
    <img src={`http://localhost:5000/uploads/${image.filename}`} alt={image.originalname} className="w-full h-48 object-cover rounded" />
    <div className="flex justify-between mt-2">
      <p className="text-sm">{image.originalname}</p>
      <button onClick={() => onDelete(image.id)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
    </div>
  </div>
);

export default ImageCard;
