import { create, StateCreator } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'
import {DEFAULT_LOCATION} from "@/constants/location";

interface LocationState {
    latitude: number | null
    longitude: number | null
    address: string | null
    region: string | null
    region_id: string | null
    setLocation: (lat: number, lng: number, address: string) => void
    clearLocation: () => void
}

type LocationPersist = (
    config: StateCreator<LocationState>,
    options: PersistOptions<LocationState>
) => StateCreator<LocationState>

// Create and export the store
const locationStore = create<LocationState>(
    (persist as LocationPersist)(
        (set) => ({
            latitude: DEFAULT_LOCATION.latitude,
            longitude: DEFAULT_LOCATION.longitude,
            address: null,
            region: DEFAULT_LOCATION.region,
            region_id: null,

            setLocation: (lat, lng, address) => set({
                latitude: lat,
                longitude: lng,
                address
            }),

            clearLocation: () => set({
                latitude: DEFAULT_LOCATION.latitude,
                longitude: DEFAULT_LOCATION.longitude,
                address: null,
                region: DEFAULT_LOCATION.region,
            })
        }),
        {
            name: 'location-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default locationStore
