import * as Types from '../test2-base';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type TwoHeroesQueryVariables = {};


export type TwoHeroesQuery = { __typename?: 'Query', r2?: Types.Maybe<{ __typename?: 'Human', name: string } | { __typename?: 'Droid', name: string }>, luke?: Types.Maybe<{ __typename?: 'Human', name: string } | { __typename?: 'Droid', name: string }> };


export const TwoHeroesDocument = gql`
    query TwoHeroes {
  r2: hero {
    name
  }
  luke: hero(episode: EMPIRE) {
    name
  }
}
    `;

/**
 * __useTwoHeroesQuery__
 *
 * To run a query within a React component, call `useTwoHeroesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTwoHeroesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTwoHeroesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTwoHeroesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TwoHeroesQuery, TwoHeroesQueryVariables>) {
        return ApolloReactHooks.useQuery<TwoHeroesQuery, TwoHeroesQueryVariables>(TwoHeroesDocument, baseOptions);
      }
export function useTwoHeroesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TwoHeroesQuery, TwoHeroesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TwoHeroesQuery, TwoHeroesQueryVariables>(TwoHeroesDocument, baseOptions);
        }
export type TwoHeroesQueryHookResult = ReturnType<typeof useTwoHeroesQuery>;
export type TwoHeroesLazyQueryHookResult = ReturnType<typeof useTwoHeroesLazyQuery>;
export type TwoHeroesQueryResult = ApolloReactCommon.QueryResult<TwoHeroesQuery, TwoHeroesQueryVariables>;