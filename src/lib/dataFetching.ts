import fsPromises from 'fs/promises';
import path from 'path';
import { env } from 'process';
const categoriesUrl = process.env.LOCAL_CATEGORIES as string;
const productsUrl = process.env.LOCAL_PRODUCTS as string;
export async function getCategoriesData(){
    const filePath = path.join(process.cwd(),categoriesUrl);
    const jsonData = await fsPromises.readFile(filePath,"utf-8");
    const categoriesData = JSON.parse(jsonData);
    return categoriesData;
}

export async function getProductsData(){
    const filePath = path.join(process.cwd(),productsUrl);
    const jsonData = await fsPromises.readFile(filePath,"utf-8");
    const productsData = JSON.parse(jsonData);
    return productsData;
}