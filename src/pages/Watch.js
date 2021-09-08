import React, {useEffect, useContext} from 'react'
import { Layout } from '../components/Layout/Layout'
import { SideList } from '../components/SideList/SideList'
import { VideoDetail } from '../components/VideoDetail/VideoDetail'
import { Store } from '../store'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData, fetchRelatedData } from '../apis'

export const Watch = () => {
    const {setGlobalState} = useContext(Store)
    const location = useLocation()

    const setVideos = async () => {
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get('v')
        if (id) {
            const [related, selected] = await Promise.all([fetchRelatedData(id), fetchSelectedData(id)])
            setGlobalState({type: 'SET_SELECTED', payload: {selected: selected.data.items.shift()}})
            setGlobalState({type: 'SET_RELATED', payload: {related: related.data.items}})
        }
    }

    useEffect(()=>{
        setVideos()
    }, [location.search])
    return (
        <Layout>
            <VideoDetail />
            <SideList />
        </Layout>
    )
}
