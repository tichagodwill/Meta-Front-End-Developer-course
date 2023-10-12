import {
  oldInitializeTimes,
  oldUpdateTimes,
  initializeTimes,
  updateTimes,
} from "./api";

test("Testing oldInitializeTimes", () => {
  const times = oldInitializeTimes();

  expect(times.length).toBe(3);
});

test("Testing oldUpdateTimes with new date", () => {
  const times = oldInitializeTimes();

  const times2 = oldUpdateTimes(times, {
    type: "dateChange",
    date: new Date().toDateString(),
  });

  expect(times.length).toBe(3);
  expect(times2.length).toBe(4);
});

test("Testing oldInitializeTimes without change", () => {
  const times = oldInitializeTimes();

  const times2 = oldUpdateTimes(times, {});

  expect(times.length === times2.length).toBe(true);
});

checkTimeValues = (times) => {
  // not empty
  expect(times.length).toBeGreaterThan(0);
  let lastVal = 0;
  times.forEach((t) => {
    const values = t.split(":");
    expect(values.length).toBe(2);
    const hour = parseInt(values[0]);
    const minutes = parseInt(values[1]);

    // between 17:00 and 23:30
    expect(hour).toBeGreaterThanOrEqual(17);
    expect(hour).toBeLessThanOrEqual(23);
    expect([0, 30]).toContain(minutes);
    // ascending
    let val = hour * 60 + minutes;
    expect(val).toBeGreaterThan(lastVal);
    lastVal = val;
  });
};

test("Testing InitializeTimes", () => {
  const times = initializeTimes();
  checkTimeValues(times);
});

test("Testing updateTimes", () => {
  const times = initializeTimes();

  const times2 = updateTimes(times, {
    type: "dateChange",
    date: new Date("01 Jan 1970 00:00:00 GMT"),
  });
  checkTimeValues(times2);

  const valid_values = ["17:00", "17:30", "18:00", "20:00", "21:00", "23:30"];
  expect(times2).toEqual(valid_values);
});
