import React from 'react'

function SobreNosImages({
  titleOfImages,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
}) {
  return (
    <>
      <div className="fourth-row-sobrenos">
        <div className="fourth-row-sobrenos-content">
          <h1>{titleOfImages}</h1>
          <div className="images-sobrenos-content">
            <img src={image1} alt="imagem 1" />
            <img src={image2} alt="imagem 2" />
            <img src={image3} alt="imagem 3" />
            <img src={image4} alt="imagem 4" />
            <img src={image5} alt="imagem 5" />
            <img src={image6} alt="imagem 6" />
            <img src={image7} alt="imagem 7" />
            <img src={image8} alt="imagem 8" />
            <img src={image9} alt="imagem 9" />
            <img src={image10} alt="imagem 10" />
            <img src={image11} alt="imagem 11" />
            <img src={image12} alt="imagem 12" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SobreNosImages
