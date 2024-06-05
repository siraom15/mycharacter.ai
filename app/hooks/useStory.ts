import { Story } from '@/interface';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useStory(id: string): { data: Story, isLoading: boolean, isError: any } {
    const { data, error, isLoading } = useSWR(`/api/stories/${id}`, fetcher);
    return {
        data,
        isLoading,
        isError: error,
    };
}

