"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Данные курса с уроками
const dynamicsCourseData = {
  course: "Physics",
  quarters: [
    {
      quarter: 1,
      topics: [
        {
          topic: "Physical Quantities and Measurement",
          sections: [
            {
              title:
                "SI Prefixes, Symbols, Units and Checking Homogeneity (проверка однородности уравнений)",
              learning_objectives: [
                "Use SI prefixes (pico (p), nano (n), micro (μ), milli (m), centi (c), etc.) to denote multiples and sub-multiples.",
                "Utilize SI base units (kg, m, s, A, K, mol, cd) to check the homogeneity of physical equations.",
                "Differentiate between vector (векторный) and scalar (скалярный) quantities.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/8rZRYPoerPw?si=D8yRDXJSKO-kIwwt",
                description:
                  "This lesson covers the use of SI prefixes and units, along with methods to verify the homogeneity of physical equations and distinguish between scalar and vector quantities.",
                explanation1:
                  "Physical quantities are measurable entities used to describe the laws of physics. They include properties such as length, mass, time, temperature, and more. These quantities are categorized into fundamental (base) quantities, which are independent, and derived quantities, which can be expressed in terms of the fundamental ones. This classification is crucial for maintaining a consistent measurement system.",
                imageHigh:
                  "https://www.studiestoday.com/sites/default/files/images24/CBSE%20Class%2011%20Physics%20Units%20And%20Measurements%20Notes_%208.PNG",
                explanation2:
                  "The principle of homogeneity of dimensions asserts that every term in a valid physical equation must share the same dimensional form. For example, in the equation s = ut + (½) at², each term has the dimension of length. This concept is essential for verifying the correctness of physical equations and ensuring dimensional consistency during derivations.",
                imageLow:
                  "https://images.theengineeringprojects.com/image/main/2024/07/dimensions-of-physical-quantities-2.jpg",
                extra_materials: [
                  {
                    type: "exercise",
                    title: "Unit Conversion Practice",
                    url: "https://www.flippedaroundphysics.com/uploads/4/5/0/0/45000279/1.1_use_of_si_units_and_their_prefixes_answers.pdf",
                  },
                  {
                    type: "presentation",
                    title: "Introduction to SI Units",
                    url: "https://docs.google.com/presentation/d/e/2PACX-1vSnNxw9FdQEYrVxUJ1fWSau84QkdI0PMSxoPl-5lnV1wBzjyHJuqnpEQqvgnmJAol-uyz7CzALDisgI/embed?start=false&loop=true&delayms=3000",
                  },
                ],
              },
            },
          ],
        },
        {
          topic: "Kinematics",
          sections: [
            {
              title: "Motion: Speed, Displacement, Velocity and Acceleration",
              learning_objectives: [
                "Define and differentiate between speed, displacement, velocity, and acceleration.",
                "Understand that speed is a scalar (только величина), while velocity is a vector (вектор, включает направление).",
                "Apply the equations of motion to solve kinematics problems.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/dHjWVlfNraM?si=uRFTaHuoQqe4U0m5",
                description:
                  "An introduction to the core concepts of kinematics, focusing on the differences between displacement, velocity, and acceleration, and practical problem solving.",
                imageHigh:"https://www.physicsclassroom.com/Class/1DKin/U1L6a1.gif",
                imageLow:"https://cdn1.byjus.com/wp-content/uploads/2018/11/physics/wp-content/uploads/2016/06/1-32.png",
                  extra_materials: [
                  {
                    type: "simulation",
                    title: "Motion Simulation",
                    url: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html",
                  },
                  {
                    type: "exercise",
                    title: "Kinematics Problem Set",
                    url: "https://www.physicsclassroom.com/class/1DKin",
                  },
                ],
              },
            },
            {
              title: "Interpreting Motion Graphs",
              learning_objectives: [
                "Interpret distance-time, velocity-time, and acceleration-time graphs.",
                "Understand the meaning of slopes (наклон) and areas under the curves.",
                "Solve problems based on graphical data.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/ybgEUwM3Lmc?si=sCOF1Z8zWxgligpX",
                description:
                  "This lesson is dedicated to understanding and analyzing motion graphs, a key skill in kinematics.",
                extra_materials: [
                  {
                    type: "exercise",
                    title: "Graph Analysis Exercises",
                    url: "http://holmanmathclass.pbworks.com/w/file/fetch/92680764/Interpreting%20Graphs%20Answer%20Key.pdf",
                  },
                ],
              },
            },
          ],
        },
        {
          topic: "Kinematics of Fluids",
          sections: [
            {
              title:
                "Fluid Dynamics: Incompressible Flow, Hydrostatic Pressure and Pascal's Law",
              learning_objectives: [
                "Define incompressible fluids (жидкости, которые нельзя сжать) and understand hydrostatic pressure.",
                "Apply Pascal's law in practical scenarios (например, в гидравлических прессах).",
                "Explore the concepts of laminar (упорядоченное) and turbulent (хаотичное) flow.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/fJefjG3xhW0?si=z3vhQFKNgKnVqPv9",
                description:
                  "An introduction to fluid kinematics, including flow characteristics and pressure concepts.",
                extra_materials: [
                  {
                    type: "simulation",
                    title: "Fluid Flow Simulation",
                    url: "https://phet.colorado.edu/sims/html/fluid-pressure/latest/fluid-pressure_en.html",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      quarter: 2,
      topics: [
        {
          topic: "Dynamics and Conservation Laws",
          sections: [
            {
              title: "Newton’s Laws and Force Analysis",
              learning_objectives: [
                "Understand Newton’s three laws of motion.",
                "Analyze forces acting on bodies and predict motion.",
                "Solve problems related to net force and acceleration.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/g550H4e5FCY?si=27AQyyRhAvEy8q9k",
                description:
                  "A deep dive into dynamics, focusing on Newton’s laws and their applications in real-life scenarios.",
                extra_materials: [
                  {
                    type: "exercise",
                    title: "Force and Motion Exercises",
                    url: "https://www.physicsclassroom.com/class/newton",
                  },
                ],
              },
            },
            {
              title: "Conservation of Momentum",
              learning_objectives: [
                "Explain the principle of momentum conservation.",
                "Differentiate between elastic (упругие) and inelastic (неупругие) collisions.",
                "Apply momentum conservation to solve collision problems.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/Fp7D5D8Bqjc?si=47K16rX7gnOB_NWj",
                description:
                  "This lesson covers the conservation of momentum, essential for understanding collision dynamics.",
                extra_materials: [
                  {
                    type: "simulation",
                    title: "Momentum Simulation",
                    url: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      quarter: 3,
      topics: [
        {
          topic: "Oscillations and Waves",
          sections: [
            {
              title: "Simple Harmonic Motion (SHM) and Energy Conversions",
              learning_objectives: [
                "Describe the characteristics of simple harmonic motion.",
                "Understand the mathematical formulation: y = A cos(ωt + φ) where A is amplitude, ω (omega) is angular frequency, and φ (phi) is the phase constant.",
                "Analyze energy conversion between kinetic and potential energy in oscillatory systems.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/shmVideoID",
                description:
                  "Learn the fundamentals of oscillations and how energy is transformed during SHM.",
                extra_materials: [
                  {
                    type: "exercise",
                    title: "SHM Problem Set",
                    url: "https://example.com/shm-exercises",
                  },
                ],
              },
            },
          ],
        },
        {
          topic: "Thermal Physics",
          sections: [
            {
              title: "Molecular-Kinetic Theory and the Ideal Gas Law",
              learning_objectives: [
                "Define mole, Avogadro's number, and molar mass.",
                "Explain the molecular-kinetic theory (молекулярно-кинетическая теория) of gases.",
                "Apply the ideal gas law and related gas laws (Boyle’s, Charles’, etc.) to solve problems.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/k8j7X95nK8g?si=O-bqRXu3RYNwGBpp",
                description:
                  "This lesson delves into the molecular-kinetic theory and the behavior of gases under different conditions.",
                extra_materials: [
                  {
                    type: "simulation",
                    title: "Ideal Gas Simulation",
                    url: "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      quarter: 4,
      topics: [
        {
          topic: "Geometric Optics",
          sections: [
            {
              title: "Spherical Mirrors and Ray Diagrams",
              learning_objectives: [
                "Understand the properties and behavior of spherical mirrors.",
                "Apply the mirror formula to calculate image properties.",
                "Draw and analyze ray diagrams for mirrors and lenses.",
              ],
              content: {
                video:
                  "https://www.youtube.com/embed/yscrBkfPRyc?si=nOfPTvnSgvovvDgF",
                description:
                  "An overview of geometric optics, focusing on spherical mirrors, lens formulas, and image formation.",
                extra_materials: [
                  {
                    type: "exercise",
                    title: "Optics Problem Set",
                    url: "https://example.com/optics-exercises",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

// Компонент чата с GPT
const ChatSection = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Welcome to the chat! How can I assist you today?" },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async () => {
    if (!inputMessage) return;

    const newMessage = { sender: 'user', text: inputMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      // Отправляем сообщение на API-роут /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage }),
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        sender: 'bot',
        text: `Error sending message. Here is an example: 
Kilometer (km): 1 km = 1*10^3 meters = 1,000 meters
Milligram (mg): 1 mg = 1*10^-3 grams = 0.001 grams`,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
    setInputMessage('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-96">
      <div className="flex items-center bg-blue-500 text-white p-3 rounded-t-lg">
        <img src="images/openai.svg" alt="Chat Icon" className="w-6 h-6 mr-2" />
        <h3 className="text-lg font-semibold">Chat with GPT</h3>
      </div>

      <div className="flex flex-col h-64 overflow-y-auto p-3 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start my-2 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'bot' && (
              <img
                src="/images/openai.svg"
                alt="OpenAI Icon"
                className="w-5 h-5 mr-2 mt-1"
              />
            )}
            <div
              className={`p-2 rounded-lg text-sm max-w-xs ${
                msg.sender === 'user'
                  ? 'bg-blue-200 text-black'
                  : 'bg-gray-200 text-black'
              }`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg"
        >
          <img src="images/send_icon.png" className="w-6 h-6" alt="Send" />
        </button>
      </div>
    </div>
  );
};

const DynamicsTopicsPage = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [selectedPresentation, setSelectedPresentation] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen pt-20 bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Dynamics Topics by Quarters</h2>
        {dynamicsCourseData.quarters.map((quarter, qIndex) => (
          <div key={qIndex} className="mb-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full p-2 text-left transition-all ${
                selectedQuarter === qIndex
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } border rounded-lg`}
              onClick={() =>
                setSelectedQuarter(selectedQuarter === qIndex ? null : qIndex)
              }
            >
              Quarter {quarter.quarter}
            </motion.button>
            <AnimatePresence>
              {selectedQuarter === qIndex && (
                <motion.div
                  className="pl-4 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {quarter.topics.map((topic, tIndex) => (
                    <motion.button
                      key={tIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full p-2 text-left transition-all ${
                        selectedTopic === tIndex ? "bg-gray-300" : "bg-white"
                      } border rounded-lg`}
                      onClick={() => {
                        setSelectedTopic(tIndex);
                        setSelectedContent(topic.sections[0]);
                        setSelectedPresentation(null);
                      }}
                    >
                      {topic.topic}

                    </motion.button>

                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
          
        ))}
        <div>
        <ChatSection/>

        </div>

      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6 flex flex-col items-center">
        <AnimatePresence>
          {selectedContent ? (
            <motion.div
              className="max-w-2xl bg-white p-6 shadow-md rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.h2 className="text-2xl font-bold mb-4">{selectedContent.title}</motion.h2>
              <motion.p className="text-gray-700 mb-4">
                {selectedContent.content.description}
              </motion.p>
              <motion.iframe
                className="w-full aspect-video rounded-lg mb-4"
                src={selectedContent.content.video}
                title="Lesson Video"
                allowFullScreen
              ></motion.iframe>

              {/* Отображение изображений */}
              <div className="mb-4">
                <motion.img
                  src={selectedContent.content.imageHigh}
                  alt="High Resolution"
                  className="w-full rounded-lg mb-2"
                />
                <motion.img
                  src={selectedContent.content.imageLow}
                  alt="Low Resolution"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Дополнительные объяснения */}
              <motion.div className="mb-4">
                <motion.h3 className="text-xl font-semibold mt-6">Additional Explanations</motion.h3>
                <motion.p className="text-gray-700 mt-2">
                  {selectedContent.content.explanation1}
                </motion.p>
                <motion.p className="text-gray-700 mt-2">
                  {selectedContent.content.explanation2}
                </motion.p>
              </motion.div>

              {/* Learning Objectives */}
              <motion.h3 className="text-xl font-semibold mt-6">Learning Objectives</motion.h3>
              <motion.ul className="list-disc pl-5 mt-2 text-gray-600">
                {selectedContent.learning_objectives.map((obj: string, index: number) => (
                  <motion.li key={index}>{obj}</motion.li>
                ))}
              </motion.ul>

              {/* Extra Materials */}
              {selectedContent.content.extra_materials && (
                <motion.div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Extra Materials</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    {selectedContent.content.extra_materials.map((material: any, index: number) => (
                      <li key={index} className="mb-4">
                        {material.type === "simulation" ? (
                          <div>
                            <h4 className="text-lg font-semibold">{material.title}</h4>
                            <iframe
                              src={material.url}
                              width="800"
                              height="600"
                              allowFullScreen
                              className="w-full border rounded-lg"
                            ></iframe>
                          </div>
                        ) : material.type === "presentation" ? (
                          <div>
                            <h4 className="text-lg font-semibold">{material.title}</h4>
                            <button
                              onClick={() => setSelectedPresentation(material.url)}
                              className="text-blue-600 underline hover:text-blue-800"
                            >
                              View Presentation
                            </button>
                          </div>
                        ) : material.type === "image" ? (
                          <div>
                            <h4 className="text-lg font-semibold">{material.title}</h4>
                            <img
                              src={material.url}
                              alt={material.title}
                              className="w-full rounded-lg"
                            />
                          </div>
                        ) : (
                          <a
                            href={material.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {material.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div className="text-center text-gray-500">
              <img
                src="images/lesson_placeholder_icon.png"
                className="w-32 mx-auto mb-4"
                alt="No topic"
              />
              <h2 className="text-xl font-semibold">No Subtopic Selected</h2>
              <p>Please select a subtopic to view its content.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Presentation Viewer */}
        {selectedPresentation && (
          <motion.div
            className="w-full max-w-3xl mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold text-center mb-4">Presentation</h3>
            <iframe 
              src={selectedPresentation} 
              frameBorder="0" 
              width="960" 
              height="629" 
              allowFullScreen
              className="w-full border rounded-lg"
            ></iframe>
          </motion.div>
        )}


      </div>
    </div>
  );
};

export default DynamicsTopicsPage;
