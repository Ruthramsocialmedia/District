const districts = [
  {
    id: 1,
    name: "East Khasi Hills",
    headquarters: "Shillong",
    region: "Khasi Hills Region",
    description:
      "The most populous district of Meghalaya, home to the state capital Shillong. Known for its colonial architecture, stunning waterfalls like Elephant Falls, and the bustling capital charm. It's a hub of education and culture in the state.",
    population: "825,000",
    area: "2,752 sq km",
    features: [
      "State Capital",
      "Waterfalls",
      "Colonial Architecture",
      "Educational Hub",
    ],
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/elephant-falls-shillong-meghalaya-hero?qlt=82&ts=1742178199866",
    topDestinations: "https://en.wikipedia.org/wiki/East_Khasi_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g297651-Jowai_Jaintia_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 2,
    name: "West Khasi Hills",
    headquarters: "Nongstoin",
    region: "Khasi Hills Region",
    description:
      "Famous for its scenic villages, mysterious caves, and ancient monoliths. The district offers breathtaking landscapes and is known for its rich cultural heritage and traditional practices.",
    population: "385,000",
    area: "5,247 sq km",
    features: [
      "Ancient Monoliths",
      "Caves",
      "Scenic Villages",
      "Cultural Heritage",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Langshiang_Falls_Located_in_Sangriang%2C_Nongstoin.jpg",
    topDestinations: "https://en.wikipedia.org/wiki/West_Khasi_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g1156104-Nongstoin_West_Khasi_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 3,
    name: "South West Khasi Hills",
    headquarters: "Mawkyrwat",
    region: "Khasi Hills Region",
    description:
      "A relatively new district known for its rolling hills, peaceful countryside, and preservation of local heritage. It's an ideal destination for those seeking tranquility and authentic cultural experiences.",
    population: "110,000",
    area: "1,341 sq km",
    features: [
      "Rolling Hills",
      "Peaceful Countryside",
      "Local Heritage",
      "Tranquility",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/P_20170518_153253.jpg",
    topDestinations:
      "https://en.wikipedia.org/wiki/South_West_Khasi_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g1156104-Nongstoin_West_Khasi_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 4,
    name: "Eastern West Khasi Hills",
    headquarters: "Mairang",
    region: "Khasi Hills Region",
    description:
      "Home to beautiful waterfalls, traditional crafts, and spectacular hilltop views. The district showcases the natural beauty and artistic traditions of the Khasi people.",
    population: "130,000",
    area: "2,000 sq km",
    features: [
      "Waterfalls",
      "Traditional Crafts",
      "Hilltop Views",
      "Natural Beauty",
    ],
    image:
      "https://highlandpost.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-7.18.12-PM.jpeg",
    topDestinations: "https://en.wikipedia.org/wiki/East_Khasi_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g1156104-Nongstoin_West_Khasi_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 5,
    name: "West Jaintia Hills",
    headquarters: "Jowai",
    region: "Jaintia Hills Region",
    description:
      "Known for its sacred groves and rich tribal traditions. The district is a center of Jaintia culture with unique festivals and traditional practices that have been preserved for generations.",
    population: "270,000",
    area: "1,693 sq km",
    features: [
      "Sacred Groves",
      "Tribal Traditions",
      "Cultural Festivals",
      "Traditional Practices",
    ],
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/jowai-shillong-meghalaya-1-attr-hero?qlt=82&ts=1751460559283",
    topDestinations:
      "https://en.wikipedia.org/wiki/West_Jaintia_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g297651-Jowai_Jaintia_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 6,
    name: "East Jaintia Hills",
    headquarters: "Khliehriat",
    region: "Jaintia Hills Region",
    description:
      "Famous for its extensive cave systems, limestone hills, and natural springs. The district is a paradise for adventure seekers and geology enthusiasts.",
    population: "122,000",
    area: "2,115 sq km",
    features: [
      "Cave Systems",
      "Limestone Hills",
      "Natural Springs",
      "Adventure Tourism",
    ],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/62/4e/amazing-place.jpg?w=400&h=-1&s=1",
    topDestinations:
      "https://en.wikipedia.org/wiki/East_Jaintia_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g297651-Jowai_Jaintia_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 7,
    name: "West Garo Hills",
    headquarters: "Tura",
    region: "Garo Hills Region",
    description:
      "Gateway to the Garo Hills with rich tribal culture and eco-tourism opportunities. The district is known for its vibrant festivals and the Nokrek Biosphere Reserve.",
    population: "640,000",
    area: "3,714 sq km",
    features: [
      "Tribal Culture",
      "Eco-Tourism",
      "Nokrek Biosphere",
      "Vibrant Festivals",
    ],
    image:
      "https://www.esikkimtourism.in/wp-content/uploads/2018/07/Tura-Meghalaya.jpg",
    topDestinations: "https://en.wikipedia.org/wiki/West_Garo_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g664702-Tura_West_Garo_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 8,
    name: "East Garo Hills",
    headquarters: "Williamnagar",
    region: "Garo Hills Region",
    description:
      "Known for its lush forested landscapes and vibrant Garo festivals. The district offers a glimpse into the traditional lifestyle of the Garo people.",
    population: "318,000",
    area: "2,603 sq km",
    features: [
      "Forested Landscapes",
      "Garo Festivals",
      "Traditional Lifestyle",
      "Natural Beauty",
    ],
    image: "https://www.theindiatourism.com/images/Meghalaya.jpg",
    topDestinations: "https://en.wikipedia.org/wiki/East_Garo_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g664702-Tura_West_Garo_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 9,
    name: "South Garo Hills",
    headquarters: "Baghmara",
    region: "Garo Hills Region",
    description:
      "Features lush forests, fascinating caves, and the Siju Wildlife Sanctuary. The district is a biodiversity hotspot with unique flora and fauna.",
    population: "142,000",
    area: "1,887 sq km",
    features: ["Siju Wildlife Sanctuary", "Caves", "Biodiversity", "Forests"],
    image:
      "https://content.jdmagicbox.com/v2/comp/south_garo_hills/y2/9999p3639.3639.191120200904.v2y2/catalogue/baghmara-pitcher-plant-wildlife-sanctuary-baghmara-south-garo-hills-wildlife-sanctuary-8xlazbbk43.jpg",
    topDestinations: "https://en.wikipedia.org/wiki/South_Garo_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g664702-Tura_West_Garo_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 10,
    name: "North Garo Hills",
    headquarters: "Resubelpara",
    region: "Garo Hills Region",
    description:
      "Famous for its orange groves, forested hills, and scenic drives. The district is known for its agricultural produce and picturesque landscapes.",
    population: "118,000",
    area: "1,113 sq km",
    features: [
      "Orange Groves",
      "Forested Hills",
      "Scenic Drives",
      "Agriculture",
    ],
    image:
      "https://tripandtales.com/wp-content/uploads/2025/08/garo-hills-meghalaya.jpg",
    topDestinations: "https://en.wikipedia.org/wiki/North_Garo_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g664702-Tura_West_Garo_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 11,
    name: "South West Garo Hills",
    headquarters: "Ampati",
    region: "Garo Hills Region",
    description:
      "Known for its serene greenery and friendly local communities. The district offers a peaceful retreat amidst nature with warm hospitality.",
    population: "172,000",
    area: "822 sq km",
    features: [
      "Serene Greenery",
      "Friendly Communities",
      "Peaceful Retreat",
      "Nature",
    ],
    image: "https://megindustry.gov.in/images/slider-1.jpg",
    topDestinations:
      "https://en.wikipedia.org/wiki/South_West_Garo_Hills_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g664702-Tura_West_Garo_Hills_District_Meghalaya-Hotels.html",
  },
  {
    id: 12,
    name: "Ri-Bhoi",
    headquarters: "Nongpoh",
    region: "Central Meghalaya",
    description:
      "Gateway from Assam, rich in agriculture and offering spectacular hilltop views. The district is known for its pineapple cultivation and scenic beauty.",
    population: "259,000",
    area: "2,378 sq km",
    features: [
      "Gateway from Assam",
      "Agriculture",
      "Hilltop Views",
      "Pineapple Cultivation",
    ],
    image:
      "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/f13809c33de052e7206e018fde33febc_1000x1000.jpg",
    topDestinations: "https://en.wikipedia.org/wiki/Ri-Bhoi_district",
    hospitality:
      "https://www.tripadvisor.in/Hotels-g1156104-Nongstoin_West_Khasi_Hills_District_Meghalaya-Hotels.html",
  },
];

function createPage() {
  const container = document.createElement("div");
  container.className = "container";
  container.id = "districtsContainer";
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.background =
    "linear-gradient(135deg, rgba(11,15,25,0.85), rgba(26,35,50,0.85))";
  container.style.backdropFilter = "blur(10px)";
  container.style.overflowY = "auto";
  container.style.zIndex = "999";
  container.style.padding = "3rem 1rem";
  container.style.boxSizing = "border-box";

  const wrapper = document.createElement("div");
  wrapper.className = "content-wrapper";
  wrapper.style.width = "100%";
  wrapper.style.maxWidth = "1400px";
  wrapper.style.margin = "0 auto";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.gap = "2rem";

  const closeButton = document.createElement("button");
  closeButton.className = "overall-close-btn";
  closeButton.innerHTML = '<i class="fas fa-times"></i>';
  closeButton.title = "Close Districts";
  closeButton.addEventListener("click", removeDistricts);

  const header = document.createElement("header");
  header.style.textAlign = "center";
  header.style.width = "100%";
  header.style.marginBottom = "2rem";

  const h1 = document.createElement("h1");
  h1.textContent = "Districts of Meghalaya";

  const subtitle = document.createElement("p");
  subtitle.className = "subtitle";
  subtitle.textContent =
    "From misty Khasi hills to the emerald Garo valleys, every district of Meghalaya breathes its own story.";

  const controls = document.createElement("div");
  controls.className = "controls";
  controls.style.display = "flex";
  controls.style.flexDirection = "column";
  controls.style.alignItems = "center";
  controls.style.gap = "1rem";
  controls.style.width = "100%";
  controls.style.maxWidth = "800px";
  controls.style.margin = "0 auto";

  const searchBox = document.createElement("div");
  searchBox.className = "search-box";

  const searchIcon = document.createElement("i");
  searchIcon.className = "fas fa-search";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "searchInput";
  searchInput.placeholder = "Search districts...";

  searchBox.appendChild(searchIcon);
  searchBox.appendChild(searchInput);

  const filterButtons = document.createElement("div");
  filterButtons.className = "filter-buttons";

  const filters = [
    { text: "All Districts", filter: "all", active: true },
    { text: "Khasi Hills", filter: "khasi" },
    { text: "Jaintia Hills", filter: "jaintia" },
    { text: "Garo Hills", filter: "garo" },
    { text: "Central", filter: "central" },
  ];

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    if (filter.active) button.classList.add("active");
    button.dataset.filter = filter.filter;
    button.textContent = filter.text;
    filterButtons.appendChild(button);
  });

  controls.appendChild(searchBox);
  controls.appendChild(filterButtons);

  header.appendChild(h1);
  header.appendChild(subtitle);
  header.appendChild(controls);

  const districtsGrid = document.createElement("div");
  districtsGrid.className = "grid";
  districtsGrid.id = "districtsGrid";
  districtsGrid.style.width = "100%";
  districtsGrid.style.display = "grid";
  districtsGrid.style.gridTemplateColumns = "repeat(minmax(360px, 1fr))";
  districtsGrid.style.gap = "2rem";

  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.textContent = "© 2025 Explore Meghalaya | The Abode of Clouds";
  footer.appendChild(footerText);

  wrapper.appendChild(header);
  wrapper.appendChild(districtsGrid);
  wrapper.appendChild(footer);
  container.appendChild(closeButton);
  container.appendChild(wrapper);

  const districtModal = createDistrictModal();
  const webpageModal = createWebpageModal();

  document.body.appendChild(container);
  document.body.appendChild(districtModal);
  document.body.appendChild(webpageModal);

  initializeApp(searchInput, districtsGrid, districtModal, webpageModal);
}

function createDistrictModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "districtModal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeModal = document.createElement("span");
  closeModal.className = "close-modal";
  closeModal.id = "closeModal";
  closeModal.innerHTML = "&times;";

  const modalTitle = document.createElement("h2");
  modalTitle.id = "modalTitle";
  modalTitle.textContent = "District Name";

  const modalFeatures = document.createElement("div");
  modalFeatures.className = "modal-features";
  modalFeatures.id = "modalFeatures";

  const modalDescription = document.createElement("p");
  modalDescription.id = "modalDescription";
  modalDescription.textContent = "District description will appear here.";

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  const population = document.createElement("div");
  population.className = "population";
  const populationIcon = document.createElement("i");
  populationIcon.className = "fas fa-users";
  const populationSpan = document.createElement("span");
  populationSpan.id = "modalPopulation";
  populationSpan.textContent = "Population";
  population.appendChild(populationIcon);
  population.appendChild(populationSpan);

  const area = document.createElement("div");
  area.className = "area";
  const areaIcon = document.createElement("i");
  areaIcon.className = "fas fa-mountain";
  const areaSpan = document.createElement("span");
  areaSpan.id = "modalArea";
  areaSpan.textContent = "Area";
  area.appendChild(areaIcon);
  area.appendChild(areaSpan);

  cardFooter.appendChild(population);
  cardFooter.appendChild(area);

  const modalLinks = document.createElement("div");
  modalLinks.className = "modal-links";

  const destinationsLink = document.createElement("a");
  destinationsLink.href = "#";
  destinationsLink.id = "modalDestinations";
  destinationsLink.className = "modal-link";
  const destinationsIcon = document.createElement("i");
  destinationsIcon.className = "fas fa-map-marked-alt";
  destinationsLink.appendChild(destinationsIcon);
  destinationsLink.appendChild(document.createTextNode(" Top Destinations"));

  const hospitalityLink = document.createElement("a");
  hospitalityLink.href = "#";
  hospitalityLink.id = "modalHospitality";
  hospitalityLink.className = "modal-link";
  const hospitalityIcon = document.createElement("i");
  hospitalityIcon.className = "fas fa-home";
  hospitalityLink.appendChild(hospitalityIcon);
  hospitalityLink.appendChild(
    document.createTextNode(" Hospitality & Lifestyle")
  );

  modalLinks.appendChild(destinationsLink);
  modalLinks.appendChild(hospitalityLink);

  modalContent.appendChild(closeModal);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalFeatures);
  modalContent.appendChild(modalDescription);
  modalContent.appendChild(cardFooter);
  modalContent.appendChild(modalLinks);

  modal.appendChild(modalContent);

  return modal;
}

