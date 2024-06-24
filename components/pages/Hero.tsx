import Image from 'next/image'
import Button from './../Button'
import LinkButton from "@/components/LinkButton";

const Hero = () => {

  return (
      <>

      <section className="max-container pb-5 px-10 sm:pb-32 py-10">
        <div className="relative hidden- sm:flex flex-1 rounded-3xl items-start">

          <div className="h-[300px] sm:h-[500px] w-full">
            <video
                className="object-cover object-center rounded-3xl w-full h-full"
                src="/videos/queek.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                poster="/images/about.png"
            />
          </div>

        </div>
      </section>

        <section className="max-container padding-container flex justify-center items-center flex-col gap-20 py-10 sm:pb-32 md:gap-28 lg:py-20 xl:flex-row-">
          <div className="relative z-20 text-center justify-center items-center flex flex-1 flex-col xl:w-1/2-">
            <div className="md:px-20">
              <h1 className="bold-26 sm:bold-52">Queek: <br/> Revolutionizing Your Routine, <br/><strong className="text-primary">Simplifying Your Life!</strong></h1>
            </div>
            <p className="regular-16 mt-6 text-gray-30_ xl:max-w-[520px]">
              Queek is on a mission to redefine convenience in Nigeria,
              offering a comprehensive solution to simplify your daily life.
              We are more than just a service provider –
              we are a movement dedicated to revolutionizing the way you live. <br/>
              Our mission is simple: to make everyday tasks effortless and to
              enrich your experiences with unparalleled convenience.
            </p>

            <div>
              <div className="flex mt-5 flex-col w-full gap-3 sm:flex-row">
                <LinkButton
                    href="/download"
                    type="button"
                    title="Download App"
                    variant="btn_green"
                />
                <LinkButton
                    href="/business"
                    type="button"
                    title="Become a vendor"
                    icon="/images/play.svg"
                    variant="btn_white_text"
                />
              </div>
            </div>


          </div>

        </section>


        {/*<section className="max-container padding-container dark:bg-background bg-section-light flex items-center flex-col gap-20 py-10 sm:pb-32 md:gap-28 lg:py-20 xl:flex-row">*/}
        {/*  <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">*/}
        {/*    <h1 className="bold-26 sm:bold-52">Queek: Revolutionizing Your Routine, <strong className="text-primary">Simplifying Your Life!</strong></h1>*/}
        {/*    <p className="regular-16 mt-6 text-gray-30_ xl:max-w-[520px]">*/}
        {/*      Queek is on a mission to redefine convenience in Nigeria,*/}
        {/*      offering a comprehensive solution to simplify your daily life.*/}
        {/*      We are more than just a service provider –*/}
        {/*      we are a movement dedicated to revolutionizing the way you live. <br/>*/}
        {/*      Our mission is simple: to make everyday tasks effortless and to*/}
        {/*      enrich your experiences with unparalleled convenience.*/}
        {/*    </p>*/}

        {/*    <div className="flex mt-5 flex-col w-full gap-3 sm:flex-row">*/}
        {/*      <LinkButton*/}
        {/*          href="/download"*/}
        {/*          type="button"*/}
        {/*          title="Download App"*/}
        {/*          variant="btn_green"*/}
        {/*      />*/}
        {/*      <LinkButton*/}
        {/*          href="/business"*/}
        {/*          type="button"*/}
        {/*          title="Become a vendor"*/}
        {/*          icon="/images/play.svg"*/}
        {/*          variant="btn_white_text"*/}
        {/*      />*/}
        {/*    </div>*/}


        {/*  </div>*/}

        {/*</section>*/}
      </>

  )
}

export default Hero
