import { Button } from '@/components/ui/button'

async function getCategories() {

}

async function getProducts() {
  // Remember to add a 2 min wait
}

export default async function Home() {

  const categories = await getCategories();
  const products = await getProducts();

  return (
    <main className="max-w-md text-center">
      
    </main>
  )
}
