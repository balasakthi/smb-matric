const gallery = [
  {
    title: "Blue Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/BlueDay-1.webp",
    count: 35,
  },
  {
    title: "Christmas",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/Christmas-9.webp",
    count: 10,
  },
  {
    title: "English Club",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/EnglishClub-1.webp",
    count: 22,
  },
  {
    title: "English Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/EnglishDay-1.webp",
    count: 100,
  },
  {
    title: "Field Trip",
    category: "academic",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/FieldTrip-1.webp",
    count: 56,
  },
  {
    title: "GrandParents Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/GrandParentsDay-1.webp",
    count: 52,
  },
  {
    title: "Green Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/GreenDay-1.webp",
    count: 10,
  },
  {
    title: "Independence Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/IndependenceDay-1.webp",
    count: 42,
  },
  {
    title: "KG Convocation",
    category: "academic",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/KGConvocation-1.webp",
    count: 37,
  },
  {
    title: "Kite Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/KiteDay-1.webp",
    count: 25,
  },
  {
    title: "Golu",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/Golu-1.webp",
    count: 39,
  },
  {
    title: "Mangal Deep",
    category: "academic",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/MangalDeep-1.webp",
    count: 131,
  },
  {
    title: "Math Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/MathDay-1.webp",
    count: 59,
  },
  {
    title: "Mom And Me",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/MomAndMe-1.webp",
    count: 10,
  },
  {
    title: "Onam",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/Onam-1.webp",
    count: 16,
  },
  {
    title: "Pongal",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/Pongal-1.webp",
    count: 35,
  },
  {
    title: "Republic Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/RepublicDay-1.webp",
    count: 10,
  },
  {
    title: "Sci Splash",
    category: "academic",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/SciSplash-1.webp",
    count: 120,
  },
  {
    title: "SMBM FM",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/SMBMFM-10.webp",
    count: 9,
  },
  {
    title: "Snack Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/SnackDay-1.webp",
    count: 9,
  },
  {
    title: "Tamil Ilakiya Mandram",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/TamilIlakiyaMandram-1.webp",
    count: 26,
  },
  {
    title: "Teachers Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/TeachersDay-1.webp",
    count: 42,
  },
  {
    title: "TNPL",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/TNPL-1.webp",
    count: 30,
  },
  {
    title: "Toppers 2022",
    category: "academic",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/Toppers2022-1.webp",
    count: 30,
  },
  {
    title: "Womens Day",
    category: "events",
    url: "https://smbmatricschool.com/wp-content/uploads/2023/10/WomensDay-1.webp",
    count: 10,
  },
];

const colors = {
  primaryColor: "#9B2E41",
  secondaryColor: "#2ecc71",
  backgroundColor: "#ffffff",
  headerBackgroundColor: "#333333",
  footerBackgroundColor: "#f2f2f2",
  textColor: "#555555",
  linkColor: "#007bff",
  accentColor: "#ff4500",
  hoverColor: "#ff8c00",
  buttonColor: "#4caf50",
  buttonHoverColor: "#45a049",
  errorColor: "#ff0000",
  warningColor: "#ffc107",
  successColor: "#28a745",
  confirmationColor: "#17a2b8",
};

function getGallery(category) {
  return gallery.filter((item) => item.category === category);
}

function getCount(title) {
  const matchingItem = gallery.find((item) => item.title === title);
  return matchingItem ? matchingItem.count : null;
}

export { getGallery, getCount, colors };