function createWebpageModal() {
  const modal = document.createElement("div");
  modal.className = "webpage-modal";
  modal.id = "webpageModal";

  const modalContent = document.createElement("div");
  modalContent.className = "webpage-modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.className = "webpage-modal-header";

  const modalTitle = document.createElement("div");
  modalTitle.className = "webpage-modal-title";
  const globeIcon = document.createElement("i");
  globeIcon.className = "fas fa-globe";
  const titleSpan = document.createElement("span");
  titleSpan.id = "webpageModalTitle";
  titleSpan.textContent = "Webpage Title";
  modalTitle.appendChild(globeIcon);
  modalTitle.appendChild(titleSpan);

  const modalControls = document.createElement("div");
  modalControls.className = "webpage-modal-controls";

  const newTabBtn = document.createElement("div");
  newTabBtn.className = "webpage-modal-control";
  newTabBtn.id = "newTabBtn";
  const newTabIcon = document.createElement("i");
  newTabIcon.className = "fas fa-external-link-alt";
  newTabBtn.appendChild(newTabIcon);

  const closeBtn = document.createElement("div");
  closeBtn.className = "webpage-modal-control";
  closeBtn.id = "closeWebpageModal";
  const closeIcon = document.createElement("i");
  closeIcon.className = "fas fa-times";
  closeBtn.appendChild(closeIcon);

  modalControls.appendChild(newTabBtn);
  modalControls.appendChild(closeBtn);

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(modalControls);

  const modalBody = document.createElement("div");
  modalBody.className = "webpage-modal-body";

  const iframe = document.createElement("iframe");
  iframe.id = "webpageIframe";
  iframe.className = "webpage-iframe";
  iframe.src = "";
  iframe.frameBorder = "0";

  modalBody.appendChild(iframe);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modal.appendChild(modalContent);

  return modal;
}

