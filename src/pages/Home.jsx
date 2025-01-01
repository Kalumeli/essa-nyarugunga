import Banner from "../components/Banner"
import Container from "../components/Container"
import HeroSection from "../components/HeroSection"
import NavigationBar from "../components/NavigationBar"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"
import Testimonial from "../components/Testimonial"
import Footer from "..//components/Footer"
import NavigationCard from "../components/NavigationCard"

// card icons
import Graduate from "/assets/icons/graduate.svg"
import Crown from "/assets/icons/crown.svg"
import Mask from "/assets/icons/mask.svg"
import Flag from "/assets/icons/flag.svg"
import Help from "/assets/icons/help.svg"
import People from "/assets/icons/people-2.svg"
import QuestionAnswer from "../components/QuestionAnswer"

// Caousel library
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function Home() {


  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>
        {/* Hero✅ */}
        <HeroSection />

        {/* Benefits✅ */}
        <section>
          <SectionHeader semiHeading="Children Deserve Bright Future" Heading="Our Benefits">
            With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
          </SectionHeader>

          <div className="grid w-full grid-rows-1 gap-6 p-8 gap-y-[70px] lg:grid-cols-3">
            <Card category="about" icon={Graduate} heading="Holistic Learning Approach" details="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." />
            <Card category="about" icon={Crown} heading="Experienced Educators" details="Our passionate and qualified teachers create a supportive and stimulating learning environment." />
            <Card category="about" icon={Mask} heading="Nurturing Environment" details="We prioritize safety and provide a warm and caring atmosphere for every child." />
            <Card category="about" icon={Flag} heading="Play-Based Learning" details="We believe in the power of play to foster creativity, problem-solving skills, and imagination." />
            <Card category="about" icon={Help} heading="Individualized Attention" details="Our small class sizes enable personalized attention, catering to each child's unique needs." />
            <Card category="about" icon={People} heading="Parent Involvement" details="We foster a strong parent-school partnership to ensure seamless communication and collaboration." />
          </div>

        </section>

        {/* Testimonials⚠️shit was hard As f*ck */}
        <section>
          <SectionHeader semiHeading="Their Happy Words🤗" Heading="Our Testimonials">
            Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
          </SectionHeader>

          <div className="relative h-[600px] lg:h-[400px] overflow-hidden">
            {/* <div className="flex flex-col items-center justify-center w-full space-x-8 lg:flex-row animate-slide"> */}
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={155}
              totalSlides={3}
            >
              <Slider className="relative left-[0px] sm:left-[180px] lg:left-[70px] lg:top-[110px]">
                <Slide index={0}>
                  <Testimonial gender="female" name="IMENA Genie Christa" message="Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." />
                </Slide>

                <Slide index={1}>
                  <Testimonial gender="male" name="Mellow Junior" message="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" />
                </Slide>

                <Slide index={2}>
                  <Testimonial gender="male" name="Mellow Junior" message="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" />
                </Slide>
              </Slider>

              <ButtonBack id="prevBtn"
                className="absolute left-2 top-[250px] h-[58px] p-3.5 bg-white rounded-lg border-2 border-text-20 justify-start items-start gap-2.5 inline-flex overflow-hidden transition-all hover:shadow-[2px_2px_0px_1px_rgba(30,30,30,1.00)]">
                👈
              </ButtonBack>

              <ButtonNext id="nextBtn"
                className="absolute right-2 top-[250px] h-[58px] p-3.5 bg-white rounded-lg border-2 border-text-20 justify-start items-start gap-2.5 inline-flex overflow-hidden transition-all hover:shadow-[-2px_2px_0px_1px_rgba(30,30,30,1.00)]">
                👉
              </ButtonNext>
            </CarouselProvider>


          </div>

        </section>

        {/* FAQ✅ */}
        <section>
          <SectionHeader semiHeading="Solutions For The Doubts" Heading="Frequently Asked Questions">
            Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.
          </SectionHeader>

          <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-[50px] gap-y-[30px]">
            <QuestionAnswer title="What are the school hours at Little Learners Academy?" paragraph="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." />
            <QuestionAnswer title="What are the school hours at Little Learners Academy?" paragraph="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." />
            <QuestionAnswer title="What are the school hours at Little Learners Academy?" paragraph="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." />
            <QuestionAnswer title="What are the school hours at Little Learners Academy?" paragraph="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." />
          </div>

        </section>

        {/* Explore More✅ */}
        <section>
          <SectionHeader semiHeading="Explore More" Heading="Navigate through our Pages">
            Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school
          </SectionHeader>

          <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-[50px] gap-y-[30px]">
            <NavigationCard href="/about" title="About" details="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education." />
            <NavigationCard href="/academics" title="Academics" details="Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development." />
            <NavigationCard href="/students" title="Student Life" details="Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable." />
            <NavigationCard href="/admissions" title="Admissions" details="Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces." />
          </div>

        </section>

        {/* footer✅ */}
        <Footer />

      </Container>

    </>
  )
}

export default Home
