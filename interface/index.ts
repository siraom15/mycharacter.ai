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
    id: string | number;
    name: string;
    prompt: string;
    cover: string;
    // story: string;
}

export const characters: Character[] = [];

export type ResponseData = {
    message: string;
}

export type UserProfile = {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
}