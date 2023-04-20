import axios from "axios";
import { getPrice } from "helpers/getPrice";
import type { NextApiRequest, NextApiResponse } from "next";

const APP_API = process.env.APP_API;

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { billing, shiping, sum, sameAddress, basket } = req.body;

  const basketGenerate = basket.map((item: any) => {
    return ({
      title: item.title + " - " + item.variantTitle,
      count: item.count,
      price: item.variants[0].salePrice
        ? (
            item.variants[0].salePrice *
            item.count *
            item.variants[0].countInPack
          ).toFixed(2)
        : (getPrice(item.variants[0]) *
          item.count *
          item.variants[0].countInPack).toFixed(2),
      countInPack: item.variants[0].countInPack,
      imageUrl: item.variants[0].images.data[0].attributes.url,
    });
  });

  const dataSend = {
    billing: sameAddress ? shiping : billing, 
    shiping, 
    sum, 
    sameAddress, 
    basket: basketGenerate,
    idOrder: Math.floor(Math.random() * 1000000000)
  }

  const order = await axios.post(`${APP_API}/api/orders?populate=*`, {data: dataSend} )
    .catch(err => console.log(err.response))

  res.status(200).json({...order?.data.data.attributes});
}
