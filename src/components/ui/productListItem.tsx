import React from 'react'
import { ProductItem } from '@/types/types';
import { useFormatter } from 'next-intl';
import { ValueNoneIcon } from '@radix-ui/react-icons';
interface ProductListItemProps {
  item: ProductItem;
}
const numberFormat = (value: number | bigint) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(value);
const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {

  const selectedProductAction = () => {
    console.log("Product selected", item);
  }
  return (
    <div className='flex flex-row'
      onClick={selectedProductAction}>
      <div className='basis-3/4 pr-5'>
        <h1 className='text-left'>{item.title}</h1>
        <div className="flex justify-items-start">
          <span className='text-left left-0 mr-5 inline-block'>{numberFormat(item.offerPrice)}</span> 
          <span className='inline-block line-through text-slate-400 text-left'>{numberFormat(item.normalPrice)}</span>
        </div>
        <p className='text-slate-400 text-xs text-left line-clamp-2'>{item.description}</p>
        {item.showIcon ? (
          <div className="float-left">
            <ValueNoneIcon className='text-slate-400 h-6 w-6' />
          </div>
        ) : (
          <div className="float-left">
          </div>
        )}

      </div>
      <div className='basis-1/4'>
        <img src={item.picture} alt='menu item image' />
      </div>

    </div>
  )
}
export default ProductListItem;