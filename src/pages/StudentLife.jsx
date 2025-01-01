import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"

// more stupid components will be daFuq here
import StudentLifeCard from "../components/StudentsLifeCard"

// suprizingly here comes the icons, wait I'm even doing it the right way????

// icons
import Thunder from "/assets/icons/thunder.svg";
import Paint from "/assets/icons/paint.svg";
import Music from "/assets/icons/music.svg";
import Puzzle from "/assets/icons/puzzle.svg";
import Lab from "/assets/icons/lab.svg";
import Magic from "/assets/icons/stars.svg";
import Book from "/assets/icons/book.svg";
import People from "/assets/icons/people-2.svg";

// sample image
import Test from '/assets/hero.jpg'


function StudentLife() {
  return (
    <>
      <Banner />
      <NavigationBar />

      <Container>

        {/* Overview Section✅ */}
        <Overview title="Enriching Student Life" heading="Embracing Learning with Discovery and Joy" details="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development." />

        {/* Extracurricular Activities✅ */}
        <section>
          <SectionHeader semiHeading="Fun & Activities" Heading="Extracurricular Activities">
            At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including
          </SectionHeader>

          <div className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]">
            <Card category="about" icon={Thunder} heading="Sports and Athletics" details="Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline." />
            <Card category="about" icon={Paint} heading="Art and Creativity" details="Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms." />
            <Card category="about" icon={Music} heading="Music and Performing Arts" details="Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances." />
            <Card category="about" icon={Puzzle} heading="Language Clubs" details="Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness." />
            <Card category="about" icon={Lab} heading="ICT Club" details="The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning." />
            <Card category="about" icon={Magic} heading="Cooking and Culinary Arts" details="Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals." />
          </div>
        </section>

        {/* Events and celebrations✅ */}
        <section>
          <SectionHeader semiHeading="our Achievements" Heading="Events & Celebrations">
            At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include
          </SectionHeader>

          <div className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]">
            <StudentLifeCard image={Test} title="Annual Sports Day" details="A day filled with friendly competition, team spirit, and sportsmanship." />
            <StudentLifeCard image={Test} title="Cultural Festivals" details="Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation." />
            <StudentLifeCard image={Test} title="Art Exhibitions" details="Showcasing our students' artistic talents through exhibitions and displays." />
            <StudentLifeCard image={Test} title="Science Fair" details="A platform for budding scientists to present their innovative projects and experiments." />
            <StudentLifeCard image={Test} title="International Day" details="A vibrant celebration of our diverse community, embracing cultures from around the world." />
            <StudentLifeCard image={Test} title="Graduation Ceremony" details="A significant milestone as our Kindergarten students prepare to embark on their academic journey." />
          </div>


        </section>

        {/* student support✅ */}
        <section>
          <SectionHeader semiHeading="Support" Heading="Student Support">
            At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include
          </SectionHeader>

          <div className="grid w-full grid-rows-1 lg:grid-cols-3 gap-6 p-8 gap-y-[70px]">
            <Card category="about" icon={Magic} heading="Counseling" details="Professional counselors offer guidance and support to students, addressing their emotional and social well-being." />
            <Card category="about" icon={Book} heading="Learning Support" details="Our educators provide additional assistance to students who may require extra support in their academic journey." />
            <Card category="about" icon={People} heading="Parent-Teacher Collaboration" details="We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development." />

          </div>

        </section>

        <Footer />

      </Container>

    </>
  )
}

export default StudentLife
