'use client'

import { useEffect, useRef } from 'react'

const locations = [
  { name: 'Київ', lat: 50.4501, lng: 30.5234 },
  { name: 'Дніпро', lat: 48.4647, lng: 35.0462 },
  { name: 'Кривий Ріг', lat: 47.9105, lng: 33.3918 },
  { name: 'Миколаїв', lat: 46.9750, lng: 31.9946 },
  { name: 'Одеса', lat: 46.4825, lng: 30.7233 },
  { name: 'Запоріжжя', lat: 47.8388, lng: 35.1396 },
  { name: 'Черкаси', lat: 49.4444, lng: 32.0598 },
  { name: 'Харків', lat: 49.9935, lng: 36.2304 }
]

export default function GoogleMap() {
  const mapRef = useRef(null)
console.log("API KEY:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
    script.async = true
    document.body.appendChild(script)

    window.initMap = function () {
      if (!mapRef.current) return

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 48.3794, lng: 31.1656 }, 
        zoom: 6
      })

      locations.forEach((loc) => {
        new window.google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map,
          title: loc.name
        })
      })
    }
  }, [])

  return <div ref={mapRef} className="w-full h-[500px] rounded-xl shadow" />
}
