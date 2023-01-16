import { Router } from 'itty-router'
import { mongodb } from '@saibotsivad/mongodb'

// Create a new router
const router = Router()

const api = mongodb({
    apiKey: MONGODB_APIKEY,
    apiUrl: MONGODB_APIURL,
})

const corsHeaders = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*',
}

router.options('/api/submit-results', async request => {
    return new Response('OK', {
        headers: corsHeaders,
    })
})

// Submit results to mongodb router route
router.post('/api/submit-results', async request => {
    let content = await request.json()

    // Get mongodb database from request header
    let mongoDBHeader = request.headers.get('MongoDB-Database')

    console.log(mongoDBHeader)
    // If request header for mongodb database returns null then use defaults set in the environment variables
    if (mongoDBHeader === null) {
        mongoDBHeader = MONGODB_DATABASE
    }

    // Add a timestamp to results
    content['timestamp'] = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/-/g, '/')
        .replace('T', ' ')

    try {
        const result = await api.insertOne(
            { document: content },
            {
                dataSource: MONGODB_DATASOURCE,
                database: mongoDBHeader,
                collection: MONGODB_COLLECTION,
            }
        )
        console.log(result)
    } catch (err) {
        console.error(err)
        return new Response('Error saving results', {
            status: 500,
            headers: corsHeaders,
        })
    }

    return new Response('Successfully saved results', {
        status: 200,
        headers: corsHeaders,
    })
})

// If router route in unknown, return a 404 error.
router.all(
    '*',
    () =>
        new Response('404, not found!', {
            status: 404,
            headers: corsHeaders,
        })
)

addEventListener('fetch', e => {
    e.respondWith(router.handle(e.request))
})
