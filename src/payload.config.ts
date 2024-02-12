import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { webpackBundler} from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";



export default buildConfig({
    serverURL : process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections : [],
    routes : {
        admin : '/sell',
    },
    admin : {
        bundler : webpackBundler(),
        meta : {
            titleSuffix : '_DigitalShop',
            favicon : '/favicon.ico',
            ogImage : '/thumbnail.jpg'
        }
    },
    editor: slateEditor({}),
    db : mongooseAdapter({
        url : process.env.MONGODB_URL!,
    }),
    rateLimit : {
        max : 2000
    }, typescript : {
        outputFile : path.resolve(__dirname, 'payload-typess.ts')
    }
})