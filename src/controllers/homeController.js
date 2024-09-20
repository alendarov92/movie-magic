import { Router } from "express";

const router = Router();

const movies = [
  {
    "id": "1",
    "title": "Cuise",
    "genre": "Adventure",
    "imageUrl": "/img/jungle-cruise.jpeg",
    "description": "Dreaming about saving countless lives and having anotheradventure, the feisty English feminist and doctor of botany, Dr LilyHoughton, embarks on a peril-laden mission to change the world. Alongwith her fashionable brother, MacGregor, Dr Houghton enlists the helpof the arrogant, wisecracking riverboat skipper, Captain Frank Wolff,to guide them through the serpentine Amazon River in La Quila, hisswift wooden boat. Now, as the intrepid trio ventures deeper anddeeper into the heart of an impenetrable green maze, searching forsomething that cannot be found, a centuries-old curse and the ruthlessaristocrat, Prince Joachim, threaten to put an end to their ambitiousplans."
  },
  {
    "id": "2",
    "title": "The Little Mermaid",
    "genre": "Fantasy",
    "imageUrl": "/img/the-little-mermaid.jpg",
    "description": "The youngest of King Triton's daughters, Ariel is abeautiful and spirited young mermaid with a thirst for adventure.Longing to find out more about the world beyond the sea, Ariel visitsthe surface and falls for the dashing Prince Eric. Following herheart, she makes a deal with the evil sea witch, Ursula, to experiencelife on land."
  },
  {
    "id": "3",
    "title": "Home Alone",
    "genre": "Comedy",
    "imageUrl": "/img/home-alone.jpeg",
    "description": "It is Christmas time and the McCallister family ispreparing for a vacation in Paris, France. But the youngest in thefamily, Kevin (Macaulay Culkin), got into a scuffle with his olderbrother Buzz (Devin Ratray) and was sent to his room, which is on thethird floor of his house. Then, the next morning, while the rest ofthe family was in a rush to make it to the airport on time, theycompletely forgot about Kevin, who now has the house all to himself.Being home alone was fun for Kevin, having a pizza all to himself,jumping on his parents' bed, and making a mess. Then, Kevin discoversabout two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), aboutto rob his house on Christmas Eve. Kevin acts quickly by wiring hisown house with makeshift booby traps to stop the burglars and to bringthem to justice."
  }
]

router.get("/", (req, res) => {
  res.render("home", { movies});
});

router.get("/about", (req, res) => {
  res.render("home/about");
});

router.get("/search", (req, res) => {
  res.render("home/search");
});

export default router;
