
import SimpleGallery from './SimpleGallery'; // Update the path to the correct location

const images = [
    {
        largeURL:'https://images.unsplash.com/photo-1745690665873-b5239161c17b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
        thumbnailURL: 'https://images.unsplash.com/photo-1745690665873-b5239161c17b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D',
        width: 4672,
        height: 7008,
        alt:'Lion looking sus'
    },
    {
        largeURL:'https://plus.unsplash.com/premium_photo-1745442155549-fcfbe2606093?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D',
        thumbnailURL: 'https://plus.unsplash.com/premium_photo-1745442155549-fcfbe2606093?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D',
        width: 10000,
        height: 5625,
        alt:'My brain when i try to think'
    },
    {
        largeURL:'https://images.unsplash.com/photo-1745799326342-165974105ab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        thumbnailURL: 'https://images.unsplash.com/photo-1745799326342-165974105ab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        width: 4160,
        height: 6240,
        alt:'Dinosaur goes to the fun fence'
    }
  ]
export default function Home() {
return (
    <div className="p-12">
      <h1 className="text-2xl">About Page</h1>
<div className="mt-12">
 <SimpleGallery galleryID="image-gallery" images={images}/>
 </div>
 </div>
)
}
