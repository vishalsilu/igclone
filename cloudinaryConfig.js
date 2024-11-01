// cloudinaryConfig.js
import cloudinary from "cloudinary"


export const uploadImage = async (imageBuffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return reject(new Error("Failed to upload image to Cloudinary."));
          }
          resolve(result.secure_url); // Return the secure URL
        }
      );
  
      stream.end(imageBuffer); // End the stream with the buffer
    });
  };
