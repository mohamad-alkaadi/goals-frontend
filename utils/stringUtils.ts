const getInitials = (name: string) => {
  return name
    .split(" ") // Split the name into words
    .map((word) => word[0]) // Take the first letter of each word
    .join("") // Join them together
    .toUpperCase(); // Optional: make it uppercase
};

export { getInitials };
