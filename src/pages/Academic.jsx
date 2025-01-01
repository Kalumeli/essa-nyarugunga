// guess what? I'm fucking away from finishing this shit

import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"
import AcademicCard from "../components/AcademicCard"

// icons
import Book from "/assets/icons/book.svg";
import Graph from "/assets/icons/chart.svg";
import Puzzle from "/assets/icons/puzzle.svg";
import Paint from "/assets/icons/paint.svg";
import Sun from "/assets/icons/sun.svg";
import Star from "/assets/icons/star.svg";

// Images
import Test from '/assets/hero.jpg'

// gallery blocks
import Classrooms from "../components/Carousel/Classrooms"
import Library from "../components/Carousel/Library"
import Computerlab from "../components/Carousel/Computerlab"
import Playgrounds from "../components/Carousel/Playgrounds"


function Academic() {
  return (
    <>

      <Banner />
      <NavigationBar />

      <Container>

        {/* Overview Section✅ */}
        <Overview title="Academics" heading="Nurturing Young Minds for Success" details="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration." />

        {/* Awards and recognition✅ */}
        <section>
          <SectionHeader semiHeading="Our Features" Heading="Our Special Features">
            Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
          </SectionHeader>

          <div className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]">
            <Card category="about" icon={Book} heading="Thematic Learning" details="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant." />
            <Card category="about" icon={Graph} heading="STEAM Education" details="We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills." />
            <Card category="about" icon={Puzzle} heading="Language Immersion" details="Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness." />
            <Card category="about" icon={Paint} heading="Art and Creativity" details="Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms." />
            <Card category="about" icon={Sun} heading="Outdoor Education" details="Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment." />
            <Card category="about" icon={Star} heading="Play-Based Learning" details="Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking." />
          </div>
        </section>

        {/* what students learn✅ */}
        <section>
          <SectionHeader semiHeading="Education Standard" Heading="What Students Learn">
            At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include
          </SectionHeader>

          <div className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]">
            <AcademicCard image={Test} title="Software Development" details="Reading, writing, storytelling, and communication in codes." />
            <AcademicCard image={Test} title="Tourism" details="Reading, writing, storytelling, and communication in with nature." />
            <AcademicCard image={Test} title="Food & Beverage" details="Reading, writing, storytelling, and communication with the kitchen." />
            <AcademicCard image={Test} title="Accounting" details="Reading, writing, storytelling, and communication with money." />
            <AcademicCard image={Test} title="Building Construction" details="Reading, writing, storytelling, and communication in bricks and stones." />
            <AcademicCard image={Test} title="Computer System" details="Reading, writing, storytelling, and communication in Circuits." />
          </div>
        </section>

        {/* gallery✅ */}
        <section className="hidden lg:block">
          <SectionHeader semiHeading="Our Gallery" Heading="Our Rooms Gallery">
            Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.
          </SectionHeader>

          {/* school images categorized✅ */}
          <Classrooms />
          <Library />
          <Computerlab />
          <Playgrounds />

        </section>



        {/* footer✅ */}
        <Footer />

      </Container>


    </>
  )
}

export default Academic
