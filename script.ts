const generateEditableResume = () => {
    // Basic Information
    const firstName = (document.getElementById("first") as HTMLInputElement).value;
    const surName = (document.getElementById("sur") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const postcode = (document.getElementById("post-code") as HTMLInputElement).value;
    const country = (document.getElementById("country") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const profession = (document.getElementById("profession") as HTMLInputElement).value;

    // Education
    const schoolName = (document.getElementById("school-name") as HTMLInputElement).value;
    const schoolLocation = (document.getElementById("school-location") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const field = (document.getElementById("field") as HTMLInputElement).value;
    const educationStartDate = (document.getElementById("edu-start-date") as HTMLInputElement).value;
    const educationEndDate = (document.getElementById("edu-end-date") as HTMLInputElement).value;

    // Skills 
    const skills = Array.from(document.getElementsByClassName("skillValue") as HTMLCollectionOf<HTMLInputElement>)
        .map(skillInput => skillInput.value);

    // Reference
    const reference = (document.getElementById("reference") as HTMLInputElement).value;

    // Work Experience
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const employer = (document.getElementById("employer") as HTMLInputElement).value;
    const jobLocation = (document.getElementById("job-location") as HTMLInputElement).value;
    const jobType = (document.getElementById("job-type") as HTMLInputElement).value;
    const jobStartDate = (document.getElementById("job-start-date") as HTMLInputElement).value;
    const jobEndDate = (document.getElementById("job-end-date") as HTMLInputElement).value;
    const jobDescription = (document.getElementById("job-description") as HTMLInputElement).value;

    const resume = `
    <html>
      <head>
        <title>Editable Resume</title>
        <style>
         @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
        *{
            margin: 0;
            padding: 0
            font-family: "Lato", sans-serif;
        }
        html, body {
        overflow-x: hidden;
        }
        .resume-main {
            width: 100%;
            padding: 10px;
            display: flex;
            justify-content: space-between;
        }
        .left {
            width: 20%;
            background-color: #163853;
            display: flex;
            flex-direction: column;
            padding: 50px 50px;
            gap: 50px;
            text-align: left;
        }
        .right {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 100px;
            padding: 50px 50px;
        }
        .image {
            border-radius: 50%;
            border: 4px solid white;
        }
        .profile-image {
            border-radius: 50%;
        }
        .contact {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .c-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .c-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }
        .w-link a {
            color: white;
            text-decoration: none;
        }
        .education {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .e-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .e-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }
        .college {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .school {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .duration {
            font-weight: 500;
        }
        .institute {
            font-weight: 500;
            font-size: 15px;
        }
        .skills {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .s-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .s-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }
        .language {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .l-heading {
            font-size: 30px;
            color: white;
            border-bottom: 2px solid white;
        }
        .l-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-family: "Lato", sans-serif;
            font-weight: 100;
            color: #fff;
        }

        /* Right Section Properties */

        .intro {
            display: flex;
            flex-direction: column;
            gap: 8px;
            line-height: 45px;
        }
        .name {
            font-size: 80px;
            letter-spacing: -2px;
            font-weight: bold;
        }
        .profession {
            font-size: 25px;
            font-weight: 500;
            color: gray;
            letter-spacing: -1px;
        }
        .line {
            height: 3px;
            width: 50px;
            background-color: #163853;
            margin-top: -10px;
        }
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .profile {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .p-heading {
            font-size: 30px;
            color: #163853;
            border-bottom: 2px solid #163853;
            font-weight: 700;
        }
        .p-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-weight: 100;
            color: #fff;
        }
        .p-para {
            color: gray;
            font-weight: 400;
        }
        .works {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .work-heading {
            font-size: 30px;
            color: #163853;
            border-bottom: 2px solid #163853;
            font-weight: 700;
        }
        .work-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: smaller;
            font-weight: 100;
            color: #fff;
        }
        .b-s {
            padding: 0px 5px;
            display: flex;
            flex-direction: column;
        }
        .work-item-heading {
            font-size: 16px;
            color: black;
            font-weight: 400;
        }
        .work-item-desc {
            display: flex;
            flex-direction: column;
            gap: 2px;
            font-weight: 400;
            color: #52525b;
            width: 80%;
            text-align: justify;
        }
        .job-desc {
            color: gray;
            font-size: 14px;
            font-weight: 400;
        }
        .r-heading {
            font-size: 30px;
            color: #163853;
            border-bottom: 2px solid #163853;
            font-weight: 700;
        }
        .r-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: smaller;
            font-weight: 100;
            color: #fff;
            padding-top: 10px;
        }
        .r-text {
            font-weight: 400;
            color: gray;
        }
        }
        </style>
      </head>
      <body>
        <main class="resume-main">
          <!-- Left Section -->
          <div class="left">
            <div class="contact">
              <div class="c-heading">CONTACT</div>
              <div class="c-content">
                <div contenteditable="true">${phone}</div>
                <div contenteditable="true">${email}</div>
                <div contenteditable="true">${postcode} | ${city}, ${country}</div>
              </div>
            </div>
            <div class="education">
              <div class="e-heading">EDUCATION</div>
              <div class="e-content">
                <div class="college">
                  <div class="duration" contenteditable="true">${educationStartDate} - ${educationEndDate}</div>
                  <div class="institute" contenteditable="true">${schoolName} in ${schoolLocation}</div>
                  <div><li class="field" contenteditable="true">${degree} in ${field}</li></div>
                </div>
              </div>
            </div>
            <div class="skills">
              <div class="s-heading">SKILLS</div>
              <div class="s-content">
                ${skills.map(skill => `<div class="skill"><li contenteditable="true">${skill}</li></div>`).join('')}
              </div>
            </div>
          </div>
          
          <!-- Right Section -->
          <div class="right">
            <div class="intro">
              <div class="name" contenteditable="true">${firstName} ${surName}</div>
              <div class="profession" contenteditable="true">${profession}</div>
              <div class="line"></div>
            </div>
            
            <div class="main-content">
              <div class="works">
                <div class="work-heading">WORK EXPERIENCE</div>
                <div class="work-content">
                  <div class="b-s">
                    <div class="work-item-heading" contenteditable="true">${jobTitle} at ${employer} in ${jobLocation}</div>
                    <div class="work-item-desc">
                      <div contenteditable="true">${jobStartDate} - ${jobEndDate}</div>
                      <div><li contenteditable="true">${jobType}</li></div>
                      <div contenteditable="true">${jobDescription}</div>
                    </div>
                  </div>                        
                </div>
              </div>
              
              <div class="reference">
                <div class="r-heading">REFERENCE</div>
                <div class="r-content">
                  <div class="r-text"><li contenteditable="true">${reference}</li></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
    `;

    document.write(resume);
};
