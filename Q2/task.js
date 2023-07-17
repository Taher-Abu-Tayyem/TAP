const data = [
    {
      id: 1,
      title: "Stranger Scrims",
      duration: 40,
      tags: ["supernatural", "horror", "drama"],
    },
    {
      id: 2,
      title: "The Scrim of the Dragon",
      duration: 60,
      tags: ["drama", "fantasy"],
    },
    {
      id: 3,
      title: "Scrim Hunters",
      duration: 22,
      tags: ["reality", "home improvement"],
    },
    {
      id: 4,
      title: "This Old Scrim",
      duration: 30,
      tags: ["reality", "home improvement"],
    },
    {
      id: 5,
      title: "What We Do in the Scrim",
      duration: 55,
      tags: ["drama", "comedy", "supernatural"],
    },
    {
      id: 6,
      title: "The Scrimdalorian",
      duration: 58,
      tags: ["fantasy", "sci-fi", "adventure"],
    },
  ];
  
  function getUniqueTags(data) {
    const allTags = [];
    
    // Collect all tags into the allTags array
    for (let i = 0; i < data.length; i++) {
      allTags.push(...data[i].tags);
    }
    
    // Use Set to filter out duplicates and convert it back to an array
    const uniqueTags = Array.from(new Set(allTags));
    
    return uniqueTags;
  }
  
  console.log(getUniqueTags(data));
  