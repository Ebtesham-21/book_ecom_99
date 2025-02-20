import {Card, CardContent} from '@/components/ui/card'
import {
    getProductBySlug,
    getRelatedProductsByCategory
} from '@/lib/actions/product.actions'

import SelectVariant from '@/components/shared/product/select-variant'
import ProductPrice from '@/components/shared/product/product-price'
import ProductGallery from '@/components/shared/product/product-gallery'
import { Separator } from '@/components/ui/separator'
import ProductSlider from '@/components/shared/product/product-slider'
import { describe } from 'node:test'

export async function generateMetadata(props: {
    params: Promise<{slug: string}>
}) {
    const params = await props.params
    const product = await getProductBySlug(params.slug)
    if(!product) {
        return {title: 'Product not found'}
    }
    return {
        title: product.name,
        description: product.description,
    }
}

export default async function ProductDetails (props: {
    params: Promise<{slug: string}>
    searchPrams: Promise<{page: string; color: string; size: string}>
}) {
    const searchParams = await props.searchPrams
    const {page, color, size} = searchParams
    const params = await props.params
    const {slug} = params
    const product = await getProductBySlug(slug)
    const relatedProducts = await getRelatedProductsByCategory({
        category: product.category,
        productId: product._id,
        page: Number(page || '1'),

    })

    return (
        <div>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-5'>
                    <div className='col-span-2'>\
                        <ProductGallery images={product.images}/>

                    </div>
                    <div className='flex w-full flex-col gap-2 md:p-5 col-span-2'>
                        <div className='flex flex-col gap-3'>
                            <p className='p-medium-16 rounded-full bg-gray-500/10 text-gray-500'>
                            Brand {product.brand} {product.category}
                            </p>
                            <h1 className='font-bold text-lg lg:text-xl'>{product.name}</h1>
                            <div className='flex items-center gap-2'>
                                <span>{product.avgRating.toFixed(1)}</span>
                                <Rating rating={product.avgRating} />
                                <span>{product.numReviews} ratings</span>
                            </div>
                            <Separator/>
                            

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}