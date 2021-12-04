import * as React from 'react';
import { graphql } from 'gatsby';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layout';

export const query = graphql`
    query GetPage ($slug: String!) {
        sanityPage(slug: {current: {eq: $slug}}) {
            id
            slug {
                current
            }
            label
            hero_banner {
                asset {
                    url
                }
            }
            hero_content
            hero_title
            hero_sub_title
            _rawIntro
            intro {
                children {
                    text
                    marks
                    _key
                    _type
                }
                _key
                _rawChildren
                _type
                list
                style
            }
            interlude_text
            interlude_image {
              asset {
                url
              }
            }
            category {
                companyInfo {
                    logo {
                        asset {
                            url
                        }
                    }
                    icon {
                        asset {
                            url
                        }
                    }
                    company
                    phone
                    email
                    address
                    tagline
                }
                label
                calloutBadge {
                    asset {
                        url
                    }
                }
                calloutMessage
                chatConversionLabel
                conversionId
                formConversionLabel
                layout
                phoneConversionLabel
                primaryColor {
                    hex
                }
                secondaryColor {
                    hex
                }
                colorOverrides {
                    primaryBtnColor {
                        hex
                    }
                    secondaryBtnColor {
                        hex
                    }
                    formBgColor {
                        hex
                    }
                    calloutBarBgColor {
                        hex
                    }
                    reviewBgColor {
                        hex
                    }
                    reviewBubbleColor {
                        hex
                    }
                    specialsBgColor {
                        hex
                    }
                    lineColor {
                        hex
                    }
                    headingTextColor {
                        hex
                    }
                }
                services {
                    icon {
                      asset {
                        url
                      }
                    }
                    label
                }
                testimonials {
                    author
                    excerpt
                }
                testimonialBackground {
                    asset {
                        url
                    }
                }
                serviceArea {
                    locations {
                        location {
                            city
                            county
                            state
                        }
                    }
                }
                serviceAreaBackground {
                    asset {
                        url
                    }
                }
                specials {
                    title
                    disclaimer
                    details
                }
                badges {
                    image {
                        asset {
                            url
                        }
                    }
                }
                gtm
                conversionId
                phoneConversionLabel
                formConversionLabel
                chatConversionLabel
            }
            company_overrides {
                company
                phone
                email
                address
                tagline
                logo {
                    asset {
                        url
                    }
                }
                icon {
                    asset {
                        url
                    }
                }
            }
            testimonials_override {
                author
                excerpt
            }
            specials_override {
                title
                disclaimer
                details
            }
            service_area_override {
                locations {
                    location {
                        city
                        county
                        state
                    }
                }
            }
        }
    }
`

// markup
export default function LandingPageTemplate({data}){
  //console.log('----------->', data, '<-----------');
  return (
    <Layout sanityData={data.sanityPage}>
        cheese
    </Layout>
  )
}
