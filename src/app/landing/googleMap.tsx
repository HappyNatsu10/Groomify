// import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';



// export default function GoogleMapComponent() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    
//   });

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <div className='relative h-[500px] w-full'>
//       <GoogleMap
//         mapContainerStyle={{
//           width: '100%',
//           height: '100%',
//         }}
//         center={{ lat: 37.7749, lng: -122.4194 }} // Coordinates for San Francisco, for example
//         zoom={12}
//       >
//         <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
//       </GoogleMap>
//     </div>
//   );
// }
