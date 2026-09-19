
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { SquareChevronDown } from "lucide-react";

function Model() {
  return (
    <div className="container md:w-3/5 mx-auto font-nav">
      <TabGroup className="lg:flex space-y-5 lg:space-y-0 text-white gap-20">
        
        {/* TAB LIST */}
        <TabList className="flex flex-col gap-5 lg:gap-8 min-w-[180px]">
          <Tab
            className="
              data-[selected]:bg-[#83dbff40]
              data-[selected]:outline-none
              hover:bg-[#83dbff20]
              transition-all duration-300
              p-3 border rounded-md border-customBlue
            "
          >
            Experience
          </Tab>

          <Tab
            className="
              data-[selected]:bg-[#83dbff40]
              data-[selected]:outline-none
              hover:bg-[#83dbff20]
              transition-all duration-300
              p-3 border rounded-md border-customBlue
            "
          >
            Education
          </Tab>

          <Tab
            className="
              data-[selected]:bg-[#83dbff40]
              data-[selected]:outline-none
              hover:bg-[#83dbff20]
              transition-all duration-300
              p-3 border rounded-md border-customBlue
            "
          >
            Certifications
          </Tab>

          <Tab
            className="
              data-[selected]:bg-[#83dbff40]
              data-[selected]:outline-none
              hover:bg-[#83dbff20]
              transition-all duration-300
              p-3 border rounded-md border-customBlue
            "
          >
            Soft Skills
          </Tab>
        </TabList>

        {/* TAB CONTENT */}
        <TabPanels className="flex-1">

          {/* ================= EXPERIENCE ================= */}
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-6 font-semibold">
                Professional Experience
              </h3>

              {/* Software Engineer Intern */}
              <div className="border-l border-customBlue pl-4 mb-10">
                <p className="bg-custom-gradient inline-block px-2 py-1 rounded">
                  Feb 2025 - Aug 2025
                </p>

                <p className="flex gap-2 py-3 font-semibold text-lg">
                  <SquareChevronDown className="text-red-600 mt-1 shrink-0" />
                  Software Engineer Intern
                </p>

                <div className="px-8">
                  <p className="text-customBlue font-semibold">
                    LYXUX Global S.L
                  </p>

                  <p className="py-3 text-[#9ca3af] leading-7">
                    Worked as a Software Engineer Intern in a production
                    environment, contributing to full-stack web and mobile
                    applications. Developed features using Next.js, React,
                    React Native, Node.js, Express.js, MongoDB, and Spring
                    Boot while collaborating with senior engineers,
                    designers, and other team members.
                  </p>

                  <ul className="text-[#9ca3af] space-y-2 list-disc pl-5">
                    <li>
                      Developed and contributed to production-ready web
                      applications and responsive user interfaces.
                    </li>
                    <li>
                      Built and integrated REST APIs with frontend
                      applications and database services.
                    </li>
                    <li>
                      Participated in code reviews, sprint planning,
                      functional testing, and regression testing.
                    </li>
                    <li>
                      Used ClickUp for sprint and task management and
                      maintained project documentation.
                    </li>
                    <li>
                      Collaborated with developers and designers in an
                      Agile development environment.
                    </li>
                  </ul>
                </div>
              </div>

              {/* IEEE Chairperson */}
              <div className="border-l border-customBlue pl-4 mb-10">
                <p className="bg-custom-gradient inline-block px-2 py-1 rounded">
                  2025 - 2026
                </p>

                <p className="flex gap-2 py-3 font-semibold text-lg">
                  <SquareChevronDown className="text-red-600 mt-1 shrink-0" />
                  Chairperson - IEEE Student Branch
                </p>

                <div className="px-8">
                  <p className="text-customBlue font-semibold">
                    Sabaragamuwa University of Sri Lanka
                  </p>

                  <p className="py-3 text-[#9ca3af] leading-7">
                    Led the IEEE Student Branch by coordinating student
                    teams, organizing technical and professional development
                    activities, and working with different stakeholders to
                    successfully deliver events and initiatives.
                  </p>

                  <ul className="text-[#9ca3af] space-y-2 list-disc pl-5">
                    <li>
                      Led and coordinated student teams and volunteers.
                    </li>
                    <li>
                      Planned and managed technical events and student
                      activities.
                    </li>
                    <li>
                      Coordinated with university students, faculty members,
                      and external professionals.
                    </li>
                    <li>
                      Developed leadership, communication, teamwork, and
                      project management skills.
                    </li>
                  </ul>
                </div>
              </div>

              {/* People's Bank */}
              <div className="border-l border-customBlue pl-4">
                <p className="bg-custom-gradient inline-block px-2 py-1 rounded">
                  Jan 2022 - Jul 2022
                </p>

                <p className="flex gap-2 py-3 font-semibold text-lg">
                  <SquareChevronDown className="text-red-600 mt-1 shrink-0" />
                  Trainee Bank Assistant
                </p>

                <div className="px-8">
                  <p className="text-customBlue font-semibold">
                    People's Bank - Walasmulla
                  </p>

                  <p className="py-3 text-[#9ca3af] leading-7">
                    Worked in a structured banking environment, handling
                    customer transactions and account-related operations
                    while developing strong attention to detail, accuracy,
                    communication, and professional discipline.
                  </p>

                  <ul className="text-[#9ca3af] space-y-2 list-disc pl-5">
                    <li>
                      Processed customer transactions and account operations.
                    </li>
                    <li>
                      Maintained accurate records and followed defined
                      procedures.
                    </li>
                    <li>
                      Developed strong communication and customer service
                      skills.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* ================= EDUCATION ================= */}
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-6 font-semibold">
                Education
              </h3>

              {/* Degree */}
              <div className="border-l border-customBlue pl-4 mb-10">
                <p className="bg-custom-gradient inline-block px-2 py-1 rounded">
                  2022 - 2026
                </p>

                <p className="flex gap-2 py-3 font-semibold text-lg">
                  <SquareChevronDown className="text-red-600 mt-1 shrink-0" />
                  BSc (Hons) in Computing and Information Systems
                </p>

                <div className="px-8">
                  <p className="text-customBlue font-semibold">
                    Sabaragamuwa University of Sri Lanka
                  </p>

                  <p className="py-3 text-[#9ca3af] leading-7">
                    Completed the academic requirements for my BSc (Hons)
                    degree in Computing and Information Systems, developing
                    a strong foundation in software engineering, full-stack
                    development, databases, mobile application development,
                    and information systems.
                  </p>

                  <p className="text-[#9ca3af]">
                    <span className="font-semibold text-white">
                      Current GPA:
                    </span>{" "}
                    3.45 / 4.00
                  </p>

                  <p className="text-[#9ca3af] pt-2">
                    <span className="font-semibold text-white">
                      Status:
                    </span>{" "}
                    Academic requirements completed - official results and
                    transcript pending
                  </p>
                </div>
              </div>

              {/* Advanced Level */}
              <div className="border-l border-customBlue pl-4">
                <p className="bg-custom-gradient inline-block px-2 py-1 rounded">
                  2011 - 2020
                </p>

                <p className="flex gap-2 py-3 font-semibold text-lg">
                  <SquareChevronDown className="text-red-600 mt-1 shrink-0" />
                  GCE Advanced Level - Physical Science
                </p>

                <div className="px-8">
                  <p className="text-customBlue font-semibold">
                    Rajapaksha Central College, Weerakatiya
                  </p>

                  <p className="py-3 text-[#9ca3af] leading-7">
                    Completed secondary education with a focus on the
                    Physical Science stream, developing a strong foundation
                    in mathematics, science, analytical thinking, and
                    problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* ================= CERTIFICATIONS ================= */}
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-6 font-semibold">
                Certifications
              </h3>

              <div className="border-l border-customBlue pl-4">

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600 shrink-0" />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customBlue duration-300"
                    href="https://www.coursera.org/account/accomplishments/verify/M6B3QP2677DK"
                  >
                    React Basics - Meta
                  </a>
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600 shrink-0" />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customBlue duration-300"
                    href="https://www.coursera.org/account/accomplishments/verify/2BZNHYKZ8AMJ"
                  >
                    Advanced React - Meta
                  </a>
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600 shrink-0" />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customBlue duration-300"
                    href="https://www.coursera.org/account/accomplishments/verify/HKLFZJXUX7MH"
                  >
                    HTML, CSS, and JavaScript for Web Developers -
                    Johns Hopkins University
                  </a>
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600 shrink-0" />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customBlue duration-300"
                    href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                  >
                    Web Design for Beginners - University of Moratuwa
                  </a>
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600 shrink-0" />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customBlue duration-300"
                    href="https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
                  >
                    Front-End Web Development - University of Moratuwa
                  </a>
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600 shrink-0" />

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-customBlue duration-300"
                    href="https://badgr.com/public/assertions/3FBUNBOcT--ua5-foB-Esw?identity__email=sudarakakalindu20@gmail.com"
                  >
                    Postman API Fundamentals Student Expert - Postman
                  </a>
                </p>

              </div>
            </div>
          </TabPanel>

          {/* ================= SOFT SKILLS ================= */}
          <TabPanel>
            <div data-aos="fade-right">
              <h3 className="text-2xl pb-6 font-semibold">
                Professional & Soft Skills
              </h3>

              <div className="border-l border-customBlue pl-4">

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Communication
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Leadership
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Project Management
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Team Collaboration
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Critical Thinking
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Agile / Scrum
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Problem Solving
                </p>

                <p className="flex gap-2 py-3">
                  <SquareChevronDown className="text-red-600" />
                  Self-Learning & Adaptability
                </p>

              </div>
            </div>
          </TabPanel>

        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default Model;

