const maharishi_org = [
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Centre for Educational Excellence - Bhopal.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Centre for Educational Excellence (MCEE), Bhopal",
    description: "A hub for teacher development and student enrichment—labs, library, arts, TM & Yog halls—serving the wider movement.",
    url:"https://mceebhopal.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Vidya Mandir Schools Group.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Vidya Mandir (MVM) Schools Group",
    description: "Nationwide K–12 schooling that blends strong academics with daily meditation, yoga, and value-based learning.",
    url:"https://mvmindia.com"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Institute of Management.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Institute of Management (MIM)",
    description: "Management education that integrates modern tools with consciousness-based principles to create ethical, effective leaders.",
    url:"https://maharishiinstituteofmanagement.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Ved Vigyan Vishwa Vidyapeetham.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Ved Vigyan Vishwa Vidyapeetham",
    description: "Vedic pundit training and performance of Yagyas, Sanskaras, and Vedic ceremonies grounded in deep practice.",
    url:"https://mvvvvp.in"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Mahesh Yogi Vedic Vishwavidyalaya.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya (MMYVV)",
    description: "A statutory Vedic university imparting education across the forty aspects of Vedic Science.",
    url:"https://mmyvv.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Shiksha Sansthan.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Shiksha Sansthan (Department of Education) — Bilaspur",
    description: "The education society anchoring schools and institutes across India.",
    url:"https://mssedub.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Mahavidyalaya.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Mahavidyalaya",
    description: "Undergraduate colleges fostering character, competence, and culture.",
    url:"https://mmahavidyalaya.com"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Vedic Health Centre.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Vedic Health Centre",
    description: "Preventive healthcare and Ayurvedic treatments within Maharishi’s Vedic Health approach.",
    url:"https://mvhc.in"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Corporate Development Programme.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Corporate Development Programme (MCDP)",
    description: "Human-resource uplift through consciousness—enhancing clarity, creativity, and organizational success.",
    url:"https://mcdpindia.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Kids Home.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Kids Home",
    description: "Early-years education inspired by Vedic wisdom in a joyful, nurturing setting.",
    url:"https://mkhbhopal1.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi School of Excellence - Chennai.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi School of Excellence — Chennai",
    description: "Holistic CBSE schooling with daily TM, Yog, and values-led academics.",
    url:"https://msechennai.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Centre for Excellence - Bengaluru.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Centre for Excellence — Bengaluru",
    description: "Premium campus uniting rigorous study with meditation, arts, and sports.",
    url:"https://mcebengaluru.org"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Bliss Residency.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Bliss Residency",
    description: "Senior living with comfort, culture, and wellbeing—designed for a calm, dignified lifestyle.",
    url:"https://mbrindia.in"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Information Technology Pvt. Ltd..webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Information Technology Pvt. Ltd. (MITPL)",
    description: "IT education, software, and digital solutions supporting institutional growth.",
    url:"https://mitpltd.com"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi Ideal India Campaign.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi Ideal India Campaign",
    description: "A nationwide initiative to awaken values and harmony across all fields of life.",
    url:"https://ideal-india.in"
  },
  {
    image:"assets/mlx_assets/images/organization/org_list/Maharishi World Peace Movement.webp",
    category: "Organizations",
    team: "Team Maharishi",
    title: "Maharishi World Peace Movement",
    description: "Carrying forward the global spiritual movement for coherence and peace.",
    url:"https://mwpm.in"
  }
];


const container = document.getElementById("sermon-list");

let html = "";
maharishi_org.forEach(eachorg => {
  html += `
    <div class="sermon aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1000">

      <div class="sermon-img">
        <div class="sermon-media">
          <img src="${eachorg.image}" alt="Sermon Image">
          <video controls>
            <source src="assets/videos/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="audio-player style2">
            <audio controls>
              <source src="assets/music/audio-4.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        
      </div>

      <div class="sermon-data">
        <ul>
          <li>${eachorg.category}</li>
          <li>${eachorg.team}</li>
        </ul>
        <h3><a href="${eachorg.url}" target="_blank">${eachorg.title}</a></h3>
        <p>${eachorg.description}</p>
      </div>

    </div>
  `;
});

container.innerHTML = html;
