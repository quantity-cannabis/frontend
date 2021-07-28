import { OperationContext } from '@commerce/api/operations'
import { Category } from '@commerce/types/site'
import { LocalConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'flower',
          name: 'Flower',
          slug: 'flower',
          path: '/flower',
        },
        {
          id: 'vapes',
          name: 'Vapes',
          slug: 'vapes',
          path: '/vapes',
        },
        {
          id: 'edibles',
          name: 'Edibles',
          slug: 'edibles',
          path: '/edibles',
        },
        {
          id: 'concentrates',
          name: 'Concentrates',
          slug: 'concentrates',
          path: '/concentrates',
        },
        {
          id: 'prerolls',
          name: 'Prerolls',
          slug: 'prerolls',
          path: '/prerolls',
        },
        {
          id: 'wellness',
          name: 'Wellness',
          slug: 'wellness',
          path: '/wellness',
        },
        {
          id: 'acessories',
          name: 'Accessories',
          slug: 'acessories',
          path: '/acessories',
        },
      ],
      brands: [],
    })
  }

  return getSiteInfo
}
