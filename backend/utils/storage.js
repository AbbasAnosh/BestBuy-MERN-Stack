import multer from "multer";
import { v2 as cloudinaryV2 } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});
export async function handleUpload(file) {
  const res = await cloudinaryV2.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "bestbuy",
    allowedFormats: ["jpeg", "png", "jpg"],
    format: async (req, file) => "png",
    public_id: (req, file) => file.fieldname + "-" + Date.now(),
  },
});
console.log(storage.cloudinaryV2);
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpg|jpeg|png/;
//   const isAccepted = allowedTypes.test(file.mimetype);
//   if (isAccepted) {
//     return cb(null, true);
//   }
//   return cb(new Error("Only .jpg, .jpeg, and .png files are allowed"), false);
// };

const upload = multer({ storage });

export default upload;
