interface GoogleMapProps {
  location: string
  lat: number
  lng: number
}

export default function GoogleMap({ location, lat, lng }: GoogleMapProps) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8${lat}${lng}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s!5e0!3m2!1sen!2sin`

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(location)}`}
      ></iframe>
    </div>
  )
}
