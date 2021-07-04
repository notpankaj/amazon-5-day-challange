import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import { addToBasket, removeFromBasket} from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {

    const dispatch = useDispatch();

    const addItemToBasket = ()=>{
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        }
        // push item to redux 

        dispatch(addToBasket(product))
    }
    const RemoveItemFromBasket = ()=> {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        }
        // pop item to redux
        dispatch(removeFromBasket(product))
    }


  return (
    <div className="grid gird-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />
      {/* middle */}
      <div className="col-span-3">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
            />
            <p className="text-xs text-gray-500">FREE Next-day delivery</p>
          </div>
        )}
      </div>
      
      {/* right */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={RemoveItemFromBasket} >Remove Basket</button>
            </div>
    </div>
  );
}

export default CheckoutProduct;
