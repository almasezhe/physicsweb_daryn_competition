"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tests = [
  {
    id: 1,
    name: "Quarter 1",
    subtopics: [
      {
        name: "Boyle's Law and Gas Laws",
        questions: [
          {
            id: "1.1",
            question:
              "According to Boyle's Law, what happens to the pressure of a gas if its volume is reduced to half at constant temperature?",
            options: [
              "The pressure doubles",
              "The pressure remains unchanged",
              "The pressure is halved",
              "The pressure quadruples"
            ],
            correct: "The pressure doubles",
            explanation:
              "Boyle's Law states that pressure is inversely proportional to volume. Halving the volume results in doubling the pressure."
          },
          {
            id: "1.2",
            question:
              "Which gas law states that, at constant pressure, the volume of a gas is directly proportional to its absolute temperature?",
            options: [
              "Charles's Law",
              "Boyle's Law",
              "Gay-Lussac's Law",
              "Avogadro's Law"
            ],
            correct: "Charles's Law",
            explanation:
              "Charles's Law relates volume and temperature at constant pressure, meaning as temperature increases, so does volume."
          },
          {
            id: "1.3",
            question:
              "What is the Combined Gas Law?",
            options: [
              "P1V1/T1 = P2V2/T2",
              "V/T = constant",
              "P ∝ 1/V",
              "V ∝ T"
            ],
            correct: "P1V1/T1 = P2V2/T2",
            explanation:
              "The Combined Gas Law combines Boyle's, Charles's, and Gay-Lussac's laws into a single equation that relates pressure, volume, and temperature."
          },
          {
            id: "1.4",
            question:
              "Avogadro's Law states that equal volumes of gases, at the same temperature and pressure, contain equal numbers of:",
            options: [
              "Molecules",
              "Atoms",
              "Electrons",
              "Ions"
            ],
            correct: "Molecules",
            explanation:
              "Avogadro's Law shows that the number of molecules in a given volume is constant if temperature and pressure are fixed."
          },
          {
            id: "1.5",
            question:
              "If the volume of a gas is tripled while temperature and the number of moles remain constant, what happens to its pressure?",
            options: [
              "It decreases to one-third",
              "It doubles",
              "It remains the same",
              "It increases threefold"
            ],
            correct: "It decreases to one-third",
            explanation:
              "According to Boyle's Law, if the volume increases threefold, the pressure decreases to one-third of its original value."
          },
          {
            id: "1.6",
            question:
              "Which law is used to calculate the pressure, volume, and temperature relationship of an ideal gas?",
            options: [
              "Ideal Gas Law (PV = nRT)",
              "Boyle's Law",
              "Charles's Law",
              "Avogadro's Law"
            ],
            correct: "Ideal Gas Law (PV = nRT)",
            explanation:
              "The Ideal Gas Law relates pressure, volume, temperature, and the number of moles of a gas."
          },
          {
            id: "1.7",
            question:
              "How does increasing the number of moles in a gas sample affect its volume at constant temperature and pressure?",
            options: [
              "The volume increases proportionally",
              "The volume decreases",
              "The volume remains unchanged",
              "The volume increases exponentially"
            ],
            correct: "The volume increases proportionally",
            explanation:
              "According to Avogadro's Law, volume is directly proportional to the number of moles at constant temperature and pressure."
          }
        ]
      },
      {
        name: "Kinematics: Motion and Speed",
        questions: [
          {
            id: "1.1",
            question: "What is the formula for calculating average speed?",
            options: [
              "Distance ÷ Time",
              "Time ÷ Distance",
              "Distance × Time",
              "Acceleration × Time"
            ],
            correct: "Distance ÷ Time",
            explanation:
              "Average speed is defined as the total distance traveled divided by the total time taken."
          },
          {
            id: "1.2",
            question:
              "A car travels 150 km in 3 hours. What is its average speed?",
            options: [
              "50 km/h",
              "75 km/h",
              "100 km/h",
              "150 km/h"
            ],
            correct: "50 km/h",
            explanation:
              "Average speed = Total distance / Total time = 150 km ÷ 3 h = 50 km/h."
          },
          {
            id: "1.3",
            question:
              "What distinguishes speed from velocity?",
            options: [
              "Velocity is speed with a specified direction",
              "Speed and velocity are the same",
              "Speed includes direction while velocity does not",
              "Velocity is measured in km/h while speed is in m/s"
            ],
            correct: "Velocity is speed with a specified direction",
            explanation:
              "Speed is a scalar quantity, whereas velocity is a vector that includes both magnitude and direction."
          },
          {
            id: "1.4",
            question:
              "Which of the following is a vector quantity?",
            options: [
              "Velocity",
              "Speed",
              "Distance",
              "Scalar"
            ],
            correct: "Velocity",
            explanation:
              "Velocity is a vector because it has both magnitude and direction."
          },
          {
            id: "1.5",
            question:
              "What is the difference between instantaneous speed and average speed?",
            options: [
              "Instantaneous speed is the speed at a particular moment; average speed is the total distance divided by total time.",
              "They are identical concepts.",
              "Instantaneous speed includes direction, while average speed does not.",
              "Average speed is always higher than instantaneous speed."
            ],
            correct: "Instantaneous speed is the speed at a particular moment; average speed is the total distance divided by total time.",
            explanation:
              "Instantaneous speed is measured at a specific moment in time, whereas average speed considers the overall journey."
          },
          {
            id: "1.6",
            question:
              "How is acceleration defined?",
            options: [
              "Acceleration is the change in speed over time",
              "Acceleration is the change in distance over time",
              "Acceleration is speed divided by time",
              "Acceleration is the rate of change of velocity"
            ],
            correct: "Acceleration is the rate of change of velocity",
            explanation:
              "Acceleration measures how quickly the velocity of an object changes over time."
          },
          {
            id: "1.7",
            question:
              "A runner covers 100 m in 10 s and then 120 m in 12 s. What is the overall average speed?",
            options: [
              "10 m/s",
              "9 m/s",
              "11 m/s",
              "12 m/s"
            ],
            correct: "10 m/s",
            explanation:
              "Total distance = 220 m; total time = 22 s; hence, average speed = 220 m ÷ 22 s = 10 m/s."
          }
        ]
      },
      {
        name: "Fluids: Pressure and Buoyancy",
        questions: [
          {
            id: "1.1",
            question:
              "According to Archimedes' principle, what determines the buoyant force on a submerged object?",
            options: [
              "The weight of the fluid displaced",
              "The object's volume alone",
              "The object's density",
              "The object's temperature"
            ],
            correct: "The weight of the fluid displaced",
            explanation:
              "Archimedes' principle states that the buoyant force is equal to the weight of the fluid that the object displaces."
          },
          {
            id: "1.2",
            question:
              "What is the formula for pressure in a fluid?",
            options: [
              "Pressure = Force ÷ Area",
              "Pressure = Area ÷ Force",
              "Pressure = Force × Area",
              "Pressure = Volume ÷ Force"
            ],
            correct: "Pressure = Force ÷ Area",
            explanation:
              "Pressure is defined as the force applied per unit area."
          },
          {
            id: "1.3",
            question:
              "How does depth affect the pressure experienced by an object in a fluid?",
            options: [
              "Pressure increases with depth",
              "Pressure decreases with depth",
              "Pressure remains constant with depth",
              "Pressure first increases then decreases"
            ],
            correct: "Pressure increases with depth",
            explanation:
              "In a fluid, pressure increases with depth due to the weight of the fluid above."
          },
          {
            id: "1.4",
            question:
              "Which unit is commonly used to measure pressure?",
            options: [
              "Pascal (Pa)",
              "Newton (N)",
              "Joule (J)",
              "Watt (W)"
            ],
            correct: "Pascal (Pa)",
            explanation:
              "The SI unit of pressure is the Pascal (Pa), equivalent to one Newton per square meter."
          },
          {
            id: "1.5",
            question:
              "If a diver experiences a pressure of 3 atmospheres underwater, what is the approximate pressure in Pascals?",
            options: [
              "About 300,000 Pa",
              "About 101,325 Pa",
              "About 600,000 Pa",
              "About 30,000 Pa"
            ],
            correct: "About 300,000 Pa",
            explanation:
              "1 atmosphere is approximately 101,325 Pa; therefore, 3 atmospheres ≈ 3 × 101,325 ≈ 300,000 Pa."
          },
          {
            id: "1.6",
            question:
              "How does the density of a fluid affect the buoyant force acting on a submerged object?",
            options: [
              "Higher density results in a greater buoyant force",
              "Density has no effect on buoyant force",
              "Higher density results in a lower buoyant force",
              "Buoyant force is only affected by the object's volume"
            ],
            correct: "Higher density results in a greater buoyant force",
            explanation:
              "Since buoyant force equals the weight of the displaced fluid, a denser fluid produces a higher buoyant force for the same volume."
          },
          {
            id: "1.7",
            question:
              "What happens to the buoyant force if an object is fully submerged in a fluid of higher density compared to a fluid of lower density?",
            options: [
              "The buoyant force is greater in the higher density fluid",
              "The buoyant force is the same in both fluids",
              "The buoyant force is lower in the higher density fluid",
              "Buoyant force depends only on the object's weight"
            ],
            correct: "The buoyant force is greater in the higher density fluid",
            explanation:
              "A higher density fluid exerts a larger buoyant force because more mass of fluid is displaced."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Quarter 2",
    subtopics: [
      {
        name: "Atomic Structure",
        questions: [
          {
            id: "2.1",
            question:
              "Which subatomic particle primarily determines the chemical properties of an atom?",
            options: [
              "Electron",
              "Proton",
              "Neutron",
              "Nucleus"
            ],
            correct: "Electron",
            explanation:
              "The arrangement of electrons, particularly in the outer shell, governs an atom’s chemical behavior."
          },
          {
            id: "2.2",
            question:
              "What is the charge of an electron?",
            options: [
              "-1",
              "+1",
              "0",
              "Depends on the atom"
            ],
            correct: "-1",
            explanation:
              "An electron carries a negative elementary charge of -1."
          },
          {
            id: "2.3",
            question:
              "What is the approximate mass of a proton?",
            options: [
              "1.67 × 10⁻²⁷ kg",
              "9.11 × 10⁻³¹ kg",
              "1.67 × 10⁻²⁵ kg",
              "9.11 × 10⁻²⁹ kg"
            ],
            correct: "1.67 × 10⁻²⁷ kg",
            explanation:
              "A proton has a mass of approximately 1.67 × 10⁻²⁷ kg."
          },
          {
            id: "2.4",
            question:
              "Which part of the atom contains the majority of its mass?",
            options: [
              "The nucleus",
              "The electron cloud",
              "The protons only",
              "The neutrons only"
            ],
            correct: "The nucleus",
            explanation:
              "Nearly all the mass of an atom is concentrated in its nucleus, which contains protons and neutrons."
          },
          {
            id: "2.5",
            question:
              "What does the atomic number of an element represent?",
            options: [
              "The number of protons in the nucleus",
              "The total number of electrons",
              "The mass number of the atom",
              "The number of neutrons"
            ],
            correct: "The number of protons in the nucleus",
            explanation:
              "The atomic number is defined as the number of protons in an atom's nucleus and determines its identity."
          },
          {
            id: "2.6",
            question:
              "How do isotopes of an element differ?",
            options: [
              "They have different numbers of neutrons",
              "They have different numbers of protons",
              "They have different electron configurations",
              "They belong to different elements"
            ],
            correct: "They have different numbers of neutrons",
            explanation:
              "Isotopes have the same number of protons but different numbers of neutrons, leading to different mass numbers."
          },
          {
            id: "2.7",
            question:
              "What is the purpose of electron configuration notation?",
            options: [
              "To represent the arrangement of electrons in an atom",
              "To indicate the mass of an atom",
              "To show the number of protons",
              "To calculate the atomic radius"
            ],
            correct: "To represent the arrangement of electrons in an atom",
            explanation:
              "Electron configuration notation details the distribution of electrons among the atomic orbitals, which is key to understanding chemical behavior."
          }
        ]
      },
      {
        name: "Simple Pendulum",
        questions: [
          {
            id: "2.1",
            question:
              "The period of a simple pendulum (for small oscillations) is given by T = 2π√(L/g). Which factors affect the period?",
            options: [
              "Length of the pendulum and gravitational acceleration",
              "Mass of the bob and amplitude",
              "Amplitude and air resistance",
              "Only the length of the pendulum"
            ],
            correct: "Length of the pendulum and gravitational acceleration",
            explanation:
              "The period of a simple pendulum depends only on its length and the acceleration due to gravity, not on the mass or amplitude (for small angles)."
          },
          {
            id: "2.2",
            question:
              "How does increasing the length of a pendulum affect its period?",
            options: [
              "The period increases",
              "The period decreases",
              "The period remains unchanged",
              "It depends on the mass"
            ],
            correct: "The period increases",
            explanation:
              "A longer pendulum has a longer period, as T ∝ √L."
          },
          {
            id: "2.3",
            question:
              "Does the mass of the pendulum bob affect the period of a simple pendulum?",
            options: [
              "No, the mass does not affect the period",
              "Yes, a heavier bob increases the period",
              "Yes, a lighter bob increases the period",
              "It only affects the amplitude"
            ],
            correct: "No, the mass does not affect the period",
            explanation:
              "For a simple pendulum, the period is independent of the mass of the bob."
          },
          {
            id: "2.4",
            question:
              "If a pendulum has a length of 1 meter, what is its approximate period (assuming g = 9.8 m/s²)?",
            options: [
              "Approximately 2 seconds",
              "Approximately 1 second",
              "Approximately 3 seconds",
              "Approximately 4 seconds"
            ],
            correct: "Approximately 2 seconds",
            explanation:
              "Using T = 2π√(L/g), T ≈ 2π√(1/9.8) ≈ 2 seconds."
          },
          {
            id: "2.5",
            question:
              "What assumption is made about the angle of swing in deriving the simple pendulum period formula?",
            options: [
              "Small angle approximation (sinθ ≈ θ)",
              "Large angle approximation",
              "Negligible air resistance",
              "Constant mass of the bob"
            ],
            correct: "Small angle approximation (sinθ ≈ θ)",
            explanation:
              "The formula T = 2π√(L/g) is derived assuming that the angle of swing is small, so that sinθ can be approximated by θ (in radians)."
          },
          {
            id: "2.6",
            question:
              "How does gravitational acceleration affect the period of a pendulum?",
            options: [
              "Lower gravitational acceleration increases the period",
              "Lower gravitational acceleration decreases the period",
              "Gravitational acceleration does not affect the period",
              "It only affects the amplitude"
            ],
            correct: "Lower gravitational acceleration increases the period",
            explanation:
              "Since T = 2π√(L/g), a lower value of g results in a longer period."
          },
          {
            id: "2.7",
            question:
              "On which celestial body would a simple pendulum have a shorter period: Earth or the Moon?",
            options: [
              "Earth, because g is higher",
              "The Moon, because g is lower",
              "The period would be the same",
              "It depends on the pendulum length"
            ],
            correct: "Earth, because g is higher",
            explanation:
              "A higher gravitational acceleration (g) on Earth results in a shorter period compared to the Moon."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Quarter 3",
    subtopics: [
      {
        name: "Thermodynamics",
        questions: [
          {
            id: "3.1",
            question:
              "What does the first law of thermodynamics state?",
            options: [
              "Energy can neither be created nor destroyed",
              "Entropy always decreases",
              "Heat can only flow from cold to hot",
              "Work is independent of heat"
            ],
            correct: "Energy can neither be created nor destroyed",
            explanation:
              "The first law of thermodynamics is a statement of energy conservation: the total energy in a closed system remains constant."
          },
          {
            id: "3.2",
            question:
              "How is work defined in a thermodynamic process?",
            options: [
              "Work is the energy transferred by a force acting through a distance",
              "Work is the product of mass and acceleration",
              "Work is the heat transferred in the system",
              "Work is equal to the change in temperature"
            ],
            correct: "Work is the energy transferred by a force acting through a distance",
            explanation:
              "In thermodynamics, work is defined as the energy transferred when a force is applied over a distance."
          },
          {
            id: "3.3",
            question:
              "What is the difference between heat and temperature?",
            options: [
              "Heat is energy transfer, while temperature is a measure of average kinetic energy",
              "They are the same",
              "Temperature measures energy transfer, while heat measures energy content",
              "Heat is measured in Kelvin, temperature in Joules"
            ],
            correct: "Heat is energy transfer, while temperature is a measure of average kinetic energy",
            explanation:
              "Heat is the transfer of energy due to temperature difference, whereas temperature quantifies the average kinetic energy of particles."
          },
          {
            id: "3.4",
            question:
              "What is the SI unit of internal energy?",
            options: [
              "Joule (J)",
              "Watt (W)",
              "Newton (N)",
              "Pascal (Pa)"
            ],
            correct: "Joule (J)",
            explanation:
              "Internal energy is measured in Joules (J) in the SI system."
          },
          {
            id: "3.5",
            question:
              "Which process is characterized by no heat exchange with the surroundings?",
            options: [
              "Adiabatic process",
              "Isothermal process",
              "Isobaric process",
              "Isochoric process"
            ],
            correct: "Adiabatic process",
            explanation:
              "An adiabatic process occurs without any heat exchange between the system and its surroundings."
          },
          {
            id: "3.6",
            question:
              "What does the second law of thermodynamics imply about the entropy of an isolated system?",
            options: [
              "Entropy tends to increase",
              "Entropy remains constant",
              "Entropy tends to decrease",
              "Entropy is not defined for isolated systems"
            ],
            correct: "Entropy tends to increase",
            explanation:
              "The second law states that the entropy (disorder) of an isolated system will tend to increase over time."
          },
          {
            id: "3.7",
            question:
              "How is the efficiency of a heat engine defined?",
            options: [
              "Efficiency = Work output ÷ Heat input",
              "Efficiency = Heat input ÷ Work output",
              "Efficiency = Temperature difference ÷ Heat input",
              "Efficiency = Work output × Heat input"
            ],
            correct: "Efficiency = Work output ÷ Heat input",
            explanation:
              "The efficiency of a heat engine is the ratio of the work it produces to the heat energy input."
          }
        ]
      },
      {
        name: "Waves and Oscillations",
        questions: [
          {
            id: "3.1",
            question:
              "Which equation represents simple harmonic motion (SHM)?",
            options: [
              "x = A cos(ωt + φ)",
              "x = A sin(ωt)",
              "x = vt",
              "x = ½at²"
            ],
            correct: "x = A cos(ωt + φ)",
            explanation:
              "This equation describes SHM, where A is the amplitude, ω is the angular frequency, and φ is the phase constant."
          },
          {
            id: "3.2",
            question:
              "What is the amplitude in the context of SHM?",
            options: [
              "The maximum displacement from equilibrium",
              "The time period of the motion",
              "The angular frequency",
              "The equilibrium position"
            ],
            correct: "The maximum displacement from equilibrium",
            explanation:
              "Amplitude is defined as the maximum displacement of the oscillating object from its equilibrium position."
          },
          {
            id: "3.3",
            question:
              "What does angular frequency (ω) represent in SHM?",
            options: [
              "The rate of oscillation in radians per second",
              "The total number of oscillations per minute",
              "The time taken for one oscillation",
              "The maximum speed of the oscillating object"
            ],
            correct: "The rate of oscillation in radians per second",
            explanation:
              "Angular frequency quantifies how rapidly the system oscillates, measured in radians per second."
          },
          {
            id: "3.4",
            question:
              "How is the period of oscillation related to frequency?",
            options: [
              "Period = 1 ÷ Frequency",
              "Period = Frequency",
              "Period = Frequency²",
              "Period = 1 ÷ (2π Frequency)"
            ],
            correct: "Period = 1 ÷ Frequency",
            explanation:
              "The period is the reciprocal of the frequency; if frequency is the number of oscillations per second, then period is the time for one complete oscillation."
          },
          {
            id: "3.5",
            question:
              "What is phase difference in the context of wave motion?",
            options: [
              "The difference in phase between two waveforms or between two points on the same wave",
              "The amplitude difference between two waves",
              "The difference in frequency between two waves",
              "The time delay between two wave pulses"
            ],
            correct: "The difference in phase between two waveforms or between two points on the same wave",
            explanation:
              "Phase difference measures how 'out of step' two waves are, typically expressed in degrees or radians."
          },
          {
            id: "3.6",
            question:
              "How does damping affect an oscillatory system?",
            options: [
              "It gradually reduces the amplitude of oscillation over time",
              "It increases the period of oscillation indefinitely",
              "It causes the system to oscillate with constant amplitude",
              "It increases the energy of the system"
            ],
            correct: "It gradually reduces the amplitude of oscillation over time",
            explanation:
              "Damping forces (such as friction) cause energy loss, reducing the amplitude of oscillations progressively."
          },
          {
            id: "3.7",
            question:
              "What is resonance in the context of oscillations?",
            options: [
              "A condition where the system oscillates with maximum amplitude at a particular frequency",
              "A decrease in amplitude due to damping",
              "The frequency at which the system stops oscillating",
              "A type of interference pattern between waves"
            ],
            correct: "A condition where the system oscillates with maximum amplitude at a particular frequency",
            explanation:
              "Resonance occurs when the frequency of an external force matches the system's natural frequency, resulting in a significant increase in amplitude."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Quarter 4",
    subtopics: [
      {
        name: "Modern Physics",
        questions: [
          {
            id: "4.1",
            question:
              "Which phenomenon provided the first evidence for the particle nature of light?",
            options: [
              "Photoelectric effect",
              "Interference",
              "Diffraction",
              "Polarization"
            ],
            correct: "Photoelectric effect",
            explanation:
              "The photoelectric effect demonstrated that light can behave as discrete packets of energy (photons), supporting the particle theory of light."
          },
          {
            id: "4.2",
            question:
              "What is the principle of wave-particle duality?",
            options: [
              "Particles exhibit both wave and particle properties",
              "Waves can only behave as waves",
              "Particles always behave like particles",
              "Energy is quantized in discrete levels"
            ],
            correct: "Particles exhibit both wave and particle properties",
            explanation:
              "Wave-particle duality is a fundamental concept in quantum mechanics stating that particles such as electrons and photons exhibit both wave-like and particle-like properties."
          },
          {
            id: "4.3",
            question:
              "Which experiment provided evidence for quantized energy levels in atoms?",
            options: [
              "The hydrogen emission spectrum",
              "Double-slit experiment",
              "Millikan oil-drop experiment",
              "Young's experiment"
            ],
            correct: "The hydrogen emission spectrum",
            explanation:
              "The discrete lines observed in the hydrogen emission spectrum provided early evidence for quantized energy levels within atoms."
          },
          {
            id: "4.4",
            question:
              "What does the photoelectric effect demonstrate about the nature of light?",
            options: [
              "Light consists of photons with quantized energy",
              "Light behaves purely as a wave",
              "Light intensity does not affect electron emission",
              "Light has an infinite speed"
            ],
            correct: "Light consists of photons with quantized energy",
            explanation:
              "The photoelectric effect shows that light can eject electrons from a material only if its frequency is above a certain threshold, supporting the photon model of light."
          },
          {
            id: "4.5",
            question:
              "What is meant by a 'quantum leap' in atomic physics?",
            options: [
              "An electron transitions between discrete energy levels",
              "The continuous change of energy in an atom",
              "A gradual increase in electron speed",
              "The absorption of a photon by the nucleus"
            ],
            correct: "An electron transitions between discrete energy levels",
            explanation:
              "A quantum leap refers to the sudden change of an electron from one energy level to another without any intermediate state."
          },
          {
            id: "4.6",
            question:
              "Which facility is known for high-energy particle physics experiments?",
            options: [
              "The Large Hadron Collider (LHC)",
              "The Hubble Space Telescope",
              "The International Space Station",
              "The Very Large Array"
            ],
            correct: "The Large Hadron Collider (LHC)",
            explanation:
              "The LHC is one of the most powerful particle accelerators, used to study high-energy collisions and fundamental particles."
          },
          {
            id: "4.7",
            question:
              "How does the Heisenberg Uncertainty Principle affect our ability to measure subatomic particles?",
            options: [
              "It limits the precision of simultaneous measurements of certain pairs of observables",
              "It allows for infinite precision in measurements",
              "It only applies to macroscopic objects",
              "It states that energy is always conserved"
            ],
            correct: "It limits the precision of simultaneous measurements of certain pairs of observables",
            explanation:
              "The Uncertainty Principle asserts that there is a fundamental limit to the precision with which pairs of physical properties, such as position and momentum, can be known simultaneously."
          }
        ]
      },
      {
        name: "Optics",
        questions: [
          {
            id: "4.1",
            question:
              "Which law relates the angles of incidence and refraction for a light ray passing between two media?",
            options: [
              "Snell's Law",
              "Huygens' Principle",
              "Fermat's Principle",
              "Law of Reflection"
            ],
            correct: "Snell's Law",
            explanation:
              "Snell's Law mathematically relates the sine of the angle of incidence to the sine of the angle of refraction using the refractive indices of the two media."
          },
          {
            id: "4.2",
            question:
              "What is the mirror equation for spherical mirrors?",
            options: [
              "1/f = 1/do + 1/di",
              "f = do + di",
              "f = do - di",
              "1/f = 1/do - 1/di"
            ],
            correct: "1/f = 1/do + 1/di",
            explanation:
              "The mirror equation relates the focal length (f) to the object distance (do) and the image distance (di) for spherical mirrors."
          },
          {
            id: "4.3",
            question:
              "For a concave mirror, what is the relationship between the focal length and the radius of curvature?",
            options: [
              "f = R/2",
              "f = R",
              "f = 2R",
              "f = R²"
            ],
            correct: "f = R/2",
            explanation:
              "For a spherical mirror, the focal length is half the radius of curvature."
          },
          {
            id: "4.4",
            question:
              "What does the term 'diffraction' refer to in optics?",
            options: [
              "The bending of light around obstacles or through small apertures",
              "The reflection of light off a surface",
              "The absorption of light by a material",
              "The splitting of light into its component colors"
            ],
            correct: "The bending of light around obstacles or through small apertures",
            explanation:
              "Diffraction is the phenomenon where light bends around obstacles or spreads as it passes through narrow openings."
          },
          {
            id: "4.5",
            question:
              "How does a convex lens form an image?",
            options: [
              "By converging parallel rays to a focal point",
              "By diverging parallel rays",
              "By reflecting light",
              "By absorbing light"
            ],
            correct: "By converging parallel rays to a focal point",
            explanation:
              "A convex (converging) lens bends parallel incoming light rays so that they meet at a common focal point, forming an image."
          },
          {
            id: "4.6",
            question:
              "What is total internal reflection?",
            options: [
              "When a light ray is completely reflected back into the medium",
              "When light passes from a denser to a rarer medium with no reflection",
              "When light is absorbed completely by a medium",
              "When light is refracted at a 90° angle"
            ],
            correct: "When a light ray is completely reflected back into the medium",
            explanation:
              "Total internal reflection occurs when light attempts to move from a medium with a higher refractive index to one with a lower refractive index at an angle greater than the critical angle, resulting in all light being reflected."
          },
          {
            id: "4.7",
            question:
              "What is the primary function of a prism in optics?",
            options: [
              "To disperse white light into its component colors",
              "To focus light to a point",
              "To reflect light",
              "To polarize light"
            ],
            correct: "To disperse white light into its component colors",
            explanation:
              "A prism separates white light into its spectrum of colors by refracting different wavelengths at different angles."
          }
        ]
      }
    ]
  }
];


const TestsPage = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<number | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handler for selecting an answer
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  // Determine if all questions in the selected subtopic have been answered
  let isAllAnswered = false;
  let currentQuestions: {
    id: string;
    question: string;
    options: string[];
    correct: string;
    explanation: string;
  }[] = [];

  if (selectedQuarter !== null && selectedSubtopic !== null) {
    currentQuestions = tests[selectedQuarter].subtopics[selectedSubtopic].questions;
    isAllAnswered = currentQuestions.every((q) => !!selectedAnswers[q.id]);
  }

  // Handler for submitting answers
  const handleSubmit = () => {
    if (!isAllAnswered) return;
    setShowResults(true);

    let newScore = 0;
    for (const question of currentQuestions) {
      if (selectedAnswers[question.id] === question.correct) {
        newScore++;
      }
    }
    setScore(newScore);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 py-20">
      {/* Mobile navbar */}
      <div className="p-4 md:hidden flex justify-between items-center bg-gray-100 shadow">
        <h2 className="text-lg font-bold">Physics Tests</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-black p-2 border border-gray-400 rounded focus:outline-none"
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar for desktop & mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 768) && (
          <motion.div
            className="z-30 w-3/4 sm:w-1/2 md:w-1/4 bg-gray-100 p-4 shadow-lg h-screen md:h-auto overflow-y-auto"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
          >
            <h2 className="text-lg font-bold mb-4 hidden md:block">
              Physics Tests by Quarters
            </h2>
            {tests.map((quarter, qIndex) => (
              <div key={qIndex} className="mb-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full p-2 text-left transition-all border rounded-lg ${
                    selectedQuarter === qIndex ? "bg-blue-600 text-white" : "bg-white text-black"
                  }`}
                  onClick={() => {
                    setSelectedQuarter(selectedQuarter === qIndex ? null : qIndex);
                    setSelectedSubtopic(null);
                    setShowResults(false);
                    if (window.innerWidth < 768) {
                      setIsSidebarOpen(false);
                    }
                  }}
                >
                  {quarter.name}
                </motion.button>
                <AnimatePresence>
                  {selectedQuarter === qIndex && (
                    <motion.div
                      className="pl-4 mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {quarter.subtopics.map((subtopic, sIndex) => (
                        <motion.button
                          key={sIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full p-2 text-left transition-all border rounded-lg ${
                            selectedSubtopic === sIndex ? "bg-gray-300" : "bg-white"
                          }`}
                          onClick={() => {
                            setSelectedSubtopic(sIndex);
                            setShowResults(false);
                            if (window.innerWidth < 768) {
                              setIsSidebarOpen(false);
                            }
                          }}
                        >
                          {subtopic.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className="flex-1 p-6 flex flex-col items-center mt-4 md:mt-0">
        {selectedQuarter !== null && selectedSubtopic !== null ? (
          <motion.div
            className="max-w-2xl bg-white p-6 shadow-md rounded-lg w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              {tests[selectedQuarter].subtopics[selectedSubtopic].name}
            </h2>
            {currentQuestions.map((question) => (
              <div key={question.id} className="mb-6">
                <h3 className="text-lg font-semibold">{question.question}</h3>
                <ul className="mt-2">
                  {question.options.map((option) => (
                    <li key={option} className="mt-1">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          className="mr-2"
                          checked={selectedAnswers[question.id] === option}
                          onChange={() => handleAnswerSelect(question.id, option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              className={`mt-4 text-white p-2 rounded-lg ${
                isAllAnswered ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isAllAnswered}
              onClick={handleSubmit}
            >
              Submit Answers
            </button>
            {showResults && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Results</h3>
                <p className="text-lg">
                  Your score: {score} / {currentQuestions.length}
                </p>
                {currentQuestions.map((question) => (
                  <div key={question.id} className="mt-4">
                    <p className="font-bold">{question.question}</p>
                    <p>Your answer: {selectedAnswers[question.id] || "No answer selected"}</p>
                    <p className="text-green-600">Correct answer: {question.correct}</p>
                    <p className="text-gray-600">{question.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src="images/lesson_placeholder_icon.png"
              className="w-32 mx-auto mb-4"
              alt="No topic"
            />
            <h2 className="text-xl font-semibold">No Subtopic Selected</h2>
            <p>Please select a subtopic to view its content.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TestsPage;
