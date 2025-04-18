import React, { cloneElement } from "react";
import ReactDOM from "react-dom/client";

/* 
Header 
  - Logo
  - Nav Items
Body 
  - Search 
  - Resturant Container
      - Resturant Cards
Footer
  - Copyright
  - Links
  - Address
  - Contact 
*/
const resturantList = [
  {
    info: {
      id: "240796",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e44a6fc6-ceda-4aef-a615-87567f818a95_240796.jpg",
      locality: "Gandhinagar",
      areaName: "Gandhinagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "5.7K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/pizza-hut-gandhinagar-rest240796",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "806685",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/d3a6f858-e697-40b8-a82e-3de2a52eeedd_806685.jpg",
      locality: "Satavahana Nagar",
      areaName: "Gandhinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/burger-king-satavahana-nagar-gandhinagar-rest806685",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "810337",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/0db31806-e4ed-4e87-a651-a0b397990511_810337.jpg",
      locality: "OPP AKSHA HOSPITAL SARGASAN",
      areaName: "RELIANCE CROSS ROAD",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/olio-the-wood-fired-pizzeria-opp-aksha-hospital-sargasan-reliance-cross-road-rest810337",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "621744",
      name: "Cheesecakes By CakeZone",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/bd981b50-67e1-48a2-9c12-843052ed4e1a_621744.JPG",
      locality: "Gandhinagar",
      areaName: "Sargasan",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.2,
      veg: true,
      parentId: "348057",
      avgRatingString: "4.2",
      totalRatingsString: "108",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/cheesecakes-by-cakezone-gandhinagar-sargasan-rest621744",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "36981",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/36d0a86f-3f38-45f2-bc0c-5297c95c89d6_36981.JPG",
      locality: "Gandhinagar",
      areaName: "Sector 11",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
      totalRatingsString: "5.5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.8",
          ratingCount: "1.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/dominos-pizza-gandhinagar-sector-11-rest36981",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "168122",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/5bdf1997-f6b6-4e5e-aba5-2955e4e42302_168122.jpg",
      locality: "Gandhinagar",
      areaName: "GANDHINAGAR",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "22K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "9.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/mcdonalds-gandhinagar-rest168122",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "765053",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b5dea3ed-788d-4679-9d54-07e09f25a1d9_765053.JPG",
      locality: "Kudasan",
      areaName: "Gandhinagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/kfc-kudasan-gandhinagar-rest765053",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "452611",
      name: "Grameen Kulfi",
      cloudinaryImageId: "scbjqf5vjg3lz6jrbsex",
      locality: "Kudasan",
      areaName: "Gandhinagar",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "381",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/grameen-kulfi-kudasan-gandhinagar-rest452611",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45169",
      name: "Gwalia Sweets & Fast Food",
      cloudinaryImageId: "yeiqsiliyvt0k7arhvqf",
      locality: "Super Mall 2",
      areaName: "Infocity",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "Snacks", "Thalis", "Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "92340",
      avgRatingString: "4.4",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹3000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/gwalia-sweets-and-fast-food-super-mall-2-infocity-rest45169",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "810920",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/36c9724b-cd4b-491f-9234-c3d887a6a9df_810920.jpg",
      locality: "Pramukh Anand",
      areaName: "Orbit Mall",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "1040",
      avgRatingString: "4.7",
      totalRatingsString: "645",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/theobroma-pramukh-anand-orbit-mall-rest810920",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "62992",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/92861e7e-3b37-494f-9b2c-3c452ceabfa6_62992.jpg",
      locality: "Near Aashka Multispeciality Hospital",
      areaName: "Gandhinagar",
      costForTwo: "₹200 for two",
      cuisines: ["Thalis", "North Indian", "Biryani"],
      avgRating: 4.4,
      parentId: "4925",
      avgRatingString: "4.4",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/lunchbox-meals-and-thalis-near-aashka-multispeciality-hospital-gandhinagar-rest62992",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "452610",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/ee2ef67f-5dd5-4c11-87f4-2c36aec25384_452610.jpg",
      locality: "Kudasan",
      areaName: "Pramukh Cyprus",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹148",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/nic-ice-creams-kudasan-pramukh-cyprus-rest452610",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45527",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/82c74d44-9887-4117-be8e-3b5050763ffb_45527.JPG",
      locality: "Near Aashka Multispeciality Hospital",
      areaName: "Gandhinagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "21809",
      avgRatingString: "4.4",
      totalRatingsString: "21K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/faasos-wraps-rolls-and-shawarma-near-aashka-multispeciality-hospital-gandhinagar-rest45527",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "318342",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "rpe90k61q1mftqvop5e3",
      locality: "Gandhinagar",
      areaName: "Sector 11",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "4961",
      avgRatingString: "4.4",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/la-pinoz-pizza-gandhinagar-sector-11-rest318342",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "435646",
      name: "La Milano Pizzeria",
      cloudinaryImageId: "v3kyjrbus7ztedlceds4",
      locality: "Skyline Building Sector 11",
      areaName: "Gandhinagar",
      costForTwo: "₹199 for two",
      cuisines: [
        "Pizzas",
        "Italian",
        "Desserts",
        "Pastas",
        "Mexican",
        "Fast Food",
        "Beverages",
        "Salad",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "22533",
      avgRatingString: "4.3",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "666",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/la-milano-pizzeria-skyline-building-sector-11-gandhinagar-rest435646",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "453130",
      name: "Natural Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/68cce04a-3999-483e-a5ee-4b3711e11d8a_453130.jpg",
      locality: "Gandhinagar (Swagat Rainforest)",
      areaName: "Gandhinagar RK",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "2093",
      avgRatingString: "4.8",
      totalRatingsString: "526",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/natural-ice-cream-gandhinagar-swagat-rainforest-gandhinagar-rk-rest453130",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "46089",
      name: "The Chocolate Room",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/20/34b2954f-897e-4cb9-969e-837c28ec5e7b_46089.jpg",
      locality: "Gandhinagar",
      areaName: "Gandhinagar",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Fast Food", "Cafe"],
      avgRating: 4.3,
      veg: true,
      parentId: "1002",
      avgRatingString: "4.3",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "658",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/the-chocolate-room-gandhinagar-rest46089",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "45084",
      name: "Momoman",
      cloudinaryImageId: "rt4pqbfjjsuf4lljbmyp",
      locality: "Idroda Circle",
      areaName: "Infocity",
      costForTwo: "₹250 for two",
      cuisines: ["Momos", "Fast Food", "Chinese", "cafe", "snacks"],
      avgRating: 4,
      parentId: "4416",
      avgRatingString: "4.0",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-19 04:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/momoman-idroda-circle-infocity-rest45084",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "53986",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/93ef503d-d929-4c0c-9dd4-0a25b37084e6_53986.JPG",
      locality: "Gandhinagar",
      areaName: "Sector 11",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "6.3K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 23:58:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/subway-gandhinagar-sector-11-rest53986",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "657731",
      name: "Cucina Restaurant & Banquets",
      cloudinaryImageId: "920b8396124e10eca8480e23d9800ad8",
      locality: "Gandhinagar",
      areaName: "Gandhinagar",
      costForTwo: "₹300 for two",
      cuisines: ["Punjabi", "Chinese", "Continental", "Asian", "North Indian"],
      avgRating: 4.5,
      parentId: "395602",
      avgRatingString: "4.5",
      totalRatingsString: "934",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-18 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹58",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "1.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-7fc43063-698b-4706-985c-1d38a19399fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/ahmedabad/cucina-restaurant-and-banquets-gandhinagar-rest657731",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header flex justify-space-between align-centre">
      <div className="logo">
        <img
          alt="logo"
          width={100}
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
        />
      </div>
      <div className="navItems list-items">
        <ul className="no-list-style flex">
          <li>
            <a className="text-decor-none" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              About Us
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              Our Profile
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              Our Services
            </a>
          </li>
          <li>
            <a className="text-decor-none" href="/">
              Cartss
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <span className="copyright">© 2025 Swiggy Limited</span>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="text" />
      <button type="submit">Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <ResturantContainer />
    </div>
  );
};

const Resturant = (props) => {
  //console.log(props);
  const { resData } = props;
  return (
    <div className="resturantCard">
      <div className="topImage">
        <img
          height={60}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
        />
      </div>
      <div className="bottomContent">
        <h2>Resturnat Name: {resData.info.name}</h2>
        <h3>Location : {resData.info.areaName}</h3>
        <p>Cusines: {resData.info.cuisines.join(", ")}</p>
        <p>Ratings: {resData.info.avgRating}</p>
      </div>
    </div>
  );
};
const ResturantContainer = () => {
  return (
    <div className="resContainer">
      <Resturant resData={resturantList[0]} />
      <Resturant resData={resturantList[1]} />
      <Resturant resData={resturantList[2]} />
      <Resturant resData={resturantList[3]} />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
