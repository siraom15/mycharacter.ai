'use server'

import { createClient } from '@/utils/supabase/server';

interface StoryCreationProps {
    name: string;
    prompt: string;
    storyId: string;
    cover: string;
}
interface StoryCreationResult {
    error: boolean;
    errorMessage?: string;
}

export async function createCharacterToStory({ name, prompt, storyId, cover }: StoryCreationProps): Promise<StoryCreationResult> {
    const supabase = createClient();

    try {
        const data = {
            name,
            prompt,
            story_id: storyId,
            cover,
        };
        console.log(data);


        const { error } = await supabase.from('characters').insert(data);
        if (error) {
            throw error;
        }

        return { error: false };
    } catch (error: any) {
        console.error(error.message);
        return { errorMessage: error.message, error: true };
    }
}
