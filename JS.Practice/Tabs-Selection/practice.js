const knowledgeBox = [
    {
        photoUrl:
            "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA=",
        about:
            "A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae. Sediments settle in different densities and structures, depending on the local wave action and weather, creating different textures, colors and gradients or layers of material."
    },
    {
        photoUrl:
            "https://i.ytimg.com/vi/eoTpdTU8nTA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCVV-UM9W0e9jnO-Q8D3lP1w5ordw",
        about:
            "The ocean is the body of salt water that covers approximately 70.8% of Earth.[8] The ocean is conventionally divided into large bodies of water, which are also referred to as oceans (in descending order by area: the Pacific Ocean, the Atlantic Ocean, the Indian Ocean, the Antarctic/Southern Ocean, and the Arctic Ocean),[9][10][11] and are themselves mostly divided into seas, gulfs and subsequent bodies of water. The ocean contains 97% of Earth's water[8] and is the primary component of Earth's hydrosphere, acting as a huge reservoir of heat for Earth's energy budget, as well as for its carbon cycle and water cycle, forming the basis for climate and weather patterns worldwide. The ocean is essential to life on Earth, harbouring most of Earth's animals and protist life,[12] originating photosynthesis and therefore Earth's atmospheric oxygen, still supplying half of it."
    },
    {
        photoUrl:
            "https://t3.ftcdn.net/jpg/01/80/83/76/360_F_180837604_UyJZNTHPluIJNQJjmTkCpE4XLJ03Zott.jpg",
        about:
            "Mountains are large landforms rising prominently above surrounding terrain, usually with steep slopes and peaks, defined typically by elevations higher than 610 meters. Formed over millions of years primarily by tectonic plate collisions or volcanic activity, they cover 27% of Earth's land and play a critical role in shaping climate, storing water, and hosting unique ecosystems"
    }
]

let btnEl = document.querySelectorAll(".btnBox .change");
let imgEl = document.querySelector(".picture img");
let aboutEl = document.querySelector(".aboutMe");

btnEl.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
        btnEl.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");

        const index = e.target.dataset.index;
        const knowledge = knowledgeBox[index];

        imgEl.src = knowledge.photoUrl;
        aboutEl.innerText = knowledge.about;
    })
});