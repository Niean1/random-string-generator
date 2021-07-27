const palindrome = (str) => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, "");
  const reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
};

const stringGenerator = (length = 5) => {
  let result = {
    char: "",
    color: "black",
    isVisible: true,
    isOnlyNumber: false,
    isPalendrome: false,
  };
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    result.char += char.charAt(Math.round(Math.random() * char.length));
  }

  if (result.char.match(/^[1-9]+$/) != null) {
    result = { ...result, isOnlyNumber: true, color: "blue" };
  }

  if (palindrome(result.char)) {
    result = { ...result, isPalendrome: true, color: "red" };
  }

  if (result.char.includes("0")) {
    result = { ...result, isVisible: false };
  }

  return result;
};

export default stringGenerator;
