"use client";

import { useState } from "react";
import Skill from "./Skill";
import SkillsText from "./SkillsText";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState("web");

    const skills = {
        web: [
            {
                name: "React",
                percent: 90
            },
            {
                name: "Gatsby",
                percent: 90
            },
            {
                name: "Next.JS",
                percent: 75
            },
            {
                name: "Node JS",
                percent: 80
            },
            {
                name: "Express JS",
                percent: 90
            },
            {
                name: "MonggoDB",
                percent: 90
            },
            {
                name: "MySQL",
                percent: 85
            },
        ],
        others: [
            {
                name: "React Native",
                percent: 85
            },
            {
                name: "Electron JS",
                percent: 90
            },
            {
                name: "Johnny Five",
                percent: 75
            },
            {
                name: "Svelte",
                percent: 70
            },
            {
                name: "Redux",
                percent: 80
            },
            {
                name: "MonggoDB",
                percent: 90
            },
            {
                name: "GraphQL",
                percent: 80
            },
            {
                name: "Jest",
                percent: 65
            },
            {
                name: "Mocha",
                percent: 65
            },
            {
                name: "Cypress",
                percent: 65
            },
            {
                name: "SVG",
                percent: 80
            },
        ],
        programming: [
            {
                name: "JavaScript",
                percent: 90
            },
            {
                name: "C",
                percent: 90
            },
            {
                name: "C++",
                percent: 75
            },
            {
                name: "Python",
                percent: 50
            },
            {
                name: "Java",
                percent: 50
            },
        ],
        tools: [
            {
                name: "Git",
                percent: 90
            },
            {
                name: "Photoshop",
                percent: 75
            },
            {
                name: "Illustrator",
                percent: 70
            },
            {
                name: "Travis CI",
                percent: 85
            },
            {
                name: "Circle CI",
                percent: 80
            },
            {
                name: "AppVeyor",
                percent: 75
            },
            {
                name: "Docker",
                percent: 60
            },
            {
                name: "Kubernetes",
                percent: 30
            },
        ]
    }


    return (
        <section className="relative mt-[200px] pl-[100px]">
            {/* Tabs or Buttons */}
            <div className="flex gap-[15px]">
                <button
                    className={`text-white/85 text-lg leading-[26px px-[27.5px] py-[6.5px] border-2 border-[#00CF5D] rounded-[4px] cursor-pointer ${selectedSkill === "web" ? "font-black bg-[#00CF5D]" : ""} transition`}
                    onClick={() => setSelectedSkill("web")}
                >Web</button>
                <button
                    className={`text-white/85 text-lg leading-[26px px-[27.5px] py-[6.5px] border-2 border-[#00CF5D] rounded-[4px] cursor-pointer ${selectedSkill === "others" ? "font-black bg-[#00CF5D]" : ""} transition`}
                    onClick={() => setSelectedSkill("others")}
                >Others</button>
                <button
                    className={`text-white/85 text-lg leading-[26px px-[27.5px] py-[6.5px] border-2 border-[#00CF5D] rounded-[4px] cursor-pointer ${selectedSkill === "programming" ? "font-black bg-[#00CF5D]" : ""} transition`}
                    onClick={() => setSelectedSkill("programming")}
                >Programming</button>
                <button
                    className={`text-white/85 text-lg leading-[26px px-[27.5px] py-[6.5px] border-2 border-[#00CF5D] rounded-[4px] cursor-pointer ${selectedSkill === "tools" ? "font-black bg-[#00CF5D]" : ""} transition`}
                    onClick={() => setSelectedSkill("tools")}
                >Tools</button>
            </div>

            {/* Skills for each tab */}
            <div className="flex flex-wrap gap-[30px] mt-[25px]">
                {
                    skills[selectedSkill].map((skill, idx) => <Skill key={idx} name={skill.name} percent={skill.percent} />)
                }
            </div>

            {/* Skills side text */}
            <div className="absolute left-[-80px] top-[100px]">
                <SkillsText />
            </div>
        </section>
    );
};

export default Skills;