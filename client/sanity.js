import {createClient} from '@sanity/client'
import imageBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'kzba1326',
    dataset: 'production',
    useCdn: 'true',
    apiVersion: '2023-05-03'
})

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;