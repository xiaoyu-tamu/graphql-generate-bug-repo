import * as Types from '../test2-base';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type CreateReviewForEpisodeMutationVariables = {
  episode: Types.Episode;
  review: Types.ReviewInput;
};


export type CreateReviewForEpisodeMutation = { __typename?: 'Mutation', createReview?: Types.Maybe<{ __typename?: 'Review', stars: number, commentary?: Types.Maybe<string> }> };


export const CreateReviewForEpisodeDocument = gql`
    mutation CreateReviewForEpisode($episode: Episode!, $review: ReviewInput!) {
  createReview(episode: $episode, review: $review) {
    stars
    commentary
  }
}
    `;
export type CreateReviewForEpisodeMutationFn = ApolloReactCommon.MutationFunction<CreateReviewForEpisodeMutation, CreateReviewForEpisodeMutationVariables>;

/**
 * __useCreateReviewForEpisodeMutation__
 *
 * To run a mutation, you first call `useCreateReviewForEpisodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewForEpisodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewForEpisodeMutation, { data, loading, error }] = useCreateReviewForEpisodeMutation({
 *   variables: {
 *      episode: // value for 'episode'
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateReviewForEpisodeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateReviewForEpisodeMutation, CreateReviewForEpisodeMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateReviewForEpisodeMutation, CreateReviewForEpisodeMutationVariables>(CreateReviewForEpisodeDocument, baseOptions);
      }
export type CreateReviewForEpisodeMutationHookResult = ReturnType<typeof useCreateReviewForEpisodeMutation>;
export type CreateReviewForEpisodeMutationResult = ApolloReactCommon.MutationResult<CreateReviewForEpisodeMutation>;
export type CreateReviewForEpisodeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateReviewForEpisodeMutation, CreateReviewForEpisodeMutationVariables>;