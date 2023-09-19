export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is an identification specific to your student account " +
      "at Carnegie Mellon University. It is usually represented as the first letter " +
      "of your first name followed by your last name."
    );
  }
  else if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Aditya"
    );
  }
  return "";
}
