
// dumpa** f*ck'n c*nt

import Banner from "../components/Banner"
import Container from "../components/Container"
import NavigationBar from "../components/NavigationBar"
import Footer from "..//components/Footer"
import Overview from "../components/Overview"
import SectionHeader from "../components/SectionHeader"
import AdmissionCard from "../components/AdmissionCard"

const Admissions = () => {
  return (
    <>


      <Banner />
      <NavigationBar />

      <Container>

        {/* Overview Section✅ */}
        <Overview title="Admission" heading="Join Our Family of Young Learners" details="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school" />

        {/* Admission process✅ */}
        <section>
          <SectionHeader semiHeading="Process" Heading="Admission Process">
            Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school
          </SectionHeader>

          <div className="grid w-full grid-cols-3 gap-6 p-8 gap-y-[70px]">
            <AdmissionCard step="01" title="Inquiry" details="Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy." />
            <AdmissionCard step="02" title="School Tour" details="Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment." />
            <AdmissionCard step="03" title="Application Form" details="Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)." />
            <AdmissionCard step="04" title="Parent Interview" details="We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations." />
            <AdmissionCard step="05" title="Student Assessment" details="For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement." />
            <AdmissionCard step="06" title="Acceptance" details="Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy." />
          </div>
        </section>

        {/* 🤖 Thanks alot ChatGPT for saving me 5 fuck'n hours designing a table */}

        {/* Fee Structure */}
        <section>
          <SectionHeader semiHeading="School Fees" Heading="Fee Structure">
            Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.
          </SectionHeader>

          {/* Custom table school fees */}
          <div className="p-[60px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800">

            <div class="overflow-hidden rounded-lg">

              <div class="grid grid-cols-5 bg-primary-95 text-gray-700 text-sm font-semibold mb-5 rounded-xl border-2 border-black overflow-hidden">
                <div class="px-6 py-4 border-r-2 border-black">Program</div>
                <div class="px-6 py-4 border-r-2 border-black">Age Group</div>
                <div class="px-6 py-4 border-r-2 border-black">Annual Tuition</div>
                <div class="px-6 py-4 border-r-2 border-black">Registration Fee</div>
                <div class="px-6 py-4 border-black">Activity Fee</div>
              </div>


              <div class="divide-y divide-gray-300 border-2 border-black rounded-xl overflow-hidden">

                {/* Add Trades here */}

                <div class="grid grid-cols-5 bg-white text-gray-700 border-b-2 border-black">
                  <div class="px-6 py-4 border-r-2 border-black">Nursery</div>
                  <div class="px-6 py-4 border-r-2 border-black">2 - 3 Years</div>
                  <div class="px-6 py-4 border-r-2 border-black">$1,686</div>
                  <div class="px-6 py-4 border-r-2 border-black">$12</div>
                  <div class="px-6 py-4 border-r-2 border-black">$12</div>
                </div>

              </div>
            </div>


          </div>

          {/* Additional services */}
          <div className="p-[60px] mt-[60px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800">

            <div class="overflow-hidden rounded-lg">

              <div class="grid grid-cols-1 bg-primary-95 text-gray-700 text-sm font-semibold mb-5 rounded-xl border-2 border-black overflow-hidden">
                <div class="px-6 py-4 border-r-2 border-black text-[#191919] text-2xl font-bold ">Addition Services</div>
              </div>


              <div class="divide-y divide-gray-300 border-2 border-black rounded-xl overflow-hidden">

                {/* More services here */}

                <div class="grid grid-cols-2 bg-white text-gray-700 border-b-2 border-black">
                  <div class="px-6 py-4 border-r-2 border-black">Nursery</div>
                  <div class="px-6 py-4 border-r-2 border-black">2 - 3 Years</div>
                </div>
                <div class="grid grid-cols-2 bg-white text-gray-700 border-b-2 border-black">
                  <div class="px-6 py-4 border-r-2 border-black">Nursery</div>
                  <div class="px-6 py-4 border-r-2 border-black">2 - 3 Years</div>
                </div>

              </div>
            </div>


          </div>

        </section>

        {/* footer✅ */}
        <Footer />

      </Container>



    </>
  )
}

export default Admissions