function initializeApp(
  searchInput,
  districtsGrid,
  districtModal,
  webpageModal
) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalPopulation = document.getElementById("modalPopulation");
  const modalArea = document.getElementById("modalArea");
  const modalDestinations = document.getElementById("modalDestinations");
  const modalHospitality = document.getElementById("modalHospitality");

  const webpageModalTitle = document.getElementById("webpageModalTitle");
  const webpageIframe = document.getElementById("webpageIframe");
  const closeWebpageModal = document.getElementById("closeWebpageModal");
  const newTabBtn = document.getElementById("newTabBtn");

  let currentDistrict = null;
  let currentModalType = null;

  function renderDistricts(districtsToRender) {
    districtsGrid.innerHTML = "";

    if (districtsToRender.length === 0) {
      districtsGrid.innerHTML = `
        <div class="no-results">
          <i class="fas fa-map-marked-alt"></i>
          <p>No districts found matching your search criteria.</p>
        </div>
      `;
      return;
    }

    districtsToRender.forEach((district) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-region", district.region.toLowerCase());

      card.innerHTML = `
        <div class="card-image" style="background-image: url('${
          district.image
        }')">
          <div class="card-badge">${district.region}</div>
          <div class="card-image-overlay">
            <div class="card-title-container">
              <div>
                <div class="card-title">${district.name}</div>
                <div class="card-headquarters-overlay">
                  <i class="fas fa-map-marker-alt"></i> ${district.headquarters}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content-compact">
          <p class="card-description">${district.description.substring(
            0,
            120
          )}...</p>
          <div class="card-features">
            ${district.features
              .map((feature) => `<span class="card-feature">${feature}</span>`)
              .join("")}
          </div>
          <div class="card-stats">
            <div class="card-stat"><i class="fas fa-users"></i> ${
              district.population
            }</div>
            <div class="card-stat"><i class="fas fa-mountain"></i> ${
              district.area
            }</div>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openModal(district));
      districtsGrid.appendChild(card);
    });
  }

  function openModal(district) {
    currentDistrict = district;

    modalTitle.textContent = district.name;
    modalDescription.textContent = district.description;
    modalPopulation.textContent = district.population;
    modalArea.textContent = district.area;

    modalFeatures.innerHTML = "";
    district.features.forEach((feature) => {
      const featureEl = document.createElement("div");
      featureEl.className = "feature";
      featureEl.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
      modalFeatures.appendChild(featureEl);
    });

    modalDestinations.onclick = (e) => {
      e.preventDefault();
      openWebpageModal(district, "destinations");
    };

    modalHospitality.onclick = (e) => {
      e.preventDefault();
      openWebpageModal(district, "hospitality");
    };

    districtModal.style.display = "flex";
  }

  function openWebpageModal(district, type) {
    currentDistrict = district;
    currentModalType = type;

    let url, title;

    if (type === "destinations") {
      url = district.topDestinations;
      title = `${district.name} - Top Destinations`;
    } else {
      url = district.hospitality;
      title = `${district.name} - Hospitality & Lifestyle`;
    }

    webpageModalTitle.textContent = title;
    webpageIframe.src = url;
    webpageModal.style.display = "flex";
  }

  function filterDistricts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter =
      document.querySelector(".filter-btn.active").dataset.filter;

    const filteredDistricts = districts.filter((district) => {
      const matchesSearch =
        district.name.toLowerCase().includes(searchTerm) ||
        district.headquarters.toLowerCase().includes(searchTerm) ||
        district.description.toLowerCase().includes(searchTerm);

      let matchesFilter = true;
      if (activeFilter !== "all") {
        if (activeFilter === "khasi") {
          matchesFilter = district.region.includes("Khasi");
        } else if (activeFilter === "jaintia") {
          matchesFilter = district.region.includes("Jaintia");
        } else if (activeFilter === "garo") {
          matchesFilter = district.region.includes("Garo");
        } else if (activeFilter === "central") {
          matchesFilter = district.region.includes("Central");
        }
      }

      return matchesSearch && matchesFilter;
    });

    renderDistricts(filteredDistricts);
  }

  function openInNewTab() {
    let url;

    if (currentModalType === "destinations") {
      url = currentDistrict.topDestinations;
    } else {
      url = currentDistrict.hospitality;
    }

    window.open(url, "_blank");
  }

  searchInput.addEventListener("input", filterDistricts);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterDistricts();
    });
  });

  closeModal.addEventListener("click", () => {
    districtModal.style.display = "none";
  });

  closeWebpageModal.addEventListener("click", () => {
    webpageModal.style.display = "none";
    webpageIframe.src = "";
  });

  newTabBtn.addEventListener("click", openInNewTab);

  window.addEventListener("click", (e) => {
    if (e.target === districtModal) {
      districtModal.style.display = "none";
    }
    if (e.target === webpageModal) {
      webpageModal.style.display = "none";
      webpageIframe.src = "";
    }
  });

  renderDistricts(districts);
}

function removeDistricts() {
  const container = document.getElementById("districtsContainer");
  const districtModal = document.getElementById("districtModal");
  const webpageModal = document.getElementById("webpageModal");

  if (container) container.remove();
  if (districtModal) districtModal.remove();
  if (webpageModal) webpageModal.remove();
}

(function () {
  const head = document.head;

  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.cdnfonts.com/css/satoshi";
  fontLink.rel = "stylesheet";
  head.appendChild(fontLink);

  const fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  head.appendChild(fontAwesome);

  const style = document.createElement("style");

  style.textContent = `
    :root {
      --bg: linear-gradient(135deg, #0b0f19, #1a2332);
      --glass: rgba(255, 255, 255, 0.08);
      --glass-light: rgba(255, 255, 255, 0.12);
      --border: rgba(255, 255, 255, 0.16);
      --text: #ffffff;
      --muted: #cbd5e1;
      --accent: #6caa23;
      --accent-light: #8bc34a;
      --shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
      --radius: 18px;
      --transition: all 0.3s ease;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Satoshi", sans-serif;
    }

    body {
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 2rem 1rem;
      background-attachment: fixed;
      background-size: cover;
      overflow-x: hidden;
      z-index: 1000;
      width: 100%;
      max-width: 1400px;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    header {
      text-align: center;
      margin-bottom: 3rem;
      width: 100%;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 25px;
      background: linear-gradient(to right, var(--accent), var(--accent-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 1px;
      position: relative;
      display: inline-block;
    }

    h1::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: var(--accent);
      border-radius: 2px;
    }

    p.subtitle {
      color: var(--muted);
      margin-bottom: 2rem;
      text-align: center;
      max-width: 100%;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    .controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      width: 100%;
    }

    .search-box {
      position: relative;
      flex: 1;
      min-width: 600px;
    }

    .search-box input {
      width: 100%;
      padding: 1rem 1rem 1rem 3rem;
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      color: var(--text);
      font-size: 1rem;
      backdrop-filter: blur(12px);
      transition: var(--transition);
    }

    .search-box input:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 2px rgba(108, 170, 35, 0.2);
    }

    .search-box i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--muted);
    }

    .filter-buttons {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .filter-btn {
      padding: 0.8rem 1.5rem;
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      color: var(--muted);
      cursor: pointer;
      transition: var(--transition);
      font-size: 0.9rem;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: rgba(108, 170, 35, 0.2);
      border-color: var(--accent);
      color: var(--accent-light);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 2rem;
      width: 100%;
      margin-bottom: 3rem;
    }

    .card {
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
      transition: var(--transition);
      cursor: pointer;
      position: relative;
      height: 520px;
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-8px);
      border-color: var(--accent);
      box-shadow: 0 15px 30px rgba(108, 170, 35, 0.25);
      background: var(--glass-light);
    }

    .card-image {
      height: 320px;
      width: 100%;
      background-size: cover;
      background-position: center;
      position: relative;
      transition: var(--transition);
      overflow: hidden;
    }

    .card-image::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60%;
      background: linear-gradient(to top, rgba(11, 15, 25, 0.9), transparent);
    }

    .card:hover .card-image {
      transform: scale(1.05);
    }

    .card-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(108, 170, 35, 0.9);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 2;
      backdrop-filter: blur(5px);
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--accent);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .card h2 i {
      font-size: 1.2rem;
    }

    .card-headquarters {
      color: var(--muted);
      font-size: 0.95rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .card-headquarters i {
      color: var(--accent);
    }

    .card p {
      color: var(--text);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }

    .card-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .card-feature {
      background: rgba(108, 170, 35, 0.15);
      color: var(--accent-light);
      padding: 0.3rem 0.7rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      font-size: 0.85rem;
      color: var(--muted);
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }

    .population,
    .area {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(11, 15, 25, 0.9);
      z-index: 1000;
      backdrop-filter: blur(5px);
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .modal-content {
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 2.5rem;
      max-width: 600px;
      width: 100%;
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
      position: relative;
      animation: modalFadeIn 0.3s ease;
    }

    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .close-modal {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 1.5rem;
      color: var(--muted);
      cursor: pointer;
      transition: var(--transition);
    }

    .close-modal:hover {
      color: var(--accent);
    }

    .modal h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--accent);
    }

    .modal p {
      color: var(--text);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .modal-features {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(108, 170, 35, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    .feature i {
      color: var(--accent);
    }

    .modal-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .modal-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: rgba(108, 170, 35, 0.2);
      border: 1px solid var(--accent);
      border-radius: 30px;
      color: var(--accent-light);
      text-decoration: none;
      font-weight: 500;
      transition: var(--transition);
      flex: 1;
      justify-content: center;
      cursor: pointer;
    }

    .modal-link:hover {
      background: var(--accent);
      color: white;
      transform: translateY(-3px);
    }

    footer {
      margin-top: 2rem;
      text-align: center;
      color: var(--muted);
      font-size: 0.9rem;
      padding: 1.5rem;
      width: 100%;
      border-top: 1px solid var(--border);
    }

    .no-results {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem;
      color: var(--muted);
      font-size: 1.1rem;
    }

    .no-results i {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--accent);
    }

    .card-image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
      z-index: 2;
    }

    .card-title-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .card-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .card-headquarters-overlay {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .card-content-compact {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }

    .card-description {
      color: var(--text);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }

    .card-stats {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      font-size: 0.85rem;
      color: var(--muted);
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }

    .card-stat {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .webpage-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(11, 15, 25, 0.95);
      z-index: 2000;
      backdrop-filter: blur(5px);
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .webpage-modal-content {
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      width: 90%;
      height: 90%;
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
      position: relative;
      animation: modalFadeIn 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .webpage-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid var(--border);
    }

    .webpage-modal-title {
      font-size: 1.5rem;
      color: var(--accent);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .webpage-modal-controls {
      display: flex;
      gap: 1rem;
    }

    .webpage-modal-control {
      background: var(--glass);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--muted);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition);
    }

    .webpage-modal-control:hover {
      background: rgba(108, 170, 35, 0.2);
      border-color: var(--accent);
      color: var(--accent-light);
    }

    .webpage-modal-body {
      flex: 1;
      padding: 0;
      overflow: hidden;
    }

    .webpage-iframe {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0 0 var(--radius) var(--radius);
    }

    .overall-close-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      background: rgba(255,255,255,0.9);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #333;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    }
    .overall-close-btn:hover {
      background: #fff;
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
      p.subtitle {
        font-size: 1rem;
      }
      .card h2 {
        font-size: 1.3rem;
      }
      .grid {
        grid-template-columns: 1fr;
      }
      .controls {
        flex-direction: column;
      }
      .search-box {
        min-width: 100%;
      }
      .modal-links {
        flex-direction: column;
      }
      .card-image {
        height: 280px;
      }
      .webpage-modal-content {
        width: 95%;
        height: 85%;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 2rem;
      }
      .modal-content {
        padding: 1.5rem;
      }
      .card {
        height: auto;
      }
      .card-image {
        height: 240px;
      }
      .webpage-modal-header {
        padding: 1rem;
      }
      .webpage-modal-title {
        font-size: 1.2rem;
      }
    }
  `;

  head.appendChild(style);

  if (document.readyState !== "complete") {
    window.addEventListener("load", createPage);
  } else {
    createPage();
  }
})();
