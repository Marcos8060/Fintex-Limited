const products = [
    {
        id: 0,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Runda',
        price: '3,200,000',
        rooms: 3,
        agent: 'Vanessa',
        size: 120
    },
    {
        id: 1,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Kiambu Road',
        price: '1,100,000',
        rooms: 2,
        agent: 'Marcos',
        size: 100

    },
    {
        id: 2,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Kilimani',
        price: '4,400,000',
        rooms: 4,
        agent: 'George',
        size: 150
    },
    {
        id: 3,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Westlands',
        price: '1,200,000',
        rooms: 3 ,
        agent: 'Erick',
        size: 110
    },
    {
        id: 4,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Karen',
        price: '6,000,000',
        rooms: 5,
        agent: 'Vanessa',
        size: 160
    },
    {
        id: 5,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Runda',
        price: '7,300,000',
        rooms: 5,
        agent: 'Marcos',
        size: 180
    },
    {
        id: 6,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Lavington',
        price: '8,400,000',
        rooms: 6,
        agent: 'Geroge',
        size: 180
    },
    {
        id: 7,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'kitengela',
        price: '2,200,000',
        rooms: 3,
        agent: 'Erick',
        size: 115
    },
    {
        id: 8,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Runda',
        price: '7,700,000',
        rooms: 7,
        agent: 'Vanessa',
        size: 145,
    },
    {
        id: 9,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Karen',
        price: '6,100,000',
        rooms: 3,
        agent: 'Marcos',
        size: 148
    },
    {
        id: 10,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Kiambu Road',
        price: '5,500,000',
        rooms: 2,
        agent: 'George',
        size: 120
    },
    {
        id: 11,
        imgSrc : 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg',
        location: 'Kilimani',
        price: '4,000,000',
        rooms: 1,
        agent: 'Erick',
        size: 124
    },
    {
        id: 12,
        imgSrc : 'https://i.ytimg.com/vi/1_cSm6A5dlw/hqdefault.jpg',
        location: 'Spring Valley',
        price: '12,000,000',
        rooms: 5,
        agent: 'Vanessa',
        size: 200
    },
    {
        id: 13,
        imgSrc : 'https://www.peponirealestate.com/wp-content/uploads/2015/02/IMG_2980-600x300.jpg',
        location: 'Muthaiga',
        price: '15,000,000',
        rooms: 6,
        agent: 'Marcos',
        size: 220
    },
    {
        id: 14,
        imgSrc : 'https://www.abacus-property.com/wp-content/uploads/2020/08/DIK-DIK3.jpg',
        location: 'Gigiri',
        price: '19,000,000',
        rooms: 7,
        agent: 'George',
        size: 130
    },
    {
        id: 15,
        imgSrc : 'https://images.kenyapropertycentre.com/properties/images/5338/05f34ccd9ee990-dik-dik-gardens-redevelopment-opportunity-detached-bungalows-for-sale-kileleshwa-nairobi.jpg',
        location: 'Kilimani',
        price: '25,000,000',
        rooms: 6,
        agent: 'Erick',
        size: 232
    },
    {
        id: 16,
        imgSrc : 'https://daebakinvestments.com/wp-content/uploads/2019/06/64782914_2566504523368000_7699916281918521344_n.jpg',
        location: 'Muthaiga',
        price: '73,000,000',
        rooms: 8,
        agent: 'Vanessa',
        size: 240
    },
    {
        id: 17,
        imgSrc : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f7/68/ae/the-cottage-gigiri.jpg?w=900&h=-1&s=1',
        location: 'Westlands',
        price: '63,000,000',
        rooms: 7,
        agent: 'Marcos',
        size: 210
    },
    {
        id: 18,
        imgSrc : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/2f/a0/orchid-homes.jpg?w=900&h=-1&s=1',
        location: 'Kiambu road',
        price: '43,000,000',
        rooms: 6,
        agent: 'George',
        size: 112
    },
    {
        id: 19,
        imgSrc : 'https://i1.wp.com/www.standard-property.com/wp-content/uploads/2017/04/1.jpg?fit=960%2C720&ssl=1',
        location: 'Muthaiga',
        price: '33,000,000',
        rooms: 5,
        agent: 'Erick',
        size: 123
    },
    {
        id: 20,
        imgSrc : 'https://www.standard-property.com/wp-content/uploads/2017/11/Kerarapond-2.jpg',
        location: 'Gigiri',
        price: '21,000,000',
        rooms: 4,
        agent: 'Vanessa',
        size: 147
    },
    {
        id: 21,
        imgSrc : 'https://cdn06.allafrica.com/download/pic/main/main/csiid/00530300:9e87b093fb2c028239f86df792d65734:arc614x376:w735:us1.jpg',
        location: 'Lavington',
        price: '34,000,000',
        rooms: 4,
        agent: 'Marcos',
        size: 48
    },
    {
        id: 22,
        imgSrc : 'https://www.nwhm.com/sites/default/files/2021-03/epic_IMG_854x650px.jpg',
        location: 'Lavington',
        price: '83,000,000',
        rooms: 9,
        agent: 'George',
        size: 252
    },
    {
        id: 23,
        imgSrc : 'https://www.realestatedatabase.net/PropertyPhotos/464/210920181125250096_210920181131207165.jpeg',
        location: 'Westlands',
        price: '56,000,000',
        rooms: 5,
        agent: 'Erick',
        size: 183
    },
    {
        id: 24,
        imgSrc : 'https://willstonehomes.co.ke/wp-content/uploads/2021/11/IMG_1121-scaled.jpg',
        location: 'Karen',
        price: '47,000,000',
        rooms: 4,
        agent: 'Vanessa',
        size: 136
    },
    {
        id: 25,
        imgSrc : 'https://robbreport.com/wp-content/uploads/2020/03/1011beverlydr_65.jpg?w=1000',
        location: 'Spring Valley',
        price: '77,000,000',
        rooms: 6,
        agent: 'Marcos',
        size: 250
    },
    {
        id: 26,
        imgSrc : 'https://i.ytimg.com/vi/4QlH5EjzXdk/maxresdefault.jpg',
        location: 'Spring Valley',
        price: '73,000,000',
        rooms: 5,
        agent: 'George',
        size: 253
    },
    {
        id: 27,
        imgSrc : 'https://i.ytimg.com/vi/4QlH5EjzXdk/maxresdefault.jpg',
        location: 'Spring Valley',
        price: '73,000,000',
        rooms: 5,
        agent: 'George',
        size: 253
    },
]