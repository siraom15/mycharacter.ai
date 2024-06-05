export type Story = {
    id: string | number;
    name: string;
    owner: string;
    likes: number;
    views: number;
    cover: string;
    characters: Character[];
}

export const stories: Story[] = [];

export type Character = {
    id: string;
    name: string;
    prompt: string;
    image: string;
    // story: string;
}

export const characters: Character[] = [];

export type ResponseData = {
    message: string;
}