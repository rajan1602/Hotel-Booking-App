export default function PropertyGallery({ images }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.url}
          alt={img.alt || "Hotel image"}
          className={`rounded-xl ${idx === 0 ? "col-span-2 row-span-2 h-96" : "h-48"} w-full object-cover`}
        />
      ))}
    </div>
  );
}
