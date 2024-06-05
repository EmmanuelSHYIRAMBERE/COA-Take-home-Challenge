function transformString(originalString) {
  // Initialize a variable to store the transformed string
  let transformedString = "";

  const length = originalString.length;

  // Validate input string content (optional)
  if (!/^[a-zA-Z0-9 ]+$/.test(originalString)) {
    throw new Error(
      `Invalid characters found in your input: : "\${originalString}\". Only alphanumeric characters and spaces allowed.`
    );
  }

  // Check if the string is empty or exceeds the limit
  if (length === 0 || length > 1000) {
    throw new Error(
      `Invalid string length: "\${length}\", the length of the string should be between 1 and 1000.`
    );
  }

  // Check divisibility by 3 and 5
  if (length % 3 === 0 && length % 5 === 0) {
    // Both conditions met: reverse the string and convert to Unicode values
    transformedString = originalString
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    // Only divisible by 3: reverse the string
    transformedString = originalString.split("").reverse().join("");
  } else if (length % 5 === 0) {
    // Only divisible by 5: convert to Unicode values
    transformedString = originalString
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else {
    // Not divisible by 3 or 5: return the original string
    transformedString = `The input string length: \"${length}\" is not divisible by 3 or divisible by 5. The Original string: \"${originalString}\"`;
  }

  return transformedString;
}

const inputString = "Hello World";
const transformedString = transformString(inputString);
console.log(transformedString);
