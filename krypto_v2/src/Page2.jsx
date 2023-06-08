import { Suspense, useEffect, useState } from 'react'
import People from './People'

export default function Page2()
{
    return <div>
        <h2>Page 2</h2>
        <Suspense fallback={<h1>LOADING</h1>} >
            <People />
        </Suspense>
    </div>
}