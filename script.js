 

document.addEventListener("DOMContentLoaded", function () {

  // Array of speaker data
  const speakers = [
    {
      name: "John Doe",
      role: "Frontend Engineer",
      company: "CRED",
      imgUrl:
        "https://www.reactindia.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnVe3lApIQB6x7Lu3JI0v&w=256&q=100",
      description:
        "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    },
    {
      name: "Jane Smith",
      role: "Backend Engineer",
      company: "XYZ Corp",
      imgUrl:
        "https://www.reactindia.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnVe3lApIQB6x7Lu3JI0v&w=256&q=100",
      description:
        "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    },
    {
      name: "Sam Wilson",
      role: "Full-stack Developer",
      company: "Tech Innovators",
      imgUrl:
        "https://www.reactindia.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnVe3lApIQB6x7Lu3JI0v&w=256&q=100",
      description:
        "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    },

    {
      name: "Sam Wilson",
      role: "Full-stack Developer",
      company: "Tech Innovators",
      imgUrl:
        "https://www.reactindia.io/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnVe3lApIQB6x7Lu3JI0v&w=256&q=100",
      description:
        "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
    },
  ];

  //For social media icons
  const img1 = document.getElementById("social1");
  img1.src = "assets/social1.svg";

  const img2 = document.getElementById("social2");
  img2.src = "assets/X_icon.svg";

  const img3 = document.getElementById("social3");
  img3.src = "assets/linkedIn_icon.svg";

  //Close Icon for popover
    const close = document.getElementById("close-popover");
    close.src = "assets/close_Icon.svg";


  // Function to create speaker cards
  const speakerContainer = document.getElementById("speaker-container");
  speakers.forEach((speaker) => {
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("shadow", "speaker_card");

    speakerCard.innerHTML = `
            <div class="cursor-pointer">
                <img class="speaker_img" src="${speaker.imgUrl}" alt="profile"/>
                <p class="text_center fw_700 text_dark mt_0 fs_24">${speaker.name}</p>
            </div>
            <div>
                <p class="mb_0 text_center fw_600 text_dark fs_18">${speaker.role}</p>
                <p class="mt_0 text_center fw_400 fs_16 text_secondary">${speaker.company}</p>
            </div>
        `;

    // Add click event to each card
    speakerCard.addEventListener("click", function () {
      // Show the popover with the speaker's full details
      showPopover(speaker);
    });

    speakerContainer.appendChild(speakerCard);
  });

  // Popover modal elements
  const popover = document.getElementById("popover");
  const closePopoverButton = document.getElementById("close-popover");

  // Function to display the popover with speaker's details
  function showPopover(speaker) {
    document.getElementById("popover-name").textContent = speaker.name;
    document.getElementById("popover-role").textContent = speaker.role;
    document.getElementById("popover-company").textContent = speaker.company;
    document.getElementById("popover-description").textContent =
      speaker.description;

    // Show the popover (While initially it's none)
    popover.style.display = "flex";
  }

  // Close the popover when the close button is clicked
  closePopoverButton.addEventListener("click", function () {
    popover.style.display = "none";
  });

  // Close the popover if the background is clicked
  popover.addEventListener("click", function (e) {
    if (e.target === popover) {
      popover.style.display = "none";
    }
  });
});
