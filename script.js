const days = [

  {
    name: "🌹 Rose Day",
    date: "2026-02-07",
    folder: "rose"
  },

  {
    name: "💍 Propose Day",
    date: "2026-02-08",
    folder: "propose"
  },

  {
    name: "🍫 Chocolate Day",
    date: "2026-02-09",
    folder: "chocolate"
  },

  {
    name: "🧸 Teddy Day",
    date: "2026-02-10",
    folder: "teddy"
  },

  {
    name: "🤝 Promise Day",
    date: "2026-02-11",
    folder: "promise"
  },

  {
    name: "🤗 Hug Day",
    date: "2026-02-12",
    folder: "hug"
  },
    {
    name: "💋 Kiss Day",
    date: "2026-02-13",
    folder: "kiss"
  },

  {
    name: "💖 Valentine’s Day",
    date: "2026-02-14",
    folder: "valentines-day"
  }

];

const grid = document.getElementById("weekGrid");
const today = new Date().setHours(0,0,0,0);


days.forEach(day => {

  const openDate = new Date(day.date).setHours(0,0,0,0);
  const diff = Math.ceil((openDate - today) / (1000*60*60*24));

  const card = document.createElement("div");
  card.classList.add("day-card");

  let content = `<h3>${day.name}</h3>`;

  // If unlocked
  if(diff <= 0){

    content += `
      <p>Unlocked 💖</p>
      <a href="${day.folder}/index.html" class="day-btn">
        Open ➜
      </a>
    `;

  }

  // If locked
  else{

    card.classList.add("locked");

    content += `
      <p>🔒 Opens in ${diff} days</p>
      <span class="day-btn locked">
        Locked
      </span>
    `;

  }

  card.innerHTML = content;
  grid.appendChild(card);

});
