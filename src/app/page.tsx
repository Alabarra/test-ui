import { Button } from '@/components/ui/button'
import * as DataFetch from '../lib/dataFetching';
import ProviderHeader from '@/components/widgets/providerHeader';
import Link from 'next/link';
async function getCategories() {
  const promise = DataFetch.getCategoriesData();
  promise.then((val)=>{
   return val;
  })  
}

async function getProducts() {
  // Remember to add a 2 min wait
}

export default async function Home() {

  const categories = await getCategories();
  const products = await getProducts();

  return (
    <main className="max-w-md text-center mx-auto p-4">
      <Link href="/pages/MenuSelection"><Button className='mx-3' variant='default' size='lg'>Menu Restaurant</Button></Link>
    </main>
  )
}
