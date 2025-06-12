import React, { useState, useEffect } from 'react';
import { fetchImages, uploadImage, deleteImage } from '../services/api';
import ImageCard from '../components/ImageCard';

const Home = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const data = await fetchImages();
    setImages(data);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    await uploadImage(formData);
    setFile(null);
    loadImages();
  };

  const handleDelete = async (id) => {
    await deleteImage(id);
    loadImages();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📷 Image Gallery</h1>
      <form onSubmit={handleUpload} className="flex gap-2 mb-4">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-1" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Upload</button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
