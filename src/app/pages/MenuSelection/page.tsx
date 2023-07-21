'use client'
import React, { useEffect, useState } from 'react'
import ProviderHeader from '@/components/widgets/providerHeader';
import ProviderCategories from '@/components/widgets/providerCategories';
import categoriesData from '@/data/categories.json';
import { CategoryItem, ProductItem } from '@/types/types';
import ProviderProductList from '@/components/widgets/providerProductList';
import productsData from '../../../data/products.json'
import { SkeletonItem } from '@/components/ui/skeletonItem';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SkeletonGroup from '@/components/widgets/SkeletonGroup';
export default function MenuSelection() {

  const [categories] = useState<CategoryItem[]>(categoriesData.categories);
  const [data, setData] = useState<ProductItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const categoryLength = 8; //need to be obtained from the selected category for skeleton purposes
  useEffect(() => {
    const fetchDataAfterDelay = () => {
      setTimeout(() => {
        setData(productsData.products);
        setLoading(false);
      }, 3000);
    };
    fetchDataAfterDelay();
  }, []);
  return (
    <div className="max-w-md text-center mx-auto p-4">
      <ProviderHeader></ProviderHeader>
      <ProviderCategories categories={categories}></ProviderCategories>
      <div>
        {loading ? (
          <SkeletonGroup repeats={categoryLength}></SkeletonGroup>
        ) : data ? (
          <ProviderProductList products={data} categoryTitle='Categoria 1'></ProviderProductList>
        ) : (
          <div className='text-danger'> Error al cargar datos </div>
        )}
      </div>
      <Link href='/'><Button variant="burgerRed" size="lg">Regresar</Button></Link>
    </div>
  )
}
