import {CLOUD_NAME, API_KEY, API_SECRET} from '../config.js';

import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'test'
  })
}

export const deleteImage = async id => {
  await cloudinary.uploader.destroy(id)
}