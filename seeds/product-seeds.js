const { urlencoded } = require('express');
const { Product } = require('../models');

const productData = [
    //pcs
    {
        name: 'Alienware Aurora R13',
        price: 1899,
        rating: 93,
        description: 'Alienware’s first Cryo-Tech™ enabled desktop—with 12th Gen Intel® Core™ processors, a new chassis, improved thermal performance and quieter acoustics.',
        image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r13/media-gallery/mg-0013-alienware-aurora-r13-dark-side-of-the-moon-bk-clear-panel-cryo-cooled-cryo-cooled/desktop_alienware_aurora_13_bk_clear_cryo_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=382&qlt=100,1&resMode=sharp2&size=382,402&chrss=full',
    },
    {
        name: 'Velocity Micro Raptor Z55',
        price: 2749,
        rating: 96,
        description: 'Our all time most popular, designed for mid-range gaming and other high demand applications. Featuring your choice of 12th Gen or new 13th Gen Intel or AMD Ryzen 5000 processors.',
        image: 'https://www.velocitymicro.com/img/PC/GX6/gx6-side-open-1000.png',

    }, 
    {
        name: 'MainGear Turbo',
        price: 1919,
        rating: 97,
        description: 'Small but packed with full-bore desktop components, Maingears Turbo gaming desktop delivers exquisite performance. Its the ultimate compact gamer, if you can withstand the sticker shock.',
        image: 'https://d1k3jiaf8cocae.cloudfront.net/wp-content/uploads/turbo_r_custom.jpg',
    },
    {
        name: 'MSI Aegis RS',
        price: 1429,
        rating: 91,
        description: 'Wield the power and become the worlds best with the Aegis RS. Utilizing up to the latest 12th Gen. Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ graphics cards, the Aegis RS brings plenty of power to help any and all gamers excel and reach the top.',
        image: 'https://storage-asset.msi.com/us/picture/feature/desktop/aegis_rs_10th/cool-liquid.png',
    },
    {
        name: 'Orgin PC Millenium 5000T',
        price: 1799,
        rating: 92,
        description: 'Origins handsome gaming tower, favoring parts from its parent Corsair, is huge and costly as configured. But its Core i9 special-edition CPU and GeForce RTX 3090 GPU ensure stellar 1080p and 1440p frame rates and even 60fps performance at 4K.',
        image: 'https://www.originpc.com/blog/wp-content/uploads/2022/03/corsair-5000t-2.jpg',
    }, 
    {
        name: 'Falcon Northwest Tiki',
        price: 3299,
        rating: 100,
        description: 'A decade ago, we designed a PC unlike anything the world had ever seen. We destroyed the notion that powerful PCs had to be big, hulking towers. We reduced the size of the PC to its absolute minimum. We made Tiki quiet. We made it beautiful.',
        image: 'https://images.ctfassets.net/aekk6nx6e23n/6OKEuvH5AXhRsP2XDzLuDh/0e0b2d5878d99c29bda2bb0690db385f/TIKI_v1.5-Components_Fixed_01.jpg',
    },
    //keyboards
    {
        name: 'HiGround SnowStone',
        price: 149,
        rating: 98,
        description: 'Our signature 65% keyboard (dedicated arrow keys) with dye-sub PBT keycaps. Features hot-swappable switches, aluminum plate, and silicone dampening foam.',
        image: 'https://cdn.shopify.com/s/files/1/0352/1514/7148/products/CopyofHiGround_001_480x.jpg?v=1663273057',
    },
    {
        name: 'Roccat Vulkan TKL',
        price: 129,
        rating: 92,
        description: 'The award-winning ROCCAT® Vulcan Mechanical Gaming Keyboard is re-imagined in a tenkeyless form factor and taken to another level with the introduction of ROCCAT’s Titan Switch Optical. The new switch is a marvel in optical engineering, actuating at the speed of light for an unprecedented new level of responsiveness.',
        image: 'https://cdn.shopify.com/s/files/1/0508/6747/0494/products/pdp_gallery_04_e30305a4-d3ab-42b2-b5ed-ec8a0cab00ee_large@2x.png?v=1614681395',
    }, 
    {
        name: 'Keychron Q6',
        price: 179,
        rating: 100,
        description: 'Keychron Q6 is a premium full-size and all-metal mechanical keyboard. With its all-metal CNC machined body, a full-size layout, double-gasket design, QMK/VIA support, and knob option, the Q6 meets all your practical needs and gives you a high-end typing experience.',
        image: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychronq6fullsizedqmkcustommechanicalkeyboard10-1655289594497.jpg?v=1655289642',
    }, 
    {
        name: 'SteelSeries Apex Pro',
        rating: 98,
        price: 139,
        description: 'The Apex Pro is the biggest leap in mechanical keyboards since the invention of the mechanical switch over 35 years ago. Each key can be adjusted to meet your preferred sensitivity level, whether it’s for gaming, work, or anything else.',
        image: 'https://m.media-amazon.com/images/I/81yOuAUQAiL.jpg',
    },
    {
        name: 'Razer ProType Ultra',
        rating: 94,
        price: 159,
        description: 'The Razer Pro Type returns in top form to revolutionize your workstation. Back by popular demand and greatly refined through community feedback, this resilient ergonomic keyboard promises a quieter, more luxurious experience with every keystroke.',
        image: 'https://www.mechanical-keyboard.org/wp-content/uploads/2021/03/Razer-Pro-Type-Wireless-Keyboard.jpg',
    }, 
    {
        name: 'Glorious GMMK Pro',
        rating: 99,
        price: 169,
        description: 'Award-winning modular mechanical keyboard with enthusiast components and unmatched build quality. Fully customizable to your perfect look, sound, and feel.',
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/1b0ea486-c74f-4e0d-92a5-1f461be78b7c.__CR181,0,3637,2250_PT0_SX970_V1___.jpg',
    },
    //chairs
    {
        name: 'SecretLab Titan EVO',
        rating: 100,
        price: 469,
        description: '',
        image: 'https://www.gamespot.com/a/uploads/original/1595/15950357/3853810-secretlab2022.png',
    },
    {
        name: 'CoolerMaster Caliber X1C',
        rating: 97,
        price: 369,
        description: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3oQvAl8Pf-E56Pocq-WpZi0vpBcdo9jjAw&usqp=CAU',
    }, 
    {
        name: 'Razer Enki X',
        rating: 89,
        price: 297,
        description: '',
        image: 'https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/10/20/razer-enki-x-feature_feature.jpg',
    },
    {
        name: 'Mavix M5',
        rating: 100,
        price: 549,
        description: '',
        image: 'https://cdn11.bigcommerce.com/s-wch2uz2p84/images/stencil/500x659/products/886033/990405/M5_CLEAN__36570.1642166705.jpg?c=1',
    },
    {
        name: 'Herman Miller x Logitech: Embody',
        rating: 99,
        price: 1199,
        description: '',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbPPWBHlLl59INAmIAFezkFRNzMaOgm3feRjH2zh1Tl5rGW_ib1DKcKpP5eJNB4n0yQg7NebIs&usqp=CAE',
    },
    {
        name: "SecretLab x DeadMau5: Omega",
        rating: 95,
        price: 999,
        description: '',
        image: 'https://images.secretlab.co/theme/common/collab_deadmau5_gallery02-min.jpg'
    },
    //misc
    {
        name: 'Logitech G502',
        rating: 100,
        price: 159,
        description: '',
        image: 'https://m.media-amazon.com/images/I/61gEGiOvkKL.jpg',
    },
    {
        name: 'SteelSeries Aerox 9',
        rating: 96,
        price: 109,
        description: '',
        image: 'https://media.steelseriescdn.com/thumbs/filer_public/ce/a3/cea3e058-325d-49ba-99c1-aac1db80be7e/aerox_9_wl_black_pdp_tile_d_aquabarrier.png__1920x700_q100_crop-scale_optimize_subsampling-2.jpg'
    },
    {
        name: 'Razer Basilisk V3 Pro',
        rating: 93,
        price: 159,
        description: '',
        image: 'https://assets2.razerzone.com/images/pnx.assets/6051d5b1473ea5816571226913548634/razer-basilisk-v3-pro_availablein_desktop_1920x700.jpg',
    },
    {
        name: 'Corsair M65',
        rating: 98,
        price: 124,
        description: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcGhGmTknos9CheqENTIj7g3_huNENBaY8ONjuWOucz9s8Mkh8Cfj7o5vGOKO3kkiw4U&usqp=CAU',
    },
    {
        name: 'Logitech GPro',
        rating: 92,
        price: 99,
        description: '',
        image: 'https://blog.logitech.com/wp-content/uploads/2020/11/Picture1.png',
    },
    {
        name: 'FinalMouse Starlight-12 Phantom',
        rating: 94,
        price: 199,
        description: '',
        image: 'https://m.media-amazon.com/images/I/51qqORP4dpS.jpg'
    }
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;