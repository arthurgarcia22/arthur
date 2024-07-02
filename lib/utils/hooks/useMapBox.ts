// 'use client'
// import { MutableRefObject, useEffect, useRef } from 'react'

// import mapboxgl from 'mapbox-gl'
// import { useCalcState } from './useCalcState'
// import { useMobileDetect } from './useMobileDetect'
// import { useWindowSize } from './useWindowSize'
// export type mapBoxLocation = { lat: number | string; lon: number | string }

// type useMapBoxProps = {
//   accessToken: string
//   inView?: boolean
//   location: mapBoxLocation
//   offset?: [number, number]
//   onInit?: () => void
//   ref: MutableRefObject<unknown>
//   mapStyle?: string
// }

// export const useMapBox = ({
//   accessToken,
//   ref,
//   location,
//   inView,
//   offset,
//   onInit,
//   mapStyle,
// }: useMapBoxProps) => {
//   mapboxgl.accessToken = accessToken
//   const { width } = useWindowSize()

//   const currentDevice = useMobileDetect()

//   const [{ Lat, Lon }] = useCalcState(
//     () => ({
//       Lat: Number(location.lat),
//       Lon: Number(location.lon),
//     }),
//     [location],
//   )

//   const map = useRef<mapboxgl.Map | null>(null)

//   /* ----------------------------- Initialize Map ----------------------------- */
//   useEffect(() => {
//     if (map.current || !typeof document || !ref.current) return

//     if (onInit) onInit()

//     map.current = new mapboxgl.Map({
//       container: ref.current as HTMLElement,
//       style: mapStyle ? mapStyle : 'mapbox://styles/mapbox/light-v11',
//       center: [Lon, Lat],
//       dragPan: !currentDevice.isMobile,
//       zoom: 14,
//     })

//     if (offset) map.current.panBy(offset)

//     map.current.scrollZoom.disable()
//     const el = document.createElement('div')
//     el.className = 'marker '
//     el.innerHTML = '<div class="marker-inner"></div>'

//     // make a marker for each feature and add to the map
//     new mapboxgl.Marker(el).setLngLat([Lon, Lat]).addTo(map.current)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [ref])
//   /* -------------------------------------------------------------------------- */

//   /* ------------------------------- Update Map ------------------------------- */
//   // useEffect(() => {
//   //   if (!map.current) return

//   //   map.current.setCenter([Lon, Lat])

//   //   if (offset) map.current.panBy(offset)

//   //   const el = document.createElement('div')
//   //   el.className = 'marker'
//   //   el.innerHTML = '<div class="marker-inner"></div>'
//   //   // make a marker for each feature and add to the map
//   //   new mapboxgl.Marker(el).setLngLat([Lon, Lat]).addTo(map.current)
//   // }, [Lat, Lon, width, inView, offset])

//   /* -------------------------------------------------------------------------- */
//   return map
// }
