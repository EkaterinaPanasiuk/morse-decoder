const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    arr.push(expr.slice(i, i + 10));
  }
  let nm = {};
  let keys = Object.keys(MORSE_TABLE).map((item) => {
    let a = item
      .split("")
      .map((i) => (i === "." ? (i = "10") : (i = "11")))
      .join("");
    for (let i = 0; i < 10; i++) {
      a.length < 10 ? (a = "0" + a) : a;
    }
    return a;
  });

  for (let i = 0; i < keys.length; i++) {
    nm[keys[i]] = Object.values(MORSE_TABLE)[i];
  }
  nm["**********"] = " ";
  return arr.map((i) => (i = nm[i])).join("");
}

module.exports = {
  decode,
};
