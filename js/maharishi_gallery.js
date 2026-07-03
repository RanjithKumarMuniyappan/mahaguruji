const ministries = [
    {
        image: "assets/mlx_assets/images/gallery/1965/Girish with Maharishi ji1_new-1.jpg",
        title: "Girish with Maharishi ji 1965"
    },
    {
        image: "assets/mlx_assets/images/gallery/1965/GirishwithMaharishiJiRishikeshMay1965.jpg",
        title: "Girish with Maharishi Ji Rishikesh 1965"
    },
    {
        image: "assets/mlx_assets/images/gallery/1965/Girish with Maharishi Ji Rishikesh May 1965.3-1.jpg",
        title: "Girish with Maharishi Ji Rishikesh 1965"
    },
    {
        image: "assets/mlx_assets/images/gallery/1982/Bhatkhande orchestra 1982-.jpg",
        title: "Bhatkhande orchestra 1982"
    },
    {
        image: "assets/mlx_assets/images/gallery/1982/GCV_Jabalpur drama_198-.jpg",
        title: "GCV Jabalpur drama 1982"
    },
    {
        image: "assets/mlx_assets/images/gallery/1982/GCV_Jabalpur drama_1982-.jpg",
        title: "GCV Jabalpur drama 1982"
    },
];

const container = document.getElementById("ministry-container");

ministries.forEach(ministry => {
  container.innerHTML += `
    

    <div class="col-lg-4 col-md-6 col-sm-12">
    

                    <div class="ministry text-center light-bg position-relative" >

                        <img class="rounded-circle position-relative img-fluid w-100" alt="${ministry.title}" src="${ministry.image}" >

                        <a href="JavaScript:void(0)" class="font-bold flex-all position-relative">${ministry.title}</a>

                    </div>

                </div>
  `;
});