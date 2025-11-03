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

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  const searchInput = document.getElementById("searchInput");
  const districtsGrid = document.getElementById("districtsGrid");
  const districtModal = document.getElementById("districtModal");
  const webpageModal = document.getElementById("webpageModal");
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
                                    <i class="fas fa-map-marker-alt"></i> ${
                                      district.headquarters
                                    }
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
                          .map(
                            (feature) =>
                              `<span class="card-feature">${feature}</span>`
                          )
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

  // Event Listeners
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

  // Initial render
  renderDistricts(districts);
}
