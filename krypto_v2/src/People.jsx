import { useEffect, useState } from 'react'

export default function People()
{
    // const [ people, setPeople ] = useState([
    //     { id: 1, name: 'John' },
    //     { id: 2, name: 'Jane' },
    //     { id: 3, name: 'Sudo' },
    //     { id: 4, name: 'Boy' }
    // ])
    const [ people, setPeople ] = useState([])

    const getPeople = async () =>
    {
        console.log('getPeople')
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        await new Promise(resolve => setTimeout(resolve, 1000));
        const result = await response.json()
        setPeople(result)
    }

    useEffect(() =>
    {
        getPeople()
    }, [])


    return <div>
        <h2>People</h2>
        
        { people.length>0 && <ul>
            {people.map(person => 
                    <li key={ person.id }>{ person.name }</li>
                    )
            }   
        </ul>}

        { people.length == 0 && <h1>loading</h1> }
        
    </div>
}