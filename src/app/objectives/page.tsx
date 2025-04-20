"use client";

import { useState } from "react";

// Цвета для юнитов
const unitColors: Record<string, string> = {
  "11.1A - Physical Quantities and Measurement": "border-blue-600",
  "11.1B - Kinematics of fluids": "border-green-600",
  "11.2A - Dynamics": "border-red-600",
  "11.2B - Laws of Conservation": "border-yellow-500",
  "11.3A - Oscillations and Waves": "border-purple-600",
  "11.3B - Thermal Physics": "border-pink-600",
  "11.4A - Geometric Optics": "border-indigo-600",
};

const learningObjectives = [
  {
    unit: '11.1A - Physical Quantities and Measurement',
    topic: `SI prefixes, symbols and units. Vector and scalar quantities. Checking homogeneityof physical equations.`,
    description: [`
      Use the following prefixes and their symbols to indicate decimal sub-multiples or multiples of both base and derived units: pico (p), nano (n), micro (μ), milli (m), centi (c), deci (d), kilo (k), mega (M), giga (G) and tera (T).
Use SI base units to check the homogeneity of physical equations;

      `],
  },
  {
    unit: '11.1A - Physical Quantities and Measurement',
    topic: 'Addition and subtraction of parallel and non-parallel vectors. Representing vectors using perpendicular components.',
    description: [`
      Add and subtract parallel and non-parallel vectors;
Represent a vector as two perpendicular components;
`],
  },
  {
    unit: '11.1A - Physical Quantities and Measurement',
    topic: 'Systematic and random errors. Precision and accuracy. Calculation of uncertainties',
    description: [`
      Show an understanding of the distinction between systematic errors (including zero errors) and random errors; 
Show an understanding of the distinction between precision and accuracy; 
Comment on trends (validity, forecasts, methods of improvement) in results; 
Calculate uncertainties (including graphically); 
Be able to identify the number of significant figures and number of digits after a point;
`],
  },
  {
    unit: '11.1A - Physical Quantities and Measurement',
    topic: 'Relationship forms of y=mx+c.  Analysis of relationships in the forms y=axn and y=aekx. Alternative to Practical (Solving problems from Cambridge International Advanced Level. Paper 5).',
    description: [`Derive a relationship between two variables or recognise a constant; 
Analyse relationships in forms y=axn  and y=aekx. Analyse logarithmic relationships.
`],
  },
  {
    unit: '11.1A - Physical Quantities and Measurement',
    topic: 'Laboratory work No.1. Composition of forces, guided at an angle',
    description: ['Pendulums', 'Damped Oscillations', 'Laboratory Work No.7: Simple Pendulum Oscillations'],
  },
  {
      unit: '11.1A - Physical Quantities and Measurement',
      topic: 'Determination of relative accuracy at measuring of physical quantities. Alternative to Practical (Cambridge International Advanced Level. Paper 5)Laboratory work No.2.Determination of relative accuracy at measuring of physical quantities.SA1',
      description: ['Pendulums', 'Damped Oscillations', 'Laboratory Work No.7: Simple Pendulum Oscillations'],
    },
    {
      unit: '11.1B - Kinematics',
      topic: 'Speed, displacement, velocity and acceleration.',
      description: ['Pendulums', 'Damped Oscillations', 'Laboratory Work No.7: Simple Pendulum Oscillations'],
    },
    {
      unit: '11.1B - Kinematics',
      topic: 'Motion graphs (distance, velocity and acceleration against time).',
      description: ['Pendulums', 'Damped Oscillations', 'Laboratory Work No.7: Simple Pendulum Oscillations'],
    },
    {
      unit: '11.1B - Kinematics',
      topic: 'Motion in a gravity field. Circular motion',
      description: ['Pendulums', 'Damped Oscillations', 'Laboratory Work No.7: Simple Pendulum Oscillations'],
    },
    {
      unit:'11.1B - Kinematics of fluids',
      topic:"Incompressible fluid. Hydrostatic pressure. Pascal's Law and its application to communicating vessels and hydraulic presses",
      description:['']
   },
   {
    unit:'11.1B - Kinematics of fluids',
    topic:"Archimedes' principle. Solving problems: Hydrostatics.",
    description:['']
 },
  {
    unit:'11.1B - Kinematics of fluids',
    topic:"Terminology of fluid flow: viscosity, an ideal liquid,streamline, tube of flow, steady (laminar) and turbulent flow (Reynolds number). Equation of continuity.",
    description:['']
 },
 {
  unit:'11.1B - Kinematics of fluids',
  topic:"Laboratory work No.3. Investigation of dependency of ball velocity on its radius at  motion in a viscous fluid.",
  
  description:['']
},
{
 unit:'11.1B - Kinematics of fluids',
 topic:"Solving problems: Fluids at rest. Kinematics of fluid",
 
 description:['']
},
{
unit:'11.1B - Kinematics of fluids',
topic:"Laboratory work No.5. Investigation of dependency of velocity of stream on height of  fluid level",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Cause and types of deformation of solids. Hooke's law. Definitions of load, extension, elastic limit and spring constant. Problem solving on Hooke's law and combination of springs.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Definition of stress, strain and Young's modulus. Solving problems.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Laboratory work No.6. Determination of Young modulus.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Describing elastic and plastic deformation of materials (brittle and ductile materials). Elastic potential energy. Solving problems: Stress against strain graph, force against extension graph.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Gravitational field. Newton’s law of gravitation. Gravitational field strength. Gravitational potential.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Solving problems: Gravitational potential. Energy in gravitational field. Gravitational field strength.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Qualitative and quantitative analogy between gravitational field and electric field. Solving problems.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Circular orbits and escape velocity. Solving problems.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Geostationary orbits and their application. Solving problems.",

description:['']
},
{
unit:'11.2A - Dynamics',
topic:"Solving problems: Deforming of solids. Alternative to Practical: Gravitational field",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Linear momentum. Relate resultant force with change of linear momentum. Solving related problems.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"The law of Conservation of momentum. Elastic and inelastic collisions.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Solving problems: Conservation of momentum.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Review: Deforming of solids. Solving problems.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Review: Gravitational field. Solving problems.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Review: Momentum, Conservation of momentum. Solving problems.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Unit Review and Practice.",

description:['']
},
{
unit:'11.2B - Laws of Conservation',
topic:"Review of all learning objectives 2 term.",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Description and examples of free oscillations. Physical quantities describing oscillatory motion.",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Equation of harmonic oscillations. Description of simple harmonic motion (SHM).",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Solving problems: Simple harmonic motion.",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Laboratory work No. 7.Investigation of simple pendulum oscillations",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Energy conversion during oscillations.",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Laboratory work No. 8. Investigation of spring pendulum oscillations",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Forced oscillations. Resonance. Uses/advantages and disadvantages of resonance",

description:['']
},
{
unit:'11.3A - Oscillations and Waves',
topic:"Damped oscillations.Laboratory work No. 9. Investigation of damped oscillations.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Molecular-kinetic theory. Some definitions and relationships (mole, Avogadro constant, Standard temperature and pressure, Avogadro law, number of molecules, number of moles, the mass of single atom, molar mass). Model of an ideal gas. Partial pressure. Dalton’s law.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"The kinetic theory equation. An ideal gas equation. Solving problems",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"The average translational kinetic energy (derivation and relationship with temperature). Solving problems.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"The gas laws (Boyle’s law, Charles’ law, Pressure law). Graphs of isoprocesses.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Laboratory work No.10. Investigation of isothermic process.Laboratory work No.11. Investigation of isobarprocess.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Saturated vapor. Surface tension. Capillary effect. ",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Laboratory work No.12. Determination of water surface tension coefficient. (one option may be example of external exam on 2018 y.)",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Internal energy. Internal energy of an ideal gas. Work done by/on the gas in isobaric process.The first law of thermodynamics.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Solving problems: Molecular physics and first law of thermodynamics",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Comparison between adiabatic and isothermal processes. Solving problems.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"The second law of thermodynamics. The concept of entropy. Solving problems.",

description:['']
},
{
unit:'11.3B - Thermal Physics',
topic:"Principles of work of heat engines. Efficiency of heat engines. Carnot cycle.",

description:['']
},
{
unit:'11.4A - Geometric Optics',
topic:"Spherical mirrors. Definitions and important ray paths. The mirror formula. ",

description:['']
},
{
unit:'11.4A - Geometric Optics',
topic:"Solving problems: Spherical mirrors.",

description:['']
},
{
unit:'11.4A - Geometric Optics',
topic:"Principle of Huygens.Refraction of light. Snell’s law. Laboratory work No.13. Investigation of refraction on boundary of two fluids. ",

description:['']
},
{
unit:'11.4A - Geometric Optics',
topic:"Spherical mirrors. Definitions and important ray paths. The mirror formula. ",

description:['']
},
{
unit:'11.4A - Geometric Optics',
topic:"Spherical mirrors. Definitions and important ray paths. The mirror formula. ",

description:['']
},
{
unit:'11.4A - Geometric Optics',
topic:"Spherical mirrors. Definitions and important ray paths. The mirror formula. ",

description:['']
}
]

