// "Work"
// "Shopping"
// "Household"
// "School"
// "Fitness"
// "Health"
// "Hobbies"
// "Financial"
// "Family"
// "Miscellaneous"
export const getCategoryColor = (category) => {
  switch (category) {
    case "Work":
      return "#9e0142";
    case "Shopping":
      return "#d53e4f";
    case "Household":
      return "#f46d43";
    case "School":
      return "#fdae61";
    case "Fitness":
      return "#fee08b";
    case "Health":
      return "#e6f598";
    case "Hobbies":
      return "#abdda4";
    case "Financial":
      return "#66c2a5";
    case "Family":
      return "#3288bd";
    case "Miscellaneous":
      return "#5e4fa2";
    default:
      return "#808080";
  }
};
