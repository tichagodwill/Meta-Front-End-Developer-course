export function oldInitializeTimes() {
  return ["17:30", "18:00", "18:30"];
}

export function oldUpdateTimes(state, actions) {
  if (actions.type === "dateChange") {
    return ["16:30", "17:00", "17:30", "18:00"];
  }
  return state;
}

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;

  const a = 185852;

  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

export const fetchAPI = (date) => {
  let result = [];

  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");

    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, actions) {
  if (actions.type === "dateChange") {
    return fetchAPI(actions.date);
  }
  return state;
}
