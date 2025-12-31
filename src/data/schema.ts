export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Preschool", "EducationalOrganization", "LocalBusiness"],
    "name": "Basil Woods Juniors Chennai",
    "alternateName": "BWJ Chennai",
    "description": "Award-winning preschool and daycare in Chennai offering holistic child development through play-based learning with Tamil cultural values for children aged 18 months to 6 years.",
    "url": "https://www.basilwoodschennai.in",
    "logo": "https://www.basilwoodschennai.in/src/assets/BWJ Logos (1).png",
    "image": "https://www.basilwoodschennai.in/og-image.jpg",
    "telephone": "+91-8056179108",
    "email": "info@basilwoodsjuniors.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chennai",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0827",
        "longitude": "80.2707"
    },
    "areaServed": {
        "@type": "City",
        "name": "Chennai"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/basilwoodsjuniors",
        "https://www.instagram.com/basilwoodsjuniors",
        "https://www.youtube.com/@basilwoodsjuniors"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
    },
    "offers": {
        "@type": "Offer",
        "description": "Preschool and daycare programs for children aged 18 months to 6 years",
        "category": "Early Childhood Education"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Programs",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Playgroup (18 months - 2.5 years)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Nursery (2.5 - 3.5 years)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Junior KG (3.5 - 4.5 years)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Senior KG (4.5 - 6 years)"
                }
            }
        ]
    }
};
