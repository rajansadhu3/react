import React from "react";
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

const resData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        header: {
          title: "What's on your mind?",
          headerStyling: {
            padding: {
              left: 16,
              top: 16,
              bottom: 4,
            },
          },
        },
        layout: {
          rows: 1,
          columns: 10,
          horizontalScrollEnabled: true,
          itemSpacing: 24,
          widgetPadding: {},
          containerStyle: {
            containerPadding: {
              left: 8,
              top: 8,
              right: 12,
              bottom: 4,
            },
          },
          scrollBar: {},
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        imageGridCards: {
          info: [
            {
              id: "750579",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
              action: {
                link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                text: "Pizzas",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for pizza",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750559",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada Pav.png",
              action: {
                link: "https://www.swiggy.com/collections/80417?collection_id=80417&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2",
                text: "Vada Pav",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for vada pav",
                altTextCta: "open",
              },
              entityId: "80417",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750589",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
              action: {
                link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                text: "Burgers",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for burger",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750131",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
              action: {
                link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                text: "Dosa",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for dosa",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750587",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
              action: {
                link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                text: "Chinese",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for chinese",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "745861",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
              action: {
                link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
                text: "Shake",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for shakes",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750591",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
              action: {
                link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                text: "Biryani",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for biryani",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "749868",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
              action: {
                link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                text: "Cakes",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for cake",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750206",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
              action: {
                link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                text: "Pasta",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for pasta",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750637",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
              action: {
                link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                text: "Juice",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for juice",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750222",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
              action: {
                link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                text: "Rolls",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for roll",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750561",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
              action: {
                link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                text: "Vada",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for vada",
                altTextCta: "open",
              },
              entityId: "80425",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750228",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
              action: {
                link: "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                text: "Samosa",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for samosa",
                altTextCta: "open",
              },
              entityId: "80396",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "749790",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png",
              action: {
                link: "https://www.swiggy.com/collections/80469?collection_id=80469&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                text: "Pakoda",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for pakoda",
                altTextCta: "open",
              },
              entityId: "80469",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "749760",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
              action: {
                link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                text: "Khichdi",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for khichdi",
                altTextCta: "open",
              },
              entityId: "80455",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750216",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
              action: {
                link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                text: "Pav Bhaji",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for pav bhaji",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750225",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
              action: {
                link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                text: "Salad",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for salad",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750248",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
              action: {
                link: "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                text: "Shawarma",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for shawarma",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "750643",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
              action: {
                link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                text: "Idli",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurants curated for idly",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
              frequencyCapping: {},
              externalMarketing: {},
            },
            {
              id: "749768",
              imageId:
                "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
              action: {
                link: "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                text: "Momos",
                type: "WEBLINK",
              },
              entityType: "BANNER",
              accessibility: {
                altText: "restaurant curated for momos",
                altTextCta: "open",
              },
              entityId:
                "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
              frequencyCapping: {},
              externalMarketing: {},
            },
          ],
          style: {
            width: {
              type: "TYPE_RELATIVE",
              value: 0.2941,
              reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
            },
            height: {
              type: "TYPE_RELATIVE",
              value: 1.2444,
              reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
            },
          },
        },
        id: "whats_on_your_mind",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
            info: [
              {
                id: "750579",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                action: {
                  link: "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                  text: "Pizzas",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for pizza",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750559",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada Pav.png",
                action: {
                  link: "https://www.swiggy.com/collections/80417?collection_id=80417&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2",
                  text: "Vada Pav",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for vada pav",
                  altTextCta: "open",
                },
                entityId: "80417",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750589",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
                action: {
                  link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                  text: "Burgers",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for burger",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750131",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                action: {
                  link: "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                  text: "Dosa",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for dosa",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750587",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
                action: {
                  link: "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                  text: "Chinese",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for chinese",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "745861",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
                action: {
                  link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
                  text: "Shake",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for shakes",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750591",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                action: {
                  link: "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                  text: "Biryani",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for biryani",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "749868",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
                action: {
                  link: "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
                  text: "Cakes",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for cake",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750206",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
                action: {
                  link: "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
                  text: "Pasta",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for pasta",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750637",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
                action: {
                  link: "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                  text: "Juice",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for juice",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750222",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
                action: {
                  link: "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                  text: "Rolls",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for roll",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750561",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
                action: {
                  link: "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                  text: "Vada",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for vada",
                  altTextCta: "open",
                },
                entityId: "80425",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750228",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
                action: {
                  link: "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                  text: "Samosa",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for samosa",
                  altTextCta: "open",
                },
                entityId: "80396",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "749790",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pakoda.png",
                action: {
                  link: "https://www.swiggy.com/collections/80469?collection_id=80469&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
                  text: "Pakoda",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for pakoda",
                  altTextCta: "open",
                },
                entityId: "80469",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "749760",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                action: {
                  link: "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                  text: "Khichdi",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for khichdi",
                  altTextCta: "open",
                },
                entityId: "80455",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750216",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav Bhaji.png",
                action: {
                  link: "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
                  text: "Pav Bhaji",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for pav bhaji",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750225",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                action: {
                  link: "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                  text: "Salad",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for salad",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750248",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
                action: {
                  link: "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                  text: "Shawarma",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for shawarma",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "750643",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                action: {
                  link: "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                  text: "Idli",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurants curated for idly",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                frequencyCapping: {},
                externalMarketing: {},
              },
              {
                id: "749768",
                imageId:
                  "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
                action: {
                  link: "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
                  text: "Momos",
                  type: "WEBLINK",
                },
                entityType: "BANNER",
                accessibility: {
                  altText: "restaurant curated for momos",
                  altTextCta: "open",
                },
                entityId:
                  "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
                frequencyCapping: {},
                externalMarketing: {},
              },
            ],
            style: {
              width: {
                type: "TYPE_RELATIVE",
                value: 0.2941,
                reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
              },
              height: {
                type: "TYPE_RELATIVE",
                value: 1.2444,
                reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
              },
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        header: {
          title: "Top restaurant chains in Ahmedabad",
          action: {},
          headerStyling: {
            padding: {
              left: 16,
              top: 28,
              bottom: 18,
            },
          },
        },
        layout: {
          rows: 1,
          columns: 20,
          horizontalScrollEnabled: true,
          itemSpacing: 32,
          widgetPadding: {},
          containerStyle: {
            containerPadding: {
              left: 16,
              right: 12,
              bottom: 12,
            },
          },
          scrollBar: {
            scrollThumbColor: "#E46D47",
            scrollTrackColor: "#02060C",
            width: 54,
            height: 4,
            scrollStyling: {
              padding: {
                top: 6,
                bottom: 24,
              },
            },
          },
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "top_brands_for_you",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
            restaurants: [
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
                    deliveryTime: 30,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 04:00:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/kfc-kudasan-gandhinagar-rest765053",
                  type: "WEBLINK",
                },
              },
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
                    deliveryTime: 33,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 03:00:00",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/pizza-hut-gandhinagar-rest240796",
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
                  totalRatingsString: "642",
                  sla: {
                    deliveryTime: 39,
                    lastMileTravel: 4.7,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "4.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 00:00:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/theobroma-pramukh-anand-orbit-mall-rest810920",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "565280",
                  name: "Wendy's Burgers",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/efdc22d9-7749-48cf-b3bd-8e4244a0be9f_565280.JPG",
                  locality: "Near Aashka Multispeciality Hospital",
                  areaName: "Gandhinagar",
                  costForTwo: "₹200 for two",
                  cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
                  avgRating: 4.4,
                  parentId: "972",
                  avgRatingString: "4.4",
                  totalRatingsString: "1.7K+",
                  sla: {
                    deliveryTime: 44,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                    subHeader: "AT ₹59",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/wendys-burgers-near-aashka-multispeciality-hospital-gandhinagar-rest565280",
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
                    deliveryTime: 43,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 03:45:00",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/mcdonalds-gandhinagar-rest168122",
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
                    deliveryTime: 41,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/lunchbox-meals-and-thalis-near-aashka-multispeciality-hospital-gandhinagar-rest62992",
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
                    deliveryTime: 49,
                    lastMileTravel: 4.3,
                    serviceability: "SERVICEABLE",
                    slaString: "45-50 mins",
                    lastMileTravelString: "4.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 05:00:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/olio-the-wood-fired-pizzeria-opp-aksha-hospital-sargasan-reliance-cross-road-rest810337",
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
                    nextCloseTime: "2025-04-15 23:59:00",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/dominos-pizza-gandhinagar-sector-11-rest36981",
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
                  totalRatingsString: "3.9K+",
                  sla: {
                    deliveryTime: 36,
                    lastMileTravel: 5.8,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "5.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/burger-king-satavahana-nagar-gandhinagar-rest806685",
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
                    deliveryTime: 27,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "25-30 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:00:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/gwalia-sweets-and-fast-food-super-mall-2-infocity-rest45169",
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
                    deliveryTime: 33,
                    lastMileTravel: 2,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "2.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:58:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/subway-gandhinagar-sector-11-rest53986",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "773478",
                  name: "Taco Bell",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/b90a6f09-d4d5-458a-bda3-c9244b1cbc1b_773478.JPG",
                  locality: "Pramukh Orbit",
                  areaName: "Gandhinagar",
                  costForTwo: "₹300 for two",
                  cuisines: ["Mexican", "Fast Food", "Snacks"],
                  avgRating: 4.5,
                  parentId: "1557",
                  avgRatingString: "4.5",
                  totalRatingsString: "1.5K+",
                  sla: {
                    deliveryTime: 29,
                    lastMileTravel: 4.7,
                    serviceability: "SERVICEABLE",
                    slaString: "25-30 mins",
                    lastMileTravelString: "4.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 01:00:00",
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
                      rating: "--",
                    },
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/taco-bell-pramukh-orbit-gandhinagar-rest773478",
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
                    deliveryTime: 25,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "25-30 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 00:00:00",
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
                    subHeader: "AT ₹149",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/nic-ice-creams-kudasan-pramukh-cyprus-rest452610",
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
                    deliveryTime: 29,
                    lastMileTravel: 2.1,
                    serviceability: "SERVICEABLE",
                    slaString: "25-30 mins",
                    lastMileTravelString: "2.1 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:00:00",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/la-milano-pizzeria-skyline-building-sector-11-gandhinagar-rest435646",
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
                  cuisines: [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Fast Food",
                    "Cafe",
                  ],
                  avgRating: 4.3,
                  veg: true,
                  parentId: "1002",
                  avgRatingString: "4.3",
                  totalRatingsString: "2.8K+",
                  sla: {
                    deliveryTime: 31,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:45:00",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/the-chocolate-room-gandhinagar-rest46089",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "44497",
                  name: "The Belgian Waffle Co.",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/4/c2edaf81-aef3-446f-8932-f5a836e0c09e_44497.jpg",
                  locality: "Gandhinagar",
                  areaName: "Infocity",
                  costForTwo: "₹200 for two",
                  cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
                  avgRating: 4.6,
                  parentId: "2233",
                  avgRatingString: "4.6",
                  totalRatingsString: "6.2K+",
                  sla: {
                    deliveryTime: 36,
                    lastMileTravel: 3.6,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "3.6 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 02:00:00",
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
                    header: "₹200 OFF",
                    subHeader: "ABOVE ₹899",
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
                      rating: "4.2",
                      ratingCount: "868",
                    },
                    source: "GOOGLE",
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/the-belgian-waffle-co-gandhinagar-infocity-rest44497",
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
                  totalRatingsString: "380",
                  sla: {
                    deliveryTime: 32,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 00:00:00",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/grameen-kulfi-kudasan-gandhinagar-rest452611",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "808089",
                  name: "Starbucks Coffee",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/f6f8483f-60c8-4125-b43c-5300d60c96fb_808089.JPG",
                  locality: "Gandhi Nagar",
                  areaName: "Kudason",
                  costForTwo: "₹400 for two",
                  cuisines: [
                    "Beverages",
                    "Cafe",
                    "Snacks",
                    "Desserts",
                    "Bakery",
                    "Ice Cream",
                  ],
                  avgRating: 4.3,
                  parentId: "195515",
                  avgRatingString: "4.3",
                  totalRatingsString: "316",
                  sla: {
                    deliveryTime: 35,
                    lastMileTravel: 4.7,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
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
                              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
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
                    subHeader: "AT ₹197",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/starbucks-coffee-gandhi-nagar-kudason-rest808089",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "45529",
                  name: "Oven Story Pizza - Standout Toppings",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/20/ba7b4a8c-5faa-40d3-8070-5a5928f68f04_45529.jpg",
                  locality: "Near Aashka Multispeciality Hospital",
                  areaName: "Gandhinagar",
                  costForTwo: "₹200 for two",
                  cuisines: [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages",
                  ],
                  avgRating: 4.6,
                  parentId: "3534",
                  avgRatingString: "4.6",
                  totalRatingsString: "6.5K+",
                  sla: {
                    deliveryTime: 22,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "20-25 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                    subHeader: "AT ₹49",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/oven-story-pizza-standout-toppings-near-aashka-multispeciality-hospital-gandhinagar-rest45529",
                  type: "WEBLINK",
                },
              },
              {
                info: {
                  id: "701501",
                  name: "Baked By Nini's",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/f0d52991-3881-42d5-9218-d634eb7cd188_701501.jpg",
                  locality: "Kudasan",
                  areaName: "Gandhinagar",
                  costForTwo: "₹400 for two",
                  cuisines: ["Bakery", "Dessert", "Cakes & Pastries", "Snacks"],
                  avgRating: 4.7,
                  veg: true,
                  parentId: "22498",
                  avgRatingString: "4.7",
                  totalRatingsString: "427",
                  sla: {
                    deliveryTime: 35,
                    lastMileTravel: 4.7,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "4.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:00:00",
                    opened: true,
                  },
                  badges: {
                    imageBadges: [
                      {
                        imageId: "Rxawards/_CATEGORY-Desserts.png",
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
                              imageId: "Rxawards/_CATEGORY-Desserts.png",
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
                    header: "ITEMS",
                    subHeader: "AT ₹48",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/baked-by-ninis-kudasan-gandhinagar-rest701501",
                  type: "WEBLINK",
                },
              },
            ],
            theme: "Restaurant_Group_WebView_SEO_PB_Theme",
            widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
            style: {
              width: {
                type: "TYPE_RELATIVE",
                value: 0.41111112,
                reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
              },
              height: {
                type: "TYPE_RELATIVE",
                value: 0.7027027,
                reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
              },
              layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
            },
            collectionId: "84124",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
        title: "Restaurants with online food delivery in Ahmedabad",
        id: "popular_restaurants_title",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 588,
        facetList: [
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Fast Delivery",
                id: "deliveryTimefacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
          },
          {
            label: "Cuisines",
            id: "catalog_cuisines",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "1048 HR to 2130",
                id: "query_1048_hr_to_2130",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Afghani",
                id: "query_afghani",
                analytics: {},
                openFilter: true,
              },
              {
                label: "American",
                id: "query_american",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Arabian",
                id: "query_arabian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Asian",
                id: "query_asian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Bakery",
                id: "query_bakery",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Barbecue",
                id: "query_barbecue",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Bengali",
                id: "query_bengali",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Beverages",
                id: "query_beverages",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Bihari",
                id: "query_bihari",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Biryani",
                id: "query_biryani",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Burger",
                id: "query_burger",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Burgers",
                id: "query_burgers",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Burmese",
                id: "query_burmese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Cafe",
                id: "query_cafe",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Cakes",
                id: "query_cakes",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Cakes & Pastries",
                id: "query_cakes_&_pastries",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Chaat",
                id: "query_chaat",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Chinese",
                id: "query_chinese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Coffee",
                id: "query_coffee",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Combo",
                id: "query_combo",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Combos",
                id: "query_combos",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Continental",
                id: "query_continental",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Dessert",
                id: "query_dessert",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Desserts",
                id: "query_desserts",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Fast Food",
                id: "query_fast_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "French",
                id: "query_french",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Grill",
                id: "query_grill",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Gujarati",
                id: "query_gujarati",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Healthy Food",
                id: "query_healthy_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Healthy food",
                id: "query_healthy_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Home Food",
                id: "query_home_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Hyderabadi",
                id: "query_hyderabadi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ice Cream",
                id: "query_ice_cream",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ice Cream Cakes",
                id: "query_ice_cream_cakes",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Indian",
                id: "query_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Indonesian",
                id: "query_indonesian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Italian",
                id: "query_italian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Italian-American",
                id: "query_italian-american",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Jain",
                id: "query_jain",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Juices",
                id: "query_juices",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Kebabs",
                id: "query_kebabs",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Korean",
                id: "query_korean",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Lebanese",
                id: "query_lebanese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Lucknowi",
                id: "query_lucknowi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Maharashtrian",
                id: "query_maharashtrian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Mexican",
                id: "query_mexican",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Middle Eastern",
                id: "query_middle_eastern",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Momos",
                id: "query_momos",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Mughlai",
                id: "query_mughlai",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Navratri Special",
                id: "query_navratri_special",
                analytics: {},
                openFilter: true,
              },
              {
                label: "North Eastern",
                id: "query_north_eastern",
                analytics: {},
                openFilter: true,
              },
              {
                label: "North Indian",
                id: "query_north_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pan-Asian",
                id: "query_pan-asian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pasta",
                id: "query_pasta",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pastas",
                id: "query_pastas",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pizza",
                id: "query_pizza",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Pizzas",
                id: "query_pizzas",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Punjabi",
                id: "query_punjabi",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rajasthani",
                id: "query_rajasthani",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Rolls & Wraps",
                id: "query_rolls_&_wraps",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Salad",
                id: "query_salad",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Salads",
                id: "query_salads",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Seafood",
                id: "query_seafood",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Snacks",
                id: "query_snacks",
                analytics: {},
                openFilter: true,
              },
              {
                label: "South Indian",
                id: "query_south_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Street Food",
                id: "query_street_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Street food",
                id: "query_street_food",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Sweets",
                id: "query_sweets",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Tandoor",
                id: "query_tandoor",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Tea",
                id: "query_tea",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Thai",
                id: "query_thai",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Thalis",
                id: "query_thalis",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Waffle",
                id: "query_waffle",
                analytics: {},
                openFilter: true,
              },
              {
                label: "cafe",
                id: "query_cafe",
                analytics: {},
                openFilter: true,
              },
              {
                label: "chinese",
                id: "query_chinese",
                analytics: {},
                openFilter: true,
              },
              {
                label: "dessert",
                id: "query_dessert",
                analytics: {},
                openFilter: true,
              },
              {
                label: "fastfood",
                id: "query_fastfood",
                analytics: {},
                openFilter: true,
              },
              {
                label: "indian",
                id: "query_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "north indian",
                id: "query_north_indian",
                analytics: {},
                openFilter: true,
              },
              {
                label: "paratha",
                id: "query_paratha",
                analytics: {},
                openFilter: true,
              },
              {
                label: "pav bhaji",
                id: "query_pav_bhaji",
                analytics: {},
                openFilter: true,
              },
              {
                label: "pizza",
                id: "query_pizza",
                analytics: {},
                openFilter: true,
              },
              {
                label: "rolls",
                id: "query_rolls",
                analytics: {},
                openFilter: true,
              },
              {
                label: "rolls & wraps",
                id: "query_rolls_&_wraps",
                analytics: {},
                openFilter: true,
              },
              {
                label: "sandwich",
                id: "query_sandwich",
                analytics: {},
                openFilter: true,
              },
              {
                label: "shawarma",
                id: "query_shawarma",
                analytics: {},
                openFilter: true,
              },
              {
                label: "snacks",
                id: "query_snacks",
                analytics: {},
                openFilter: true,
              },
              {
                label: "wrap",
                id: "query_wrap",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            canSearch: true,
            subLabel: "Filterbycuisine",
            openFilter: true,
          },
          {
            label: "Explore",
            id: "explore",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "New on Swiggy",
                id: "newfacetquery1",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
          },
          {
            label: "Ratings",
            id: "rating",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Ratings 4.5+",
                id: "ratingfacetquery3",
                analytics: {},
              },
              {
                label: "Ratings 4.0+",
                id: "ratingfacetquery4",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Ratings 3.5+",
                id: "ratingfacetquery5",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
          },
          {
            label: "Veg/Non-Veg",
            id: "isVeg",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Pure Veg",
                id: "isVegfacetquery2",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Non Veg",
                id: "isVegfacetquery3",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filterby",
          },
          {
            label: "Offers",
            id: "restaurantOfferMultiTd",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Offers",
                id: "restaurantOfferMultiTdfacetquery3",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Restaurantswith",
          },
          {
            label: "Cost for two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Rs. 300-Rs. 600",
                id: "costForTwofacetquery3",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery4",
                analytics: {},
              },
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery5",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filterby",
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          columns: 4,
        },
        id: "restaurant_grid_listing_v2",
        gridElements: {
          infoWithStyle: {
            "@type":
              "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
            restaurants: [
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
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
                    deliveryTime: 33,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 03:00:00",
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
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/pizza-hut-gandhinagar-rest240796",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
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
                    deliveryTime: 30,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "30-35 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 04:00:00",
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
                    subHeader: "UPTO ₹80",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/kfc-kudasan-gandhinagar-rest765053",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
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
                  totalRatingsString: "642",
                  sla: {
                    deliveryTime: 39,
                    lastMileTravel: 4.7,
                    serviceability: "SERVICEABLE",
                    slaString: "35-40 mins",
                    lastMileTravelString: "4.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 00:00:00",
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
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/theobroma-pramukh-anand-orbit-mall-rest810920",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                  id: "565280",
                  name: "Wendy's Burgers",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/efdc22d9-7749-48cf-b3bd-8e4244a0be9f_565280.JPG",
                  locality: "Near Aashka Multispeciality Hospital",
                  areaName: "Gandhinagar",
                  costForTwo: "₹200 for two",
                  cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
                  avgRating: 4.4,
                  parentId: "972",
                  avgRatingString: "4.4",
                  totalRatingsString: "1.7K+",
                  sla: {
                    deliveryTime: 44,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                    subHeader: "AT ₹59",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/wendys-burgers-near-aashka-multispeciality-hospital-gandhinagar-rest565280",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                  id: "880216",
                  name: "Mad Over Donuts",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/6e58a85c-ccef-406e-861f-75d843687d17_880216.jpg",
                  locality: "K B Royal Phoenix",
                  areaName: "Chandkheda",
                  costForTwo: "₹200 for two",
                  cuisines: ["Desserts", "Sweets", "Bakery"],
                  avgRating: 4.6,
                  veg: true,
                  parentId: "611",
                  avgRatingString: "4.6",
                  totalRatingsString: "81",
                  sla: {
                    deliveryTime: 54,
                    lastMileTravel: 14.9,
                    serviceability: "SERVICEABLE",
                    slaString: "50-55 mins",
                    lastMileTravelString: "14.9 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                    header: "₹200 OFF",
                    subHeader: "ABOVE ₹749",
                    discountTag: "FLAT DEAL",
                  },
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/mad-over-donuts-k-b-royal-phoenix-chandkheda-rest880216",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
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
                    deliveryTime: 43,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 03:45:00",
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
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                    sourceIconImageId:
                      "v1704440323/google_ratings/rating_google_tag",
                  },
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/mcdonalds-gandhinagar-rest168122",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                info: {
                  id: "948162",
                  name: "Wow! Momo",
                  cloudinaryImageId:
                    "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/19/b1348471-f0ef-45d3-a892-ff29de8f6cf7_948162.JPG",
                  locality: "Sargasan",
                  areaName: "Swagat Holiday Mall",
                  costForTwo: "₹300 for two",
                  cuisines: [
                    "Momos",
                    "Chinese",
                    "fastfood",
                    "Asian",
                    "Beverages",
                  ],
                  avgRating: 4.3,
                  parentId: "1776",
                  avgRatingString: "4.3",
                  totalRatingsString: "235",
                  sla: {
                    deliveryTime: 54,
                    lastMileTravel: 4.8,
                    serviceability: "SERVICEABLE",
                    slaString: "50-55 mins",
                    lastMileTravelString: "4.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-16 02:00:00",
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
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/wow-momo-sargasan-swagat-holiday-mall-rest948162",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
              {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
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
                    deliveryTime: 41,
                    lastMileTravel: 5,
                    serviceability: "SERVICEABLE",
                    slaString: "40-45 mins",
                    lastMileTravelString: "5.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                  },
                  availability: {
                    nextCloseTime: "2025-04-15 23:59:00",
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
                  orderabilityCommunication: {
                    title: {},
                    subTitle: {},
                    message: {},
                    customIcon: {},
                  },
                  differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                      mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
                  ratingsDisplayPreference:
                    "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                },
                analytics: {
                  context: "seo-data-ae87c972-38a5-46ed-a871-8f3af7d409be",
                },
                cta: {
                  link: "https://www.swiggy.com/city/ahmedabad/lunchbox-meals-and-thalis-near-aashka-multispeciality-hospital-gandhinagar-rest62992",
                  text: "RESTAURANT_MENU",
                  type: "WEBLINK",
                },
                widgetId:
                  "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
              },
            ],
            theme: "SeoRestaurantListingGridWidget",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
        message: "Show More",
        id: "show_more_button",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
        title: "Best Places to Eat Across Cities",
        brands: [
          {
            text: "Best Restaurants in Bangalore",
            link: "https://www.swiggy.com/city/bangalore/best-restaurants",
          },
          {
            text: "Best Restaurants in Pune",
            link: "https://www.swiggy.com/city/pune/best-restaurants",
          },
          {
            text: "Best Restaurants in Mumbai",
            link: "https://www.swiggy.com/city/mumbai/best-restaurants",
          },
          {
            text: "Best Restaurants in Delhi",
            link: "https://www.swiggy.com/city/delhi/best-restaurants",
          },
          {
            text: "Best Restaurants in Hyderabad",
            link: "https://www.swiggy.com/city/hyderabad/best-restaurants",
          },
          {
            text: "Best Restaurants in Kolkata",
            link: "https://www.swiggy.com/city/kolkata/best-restaurants",
          },
          {
            text: "Best Restaurants in Chennai",
            link: "https://www.swiggy.com/city/chennai/best-restaurants",
          },
          {
            text: "Best Restaurants in Chandigarh",
            link: "https://www.swiggy.com/city/chandigarh/best-restaurants",
          },
          {
            text: "Best Restaurants in Ahmedabad",
            link: "https://www.swiggy.com/city/ahmedabad/best-restaurants",
          },
          {
            text: "Best Restaurants in Jaipur",
            link: "https://www.swiggy.com/city/jaipur/best-restaurants",
          },
          {
            text: "Best Restaurants in Nagpur",
            link: "https://www.swiggy.com/city/nagpur/best-restaurants",
          },
          {
            text: "Best Restaurants in Bhubaneswar",
            link: "https://www.swiggy.com/city/bhubaneswar/best-restaurants",
          },
          {
            text: "Best Restaurants in Kochi",
            link: "https://www.swiggy.com/city/kochi/best-restaurants",
          },
          {
            text: "Best Restaurants in Surat",
            link: "https://www.swiggy.com/city/surat/best-restaurants",
          },
          {
            text: "Best Restaurants in Dehradun",
            link: "https://www.swiggy.com/city/dehradun/best-restaurants",
          },
          {
            text: "Best Restaurants in Ludhiana",
            link: "https://www.swiggy.com/city/ludhiana/best-restaurants",
          },
          {
            text: "Best Restaurants in Patna",
            link: "https://www.swiggy.com/city/patna/best-restaurants",
          },
          {
            text: "Best Restaurants in Mangaluru",
            link: "https://www.swiggy.com/city/mangaluru/best-restaurants",
          },
          {
            text: "Best Restaurants in Bhopal",
            link: "https://www.swiggy.com/city/bhopal/best-restaurants",
          },
          {
            text: "Best Restaurants in Gurgaon",
            link: "https://www.swiggy.com/city/gurgaon/best-restaurants",
          },
          {
            text: "Best Restaurants in Coimbatore",
            link: "https://www.swiggy.com/city/coimbatore/best-restaurants",
          },
          {
            text: "Best Restaurants in Agra",
            link: "https://www.swiggy.com/city/agra/best-restaurants",
          },
          {
            text: "Best Restaurants in Noida",
            link: "https://www.swiggy.com/city/noida/best-restaurants",
          },
          {
            text: "Best Restaurants in Vijayawada",
            link: "https://www.swiggy.com/city/vijayawada/best-restaurants",
          },
          {
            text: "Best Restaurants in Guwahati",
            link: "https://www.swiggy.com/city/guwahati/best-restaurants",
          },
          {
            text: "Best Restaurants in Mysore",
            link: "https://www.swiggy.com/city/mysore/best-restaurants",
          },
          {
            text: "Best Restaurants in Pondicherry",
            link: "https://www.swiggy.com/city/pondicherry/best-restaurants",
          },
          {
            text: "Best Restaurants in Thiruvananthapuram",
            link: "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants",
          },
          {
            text: "Best Restaurants in Ranchi",
            link: "https://www.swiggy.com/city/ranchi/best-restaurants",
          },
          {
            text: "Best Restaurants in Vizag",
            link: "https://www.swiggy.com/city/vizag/best-restaurants",
          },
          {
            text: "Best Restaurants in Udaipur",
            link: "https://www.swiggy.com/city/udaipur/best-restaurants",
          },
          {
            text: "Best Restaurants in Vadodara",
            link: "https://www.swiggy.com/city/vadodara/best-restaurants",
          },
        ],
        id: "restaurant_near_me_links",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
        title: "Best Cuisines Near Me",
        brands: [
          {
            text: "Chinese Restaurant Near Me",
            link: "https://www.swiggy.com/chinese-restaurants-near-me",
          },
          {
            text: "South Indian Restaurant Near Me",
            link: "https://www.swiggy.com/south-indian-restaurants-near-me",
          },
          {
            text: "Indian Restaurant Near Me",
            link: "https://www.swiggy.com/indian-restaurants-near-me",
          },
          {
            text: "Kerala Restaurant Near Me",
            link: "https://www.swiggy.com/kerala-restaurants-near-me",
          },
          {
            text: "Korean Restaurant Near Me",
            link: "https://www.swiggy.com/korean-restaurants-near-me",
          },
          {
            text: "North Indian Restaurant Near Me",
            link: "https://www.swiggy.com/north-indian-restaurants-near-me",
          },
          {
            text: "Seafood Restaurant Near Me",
            link: "https://www.swiggy.com/seafood-restaurants-near-me",
          },
          {
            text: "Bengali Restaurant Near Me",
            link: "https://www.swiggy.com/bengali-restaurants-near-me",
          },
          {
            text: "Punjabi Restaurant Near Me",
            link: "https://www.swiggy.com/punjabi-restaurants-near-me",
          },
          {
            text: "Italian Restaurant Near Me",
            link: "https://www.swiggy.com/italian-restaurants-near-me",
          },
          {
            text: "Andhra Restaurant Near Me",
            link: "https://www.swiggy.com/andhra-restaurants-near-me",
          },
          {
            text: "Biryani Restaurant Near Me",
            link: "https://www.swiggy.com/biryani-restaurants-near-me",
          },
          {
            text: "Japanese Restaurant Near Me",
            link: "https://www.swiggy.com/japanese-restaurants-near-me",
          },
          {
            text: "Arabian Restaurant Near Me",
            link: "https://www.swiggy.com/arabian-restaurants-near-me",
          },
          {
            text: "Fast Food Restaurant Near Me",
            link: "https://www.swiggy.com/fast-food-restaurants-near-me",
          },
          {
            text: "Jain Restaurant Near Me",
            link: "https://www.swiggy.com/jain-restaurants-near-me",
          },
          {
            text: "Gujarati Restaurant Near Me",
            link: "https://www.swiggy.com/gujarati-restaurants-near-me",
          },
          {
            text: "Thai Restaurant Near Me",
            link: "https://www.swiggy.com/thai-restaurants-near-me",
          },
          {
            text: "Pizzas Restaurant Near Me",
            link: "https://www.swiggy.com/pizzas-restaurants-near-me",
          },
          {
            text: "Asian Restaurant Near Me",
            link: "https://www.swiggy.com/asian-restaurants-near-me",
          },
          {
            text: "Cafe Restaurant Near Me",
            link: "https://www.swiggy.com/cafe-restaurants-near-me",
          },
          {
            text: "Continental Restaurant Near Me",
            link: "https://www.swiggy.com/continental-restaurants-near-me",
          },
          {
            text: "Mexican Restaurant Near Me",
            link: "https://www.swiggy.com/mexican-restaurants-near-me",
          },
          {
            text: "Mughlai Restaurant Near Me",
            link: "https://www.swiggy.com/mughlai-restaurants-near-me",
          },
          {
            text: "Sushi Restaurant Near Me",
            link: "https://www.swiggy.com/sushi-restaurants-near-me",
          },
          {
            text: "Mangalorean Restaurant Near Me",
            link: "https://www.swiggy.com/mangalorean-restaurants-near-me",
          },
          {
            text: "Tibetan Restaurant Near Me",
            link: "https://www.swiggy.com/tibetan-restaurants-near-me",
          },
          {
            text: "Barbecue Restaurant Near Me",
            link: "https://www.swiggy.com/barbecue-restaurants-near-me",
          },
          {
            text: "Maharashtrian Restaurant Near Me",
            link: "https://www.swiggy.com/maharashtrian-restaurants-near-me",
          },
          {
            text: "Nepalese Restaurant Near Me",
            link: "https://www.swiggy.com/nepalese-restaurants-near-me",
          },
          {
            text: "Rajasthani Restaurant Near Me",
            link: "https://www.swiggy.com/rajasthani-restaurants-near-me",
          },
          {
            text: "Turkish Restaurant Near Me",
            link: "https://www.swiggy.com/turkish-restaurants-near-me",
          },
        ],
        id: "restaurant_near_me_links",
      },
    },
  },
];

const resData1 = [
  {
    name: "KFC",
    location: "Gandhinagar",
    cusines: ["pizza", "Bread"],
    Ratings: 4.1,
  },
  {
    name: "Dominoz",
    location: "ahmendabad",
    cusines: "Garlic Bread",
    Ratings: 5,
  },
  {
    name: "Tandoor se",
    location: "vadodara",
    cusines: ["roti", "sabji"],
    Ratings: 4.1,
  },
  {
    name: "paniHub",
    location: "surat",
    cusines: "pani puri",
    Ratings: 4.7,
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
  const { name, location, cusines, ratings } = props;
  return (
    <div className="resturantCard">
      <div className="topImage">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/7cbf96b9-d578-44e8-a3c5-cd8ce2facc22_220652.jpg" />
      </div>
      <div className="bottomContent">
        <h2>Resturnat Name: {name}</h2>
        <h3>Location : {location}</h3>
        <p>{cusines}</p>
        <p>Ratings: {ratings}</p>
      </div>
    </div>
  );
};
const ResturantContainer = () => {
  return (
    <div className="resContainer">
      <Resturant
        name="KFC"
        location="Gandhinagar"
        cusines="Pizza, Birayani, food"
        ratings="4.1"
      />
      <Resturant
        name="dominoz"
        location="ahmendabad"
        cusines="Garlic bread"
        ratings="5"
      />
      <Resturant
        name="tandoor se"
        location="vadodara"
        cusines="roti , sabji"
        ratings="4.8"
      />
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
