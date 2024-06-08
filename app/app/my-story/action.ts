'use server'

import { createClient } from '@/utils/supabase/server';

interface StoryCreationProps {
    name: string;
}
interface StoryCreationResult {
    error: boolean;
    errorMessage?: string;
}

export async function createStory({ name }: StoryCreationProps): Promise<StoryCreationResult> {
    const supabase = createClient();

    try {
        const { data: { user } } = await supabase.auth.getUser();
        const ownerId = user?.id;
        const data = {
            name,
            owner: ownerId,
        };

        const { error } = await supabase.from('stories').insert(data);
        if (error) {
            throw error;
        }

        return { error: false };
    } catch (error: any) {
        console.error(error.message);
        return { errorMessage: error.message, error: true };
    }
}
