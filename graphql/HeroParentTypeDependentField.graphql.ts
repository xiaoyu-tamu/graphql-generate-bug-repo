import * as Types from '../test2-pre-resolve-types-only-operation-types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type HeroParentTypeDependentFieldQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
};


export type HeroParentTypeDependentFieldQuery = { __typename?: 'Query', hero?: Types.Maybe<{ __typename?: 'Human', name: string, friends?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Human', height?: Types.Maybe<number>, name: string } | { __typename?: 'Droid', name: string }>>> } | { __typename?: 'Droid', name: string, friends?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Human', height?: Types.Maybe<number>, name: string } | { __typename?: 'Droid', name: string }>>> }> };


export const HeroParentTypeDependentFieldDocument = gql`
    query HeroParentTypeDependentField($episode: Episode) {
  hero(episode: $episode) {
    name
    ... on Human {
      friends {
        name
        ... on Human {
          height(unit: FOOT)
        }
      }
    }
    ... on Droid {
      friends {
        name
        ... on Human {
          height(unit: METER)
        }
      }
    }
  }
}
    `;

/**
 * __useHeroParentTypeDependentFieldQuery__
 *
 * To run a query within a React component, call `useHeroParentTypeDependentFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroParentTypeDependentFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroParentTypeDependentFieldQuery({
 *   variables: {
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useHeroParentTypeDependentFieldQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeroParentTypeDependentFieldQuery, HeroParentTypeDependentFieldQueryVariables>) {
        return ApolloReactHooks.useQuery<HeroParentTypeDependentFieldQuery, HeroParentTypeDependentFieldQueryVariables>(HeroParentTypeDependentFieldDocument, baseOptions);
      }
export function useHeroParentTypeDependentFieldLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeroParentTypeDependentFieldQuery, HeroParentTypeDependentFieldQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeroParentTypeDependentFieldQuery, HeroParentTypeDependentFieldQueryVariables>(HeroParentTypeDependentFieldDocument, baseOptions);
        }
export type HeroParentTypeDependentFieldQueryHookResult = ReturnType<typeof useHeroParentTypeDependentFieldQuery>;
export type HeroParentTypeDependentFieldLazyQueryHookResult = ReturnType<typeof useHeroParentTypeDependentFieldLazyQuery>;
export type HeroParentTypeDependentFieldQueryResult = ApolloReactCommon.QueryResult<HeroParentTypeDependentFieldQuery, HeroParentTypeDependentFieldQueryVariables>;