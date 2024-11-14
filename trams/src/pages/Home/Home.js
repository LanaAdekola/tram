import "./home.css"
import logo from '../../assets/TramsLogo.svg';
import Line from '../../assets/home-line.svg';
import Footer from '../../components/Footer'
const Home = () =>
     <div className="App">
  <main className="relative flex min-h-screen flex-col py-4 lg:py-10 px-2 lg:px-8 ">
      {/* Background image positioned absolutely behind content */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30 -z-10"
        style={{ backgroundImage: `url(${Line})` }}
      />               <div className="w-full mb-10 flex justify-between items-center">
                    <div className="">
                         <img src={logo} alt="main" className="h-10 ml-4 lg:ml-10 md:h-14 lg:h-20 w-auto" />
                    </div>
                    <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500 font-bold rounded-lg lg:text-lg text-sm px-5 py-2.5 me-2 mb-2 "><a href="mailto:adekolaadelana@gmail.com">Contact Us</a></button>
               </div>

               <div className="text-center mx-auto px-2 ">
                    <h1 className="lg:text-[70px] md:text-6xl  text-4xl  xl:w-[1200px] font-extrabold lg:leading-tight mb-5  text-shadow-md">
                         AI Agents for Human-Like Customer Support
                    </h1>
                    <h4 className="lg:text-2xl text-sm md:text-base text-black font-bold max-w-2xl mx-auto">
                         Trams delivers expert customer support, using advanced AI technology.
                    </h4>
               </div>
               <div>
               <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500 font-bold rounded-lg lg:text-lg text-sm px-5 py-2.5 me-2 mb-2 "><a href="mailto:adekolaadelana@gmail.com">Contact Us</a></button>
               </div>
               <div className="w-full text-BLACK pt-12 p-4">
                    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
                         <div className="rounded-xl border border-[#F1CB06] bg-transparent p-6 text-center shadow-xl">
                              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                                   **
                              </div>
                              <h1 className="mb-3 text-xl font-medium lg:px-14">Pro Experience</h1>
                              <p className="px-4 ">Trained already as a professional, bringing years of industry knowledge to every interaction.</p>
                         </div>
                         <div data-aos-delay="150" className="rounded-xl border border-[#F1CB06] bg-transparent p-6 text-center shadow-xl">
                              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                                   **
                              </div>
                              <h1 className="mb-3 text-xl font-medium lg:px-14">Adaptive AI</h1>
                              <p className="px-4 ">Learns and personalizes interactions dynamically, continuously evolving to meet individual customer needs and preferences.</p>
                         </div>
                         <div data-aos-delay="300" className="rounded-xl border border-[#F1CB06] bg-transparent p-6 text-center shadow-xl">
                              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                                   **
                              </div>
                              <h1 className="mb-3 text-xl font-medium lg:px-14">Autonomous Service</h1>
                              <p className="px-4 ">Seamlessly plugs into your systems and performs needed tasks autonomously.</p>
                         </div>
                    </div>
               </div>
          </main>
          <Footer />
     </div>

export default Home;