import { Story } from '@/interface';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useStories(): { data: Story[], isLoading: boolean, isError: any } {
    const { data, error, isLoading } = useSWR(`/api/stories`, fetcher);
    return {
        data,
        isLoading,
        isError: error,
    };
}

