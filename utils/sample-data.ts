import { Character, Story } from "@/interface";

export const characters: Character[] = [
    {
        id: 1,
        name: "Harry Potter",
        cover: "/img/harry.png",
        prompt:
            "A young wizard who is famous for defeating the dark wizard Lord Voldemort when he was a baby. He is the only known survivor of the Killing Curse, and as a result, bears a lightning-shaped scar on his forehead.",
    },
    {
        id: 2,
        name: "Hermione Granger",
        cover: "/img/hermione.png",
        prompt:
            "A young witch who is one of Harry Potter's best friends. She is known for her intelligence and hard work, and is often the voice of reason in the trio of main characters. She is Muggle-born, meaning she was born to non-magical parents.",
    },
    {
        id: 3,
        name: "Ron Weasley",
        cover: "/img/ron.png",
        prompt:
            "A wizard, tall, thin and gangling, with freckles, big hands and feet, and a long nose, red brown hair, poorA wizard boy handsome tall thin and gangling with freckles, and a long nose red brown hair, poor",
    },
    {
        id: 4,
        name: "Albus Dumbledore",
        cover: "/img/albus.png",
        prompt:
            "a classic wizard; tall and thin, with long silver hair, that looks long enough to tuck into his belt and a long beard. He also has twinkling blue eyes.",
    },
];

export const stories: Story[] = [
    {
        id: 1,
        name: "Harry Potter: Order of the Phoenix",
        cover: "/img/harry-oop.jpeg",
        owner: "Aommie",
        likes: 200,
        views: 1900,
        characters: characters,
    },
    {
        id: 2,
        name: "Harry Potter: Goblet of Fire",
        cover: "/img/dummy.png",
        owner: "Aommie",
        likes: 300,
        views: 2900,
        characters: [],
    }
];