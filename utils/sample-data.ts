import { Story } from "@/interface";

export const characters = [
    {
        id: "1",
        name: "Harry Potter",
        prompt: "A young wizard who is famous for defeating the dark wizard Lord Voldemort when he was a baby. He is the only known survivor of the Killing Curse, and as a result, bears a lightning-shaped scar on his forehead.",
        image: "/img/harry.png",
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
];