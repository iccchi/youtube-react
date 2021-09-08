import React, { useContext, useEffect } from 'react'
import { Layout } from '../components/Layout/Layout'
import { fetchPopularDate } from '../apis'
import { Store } from '../store'
import { VideoGrid } from '../components/VideoGrid/VideoGrid'
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem'
export const Top = () => {
    const {globalState, setGlobalState} = useContext(Store)

    useEffect(()=>{
        fetchPopularDate().then((res)=>{
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    },[setGlobalState])

    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular.length !==0 && globalState.popular.map((popular) => {
                        return(
                            <VideoGridItem
                                id={popular.id}
                                key={popular.id}
                                src={popular.snippet.thumbnails.high.url}
                                title={popular.snippet.title}
                            />

                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}
