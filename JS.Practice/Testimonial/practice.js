const testimonial = [
    {
        name: "Shourya",
        photoUrl:
            "https://www.janairmodels.in/wp-content/uploads/2023/09/PABLO-Janair-Models-Modeling-Agency-in-Bangalore-12-380x380.jpg",
        aboutMe: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sunt consequuntur quo cumque culpa saepe minus ut autem veniam, neque enim? Vel ducimus aperiam qui, cum libero quidem delectus ex. Ducimus, dolorem nobis facilis eveniet illo voluptatum eos distinctio inventore, similique, nulla id. Illo eos molestiae est optio libero saepe a porro nam ipsum debitis reiciendis, eveniet, atque dolorum quod."
    },
    {
        name: "Aryan",
        photoUrl:
            "https://media.istockphoto.com/id/1201024669/photo/handsome-man-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=TexR7OTm-QRZCtkDecnSVgihtLMbG9WynadACrEiMf0=",
        aboutMe: "hdejcduhc db u efcjucne fc u jvu brf ui b f vibfvrbn b bevrv hgf fevvh fhb d we fnfv nvuifbfeurf rjvbufjk  bvewf jkrfb uihf u buf vrnfduchio fv ufbvje frjv uodnvjew fkv uhoew fmev uvhvj gkf u vjrebuofbjkv ejvuo nd v ehkho jkvuorehfjk cjk uoenfmjb uoaenf vjk udfnfjerfvu urehvurfjhuo ifheronfhihrufnjof"
    },
    {
        name: "Raj",
        photoUrl:
            "https://rjtalents.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-30-at-9.55.24-PM-2-Edited.png",
        aboutMe: "jvndfjvnjkbv fvjdfhuewfkv uebfj fvnunefjk jbvuewf n dsbfh f hvb hkbui fhbewuf hdbfi n hkfbwchir fnsd hufjkf bewuofwjkf chkuf kf jkbeufbwe bu fjbf buoewbf jkdben uewbrf fnebfu3 jburbjfeufhuf djbudfbf v buebfne fjubjbubefjkfbeu ouwebfhewf khfyiebfkew  ebfn fjbvew fne jkbf wnf eubfje fewfuobv ewfjbuobfkewf jubvje fewfjbfjkefjewvbje fkjwbds fewjb jkwfuewr jnuovdsheljwq fgjbuiwqruhkwg jb"
    }
];

const imgEl = document.querySelector(".image img");
const textEl = document.querySelector(".aboutMe");
const nameEl = document.querySelector(".name");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, aboutMe } = testimonial[idx];
    imgEl.src = photoUrl;
    textEl.innerText = aboutMe;
    nameEl.innerText = name;
    idx++;
    if (idx >= testimonial.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 2000)
};