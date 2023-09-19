export default function QueryProcessor(query: string): string {
  const lowercaseQuery = query.toLowerCase();

  if (lowercaseQuery.includes("shakespeare")) {
    // Handle Shakespeare query
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (lowercaseQuery.includes("andrew id")) {
    // Handle Andrew ID query
    return (
      "Your Andrew ID is an identification specific to your student account " +
      "at Carnegie Mellon University. It is usually represented as the first letter " +
      "of your first name followed by your last name."
    );
  } else if (lowercaseQuery.includes("what is your name?")) {
    // Handle name query
    return "Aditya";
  } else if (lowercaseQuery.includes("which of the following numbers is the largest")) {
    // Extract numbers from the query using regular expressions
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length > 0) {
      // Convert the extracted numbers to an array of integers
      const integers = numbers.map((str) => parseInt(str, 10));

      // Find the maximum value in the array
      const largestNumber = Math.max(...integers);

      return `${largestNumber}`;
    } else {
      return "No numbers found in the query.";
    }
  } 
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x + y).toString();
  }


  if (lowercaseQuery.includes("which of the following numbers is both a square and a cube")) {
      // Extract numbers from the query using regular expressions
      const numbers = query.match(/\d+/g);

      if (numbers && numbers.length > 0) {
        // Convert the extracted numbers to an array of integers
        const integers = numbers.map((str) => parseInt(str, 10));

        // Filter numbers that are both squares and cubes
        const resultNumbers = integers.filter((num) => {
          const squareRoot = Math.sqrt(num);
          const cubeRoot = Math.cbrt(num);
          return squareRoot === Math.floor(squareRoot) && cubeRoot === Math.floor(cubeRoot);
        });

        return `${resultNumbers.join(", ")}`;

    }
  }

  else if (lowercaseQuery.match(/what is (\d+) multiplied by (\d+)\?/)) {
    // Extract numbers from the query using regular expressions
    const numberMatches = lowercaseQuery.match(/what is (\d+) multiplied by (\d+)\?/);

    if (numberMatches && numberMatches.length === 3) {
      // Extract the two numbers from the match
      const x = parseInt(numberMatches[1], 10);
      const y = parseInt(numberMatches[2], 10);

      // Calculate the result of multiplication
      const result = x * y;

      return result.toString();
    
    }
  }

  else if (lowercaseQuery.match(/what is (\d+) minus (\d+)\?/)) {
    // Extract numbers from the query using regular expressions
    const numberMatches = lowercaseQuery.match(/what is (\d+) minus (\d+)\?/);

    if (numberMatches && numberMatches.length === 3) {
      // Extract the two numbers from the match
      const x = parseInt(numberMatches[1], 10);
      const y = parseInt(numberMatches[2], 10);

      // Calculate the result of subtraction
      const result = x - y;

      return result.toString();
    }
  }

  else {
    // Handle other cases or return an error message if no condition matches
    return "I'm sorry, I don't understand your question.";
  }
  
  return ""
}

