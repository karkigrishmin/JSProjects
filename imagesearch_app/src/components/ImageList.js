import React from "react";

const ImageList = ({ images }) => {
  console.log(images);
  //   if (images.length !== 0) {
  //     const imageList = images.map((image) => {
  //       return <img src={image.urls.regular} alt="img" />;
  //     });
  //   }
  const image = images.map((image) => {
    return (
      <img
        src={image.urls.regular}
        key={image.id}
        alt={image.alt_description}
      />
    );
  });

  return <div>{image}</div>;
};

export default ImageList;
