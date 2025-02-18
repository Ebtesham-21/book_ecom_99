import {Data, IProductInput} from '@/types'
import { toSlug } from './utils'

const products: IProductInput[] = [
    {
        name: 'Lily Day',
        slug: toSlug('Lily Day'),
        category: 'Kids Books',
        images: ['/images/book1.png'],
        tags: ['new-arrival'],
        isPublished: true,
        price: 200,
        listPrice: 0,
        brand: '99Books',
        avgRating: 4.71,
        numReviews: 7,
        ratingDistribution: [
            {rating: 1, count: 0},
            {rating: 2, count: 0},
            {rating: 3, count: 0},
            {rating: 4, count: 2},
            {rating: 5, count: 5},
        ],
        numSales: 9,
        countInStock: 11,
        description: "Kids Shop",
        sizes: ['S', 'M'],
        colors: ['Green', 'Red', 'Black'],
        reviews: [],


    },
    {
        name: 'Lily Day',
        slug: toSlug('Lily Day'),
        category: 'Kids Books',
        images: ['/images/book2.png'],
        tags: ['new-arrival'],
        isPublished: true,
        price: 200,
        listPrice: 0,
        brand: '99Books',
        avgRating: 4.71,
        numReviews: 7,
        ratingDistribution: [
            {rating: 1, count: 0},
            {rating: 2, count: 0},
            {rating: 3, count: 0},
            {rating: 4, count: 2},
            {rating: 5, count: 5},
        ],
        numSales: 9,
        countInStock: 11,
        description: "Kids Shop",
        sizes: ['S', 'M'],
        colors: ['Green', 'Red', 'Black'],
        reviews: [],


    },
]



const data : Data = {
    products,
    headerMenus: [
        {
        name: "Today's Deal",
        href:"/search?tag=todays-deal",
        },
        {
        name: "New Arrivals",
        href:"/search?tag=new-arrival",
        },
        {
        name: "Featured Products",
        href:"/search?tag=featured"
        },
        {
        name: "Best Sellers",
        href:"/search?tag=Best Sellers"
        },
      
        {
        name: "Browsing History",
        href:"/#browsing-history",
        },
        {
        name: "Customer Service",
        href:"/page/customer-service",
        },
        {
        name: "About Us",
        href:"/page/about-us",
        },
        {
        name: "Help",
        href:"/page/help",
        },

    ],
    carousels: [
        {
            title: 'Most Popular  Picture Books For Sale  ',
            buttonCaption: 'Buy Now',
            image: 'images/banner.png',
            url: '/search?category=picture',
            isPublished: true,
        }, 
        {
            title: 'Best Sellers in Story Books',
            buttonCaption: 'Buy Now',
            image: 'images/banner.png',
            url: '/search?category=story',
            isPublished: true,

        },
        {
            title: 'Best Deals in Coloring Books',
            buttonCaption: 'Buy Now',
            image: 'images/banner.png',
            url: '/search?category=coloring',
            isPublished: true,

        },
    ],
}

export default data