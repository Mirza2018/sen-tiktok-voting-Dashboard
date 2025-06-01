const candidateADD = {
  bio,
  candidateName,
  followers,
  profileImage,
  tiktokLink,
};

const contestantsList = [
  {
    id: 1,
    name: "Fatou Kiné",
    username: "@fatou_creative",
    followers: "120K",
    votes: 125000,
    price: "1",
    bio: "Dancing and comedy content creator from Dakar. I love making people laugh!",
    avatar:
      "https://images.pexels.com/photos/3009845/pexels-photo-3009845.jpeg?auto=compress&cs=tinysrgb&w=600",
    image:
      "https://images.pexels.com/photos/7120610/pexels-photo-7120610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Abdou Sall",
    username: "@abdou_comedy",
    price: "3",
    followers: "95K",
    votes: 109000,
    bio: "Comedy skits about daily life in Senegal. Bringing smiles to your face!",
    avatar:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image:
      "https://images.pexels.com/photos/7242760/pexels-photo-7242760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const createVoating = {
  battle_date: "24-4-025",
  battle_duration_minutes: "60",
  battle_start_time: "13:20",
  candidate: [{ candidatelist }, { candidatelist }, { candidatelist }],
};

const previousBattleResult = [
  {
    battle_no: 1,
    battle_duration_minutes: 30,
    battle_date: "2025-06-01",
    battle_start_time: "19:15",
    contestants: [
      { name: "Alice_K", votes: 1532 },
      { name: "Rizwan_A", votes: 1687 },
      { name: "Sophia_T", votes: 1403 },
      { name: "Benji_P", votes: 1217 },
      { name: "Lexi_R", votes: 1378 },
      { name: "Max_Boom", votes: 1452 },
    ],
    winner_name: "Rizwan_A",
    winner_vote: 1687,
  },
  {
    battle_no: 2,
    battle_duration_minutes: 30,
    battle_date: "2025-06-01",
    battle_start_time: "19:15",
    contestants: [
      { name: "Alice_K", votes: 1532 },
      { name: "Rizwan_A", votes: 1687 },
      { name: "Sophia_T", votes: 1403 },
      { name: "Benji_P", votes: 1217 },
      { name: "Lexi_R", votes: 1378 },
      { name: "Max_Boom", votes: 1452 },
    ],
    winner_name: "Rizwan_A",
    winner_vote: 1687,
  },
];
