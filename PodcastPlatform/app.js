document.addEventListener('DOMContentLoaded', () => {
    // Example: Load featured podcasts dynamically
    const featuredPodcasts = [
        { title: "Business Breakthroughs", description: "Insights and strategies for entrepreneurial success.", imageUrl: "static/images/Buisnessbreak.jpg" },
        { title: "Mythical Legends", description: "Unraveling the myths and legends of different cultures.", imageUrl: "static/images/Mythical_legends.avif" },
        { title: "Health Matters", description: "Tips for maintaining a healthy lifestyle and well-being.", imageUrl: "static/images/health_matters.avif" },
        { title: "Artistic Inspirations", description: "Exploring the world of art, creativity, and inspiration.", imageUrl: "static/images/Artistic.avif" },
        { title: "Adventure Chronicles", description: "Exciting tales from globetrotters and adventurers.", imageUrl: "static/images/adventure.avif" },
        { title: "Literary Nook", description: "Discussing classic and contemporary literature.", imageUrl: "static/images/literary.avif" },
        { title: "Music Masters", description: "Dive into the world of music history and theory.", imageUrl: "static/images/music.avif" },
        { title: "Culinary Delights", description: "Exploring the art and science of cooking.", imageUrl: "static/images/delights.avif" },
        { title: "Political Perspectives", description: "Analyzing current events and political landscapes.", imageUrl: "static/images/political.avif" }
    ];
    
    const podcastGrid = document.querySelector('.podcast-grid');

    featuredPodcasts.forEach(podcast => {
        const podcastElement = document.createElement('div');
        podcastElement.innerHTML = `
            <img src="${podcast.imageUrl}" alt="${podcast.title}" style="width:100%">
            <h3>${podcast.title}</h3>
            <p>${podcast.description}</p>
        `;
        podcastGrid.appendChild(podcastElement);
    });
    
});

   // Sample data for recommended podcasts (replace this with actual data from AI)
   const recommendedPodcasts = [
    {
      title: "TechTalks",
      image: "static/images/tech.avif",
      description: "Discussions on latest trends in technology."
    },
    {
      title: "Science Stories",
      image: "static/images/science.avif",
      description: "Exploring fascinating stories from the world of science."
    },
    {
      title: "Design Matters",
      image: "static/images/design.avif",
      description: "Conversations with designers shaping our world."
    },
    {

        title: "Future Focus",
        image: "static/images/photo-1546188994-07c34f6e5e1b.avif",
        description: "Exploring upcoming trends and innovations across various industries."
    }
  ];

  // Function to display recommended podcasts
  function displayRecommendedPodcasts() {
    const recommendedPodcastsContainer = document.getElementById('recommendedPodcasts');
    recommendedPodcasts.forEach(podcast => {
      const podcastElement = document.createElement('div');
      podcastElement.classList.add('podcast');
      podcastElement.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title}">
        <h3>${podcast.title}</h3>
        <p>${podcast.description}</p>
      `;
      recommendedPodcastsContainer.appendChild(podcastElement);
    });
  }

  // Call the function to display recommended podcasts
  displayRecommendedPodcasts();