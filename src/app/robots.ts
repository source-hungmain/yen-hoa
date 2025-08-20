import { getBaseUrl } from '@/utils'
import type { MetadataRoute } from 'next'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const baseUrl = await getBaseUrl()

    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
