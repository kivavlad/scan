import type { ISearchParams } from "../types/data";

export const API_BASE_URL = 'https://gateway.scan-interfax.ru';

export const TONALITY_PARAMS = [
    {name: 'Любая', value: 'any'},
    {name: 'Позитивная', value: 'positive'},
    {name: 'Негативная', value: 'negative'},
]

export const URL_SEARCH_PARAMS = (data: ISearchParams) => {
    const params = 
        {
            issueDateInterval: {
              startDate: data.startDate,
              endDate: data.endDate
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [
                  {
                    type: "company",
                    sparkId: null,
                    entityId: null,
                    inn: data.inn,
                    maxFullness: data.maxFullness,
                    inBusinessNews: data.inBusinessNews
                  }
                ],
                onlyMainRole: data.onlyMainRole,
                tonality: data.tonality,
                onlyWithRiskFactors: data.onlyWithRiskFactors,
                riskFactors: {
                  and: [],
                  or: [],
                  not: []
                },
                themes: {
                  and: [],
                  or: [],
                  not: []
                }
              },
              themesFilter: {
                and: [],
                or: [],
                not: []
              }
            },
            searchArea: {
              includedSources: [],
              excludedSources: [],
              includedSourceGroups: [],
              excludedSourceGroups: []
            },
            attributeFilters: {
              excludeTechNews: data.includeTechNews,
              excludeAnnouncements: data.includeAnnouncements,
              excludeDigests: data.includeDigests
            },
            similarMode: "duplicates",
            limit: data.limit,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: [
              "totalDocuments",
              "riskFactors"
            ]
        }
    return params;
}