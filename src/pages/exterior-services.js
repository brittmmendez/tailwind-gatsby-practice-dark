import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import { Link } from "gatsby"
import PhotoSlider from "../components/PhotoSlider";
import PropTypes from "prop-types"

function ExteriorServices({data}) {
  let images = data.allCloudinaryMedia.nodes.filter((p) =>p.public_id.includes("exterior"));
  return (
    <Layout>
      <SEO
        title="Exterior Services"
        keywords={[`construction`, 'home remodeling', `roofing`, `exterior`, "commericial services", "industrial services", "reseindential services", "painting"," landscaping",  "window installation", "Vinyl Siding", "Insulation", "Gutter", "Chimney Repair", "Cement", "Snow Removal"]}
      />
      
      <Header title="Exterior Services"/>

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
								Protect from the outside in.
							</h3>
							
							<p className="mb-5">
                Darwins Property Solutions construction and maintenance services will help to keep your home or business in top shape. 
                Whether you need new siding, a fresh coat of paint, replacement windows, insulation, or other exterior upgrades, our we 
                build with high quality products that fit the needs snd budget of any construction project.
              </p>
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
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-12"> 
          Maintaining the exterior of your home or building is one of the most important things an owner can do to also make sure the are protecting the interior as well.  Mainting the exterior can lead to many benefits and not maintiaing the exterior can lead to many headaches.  
          In the long run, it saves you money, keeps your home running efficiently, increases your homes value, and provides peace of mind know you have your exterior under control. 
          </p>

          <div className="about-us flex flex-wrap w-full">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded ">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Repair</h3>
                <p className="text-left"> Taking care of the small problems when you see them makes it so you do not have the problem worsen and develop into a bigger issue over time.
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Replace</h3>
                <p className="text-left">
                  Not sure if you need a replacement or a repair? Call Darwins Property Solutions now for a free and trustworthy quote from one of our experts. 
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service rounded">
                <span className="icon_info">i</span>
                <h3 className="text-center text-3xl mb-6">Maintenance</h3>
                <p className="text-left"> 
                  Performing routine maintenance on your home now helps you avoid costly repairs in the future.
                </p>
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

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Insulation</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> We can install or replace insulation material in attaics.  Updating or installing insulation helps to save energy and in return, save money on your monthly expenses.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Chimney Repair</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> We can clean or sweep chimneys and make repairs including masonry work and relining. </p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Patio and Wood Deck Instalations</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Let us help you transform your backyard into an oasis. We provide services for deck and patio installation, replacement, cleaning, sealing, and repair.</p>
				</div>
      </section>

      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Cement Slabs, Sidewalks, Patios, & Driveways</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> Align forms for sidewalks, and curbs. Cement slabs in custom and general sizes. </p>
				</div>
      </section>


      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Siding</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> We can install and repair your exterior siding to help enhance the look of your house. We also work with a wide range of materials to meet your design needs such as Cedar Shingles, Stucco, Vinyl and more. </p>
				</div>
      </section>
      
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Skylight Installation</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> - - </p>
				</div>
      </section>
      
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Windows & Doors</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5"> We can replace and install windows, exterior doors, storm doors, patio sliding doors and more. </p>
				</div>
      </section>
      
      <section className="py-6">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h3 className="text-3xl mb-6">Painting</h3>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps our-projects">
          <p className="mb-5">We can help with any painting project you might have planned for your commericial or resendentialp property. Adding a fresh coat of paint or stain can improve your business or home&apos;s curb appeal instantly!  Letting us help you with this project means there will be no hassle and no mess for you. We provide services with everything from pressure washing to paint selection.</p>
				</div>
      </section>

      <div className="container max-w-4xl mx-auto text-center pt-12 pb-10">
        <Link to="/services" 
          title="all services link"
          className="primary-btn inline-block px-8 py-4"
					>See All Services
        </Link>
			</div>
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

ExteriorServices.propTypes = {
  data: PropTypes.object,
}

export default ExteriorServices;
