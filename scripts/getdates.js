// Set the current year
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
if (currentYearSpan) {
  currentYearSpan.textContent = currentYear;
}

// Display the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
}
