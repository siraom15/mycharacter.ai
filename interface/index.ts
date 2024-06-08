export type Story = {
    id: string | number;
    name: string;
    owner: string;
    likes: number;
    views: number;
    cover: string;
    description: string;
    created_at: string;
    is_public: boolean;
    characters: Character[];
}

export type StoryWithProfile = Story & {
    profiles: {
        username: string;
    };
}

export type Character = {
    id: string | number;
    name: string;
    prompt: string;
    cover: string;
    // story: string;
}

export type ResponseData = {
    message: string;
}

export type UserProfile = {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
}