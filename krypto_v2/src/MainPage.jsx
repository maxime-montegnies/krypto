import { useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import useApp from './store/useApp';

export default function MainPage({ }) {
    const stateApp = useApp.getState()
    const page = useApp((state) => state.page)
    useEffect((e, f) => {
        const _Page = useApp.subscribe(
            (state) => state.page,
            (value) => {
                console.log(`SET PAGE ${value}`);
            }
        );
        return () => {
            _Page();
        };
    }, []);
    return <>
        {/* <h1 >Main Page {page}</h1> */}
        {page=='page1' && <Page1 /> }
        {page=='page2' && <Page2 /> }
    </>
}