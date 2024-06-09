'use server'

import { Story } from '@/interface';
import { createClient } from '@/utils/supabase/server';

interface StoryCreationProps {
    name: string;
    description: string;
    is_public: boolean;
}

interface StoryUpdateProps extends StoryCreationProps {
    id: string;
}

interface StoryCreationResult {
    data?: Story;
    error: boolean;
    errorMessage?: string;
}

export async function createStory({ name, description, is_public }: StoryCreationProps): Promise<StoryCreationResult> {
    const supabase = createClient();

    try {
        const { data: { user } } = await supabase.auth.getUser();
        const ownerId = user?.id;
        const data = {
            name,
            description,
            owner: ownerId,
            is_public,
        };

        const { error, data: created_story } = await supabase.from('stories').upsert(data).select().single();
        if (error) {
            throw error;
        }

        return { error: false, data: created_story };
    } catch (error: any) {
        console.error(error.message);
        return { errorMessage: error.message, error: true };
    }
}

export async function updateStory({ id, name, description, is_public }: StoryUpdateProps): Promise<StoryCreationResult> {
    const supabase = createClient();

    try {
        const { data: { user } } = await supabase.auth.getUser();
        const ownerId = user?.id;
        const data = {
            name,
            description,
            owner: ownerId,
            is_public,
        };

        const { error } = await supabase.from('stories').update(data).eq('id', id);
        if (error) {
            throw error;
        }

        return { error: false };
    } catch (error: any) {
        console.error(error.message);
        return { errorMessage: error.message, error: true };
    }
}