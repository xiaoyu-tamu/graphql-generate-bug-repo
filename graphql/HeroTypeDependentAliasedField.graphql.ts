import * as Types from '../test2-base';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type HeroTypeDependentAliasedFieldQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
};


export type HeroTypeDependentAliasedFieldQuery = { __typename?: 'Query', hero?: Types.Maybe<{ __typename?: 'Human', property?: Types.Maybe<string> } | { __typename?: 'Droid', property?: Types.Maybe<string> }> };


export const HeroTypeDependentAliasedFieldDocument = gql`
    query HeroTypeDependentAliasedField($episode: Episode) {
  hero(episode: $episode) {
    ... on Human {
      property: homePlanet
    }
    ... on Droid {
      property: primaryFunction
    }
  }
}
    `;

/**
 * __useHeroTypeDependentAliasedFieldQuery__
 *
 * To run a query within a React component, call `useHeroTypeDependentAliasedFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroTypeDependentAliasedFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroTypeDependentAliasedFieldQuery({
 *   variables: {
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useHeroTypeDependentAliasedFieldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroTypeDependentAliasedFieldQuery, HeroTypeDependentAliasedFieldQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroTypeDependentAliasedFieldQuery, HeroTypeDependentAliasedFieldQueryVariables>(HeroTypeDependentAliasedFieldDocument, baseOptions);
      }
export function useHeroTypeDependentAliasedFieldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroTypeDependentAliasedFieldQuery, HeroTypeDependentAliasedFieldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroTypeDependentAliasedFieldQuery, HeroTypeDependentAliasedFieldQueryVariables>(HeroTypeDependentAliasedFieldDocument, baseOptions);
        }
export type HeroTypeDependentAliasedFieldQueryHookResult = ReturnType<typeof useHeroTypeDependentAliasedFieldQuery>;
export type HeroTypeDependentAliasedFieldLazyQueryHookResult = ReturnType<typeof useHeroTypeDependentAliasedFieldLazyQuery>;
export type HeroTypeDependentAliasedFieldQueryResult = ApolloReactCommon.QueryResult<HeroTypeDependentAliasedFieldQuery, HeroTypeDependentAliasedFieldQueryVariables>;