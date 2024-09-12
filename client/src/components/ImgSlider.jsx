import React from 'react'
import { useState } from 'react';

export default function ImgSlider({ images }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open Modal and set the current image index
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to previous image
  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="flex ">

        <div className=" w-3/4 cursor-pointer">
          <img src={images[0]} alt="" className='h-full w-full rounded-md' onClick={() => openModal(0)}
          />

        </div>

        <div className=" w-2/6 flex flex-col space-y-2 items-center h-full">
          {
            images.slice(1).map((image, index) => {
              return (
                <img
                  src={image}
                  key={index}
                  className="w-11/12 h-[85px] rounded-lg object-cover cursor-pointer"
                  onClick={() => {
                    openModal(index);
                  }}
                />
              );
            })
          }

        </div>

        {/* Full Screen Carousel */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative w-full h-full">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Image Carousel */}
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={previousImage}
                  className="absolute left-4 text-white text-4xl font-bold"
                >
                  &#8249;
                </button>

                <img
                  src={images[currentImageIndex]}
                  alt="Carousel"
                  className="w-3/4 h-auto object-contain"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-4 text-white text-4xl font-bold"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
