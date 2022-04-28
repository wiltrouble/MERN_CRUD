import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
  cloud_name: "ddewygwi5",
  api_key: "892889276912458",
  api_secret: "XAnNGkQ5YfWyiTHIdB-ryB5jhqA"
})

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'test'
  })
}

export const deleteImage = async id => {
  await cloudinary.uploader.destroy(id)
}