const LearningObjectivesPage = () => {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  // Получаем список уникальных юнитов
  const uniqueUnits = Array.from(
    new Set(learningObjectives.map((obj) => obj.unit))
  );

  // Фильтрованные данные
  const filteredObjectives = selectedUnit
    ? learningObjectives.filter((obj) => obj.unit === selectedUnit)
    : learningObjectives;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 pt-24">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Learning Objectives
      </h1>

      {/* Фильтр по юнитам */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${
            selectedUnit === null
              ? "bg-blue-600 text-white"
              : "bg-white text-black border"
          }`}
          onClick={() => setSelectedUnit(null)}
        >
          All Units
        </button>
        {uniqueUnits.map((unit, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${
              selectedUnit === unit
                ? "bg-blue-600 text-white"
                : "bg-white text-black border"
            }`}
            onClick={() => setSelectedUnit(unit)}
          >
            {unit}
          </button>
        ))}
      </div>

      {/* Карточки с Learning Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredObjectives.map((obj, index) => {
          const unitColor = unitColors[obj.unit] || "border-gray-600"; // Цвет по юниту
          return (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${unitColor}`}
            >
              <h2 className="text-xl font-semibold text-gray-800">{obj.unit}:{obj.topic}</h2>
              <ul className="mt-3 text-gray-600 list-disc pl-5 space-y-2">
                {obj.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningObjectivesPage;
