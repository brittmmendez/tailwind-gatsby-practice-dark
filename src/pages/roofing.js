import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import PhotoSlider from "../components/PhotoSlider";
import PropTypes from "prop-types"
import { Link } from "gatsby"
import remondeling from "../images/remondeling.png"

function RoofingPage({data}) {
  let images = data.allCloudinaryMedia.nodes.filter((p) =>p.public_id.includes("roofing"));

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Services"
      />
      
      <Header title="Roofing Services"/>

      {/* <!--Intro Section--> */}
			<section className="py-6">
        <div className=" text-center px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<h2 className="w-full my-8 text-l md:text-4xl leading-tight">
            Residential <span>&#183;</span> 
            {" "} Commericial <span>&#183;</span> 
            {" "} Industrial 
          </h2>
				</div>
				
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
					<div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
						<div>
						<h3 className="text-center md:text-left text-3xl mb-8 leading-tight">
								Over a Decade of Experience
							</h3>
							
							<p className="mb-5">Whether you need roof replacement or an expert opinion on repairs and materials, our team is ready to help. The professionals at Darwins Property Solutions are backed by more than a decade of experience to provide expert roofing services for residential, commericial, and industrial properties in the Ohio, Kentucky, and Indianna area. If you think your roof is leaky, damaged, or worn out, we are ready to help.</p>
 
							
						</div>
					</div>
          <div className="services my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-2">
            <PhotoSlider data={images}/>
					</div>
				</div>
			</section>
			{/* <!--End Intro Section--> */}

      <section className="pt-6 pb-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Roofing Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-12"> 
          If you need a new roof, have damage that needs to be repaired, or would like an inspection, our roofing experts are here to help. We can identify any signs of problems, recommend the best materials, and provide a variety of services to keep your roof functioning the way it should.
          </p>

          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Repair</h3>
                <p className="text-left"> Our goal is to provide the best roof repair services we can. If you notice a leaking roof, don’t wait to take action.</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Replace</h3>
                <p className="text-left"> Not sure if you need a replacement or a repair? Call Darwins Property Solutions now for a free and trustworthy quote from one of our experts.</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Maintenance</h3>
                <p className="text-left"> Performing maintenance on your roof routinely will help you avoid costly repairs in the future. Let us help yiou prolong the life of your roof with an inspection today.</p>
              </div>
            </div>
          </div>
        </div>  

        <div className="text-center mt-6">
          <Link to="/contact" title="contact page link" className="nav py-2 inline-block md:text-white md:px-2 font-semibold">
            <button className="primary-btn inline-block mt-8 px-8 py-4"> Schedule a Consultation</button>
          </Link>
        </div>
      </section>

      <section className="pt-6 pb-20">
        <h3 className="text-center text-3xl pb-12">Residential Roofing</h3>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-6">
            <p className="mb-5">
              Whether you are looking to do a minor repair or major interior renovation, Darwins Property Solutions offers a comprehensive list of services that will meet your needs, budget, and timeline.  
              We offer floor-to-cieling remodeling services in Ohio, Kentucky, and Indiana areas.  
            </p>
          </div>
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-6">
            <img src={remondeling} className="vehicle-img w-full rounded shadow-md" alt="Vehicle with logo"/>
          </div>
        </div>
      </section>
      
      <section className="pt-6 pb-20">
        <h3 className="text-center text-3xl  pb-12">Commericial Roofing</h3>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-6">
            <p className="mb-5">
              Whether you are looking to do a minor repair or major interior renovation, Darwins Property Solutions offers a comprehensive list of services that will meet your needs, budget, and timeline.  
              We offer floor-to-cieling remodeling services in Ohio, Kentucky, and Indiana areas.  
            </p>
          </div>
          <div className="my-4 w-full md:w-1/2 flex flex-col items-center justify-center px-6">
            <img src={remondeling} className="vehicle-img w-full rounded shadow-md" alt="Vehicle with logo"/>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
 query {
	allCloudinaryMedia{
    nodes {
      secure_url
      public_id
    }
  }
}
`

RoofingPage.propTypes = {
  data: PropTypes.object,
}

export default RoofingPage;
