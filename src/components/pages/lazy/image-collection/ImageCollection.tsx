import { FC } from "react";

import './ImageCollection.scss';

const ImageCollection: FC = (): JSX.Element => {
  const collection = Array.from({ length: 11 }).map((el, index) => index + 1);

  // const reg = /(jpeg|png|jpg)/;
  
  return (
    <div className="image-collection">
      {
        collection.map((element, index) => 
          (
            <div key={index} className="image-collection__item">
              <img
                width="350" 
                height="220"
                src={`${process.env.PUBLIC_URL}/assets/images/${element}.jpeg`}
                alt="pic"  
              />
            </div>
          )
        )
      }
    </div>
  )
}

export default ImageCollection;