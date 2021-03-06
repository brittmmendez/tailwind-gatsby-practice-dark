import React from "react";
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class PhotoGalleryPage extends React.Component {
	render() {
		const photos = this.props.data.allCloudinaryMedia.edges
	  const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img
              src={photos[i].node.secure_url}
              className="sm-img-cover"
              alt={photos[i].node.secure_url}
              width="120"
              height="120" />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb product-thumbs',
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
	  };

	  return (
      <Layout>
        <SEO
          keywords={['Photos', `construction`, 'home remodeling', `roofing`, `interior`, `exterior`, "commericial services", "industrial services", "reseindential services", "painting"," landscaping", "flooring", "window installation"]}
          title="Photo Gallery"
        />

        <Header title="Photo Gallery"/>
        
        <div className="container product-image-array m-auto">
          <Slider {...settings}>
            {photos.map(image => (
              <div key={image.node.secure_url}>
                <figure className="image centered product-feature-image">
                  <img
                    src={image.node.secure_url}
                    className="cover"
                    alt={image.node.secure_url}
                    height="559"
                    width="566"
                  />
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </Layout>
	  );
  }
}

export const query = graphql`
 query {
	allCloudinaryMedia {
    totalCount
    edges {
      node {
        secure_url
		public_id
      }
    }
  }
}
`

PhotoGalleryPage.propTypes = {
  data: PropTypes.object,
}