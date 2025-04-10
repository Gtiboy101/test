const cards = [
  {
      title: 'Cakes',
      img: "https://plus.unsplash.com/premium_photo-1741194732785-4624b6e5f0b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", 
  },
  {
      title: 'Sloth Bear',
      img: "https://www.freepik.com/premium-ai-image/wildlife-scene-featuring-indian-sloth-bear-water-showcasing-bear39s-behavior-natural-environment_328371308.htm"
  },
  {
      title: 'Sunny Beach',
      img: "https://example.com/path/to/image.jpg", 
  }
]

function Main() {
return (
  <main>
    <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
       {cards.map((card, index) => <Card key={index} title={card.title} image={card.img} />)}
    </div>
  </main>
);
}