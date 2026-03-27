import React, { useState } from "react";

function ResumeBuilder() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
    education: "",
    skills: "",
    experience: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">

      {/* LEFT SIDE FORM */}
      <div className="form">
        <h2>Resume Builder</h2>

        <div className="section">
          <h4>Personal Info</h4>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="linkedin" placeholder="LinkedIn" onChange={handleChange} />
        </div>

        <div className="section">
          <h4>Professional Summary</h4>
          <textarea name="summary" placeholder="Write summary..." onChange={handleChange} />
        </div>

        <div className="section">
          <h4>Education</h4>
          <textarea name="education" placeholder="Your education details" onChange={handleChange} />
        </div>

        <div className="section">
          <h4>Skills</h4>
          <textarea
            name="skills"
            placeholder="e.g. Java, React, SQL"
            onChange={handleChange}
          />
        </div>

        <div className="section">
          <h4>Experience</h4>
          <textarea
            name="experience"
            placeholder="Write each experience in new line"
            onChange={handleChange}
          />
        </div>

        <div className="section">
          <h4>Achievements</h4>
          <textarea
            name="achievements"
            placeholder="Write each achievement in new line"
            onChange={handleChange}
          />
        </div>

      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="preview">

        <div className="resume-header">
          <h1>{data.name || "Your Name"}</h1>
          <p>
            {data.email || "email@example.com"} | {data.phone || "1234567890"}
          </p>
          <p>{data.linkedin}</p>
        </div>

        <div className="resume-body">

          {/* LEFT COLUMN */}
          <div className="left">
            <h3>Skills</h3>
            <div className="tags">
              {data.skills
                ? data.skills.split(",").map((s, i) => (
                    <span key={i}>{s.trim()}</span>
                  ))
                : <p>No skills added</p>}
            </div>

            <h3>Education</h3>
            <p>{data.education || "Your education details"}</p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right">
            <h3>Professional Summary</h3>
            <p>{data.summary || "Your summary"}</p>

            <h3>Experience</h3>
            <ul>
              {data.experience
                ? data.experience.split("\n").map((e, i) => (
                    <li key={i}>{e}</li>
                  ))
                : <li>No experience added</li>}
            </ul>

            <h3>Achievements</h3>
            <ul>
              {data.achievements
                ? data.achievements.split("\n").map((a, i) => (
                    <li key={i}>{a}</li>
                  ))
                : <li>No achievements</li>}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ResumeBuilder;