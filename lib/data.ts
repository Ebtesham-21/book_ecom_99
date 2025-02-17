

const data = {
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