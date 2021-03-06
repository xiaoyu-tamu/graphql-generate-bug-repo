import * as Types from '../test2-base';

import { HeroDetails_Human_Fragment, HeroDetails_Droid_Fragment } from './HeroDetailsFragment.graphql';
import gql from 'graphql-tag';
import { HeroDetailsFragmentDoc } from './HeroDetailsFragment.graphql';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type HeroDetailsWithFragmentQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
};


export type HeroDetailsWithFragmentQuery = { __typename?: 'Query', hero?: Types.Maybe<(
    { __typename?: 'Human' }
    & HeroDetails_Human_Fragment
  ) | (
    { __typename?: 'Droid' }
    & HeroDetails_Droid_Fragment
  )> };


export const HeroDetailsWithFragmentDocument = gql`
    query HeroDetailsWithFragment($episode: Episode) {
  hero(episode: $episode) {
    ...HeroDetails
  }
}
    ${HeroDetailsFragmentDoc}`;

/**
 * __useHeroDetailsWithFragmentQuery__
 *
 * To run a query within a React component, call `useHeroDetailsWithFragmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroDetailsWithFragmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroDetailsWithFragmentQuery({
 *   variables: {
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useHeroDetailsWithFragmentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroDetailsWithFragmentQuery, HeroDetailsWithFragmentQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroDetailsWithFragmentQuery, HeroDetailsWithFragmentQueryVariables>(HeroDetailsWithFragmentDocument, baseOptions);
      }
export function useHeroDetailsWithFragmentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroDetailsWithFragmentQuery, HeroDetailsWithFragmentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroDetailsWithFragmentQuery, HeroDetailsWithFragmentQueryVariables>(HeroDetailsWithFragmentDocument, baseOptions);
        }
export type HeroDetailsWithFragmentQueryHookResult = ReturnType<typeof useHeroDetailsWithFragmentQuery>;
export type HeroDetailsWithFragmentLazyQueryHookResult = ReturnType<typeof useHeroDetailsWithFragmentLazyQuery>;
export type HeroDetailsWithFragmentQueryResult = ApolloReactCommon.QueryResult<HeroDetailsWithFragmentQuery, HeroDetailsWithFragmentQueryVariables>;