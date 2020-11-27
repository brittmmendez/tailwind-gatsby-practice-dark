import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import helmet from "../images/svg/014-helmet.svg"
import screwdriver from "../images/svg/024-screwdriver.svg"
import shovel from "../images/svg/029-shovel-1.svg"
import paintroller from "../images/svg/018-paint-roller.svg"
import measuringtape from "../images/svg/016-measuring-tape.svg"
import doublewrench from "../images/svg/008-double-wrench.svg"
import wrench from "../images/svg/006-plier.svg"

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Services"
      />
      
      <Header title="Our Services"/>

      {/* <!--Industrial Services--> */}
      <section className="border-b pt-6 pb-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="industrial" className="w-full my-8 text-4xl leading-tight">Industrial Services</h2>
				</div>
        
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service ">
                <span className="icon_info">i</span>
                <div> <img src={screwdriver} alt="screwdriver icon"/></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={shovel} alt="shovel icon" /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={paintroller} alt="paintroller icon"/></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
          </div>
         
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={measuringtape} alt="measuringtape icon"/></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={doublewrench} alt="doublewrench icon"/></div>
                <h3>Quality</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={wrench} doublewrench/></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
          </div>
        </div>  
      </section>
      
      {/* Commercial Services */}
      <section className="border-b py-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="commercial" className="w-full my-8 text-4xl leading-tight">Commercial Services</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
          </div>
         
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
          </div>
        </div>  
      </section>
      
      {/* Ressidential Services */}
      <section className="border-b py-20">
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <h2 id="ressidential" className="w-full my-8 text-4xl leading-tight">Ressidential Services</h2>
				</div>
        <div className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 mx-auto flex flex-wrap items-start md:flex-no-wraps">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
          </div>
         
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/3 px-3">
              <div className="box_service">
                <span className="icon_info">i</span>
                <div> <img src={helmet} /></div>
                <h3>Quality Services</h3>
                <p>Augue honestatis vis no, ius quot mazim forensibus in</p>
              </div>
            </div>
          </div>
        </div>  
      </section>
    </Layout>
  );
}

export default ServicesPage;
