import * as Types from '../test2-base';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type HeroAndFriendsNamesQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
};


export type HeroAndFriendsNamesQuery = { __typename?: 'Query', hero?: Types.Maybe<{ __typename?: 'Human', name: string, friends?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Human', name: string } | { __typename?: 'Droid', name: string }>>> } | { __typename?: 'Droid', name: string, friends?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Human', name: string } | { __typename?: 'Droid', name: string }>>> }> };


export const HeroAndFriendsNamesDocument = gql`
    query HeroAndFriendsNames($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
    `;

/**
 * __useHeroAndFriendsNamesQuery__
 *
 * To run a query within a React component, call `useHeroAndFriendsNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroAndFriendsNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroAndFriendsNamesQuery({
 *   variables: {
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useHeroAndFriendsNamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroAndFriendsNamesQuery, HeroAndFriendsNamesQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroAndFriendsNamesQuery, HeroAndFriendsNamesQueryVariables>(HeroAndFriendsNamesDocument, baseOptions);
      }
export function useHeroAndFriendsNamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroAndFriendsNamesQuery, HeroAndFriendsNamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroAndFriendsNamesQuery, HeroAndFriendsNamesQueryVariables>(HeroAndFriendsNamesDocument, baseOptions);
        }
export type HeroAndFriendsNamesQueryHookResult = ReturnType<typeof useHeroAndFriendsNamesQuery>;
export type HeroAndFriendsNamesLazyQueryHookResult = ReturnType<typeof useHeroAndFriendsNamesLazyQuery>;
export type HeroAndFriendsNamesQueryResult = ApolloReactCommon.QueryResult<HeroAndFriendsNamesQuery, HeroAndFriendsNamesQueryVariables>;