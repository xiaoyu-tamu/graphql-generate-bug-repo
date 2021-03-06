import * as Types from '../test2-base';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type HeroAppearsInQueryVariables = {};


export type HeroAppearsInQuery = { __typename?: 'Query', hero?: Types.Maybe<{ __typename?: 'Human', name: string, appearsIn: Array<Types.Maybe<Types.Episode>> } | { __typename?: 'Droid', name: string, appearsIn: Array<Types.Maybe<Types.Episode>> }> };


export const HeroAppearsInDocument = gql`
    query HeroAppearsIn {
  hero {
    name
    appearsIn
  }
}
    `;

/**
 * __useHeroAppearsInQuery__
 *
 * To run a query within a React component, call `useHeroAppearsInQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroAppearsInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroAppearsInQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroAppearsInQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroAppearsInQuery, HeroAppearsInQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroAppearsInQuery, HeroAppearsInQueryVariables>(HeroAppearsInDocument, baseOptions);
      }
export function useHeroAppearsInLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroAppearsInQuery, HeroAppearsInQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroAppearsInQuery, HeroAppearsInQueryVariables>(HeroAppearsInDocument, baseOptions);
        }
export type HeroAppearsInQueryHookResult = ReturnType<typeof useHeroAppearsInQuery>;
export type HeroAppearsInLazyQueryHookResult = ReturnType<typeof useHeroAppearsInLazyQuery>;
export type HeroAppearsInQueryResult = ApolloReactCommon.QueryResult<HeroAppearsInQuery, HeroAppearsInQueryVariables>;