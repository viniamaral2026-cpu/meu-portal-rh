'use server';

/**
 * @fileOverview Summarizes blog posts from the GPWay portal.
 *
 * - summarizeBlogPosts - A function that summarizes the blog posts.
 * - SummarizeBlogPostsInput - The input type for the summarizeBlogPosts function.
 * - SummarizeBlogPostsOutput - The return type for the summarizeBlogPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPostsInputSchema = z.object({
  blogPostTitles: z.array(z.string()).describe('An array of blog post titles to summarize.'),
  blogPostContents: z.array(z.string()).describe('An array of blog post contents to summarize.'),
});
export type SummarizeBlogPostsInput = z.infer<typeof SummarizeBlogPostsInputSchema>;

const SummarizeBlogPostsOutputSchema = z.object({
  summaries: z
    .array(z.string())
    .describe('An array of summaries, one for each blog post.'),
});
export type SummarizeBlogPostsOutput = z.infer<typeof SummarizeBlogPostsOutputSchema>;

export async function summarizeBlogPosts(input: SummarizeBlogPostsInput): Promise<SummarizeBlogPostsOutput> {
  return summarizeBlogPostsFlow(input);
}

const summarizeBlogPostsPrompt = ai.definePrompt({
  name: 'summarizeBlogPostsPrompt',
  input: {schema: SummarizeBlogPostsInputSchema},
  output: {schema: SummarizeBlogPostsOutputSchema},
  prompt: `You are an expert summarizer of blog posts.

You will be given a list of blog post titles and their contents. You will provide a short, one-sentence summary for each blog post.

Blog Post Titles: {{blogPostTitles}}
Blog Post Contents: {{blogPostContents}}`,
});

const summarizeBlogPostsFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostsFlow',
    inputSchema: SummarizeBlogPostsInputSchema,
    outputSchema: SummarizeBlogPostsOutputSchema,
  },
  async input => {
    const {output} = await summarizeBlogPostsPrompt(input);
    return output!;
  }
);
