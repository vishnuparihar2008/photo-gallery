const Imagekit = require("@imagekit/nodejs");

const imagekit_key = process.env.IMAGEKIT_SECRET_KEY;

const imagekit = new Imagekit({
  privateKey: imagekit_key,
});

async function uploadFile(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
}

module.exports = uploadFile;
