const API_URL = 'http://localhost:5000/api/images';

export const fetchImages = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const fetchImageById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const uploadImage = async (formData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: formData
  });
  return res.json();
};

export const deleteImage = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};
