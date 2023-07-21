import React from 'react'
import { ProductItem } from '@/types/types';
import { ScrollArea } from "@/components/ui/scroll-area"
import ProductListItem from '../ui/productListItem';

interface ProviderListProps {
    products: ProductItem[];
    categoryTitle: string;
}

const ProviderProductList: React.FC<ProviderListProps> = ({ products, categoryTitle }) => {

    return (
        <ScrollArea>
            <div className="p-4">
                <h3 className='text-left font-bold'>Titulo {categoryTitle}</h3>
                {products.map((p) => (
                    <React.Fragment key={p.id}>
                        <div key={p.id} className='my-2'>
                            <ProductListItem item={p}></ProductListItem>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}
export default ProviderProductList;
