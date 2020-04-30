import * as Types from '../test2-base';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type HeroNameQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
};


export type HeroNameQuery = { __typename?: 'Query', hero?: Types.Maybe<{ __typename?: 'Human', name: string } | { __typename?: 'Droid', name: string }> };


export const HeroNameDocument = gql`
    query HeroName($episode: Episode) {
  hero(episode: $episode) {
    name
  }
}
    `;

/**
 * __useHeroNameQuery__
 *
 * To run a query within a React component, call `useHeroNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroNameQuery({
 *   variables: {
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useHeroNameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroNameQuery, HeroNameQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroNameQuery, HeroNameQueryVariables>(HeroNameDocument, baseOptions);
      }
export function useHeroNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroNameQuery, HeroNameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroNameQuery, HeroNameQueryVariables>(HeroNameDocument, baseOptions);
        }
export type HeroNameQueryHookResult = ReturnType<typeof useHeroNameQuery>;
export type HeroNameLazyQueryHookResult = ReturnType<typeof useHeroNameLazyQuery>;
export type HeroNameQueryResult = ApolloReactCommon.QueryResult<HeroNameQuery, HeroNameQueryVariables>;