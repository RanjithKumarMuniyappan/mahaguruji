document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const GALLERY_DATA = [
        {
            year: 2025, images: [
                "assets/mlx_assets/images/gallery/2025/1.jpg",
                "assets/mlx_assets/images/gallery/2025/2.jpg",
                "assets/mlx_assets/images/gallery/2025/3.jpg",
                "assets/mlx_assets/images/gallery/2025/4.jpg",
                "assets/mlx_assets/images/gallery/2025/5.jpg",
                "assets/mlx_assets/images/gallery/2025/6.jpg",
                "assets/mlx_assets/images/gallery/2025/7.jpg",
                "assets/mlx_assets/images/gallery/2025/8.jpg",
                "assets/mlx_assets/images/gallery/2025/9.jpg",
                "assets/mlx_assets/images/gallery/2025/10.jpg",
                "assets/mlx_assets/images/gallery/2025/11.jpg",
                "assets/mlx_assets/images/gallery/2025/12.jpg",
                "assets/mlx_assets/images/gallery/2025/13.jpg",
                "assets/mlx_assets/images/gallery/2025/14.jpg",
                "assets/mlx_assets/images/gallery/2025/15.jpg",
                "assets/mlx_assets/images/gallery/2025/16.jpg",
                "assets/mlx_assets/images/gallery/2025/17.jpg",
                "assets/mlx_assets/images/gallery/2025/18.jpg",
                "assets/mlx_assets/images/gallery/2025/19.jpg",
                "assets/mlx_assets/images/gallery/2025/20.jpg",
                "assets/mlx_assets/images/gallery/2025/21.jpg",
                "assets/mlx_assets/images/gallery/2025/22.jpg",
                "assets/mlx_assets/images/gallery/2025/23.jpg",
                "assets/mlx_assets/images/gallery/2025/24.jpg",
                "assets/mlx_assets/images/gallery/2025/25.jpg",
                "assets/mlx_assets/images/gallery/2025/26.jpg",
                "assets/mlx_assets/images/gallery/2025/27.jpg",
                "assets/mlx_assets/images/gallery/2025/28.jpg",
                "assets/mlx_assets/images/gallery/2025/29.jpg",
                "assets/mlx_assets/images/gallery/2025/30.jpg",
                "assets/mlx_assets/images/gallery/2025/31.jpg",
                "assets/mlx_assets/images/gallery/2025/32.jpg",
                "assets/mlx_assets/images/gallery/2025/33.jpg",
                "assets/mlx_assets/images/gallery/2025/34.jpg",
                "assets/mlx_assets/images/gallery/2025/35.jpg",
                "assets/mlx_assets/images/gallery/2025/36.jpg",
                "assets/mlx_assets/images/gallery/2025/37.jpg",
                "assets/mlx_assets/images/gallery/2025/38.jpg",
                "assets/mlx_assets/images/gallery/2025/39.jpg",
                "assets/mlx_assets/images/gallery/2025/40.jpg",
                "assets/mlx_assets/images/gallery/2025/41.jpg",
                "assets/mlx_assets/images/gallery/2025/42.jpg",
                "assets/mlx_assets/images/gallery/2025/43.jpg",
                "assets/mlx_assets/images/gallery/2025/44.jpg",
                "assets/mlx_assets/images/gallery/2025/45.jpg",
                "assets/mlx_assets/images/gallery/2025/46.jpg",
                "assets/mlx_assets/images/gallery/2025/47.jpg",
                "assets/mlx_assets/images/gallery/2025/48.jpg",
                "assets/mlx_assets/images/gallery/2025/49.jpg",
                "assets/mlx_assets/images/gallery/2025/50.jpg",
                "assets/mlx_assets/images/gallery/2025/51.jpg",
                "assets/mlx_assets/images/gallery/2025/52.jpg",
                "assets/mlx_assets/images/gallery/2025/53.jpg",
                "assets/mlx_assets/images/gallery/2025/54.jpg",
                "assets/mlx_assets/images/gallery/2025/55.jpg",
                "assets/mlx_assets/images/gallery/2025/56.jpg",
                "assets/mlx_assets/images/gallery/2025/57.jpg",
                "assets/mlx_assets/images/gallery/2025/58.jpg",
                "assets/mlx_assets/images/gallery/2025/59.jpg",
                "assets/mlx_assets/images/gallery/2025/60.jpg",
                "assets/mlx_assets/images/gallery/2025/61.jpg",
                "assets/mlx_assets/images/gallery/2025/62.jpg",
                "assets/mlx_assets/images/gallery/2025/63.jpg",
                "assets/mlx_assets/images/gallery/2025/64.jpg",
                "assets/mlx_assets/images/gallery/2025/65.jpg",
                "assets/mlx_assets/images/gallery/2025/66.jpg",
                "assets/mlx_assets/images/gallery/2025/67.jpg",
                "assets/mlx_assets/images/gallery/2025/68.jpg",
                "assets/mlx_assets/images/gallery/2025/69.jpg",
                "assets/mlx_assets/images/gallery/2025/70.jpg",
                "assets/mlx_assets/images/gallery/2025/71.jpg",
                "assets/mlx_assets/images/gallery/2025/72.jpg",
                "assets/mlx_assets/images/gallery/2025/73.jpg",
                "assets/mlx_assets/images/gallery/2025/74.jpg",
                "assets/mlx_assets/images/gallery/2025/75.jpg",
                "assets/mlx_assets/images/gallery/2025/76.jpg",
                "assets/mlx_assets/images/gallery/2025/77.jpg",
                "assets/mlx_assets/images/gallery/2025/78.jpg",
                "assets/mlx_assets/images/gallery/2025/79.jpg",
                "assets/mlx_assets/images/gallery/2025/80.jpg",
                "assets/mlx_assets/images/gallery/2025/81.jpg",
                "assets/mlx_assets/images/gallery/2025/82.jpg",
                "assets/mlx_assets/images/gallery/2025/83.jpg",
                "assets/mlx_assets/images/gallery/2025/84.jpg",
                "assets/mlx_assets/images/gallery/2025/85.jpg",
                "assets/mlx_assets/images/gallery/2025/86.jpg",
                "assets/mlx_assets/images/gallery/2025/87.jpg",
                "assets/mlx_assets/images/gallery/2025/88.jpg",
                "assets/mlx_assets/images/gallery/2025/89.jpg",
                "assets/mlx_assets/images/gallery/2025/90.jpg",
                "assets/mlx_assets/images/gallery/2025/91.jpg",
                "assets/mlx_assets/images/gallery/2025/92.jpg",
                "assets/mlx_assets/images/gallery/2025/93.jpg",
                "assets/mlx_assets/images/gallery/2025/94.jpg",
                "assets/mlx_assets/images/gallery/2025/95.jpg",
                "assets/mlx_assets/images/gallery/2025/96.jpg",
                "assets/mlx_assets/images/gallery/2025/97.jpg",
                "assets/mlx_assets/images/gallery/2025/98.jpg",
                "assets/mlx_assets/images/gallery/2025/99.jpg",
                "assets/mlx_assets/images/gallery/2025/100.jpg",
                "assets/mlx_assets/images/gallery/2025/101.jpg",
                "assets/mlx_assets/images/gallery/2025/102.jpg",
                "assets/mlx_assets/images/gallery/2025/103.jpg",
                "assets/mlx_assets/images/gallery/2025/104.jpg",
                "assets/mlx_assets/images/gallery/2025/105.jpg",
                "assets/mlx_assets/images/gallery/2025/106.jpg",
                "assets/mlx_assets/images/gallery/2025/107.jpg",
                "assets/mlx_assets/images/gallery/2025/108.jpg",
                "assets/mlx_assets/images/gallery/2025/109.jpg",
                "assets/mlx_assets/images/gallery/2025/110.jpg",
                "assets/mlx_assets/images/gallery/2025/111.jpg",
                "assets/mlx_assets/images/gallery/2025/112.jpg",
                "assets/mlx_assets/images/gallery/2025/113.jpg",
                "assets/mlx_assets/images/gallery/2025/114.jpg",
                "assets/mlx_assets/images/gallery/2025/115.jpg",
                "assets/mlx_assets/images/gallery/2025/116.jpg",
                "assets/mlx_assets/images/gallery/2025/117.jpg",
                "assets/mlx_assets/images/gallery/2025/118.jpg",
                "assets/mlx_assets/images/gallery/2025/119.jpg",
                "assets/mlx_assets/images/gallery/2025/120.jpg",
                "assets/mlx_assets/images/gallery/2025/121.jpg",
                "assets/mlx_assets/images/gallery/2025/122.jpg",
                "assets/mlx_assets/images/gallery/2025/123.jpg",
                "assets/mlx_assets/images/gallery/2025/124.jpg",
                "assets/mlx_assets/images/gallery/2025/125.jpg",
                "assets/mlx_assets/images/gallery/2025/126.jpg",
                "assets/mlx_assets/images/gallery/2025/127.jpg",
                "assets/mlx_assets/images/gallery/2025/128.jpg",
                "assets/mlx_assets/images/gallery/2025/129.jpg",
                "assets/mlx_assets/images/gallery/2025/130.jpg",
                "assets/mlx_assets/images/gallery/2025/131.jpg",
                "assets/mlx_assets/images/gallery/2025/132.jpg",
                "assets/mlx_assets/images/gallery/2025/133.jpg",
                "assets/mlx_assets/images/gallery/2025/134.jpg",
                "assets/mlx_assets/images/gallery/2025/135.jpg",
                "assets/mlx_assets/images/gallery/2025/136.jpg",
                "assets/mlx_assets/images/gallery/2025/137.jpg",
                "assets/mlx_assets/images/gallery/2025/138.jpg",
                "assets/mlx_assets/images/gallery/2025/139.jpg",
                "assets/mlx_assets/images/gallery/2025/140.jpg",
                "assets/mlx_assets/images/gallery/2025/141.jpg",
                "assets/mlx_assets/images/gallery/2025/142.jpg",
                "assets/mlx_assets/images/gallery/2025/143.jpg",
                "assets/mlx_assets/images/gallery/2025/144.jpg",
                "assets/mlx_assets/images/gallery/2025/145.jpg",
                "assets/mlx_assets/images/gallery/2025/146.jpg",
                "assets/mlx_assets/images/gallery/2025/147.jpg",
                "assets/mlx_assets/images/gallery/2025/148.jpg",
                "assets/mlx_assets/images/gallery/2025/149.jpg",
                "assets/mlx_assets/images/gallery/2025/150.jpg",
                "assets/mlx_assets/images/gallery/2025/151.jpg",
                "assets/mlx_assets/images/gallery/2025/152.jpg",
                "assets/mlx_assets/images/gallery/2025/153.jpg",
                "assets/mlx_assets/images/gallery/2025/154.jpg",
                "assets/mlx_assets/images/gallery/2025/155.jpg",
                "assets/mlx_assets/images/gallery/2025/156.jpg",
                "assets/mlx_assets/images/gallery/2025/157.jpg",
                "assets/mlx_assets/images/gallery/2025/158.jpg",
                "assets/mlx_assets/images/gallery/2025/159.jpg",
                "assets/mlx_assets/images/gallery/2025/160.jpg",
                "assets/mlx_assets/images/gallery/2025/161.jpg",
                "assets/mlx_assets/images/gallery/2025/162.jpg",
                "assets/mlx_assets/images/gallery/2025/163.jpg",
                "assets/mlx_assets/images/gallery/2025/164.jpg",
                "assets/mlx_assets/images/gallery/2025/165.jpg",
                "assets/mlx_assets/images/gallery/2025/166.jpg",
                "assets/mlx_assets/images/gallery/2025/167.jpg",
                "assets/mlx_assets/images/gallery/2025/168.jpg",
                "assets/mlx_assets/images/gallery/2025/169.jpg",
                "assets/mlx_assets/images/gallery/2025/170.jpg",
                "assets/mlx_assets/images/gallery/2025/171.jpg",
                "assets/mlx_assets/images/gallery/2025/172.jpg",
                "assets/mlx_assets/images/gallery/2025/173.jpg",
                "assets/mlx_assets/images/gallery/2025/174.jpg",
                "assets/mlx_assets/images/gallery/2025/175.jpg",
                "assets/mlx_assets/images/gallery/2025/176.jpg",
                "assets/mlx_assets/images/gallery/2025/177.jpg",
                "assets/mlx_assets/images/gallery/2025/178.jpg",
                "assets/mlx_assets/images/gallery/2025/179.jpg",
                "assets/mlx_assets/images/gallery/2025/180.jpg",
                "assets/mlx_assets/images/gallery/2025/181.jpg",
                "assets/mlx_assets/images/gallery/2025/182.jpg",
                "assets/mlx_assets/images/gallery/2025/183.jpg",
                "assets/mlx_assets/images/gallery/2025/184.jpg",
                "assets/mlx_assets/images/gallery/2025/185.jpg",
                "assets/mlx_assets/images/gallery/2025/186.jpg",
                "assets/mlx_assets/images/gallery/2025/187.jpg",
                "assets/mlx_assets/images/gallery/2025/188.jpg",
                "assets/mlx_assets/images/gallery/2025/189.jpg",
                "assets/mlx_assets/images/gallery/2025/190.jpg",
                "assets/mlx_assets/images/gallery/2025/191.jpg",
                "assets/mlx_assets/images/gallery/2025/192.jpg",
                "assets/mlx_assets/images/gallery/2025/193.jpg",
                "assets/mlx_assets/images/gallery/2025/194.jpg",
                "assets/mlx_assets/images/gallery/2025/195.jpg",
                "assets/mlx_assets/images/gallery/2025/196.jpg",
                "assets/mlx_assets/images/gallery/2025/197.jpg",
                "assets/mlx_assets/images/gallery/2025/198.jpg",
                "assets/mlx_assets/images/gallery/2025/199.jpg",
                "assets/mlx_assets/images/gallery/2025/200.jpg",
                "assets/mlx_assets/images/gallery/2025/201.jpg",
                "assets/mlx_assets/images/gallery/2025/202.jpg",
                "assets/mlx_assets/images/gallery/2025/203.jpg",
                "assets/mlx_assets/images/gallery/2025/204.jpg",
                "assets/mlx_assets/images/gallery/2025/205.jpg",
                "assets/mlx_assets/images/gallery/2025/206.jpg",
                "assets/mlx_assets/images/gallery/2025/207.jpg",
                "assets/mlx_assets/images/gallery/2025/208.jpg",
                "assets/mlx_assets/images/gallery/2025/209.jpg",
                "assets/mlx_assets/images/gallery/2025/210.jpg",
                "assets/mlx_assets/images/gallery/2025/211.jpg",
                "assets/mlx_assets/images/gallery/2025/212.jpg",
                "assets/mlx_assets/images/gallery/2025/213.jpg",
                "assets/mlx_assets/images/gallery/2025/214.jpg",
                "assets/mlx_assets/images/gallery/2025/215.jpg",
                "assets/mlx_assets/images/gallery/2025/216.jpg",
                "assets/mlx_assets/images/gallery/2025/217.jpg",
                "assets/mlx_assets/images/gallery/2025/218.jpg",
                "assets/mlx_assets/images/gallery/2025/219.jpg",
                "assets/mlx_assets/images/gallery/2025/220.jpg",
                "assets/mlx_assets/images/gallery/2025/221.jpg",
                "assets/mlx_assets/images/gallery/2025/222.jpg",
                "assets/mlx_assets/images/gallery/2025/223.jpg"
            ]
        },
        {
            year: 2024, images: [
                "assets/mlx_assets/images/gallery/2024/1.jpg",
                "assets/mlx_assets/images/gallery/2024/2.jpg",
                "assets/mlx_assets/images/gallery/2024/3.jpg",
                "assets/mlx_assets/images/gallery/2024/4.jpg",
                "assets/mlx_assets/images/gallery/2024/5.jpg",
                "assets/mlx_assets/images/gallery/2024/6.jpg",
                "assets/mlx_assets/images/gallery/2024/7.jpg",
                "assets/mlx_assets/images/gallery/2024/8.jpg",
                "assets/mlx_assets/images/gallery/2024/9.jpg",
                "assets/mlx_assets/images/gallery/2024/10.jpg",
                "assets/mlx_assets/images/gallery/2024/11.jpg",
                "assets/mlx_assets/images/gallery/2024/12.jpg",
                "assets/mlx_assets/images/gallery/2024/13.jpg",
                "assets/mlx_assets/images/gallery/2024/14.jpg",
                "assets/mlx_assets/images/gallery/2024/15.jpg",
                "assets/mlx_assets/images/gallery/2024/16.jpg",
                "assets/mlx_assets/images/gallery/2024/17.jpg",
                "assets/mlx_assets/images/gallery/2024/18.jpg",
                "assets/mlx_assets/images/gallery/2024/19.jpg",
                "assets/mlx_assets/images/gallery/2024/20.jpg",
                "assets/mlx_assets/images/gallery/2024/21.jpg",
                "assets/mlx_assets/images/gallery/2024/22.jpg",
                "assets/mlx_assets/images/gallery/2024/23.jpg",
                "assets/mlx_assets/images/gallery/2024/24.jpg",
                "assets/mlx_assets/images/gallery/2024/25.jpg",
                "assets/mlx_assets/images/gallery/2024/26.jpg",
                "assets/mlx_assets/images/gallery/2024/27.jpg",
                "assets/mlx_assets/images/gallery/2024/28.jpg",
                "assets/mlx_assets/images/gallery/2024/29.jpg",
                "assets/mlx_assets/images/gallery/2024/30.jpg",
                "assets/mlx_assets/images/gallery/2024/31.jpg",
                "assets/mlx_assets/images/gallery/2024/32.jpg",
                "assets/mlx_assets/images/gallery/2024/33.jpg",
                "assets/mlx_assets/images/gallery/2024/34.jpg",
                "assets/mlx_assets/images/gallery/2024/35.jpg",
                "assets/mlx_assets/images/gallery/2024/36.jpg",
                "assets/mlx_assets/images/gallery/2024/37.jpg",
                "assets/mlx_assets/images/gallery/2024/38.jpg",
                "assets/mlx_assets/images/gallery/2024/39.jpg",
                "assets/mlx_assets/images/gallery/2024/40.jpg",
                "assets/mlx_assets/images/gallery/2024/41.jpg",
                "assets/mlx_assets/images/gallery/2024/42.jpg",
                "assets/mlx_assets/images/gallery/2024/43.jpg",
                "assets/mlx_assets/images/gallery/2024/44.jpg",
                "assets/mlx_assets/images/gallery/2024/45.jpg",
                "assets/mlx_assets/images/gallery/2024/46.jpg",
                "assets/mlx_assets/images/gallery/2024/47.jpg",
                "assets/mlx_assets/images/gallery/2024/48.jpg",
                "assets/mlx_assets/images/gallery/2024/49.jpg",
                "assets/mlx_assets/images/gallery/2024/50.jpg",
                "assets/mlx_assets/images/gallery/2024/51.jpg",
                "assets/mlx_assets/images/gallery/2024/52.jpg",
                "assets/mlx_assets/images/gallery/2024/53.jpg",
                "assets/mlx_assets/images/gallery/2024/54.jpg",
                "assets/mlx_assets/images/gallery/2024/55.jpg",
                "assets/mlx_assets/images/gallery/2024/56.jpg",
                "assets/mlx_assets/images/gallery/2024/57.jpg",
                "assets/mlx_assets/images/gallery/2024/58.jpg",
                "assets/mlx_assets/images/gallery/2024/59.jpg",
                "assets/mlx_assets/images/gallery/2024/60.jpg",
                "assets/mlx_assets/images/gallery/2024/61.jpg",
                "assets/mlx_assets/images/gallery/2024/62.jpg",
                "assets/mlx_assets/images/gallery/2024/63.jpg",
                "assets/mlx_assets/images/gallery/2024/64.jpg",
                "assets/mlx_assets/images/gallery/2024/65.jpg",
                "assets/mlx_assets/images/gallery/2024/66.jpg",
                "assets/mlx_assets/images/gallery/2024/67.jpg",
                "assets/mlx_assets/images/gallery/2024/68.jpg",
                "assets/mlx_assets/images/gallery/2024/69.jpg",
                "assets/mlx_assets/images/gallery/2024/70.jpg",
                "assets/mlx_assets/images/gallery/2024/71.jpg",
                "assets/mlx_assets/images/gallery/2024/72.jpg",
                "assets/mlx_assets/images/gallery/2024/73.jpg",
                "assets/mlx_assets/images/gallery/2024/74.jpg",
                "assets/mlx_assets/images/gallery/2024/75.jpg",
                "assets/mlx_assets/images/gallery/2024/76.jpg",
                "assets/mlx_assets/images/gallery/2024/77.jpg",
                "assets/mlx_assets/images/gallery/2024/78.jpg",
                "assets/mlx_assets/images/gallery/2024/79.jpg",
                "assets/mlx_assets/images/gallery/2024/80.jpg",
                "assets/mlx_assets/images/gallery/2024/81.jpg",
                "assets/mlx_assets/images/gallery/2024/82.jpg",
                "assets/mlx_assets/images/gallery/2024/83.jpg",
                "assets/mlx_assets/images/gallery/2024/84.jpg",
                "assets/mlx_assets/images/gallery/2024/85.jpg",
                "assets/mlx_assets/images/gallery/2024/86.jpg",
                "assets/mlx_assets/images/gallery/2024/87.jpg",
                "assets/mlx_assets/images/gallery/2024/88.jpg",
                "assets/mlx_assets/images/gallery/2024/89.jpg",
                "assets/mlx_assets/images/gallery/2024/90.jpg",
                "assets/mlx_assets/images/gallery/2024/91.jpg",
                "assets/mlx_assets/images/gallery/2024/92.jpg",
                "assets/mlx_assets/images/gallery/2024/93.jpg",
                "assets/mlx_assets/images/gallery/2024/94.jpg",
                "assets/mlx_assets/images/gallery/2024/95.jpg",
                "assets/mlx_assets/images/gallery/2024/96.jpg",
                "assets/mlx_assets/images/gallery/2024/97.jpg",
                "assets/mlx_assets/images/gallery/2024/98.jpg",
                "assets/mlx_assets/images/gallery/2024/99.jpg",
                "assets/mlx_assets/images/gallery/2024/100.jpg",
                "assets/mlx_assets/images/gallery/2024/101.jpg",
                "assets/mlx_assets/images/gallery/2024/102.jpg",
                "assets/mlx_assets/images/gallery/2024/103.jpg",
                "assets/mlx_assets/images/gallery/2024/104.jpg",
                "assets/mlx_assets/images/gallery/2024/105.jpg",
                "assets/mlx_assets/images/gallery/2024/106.jpg",
                "assets/mlx_assets/images/gallery/2024/107.jpg",
                "assets/mlx_assets/images/gallery/2024/108.jpg",
                "assets/mlx_assets/images/gallery/2024/109.jpg",
                "assets/mlx_assets/images/gallery/2024/110.jpg",
                "assets/mlx_assets/images/gallery/2024/111.jpg",
                "assets/mlx_assets/images/gallery/2024/112.jpg",
                "assets/mlx_assets/images/gallery/2024/113.jpg",
                "assets/mlx_assets/images/gallery/2024/114.jpg",
                "assets/mlx_assets/images/gallery/2024/115.jpg",
                "assets/mlx_assets/images/gallery/2024/116.jpg",
                "assets/mlx_assets/images/gallery/2024/117.jpg",
                "assets/mlx_assets/images/gallery/2024/118.jpg",
                "assets/mlx_assets/images/gallery/2024/119.jpg",
                "assets/mlx_assets/images/gallery/2024/120.jpg",
                "assets/mlx_assets/images/gallery/2024/121.jpg",
                "assets/mlx_assets/images/gallery/2024/122.jpg",
                "assets/mlx_assets/images/gallery/2024/123.jpg",
                "assets/mlx_assets/images/gallery/2024/124.jpg",
                "assets/mlx_assets/images/gallery/2024/125.jpg",
                "assets/mlx_assets/images/gallery/2024/126.jpg",
                "assets/mlx_assets/images/gallery/2024/127.jpg",
                "assets/mlx_assets/images/gallery/2024/128.jpg",
                "assets/mlx_assets/images/gallery/2024/129.jpg",
                "assets/mlx_assets/images/gallery/2024/130.jpg",
                "assets/mlx_assets/images/gallery/2024/131.jpg",
                "assets/mlx_assets/images/gallery/2024/132.jpg",
                "assets/mlx_assets/images/gallery/2024/133.jpg",
                "assets/mlx_assets/images/gallery/2024/134.jpg",
                "assets/mlx_assets/images/gallery/2024/135.jpg",
                "assets/mlx_assets/images/gallery/2024/136.jpg",
                "assets/mlx_assets/images/gallery/2024/137.jpg",
                "assets/mlx_assets/images/gallery/2024/138.jpg",
                "assets/mlx_assets/images/gallery/2024/139.jpg",
                "assets/mlx_assets/images/gallery/2024/140.jpg",
                "assets/mlx_assets/images/gallery/2024/141.jpg",
                "assets/mlx_assets/images/gallery/2024/142.jpg",
                "assets/mlx_assets/images/gallery/2024/143.jpg",
                "assets/mlx_assets/images/gallery/2024/144.jpg",
                "assets/mlx_assets/images/gallery/2024/145.jpg",
                "assets/mlx_assets/images/gallery/2024/146.jpg",
                "assets/mlx_assets/images/gallery/2024/147.jpg",
                "assets/mlx_assets/images/gallery/2024/148.jpg",
                "assets/mlx_assets/images/gallery/2024/149.jpg",
                "assets/mlx_assets/images/gallery/2024/150.jpg",
                "assets/mlx_assets/images/gallery/2024/151.jpg",
                "assets/mlx_assets/images/gallery/2024/152.jpg",
                "assets/mlx_assets/images/gallery/2024/153.jpg",
                "assets/mlx_assets/images/gallery/2024/154.jpg",
                "assets/mlx_assets/images/gallery/2024/155.jpg",
                "assets/mlx_assets/images/gallery/2024/156.jpg",
                "assets/mlx_assets/images/gallery/2024/157.jpg",
                "assets/mlx_assets/images/gallery/2024/158.jpg",
                "assets/mlx_assets/images/gallery/2024/159.jpg",
                "assets/mlx_assets/images/gallery/2024/160.jpg",
                "assets/mlx_assets/images/gallery/2024/161.jpg",
                "assets/mlx_assets/images/gallery/2024/162.jpg",
                "assets/mlx_assets/images/gallery/2024/163.jpg",
                "assets/mlx_assets/images/gallery/2024/164.jpg",
                "assets/mlx_assets/images/gallery/2024/165.jpg",
                "assets/mlx_assets/images/gallery/2024/166.jpg",
                "assets/mlx_assets/images/gallery/2024/167.jpg",
                "assets/mlx_assets/images/gallery/2024/168.jpg",
                "assets/mlx_assets/images/gallery/2024/169.jpg",
                "assets/mlx_assets/images/gallery/2024/170.jpg",
                "assets/mlx_assets/images/gallery/2024/171.jpg",
                "assets/mlx_assets/images/gallery/2024/172.jpg",
                "assets/mlx_assets/images/gallery/2024/173.jpg",
                "assets/mlx_assets/images/gallery/2024/174.jpg",
                "assets/mlx_assets/images/gallery/2024/175.jpg",
                "assets/mlx_assets/images/gallery/2024/176.jpg",
                "assets/mlx_assets/images/gallery/2024/177.jpg",
                "assets/mlx_assets/images/gallery/2024/178.jpg",
                "assets/mlx_assets/images/gallery/2024/179.jpg",
                "assets/mlx_assets/images/gallery/2024/180.jpg",
                "assets/mlx_assets/images/gallery/2024/181.jpg",
                "assets/mlx_assets/images/gallery/2024/182.jpg",
                "assets/mlx_assets/images/gallery/2024/183.jpg",
                "assets/mlx_assets/images/gallery/2024/184.jpg",
                "assets/mlx_assets/images/gallery/2024/185.jpg",
                "assets/mlx_assets/images/gallery/2024/186.jpg",
                "assets/mlx_assets/images/gallery/2024/187.jpg",
                "assets/mlx_assets/images/gallery/2024/188.jpg",
                "assets/mlx_assets/images/gallery/2024/189.jpg",
                "assets/mlx_assets/images/gallery/2024/190.jpg",
                "assets/mlx_assets/images/gallery/2024/191.jpg",
                "assets/mlx_assets/images/gallery/2024/192.jpg",
                "assets/mlx_assets/images/gallery/2024/193.jpg",
                "assets/mlx_assets/images/gallery/2024/194.jpg",
                "assets/mlx_assets/images/gallery/2024/195.jpg",
                "assets/mlx_assets/images/gallery/2024/196.jpg",
                "assets/mlx_assets/images/gallery/2024/197.jpg",
                "assets/mlx_assets/images/gallery/2024/198.jpg",
                "assets/mlx_assets/images/gallery/2024/199.jpg",
                "assets/mlx_assets/images/gallery/2024/200.jpg",
                "assets/mlx_assets/images/gallery/2024/201.jpg",
                "assets/mlx_assets/images/gallery/2024/202.jpg",
                "assets/mlx_assets/images/gallery/2024/203.jpg",
                "assets/mlx_assets/images/gallery/2024/204.jpg",
                "assets/mlx_assets/images/gallery/2024/205.jpg",
                "assets/mlx_assets/images/gallery/2024/206.jpg",
                "assets/mlx_assets/images/gallery/2024/207.jpg",
                "assets/mlx_assets/images/gallery/2024/208.jpg",
                "assets/mlx_assets/images/gallery/2024/209.jpg",
                "assets/mlx_assets/images/gallery/2024/210.jpg",
            ]
        },
        {
            year: 2023, images: [
                "assets/mlx_assets/images/gallery/2023/1.jpg",
                "assets/mlx_assets/images/gallery/2023/2.jpg",
                "assets/mlx_assets/images/gallery/2023/3.jpg",
                "assets/mlx_assets/images/gallery/2023/4.jpg",
                "assets/mlx_assets/images/gallery/2023/5.jpg",
                "assets/mlx_assets/images/gallery/2023/6.jpg",
                "assets/mlx_assets/images/gallery/2023/7.jpg",
                "assets/mlx_assets/images/gallery/2023/8.jpg",
                "assets/mlx_assets/images/gallery/2023/9.jpg",
                "assets/mlx_assets/images/gallery/2023/10.jpg",
                "assets/mlx_assets/images/gallery/2023/11.jpg",
                "assets/mlx_assets/images/gallery/2023/12.jpg",
                "assets/mlx_assets/images/gallery/2023/13.jpg",
                "assets/mlx_assets/images/gallery/2023/14.jpg",
                "assets/mlx_assets/images/gallery/2023/15.jpg",
                "assets/mlx_assets/images/gallery/2023/16.jpg",
                "assets/mlx_assets/images/gallery/2023/17.jpg",
                "assets/mlx_assets/images/gallery/2023/18.jpg",
                "assets/mlx_assets/images/gallery/2023/19.jpg",
                "assets/mlx_assets/images/gallery/2023/20.jpg",
                "assets/mlx_assets/images/gallery/2023/21.jpg",
                "assets/mlx_assets/images/gallery/2023/22.jpg",
                "assets/mlx_assets/images/gallery/2023/23.jpg",
                "assets/mlx_assets/images/gallery/2023/24.jpg",
                "assets/mlx_assets/images/gallery/2023/25.jpg",
                "assets/mlx_assets/images/gallery/2023/26.jpg",
                "assets/mlx_assets/images/gallery/2023/27.jpg",
                "assets/mlx_assets/images/gallery/2023/28.jpg",
                "assets/mlx_assets/images/gallery/2023/29.jpg",
                "assets/mlx_assets/images/gallery/2023/30.jpg",
                "assets/mlx_assets/images/gallery/2023/31.jpg",
                "assets/mlx_assets/images/gallery/2023/32.jpg",
                "assets/mlx_assets/images/gallery/2023/33.jpg",
                "assets/mlx_assets/images/gallery/2023/34.jpg",
                "assets/mlx_assets/images/gallery/2023/35.jpg",
                "assets/mlx_assets/images/gallery/2023/36.jpg",
                "assets/mlx_assets/images/gallery/2023/37.jpg",
                "assets/mlx_assets/images/gallery/2023/38.jpg",
                "assets/mlx_assets/images/gallery/2023/39.jpg",
                "assets/mlx_assets/images/gallery/2023/40.jpg",
                "assets/mlx_assets/images/gallery/2023/41.jpg",
                "assets/mlx_assets/images/gallery/2023/42.jpg",
                "assets/mlx_assets/images/gallery/2023/43.jpg",
                "assets/mlx_assets/images/gallery/2023/44.jpg",
                "assets/mlx_assets/images/gallery/2023/45.jpg",
                "assets/mlx_assets/images/gallery/2023/46.jpg",
                "assets/mlx_assets/images/gallery/2023/47.jpg",
                "assets/mlx_assets/images/gallery/2023/48.jpg",
                "assets/mlx_assets/images/gallery/2023/49.jpg",
                "assets/mlx_assets/images/gallery/2023/50.jpg",
                "assets/mlx_assets/images/gallery/2023/51.jpg",
                "assets/mlx_assets/images/gallery/2023/52.jpg",
                "assets/mlx_assets/images/gallery/2023/53.jpg",
                "assets/mlx_assets/images/gallery/2023/54.jpg",
                "assets/mlx_assets/images/gallery/2023/55.jpg",
                "assets/mlx_assets/images/gallery/2023/56.jpg",
                "assets/mlx_assets/images/gallery/2023/57.jpg",
                "assets/mlx_assets/images/gallery/2023/58.jpg",
                "assets/mlx_assets/images/gallery/2023/59.jpg",
                "assets/mlx_assets/images/gallery/2023/60.jpg",
                "assets/mlx_assets/images/gallery/2023/61.jpg",
                "assets/mlx_assets/images/gallery/2023/62.jpg",
                "assets/mlx_assets/images/gallery/2023/63.jpg",
                "assets/mlx_assets/images/gallery/2023/64.jpg",
                "assets/mlx_assets/images/gallery/2023/65.jpg",
                "assets/mlx_assets/images/gallery/2023/66.jpg",
                "assets/mlx_assets/images/gallery/2023/67.jpg",
                "assets/mlx_assets/images/gallery/2023/68.jpg",
                "assets/mlx_assets/images/gallery/2023/69.jpg",
                "assets/mlx_assets/images/gallery/2023/70.jpg",
                "assets/mlx_assets/images/gallery/2023/71.jpg",
                "assets/mlx_assets/images/gallery/2023/72.jpg",
                "assets/mlx_assets/images/gallery/2023/73.jpg",
                "assets/mlx_assets/images/gallery/2023/74.jpg",
                "assets/mlx_assets/images/gallery/2023/75.jpg",
                "assets/mlx_assets/images/gallery/2023/76.jpg",
                "assets/mlx_assets/images/gallery/2023/77.jpg",
                "assets/mlx_assets/images/gallery/2023/78.jpg",
                "assets/mlx_assets/images/gallery/2023/79.jpg",
                "assets/mlx_assets/images/gallery/2023/80.jpg",
                "assets/mlx_assets/images/gallery/2023/81.jpg",
                "assets/mlx_assets/images/gallery/2023/82.jpg",
                "assets/mlx_assets/images/gallery/2023/83.jpg",
                "assets/mlx_assets/images/gallery/2023/84.jpg",
                "assets/mlx_assets/images/gallery/2023/85.jpg",
                "assets/mlx_assets/images/gallery/2023/86.jpg",
                "assets/mlx_assets/images/gallery/2023/87.jpg",
                "assets/mlx_assets/images/gallery/2023/88.jpg",
                "assets/mlx_assets/images/gallery/2023/89.jpg",
                "assets/mlx_assets/images/gallery/2023/90.jpg",
                "assets/mlx_assets/images/gallery/2023/91.jpg",
                "assets/mlx_assets/images/gallery/2023/92.jpg",
                "assets/mlx_assets/images/gallery/2023/93.jpg",
                "assets/mlx_assets/images/gallery/2023/94.jpg",
                "assets/mlx_assets/images/gallery/2023/95.jpg",
                "assets/mlx_assets/images/gallery/2023/96.jpg",
                "assets/mlx_assets/images/gallery/2023/97.jpg",
                "assets/mlx_assets/images/gallery/2023/98.jpg",
                "assets/mlx_assets/images/gallery/2023/99.jpg",
                "assets/mlx_assets/images/gallery/2023/100.jpg",
                "assets/mlx_assets/images/gallery/2023/101.jpg",
                "assets/mlx_assets/images/gallery/2023/102.jpg",
                "assets/mlx_assets/images/gallery/2023/103.jpg",
                "assets/mlx_assets/images/gallery/2023/104.jpg",
                "assets/mlx_assets/images/gallery/2023/105.jpg",
                "assets/mlx_assets/images/gallery/2023/106.jpg",
                "assets/mlx_assets/images/gallery/2023/107.jpg",
                "assets/mlx_assets/images/gallery/2023/108.jpg",
                "assets/mlx_assets/images/gallery/2023/109.jpg",
                "assets/mlx_assets/images/gallery/2023/110.jpg",
                "assets/mlx_assets/images/gallery/2023/111.jpg",
                "assets/mlx_assets/images/gallery/2023/112.jpg",
                "assets/mlx_assets/images/gallery/2023/113.jpg",
                "assets/mlx_assets/images/gallery/2023/114.jpg",
                "assets/mlx_assets/images/gallery/2023/115.jpg",
                "assets/mlx_assets/images/gallery/2023/116.jpg",
                "assets/mlx_assets/images/gallery/2023/117.jpg",
                "assets/mlx_assets/images/gallery/2023/118.jpg",
                "assets/mlx_assets/images/gallery/2023/119.jpg",
                "assets/mlx_assets/images/gallery/2023/120.jpg",
                "assets/mlx_assets/images/gallery/2023/121.jpg",
                "assets/mlx_assets/images/gallery/2023/122.jpg",
                "assets/mlx_assets/images/gallery/2023/123.jpg",
                "assets/mlx_assets/images/gallery/2023/124.jpg",
                "assets/mlx_assets/images/gallery/2023/125.jpg",
                "assets/mlx_assets/images/gallery/2023/126.jpg",
                "assets/mlx_assets/images/gallery/2023/127.jpg",
                "assets/mlx_assets/images/gallery/2023/128.jpg",
                "assets/mlx_assets/images/gallery/2023/129.jpg",
                "assets/mlx_assets/images/gallery/2023/130.jpg",
                "assets/mlx_assets/images/gallery/2023/131.jpg",
                "assets/mlx_assets/images/gallery/2023/132.jpg",
                "assets/mlx_assets/images/gallery/2023/133.jpg",
                "assets/mlx_assets/images/gallery/2023/134.jpg",
                "assets/mlx_assets/images/gallery/2023/135.jpg",
                "assets/mlx_assets/images/gallery/2023/136.jpg",
                "assets/mlx_assets/images/gallery/2023/137.jpg",
                "assets/mlx_assets/images/gallery/2023/138.jpg",
                "assets/mlx_assets/images/gallery/2023/139.jpg",
                "assets/mlx_assets/images/gallery/2023/140.jpg",
                "assets/mlx_assets/images/gallery/2023/141.jpg",
                "assets/mlx_assets/images/gallery/2023/142.jpg",
                "assets/mlx_assets/images/gallery/2023/143.jpg",
                "assets/mlx_assets/images/gallery/2023/144.jpg",
                "assets/mlx_assets/images/gallery/2023/145.jpg",
                "assets/mlx_assets/images/gallery/2023/146.jpg",
                "assets/mlx_assets/images/gallery/2023/147.jpg",
                "assets/mlx_assets/images/gallery/2023/148.jpg",
                "assets/mlx_assets/images/gallery/2023/149.jpg",
                "assets/mlx_assets/images/gallery/2023/150.jpg",
                "assets/mlx_assets/images/gallery/2023/151.jpg",
                "assets/mlx_assets/images/gallery/2023/152.jpg",
                "assets/mlx_assets/images/gallery/2023/153.jpg",
                "assets/mlx_assets/images/gallery/2023/154.jpg",
                "assets/mlx_assets/images/gallery/2023/155.jpg",
                "assets/mlx_assets/images/gallery/2023/156.jpg",
                "assets/mlx_assets/images/gallery/2023/157.jpg",
                "assets/mlx_assets/images/gallery/2023/158.jpg",
                "assets/mlx_assets/images/gallery/2023/159.jpg",
                "assets/mlx_assets/images/gallery/2023/160.jpg",
                "assets/mlx_assets/images/gallery/2023/161.jpg"
            ]
        },
        {
            year: 2022, images: [
                "assets/mlx_assets/images/gallery/2022/1.jpg",
                "assets/mlx_assets/images/gallery/2022/2.jpg",
                "assets/mlx_assets/images/gallery/2022/3.jpg",
                "assets/mlx_assets/images/gallery/2022/4.jpg",
                "assets/mlx_assets/images/gallery/2022/5.jpg",
                "assets/mlx_assets/images/gallery/2022/6.jpg",
                "assets/mlx_assets/images/gallery/2022/7.jpg",
                "assets/mlx_assets/images/gallery/2022/8.jpg",
                "assets/mlx_assets/images/gallery/2022/9.jpg",
                "assets/mlx_assets/images/gallery/2022/10.jpg",
                "assets/mlx_assets/images/gallery/2022/11.jpg",
                "assets/mlx_assets/images/gallery/2022/12.jpg",
                "assets/mlx_assets/images/gallery/2022/13.jpg",
                "assets/mlx_assets/images/gallery/2022/14.jpg",
                "assets/mlx_assets/images/gallery/2022/15.jpg",
                "assets/mlx_assets/images/gallery/2022/16.jpg",
                "assets/mlx_assets/images/gallery/2022/17.jpg",
                "assets/mlx_assets/images/gallery/2022/18.jpg",
                "assets/mlx_assets/images/gallery/2022/19.jpg",
                "assets/mlx_assets/images/gallery/2022/20.jpg",
                "assets/mlx_assets/images/gallery/2022/21.jpg"
            ]
        },
        {
            year: 2021, images: [
                "assets/mlx_assets/images/gallery/2021/1.jpg",
                "assets/mlx_assets/images/gallery/2021/2.jpg",
                "assets/mlx_assets/images/gallery/2021/3.jpg",
                "assets/mlx_assets/images/gallery/2021/4.jpg",
                "assets/mlx_assets/images/gallery/2021/5.jpg",
                "assets/mlx_assets/images/gallery/2021/6.jpg",
                "assets/mlx_assets/images/gallery/2021/7.jpg",
                "assets/mlx_assets/images/gallery/2021/8.jpg",
                "assets/mlx_assets/images/gallery/2021/9.jpg",
                "assets/mlx_assets/images/gallery/2021/10.jpg",
                "assets/mlx_assets/images/gallery/2021/11.jpg"
            ]
        },
        {
            year: 2020, images: [
                "assets/mlx_assets/images/gallery/2020/1.jpg",
                "assets/mlx_assets/images/gallery/2020/2.jpg",
                "assets/mlx_assets/images/gallery/2020/3.jpg",
                "assets/mlx_assets/images/gallery/2020/4.jpg",
                "assets/mlx_assets/images/gallery/2020/5.jpg",
                "assets/mlx_assets/images/gallery/2020/6.jpg",
                "assets/mlx_assets/images/gallery/2020/7.jpg",
                "assets/mlx_assets/images/gallery/2020/8.jpg",
                "assets/mlx_assets/images/gallery/2020/9.jpg",
                "assets/mlx_assets/images/gallery/2020/10.jpg",
                "assets/mlx_assets/images/gallery/2020/11.jpg",
                "assets/mlx_assets/images/gallery/2020/12.jpg",
                "assets/mlx_assets/images/gallery/2020/13.jpg",
                "assets/mlx_assets/images/gallery/2020/14.jpg",
                "assets/mlx_assets/images/gallery/2020/15.jpg",
                "assets/mlx_assets/images/gallery/2020/16.jpg",
                "assets/mlx_assets/images/gallery/2020/17.jpg"
            ]
        },
        {
            year: 2019, images: [
                "assets/mlx_assets/images/gallery/2019/1.jpg",
                "assets/mlx_assets/images/gallery/2019/2.jpg",
                "assets/mlx_assets/images/gallery/2019/3.jpg",
                "assets/mlx_assets/images/gallery/2019/4.jpg",
                "assets/mlx_assets/images/gallery/2019/5.jpg",
                "assets/mlx_assets/images/gallery/2019/6.jpg",
                "assets/mlx_assets/images/gallery/2019/7.jpg",
                "assets/mlx_assets/images/gallery/2019/8.jpg",
                "assets/mlx_assets/images/gallery/2019/9.jpg",
                "assets/mlx_assets/images/gallery/2019/10.jpg",
                "assets/mlx_assets/images/gallery/2019/11.jpg",
                "assets/mlx_assets/images/gallery/2019/12.jpg",
                "assets/mlx_assets/images/gallery/2019/13.jpg",
                "assets/mlx_assets/images/gallery/2019/14.jpg",
                "assets/mlx_assets/images/gallery/2019/15.jpg",
                "assets/mlx_assets/images/gallery/2019/16.jpg",
                "assets/mlx_assets/images/gallery/2019/17.jpg",
                "assets/mlx_assets/images/gallery/2019/18.jpg",
                "assets/mlx_assets/images/gallery/2019/19.jpg",
                "assets/mlx_assets/images/gallery/2019/20.jpg",
                "assets/mlx_assets/images/gallery/2019/21.jpg",
                "assets/mlx_assets/images/gallery/2019/22.jpg",
                "assets/mlx_assets/images/gallery/2019/23.jpg",
                "assets/mlx_assets/images/gallery/2019/24.jpg",
                "assets/mlx_assets/images/gallery/2019/25.jpg",
                "assets/mlx_assets/images/gallery/2019/26.jpg",
                "assets/mlx_assets/images/gallery/2019/27.jpg",
                "assets/mlx_assets/images/gallery/2019/28.jpg",
                "assets/mlx_assets/images/gallery/2019/29.jpg",
                "assets/mlx_assets/images/gallery/2019/30.jpg",
                "assets/mlx_assets/images/gallery/2019/31.jpg",
                "assets/mlx_assets/images/gallery/2019/32.jpg",
                "assets/mlx_assets/images/gallery/2019/33.jpg",
                "assets/mlx_assets/images/gallery/2019/34.jpg",
                "assets/mlx_assets/images/gallery/2019/35.jpg",
                "assets/mlx_assets/images/gallery/2019/36.jpg",
                "assets/mlx_assets/images/gallery/2019/37.jpg",
                "assets/mlx_assets/images/gallery/2019/38.jpg",
                "assets/mlx_assets/images/gallery/2019/39.jpg",
                "assets/mlx_assets/images/gallery/2019/40.jpg",
                "assets/mlx_assets/images/gallery/2019/41.jpg",
                "assets/mlx_assets/images/gallery/2019/42.jpg",
                "assets/mlx_assets/images/gallery/2019/43.jpg",
                "assets/mlx_assets/images/gallery/2019/44.jpg",
                "assets/mlx_assets/images/gallery/2019/45.jpg",
                "assets/mlx_assets/images/gallery/2019/46.jpg",
                "assets/mlx_assets/images/gallery/2019/47.jpg",
                "assets/mlx_assets/images/gallery/2019/48.jpg",
                "assets/mlx_assets/images/gallery/2019/49.jpg",
                "assets/mlx_assets/images/gallery/2019/50.jpg",
                "assets/mlx_assets/images/gallery/2019/51.jpg",
                "assets/mlx_assets/images/gallery/2019/52.jpg",
                "assets/mlx_assets/images/gallery/2019/53.jpg",
                "assets/mlx_assets/images/gallery/2019/54.jpg",
                "assets/mlx_assets/images/gallery/2019/55.jpg",
                "assets/mlx_assets/images/gallery/2019/56.jpg",
                "assets/mlx_assets/images/gallery/2019/57.jpg",
                "assets/mlx_assets/images/gallery/2019/58.jpg",
                "assets/mlx_assets/images/gallery/2019/59.jpg",
                "assets/mlx_assets/images/gallery/2019/60.jpg",
                "assets/mlx_assets/images/gallery/2019/61.jpg",
                "assets/mlx_assets/images/gallery/2019/62.jpg",
                "assets/mlx_assets/images/gallery/2019/63.jpg",
                "assets/mlx_assets/images/gallery/2019/64.jpg",
                "assets/mlx_assets/images/gallery/2019/65.jpg",
                "assets/mlx_assets/images/gallery/2019/66.jpg",
                "assets/mlx_assets/images/gallery/2019/67.jpg",
                "assets/mlx_assets/images/gallery/2019/68.jpg",
                "assets/mlx_assets/images/gallery/2019/69.jpg"
            ]
        },
        {
            year: 2018, images: [
                "assets/mlx_assets/images/gallery/2018/1.jpg",
                "assets/mlx_assets/images/gallery/2018/2.jpg",
                "assets/mlx_assets/images/gallery/2018/3.jpg",
                "assets/mlx_assets/images/gallery/2018/4.jpg",
                "assets/mlx_assets/images/gallery/2018/5.jpg",
                "assets/mlx_assets/images/gallery/2018/6.jpg",
                "assets/mlx_assets/images/gallery/2018/7.jpg",
                "assets/mlx_assets/images/gallery/2018/8.jpg",
                "assets/mlx_assets/images/gallery/2018/9.jpg",
                "assets/mlx_assets/images/gallery/2018/10.jpg",
                "assets/mlx_assets/images/gallery/2018/11.jpg",
                "assets/mlx_assets/images/gallery/2018/12.jpg",
                "assets/mlx_assets/images/gallery/2018/13.jpg",
                "assets/mlx_assets/images/gallery/2018/14.jpg",
                "assets/mlx_assets/images/gallery/2018/15.jpg",
                "assets/mlx_assets/images/gallery/2018/16.jpg",
                "assets/mlx_assets/images/gallery/2018/17.jpg",
                "assets/mlx_assets/images/gallery/2018/18.jpg",
                "assets/mlx_assets/images/gallery/2018/19.jpg",
                "assets/mlx_assets/images/gallery/2018/20.jpg",
                "assets/mlx_assets/images/gallery/2018/21.jpg",
                "assets/mlx_assets/images/gallery/2018/22.jpg",
                "assets/mlx_assets/images/gallery/2018/23.jpg",
                "assets/mlx_assets/images/gallery/2018/24.jpg",
                "assets/mlx_assets/images/gallery/2018/25.jpg",
                "assets/mlx_assets/images/gallery/2018/26.jpg",
                "assets/mlx_assets/images/gallery/2018/27.jpg",
                "assets/mlx_assets/images/gallery/2018/28.jpg",
                "assets/mlx_assets/images/gallery/2018/29.jpg",
                "assets/mlx_assets/images/gallery/2018/30.jpg",
                "assets/mlx_assets/images/gallery/2018/31.jpg",
                "assets/mlx_assets/images/gallery/2018/32.jpg",
                "assets/mlx_assets/images/gallery/2018/33.jpg",
                "assets/mlx_assets/images/gallery/2018/34.jpg",
                "assets/mlx_assets/images/gallery/2018/35.jpg",
                "assets/mlx_assets/images/gallery/2018/36.jpg",
                "assets/mlx_assets/images/gallery/2018/37.jpg",
                "assets/mlx_assets/images/gallery/2018/38.jpg",
                "assets/mlx_assets/images/gallery/2018/39.jpg",
                "assets/mlx_assets/images/gallery/2018/40.jpg",
                "assets/mlx_assets/images/gallery/2018/41.jpg",
                "assets/mlx_assets/images/gallery/2018/42.jpg",
                "assets/mlx_assets/images/gallery/2018/43.jpg",
                "assets/mlx_assets/images/gallery/2018/44.jpg",
                "assets/mlx_assets/images/gallery/2018/45.jpg",
                "assets/mlx_assets/images/gallery/2018/46.jpg",
                "assets/mlx_assets/images/gallery/2018/47.jpg",
                "assets/mlx_assets/images/gallery/2018/48.jpg",
                "assets/mlx_assets/images/gallery/2018/49.jpg",
                "assets/mlx_assets/images/gallery/2018/50.jpg",
                "assets/mlx_assets/images/gallery/2018/51.jpg",
                "assets/mlx_assets/images/gallery/2018/52.jpg",
                "assets/mlx_assets/images/gallery/2018/53.jpg",
                "assets/mlx_assets/images/gallery/2018/54.jpg",
                "assets/mlx_assets/images/gallery/2018/55.jpg",
                "assets/mlx_assets/images/gallery/2018/56.jpg",
                "assets/mlx_assets/images/gallery/2018/57.jpg",
                "assets/mlx_assets/images/gallery/2018/58.jpg",
                "assets/mlx_assets/images/gallery/2018/59.jpg",
                "assets/mlx_assets/images/gallery/2018/60.jpg",
                "assets/mlx_assets/images/gallery/2018/61.jpg",
                "assets/mlx_assets/images/gallery/2018/62.jpg",
                "assets/mlx_assets/images/gallery/2018/63.jpg",
                "assets/mlx_assets/images/gallery/2018/64.jpg",
                "assets/mlx_assets/images/gallery/2018/65.jpg",
                "assets/mlx_assets/images/gallery/2018/66.jpg",
                "assets/mlx_assets/images/gallery/2018/67.jpg",
                "assets/mlx_assets/images/gallery/2018/68.jpg",
                "assets/mlx_assets/images/gallery/2018/69.jpg",
                "assets/mlx_assets/images/gallery/2018/70.jpg"
            ]
        },
        {
            year: 2017, images: [
                "assets/mlx_assets/images/gallery/2017/1.jpg",
                "assets/mlx_assets/images/gallery/2017/2.jpg",
                "assets/mlx_assets/images/gallery/2017/3.jpg",
                "assets/mlx_assets/images/gallery/2017/4.jpg",
                "assets/mlx_assets/images/gallery/2017/5.jpg",
                "assets/mlx_assets/images/gallery/2017/6.jpg",
                "assets/mlx_assets/images/gallery/2017/7.jpg",
                "assets/mlx_assets/images/gallery/2017/8.jpg",
                "assets/mlx_assets/images/gallery/2017/9.jpg",
                "assets/mlx_assets/images/gallery/2017/10.jpg",
                "assets/mlx_assets/images/gallery/2017/11.jpg",
                "assets/mlx_assets/images/gallery/2017/12.jpg",
                "assets/mlx_assets/images/gallery/2017/13.jpg",
                "assets/mlx_assets/images/gallery/2017/14.jpg",
                "assets/mlx_assets/images/gallery/2017/15.jpg",
                "assets/mlx_assets/images/gallery/2017/16.jpg",
                "assets/mlx_assets/images/gallery/2017/17.jpg",
                "assets/mlx_assets/images/gallery/2017/18.jpg",
                "assets/mlx_assets/images/gallery/2017/19.jpg",
                "assets/mlx_assets/images/gallery/2017/20.jpg",
                "assets/mlx_assets/images/gallery/2017/21.jpg",
                "assets/mlx_assets/images/gallery/2017/22.jpg",
                "assets/mlx_assets/images/gallery/2017/23.jpg",
                "assets/mlx_assets/images/gallery/2017/24.jpg",
                "assets/mlx_assets/images/gallery/2017/25.jpg",
                "assets/mlx_assets/images/gallery/2017/26.jpg",
                "assets/mlx_assets/images/gallery/2017/27.jpg",
                "assets/mlx_assets/images/gallery/2017/28.jpg",
                "assets/mlx_assets/images/gallery/2017/29.jpg",
                "assets/mlx_assets/images/gallery/2017/30.jpg",
                "assets/mlx_assets/images/gallery/2017/31.jpg",
                "assets/mlx_assets/images/gallery/2017/32.jpg",
                "assets/mlx_assets/images/gallery/2017/33.jpg",
                "assets/mlx_assets/images/gallery/2017/34.jpg",
                "assets/mlx_assets/images/gallery/2017/35.jpg",
                "assets/mlx_assets/images/gallery/2017/36.jpg",
                "assets/mlx_assets/images/gallery/2017/37.jpg",
                "assets/mlx_assets/images/gallery/2017/38.jpg",
                "assets/mlx_assets/images/gallery/2017/39.jpg",
                "assets/mlx_assets/images/gallery/2017/40.jpg",
                "assets/mlx_assets/images/gallery/2017/41.jpg",
                "assets/mlx_assets/images/gallery/2017/42.jpg"
            ]
        },
        {
            year: 2016, images: [
                "assets/mlx_assets/images/gallery/2016/1.jpg",
                "assets/mlx_assets/images/gallery/2016/2.jpg",
                "assets/mlx_assets/images/gallery/2016/3.jpg",
                "assets/mlx_assets/images/gallery/2016/4.jpg",
                "assets/mlx_assets/images/gallery/2016/5.jpg",
                "assets/mlx_assets/images/gallery/2016/6.jpg",
                "assets/mlx_assets/images/gallery/2016/7.jpg",
                "assets/mlx_assets/images/gallery/2016/8.jpg",
                "assets/mlx_assets/images/gallery/2016/9.jpg",
                "assets/mlx_assets/images/gallery/2016/10.jpg",
                "assets/mlx_assets/images/gallery/2016/11.jpg",
                "assets/mlx_assets/images/gallery/2016/12.jpg",
                "assets/mlx_assets/images/gallery/2016/13.jpg",
                "assets/mlx_assets/images/gallery/2016/14.jpg",
                "assets/mlx_assets/images/gallery/2016/15.jpg",
                "assets/mlx_assets/images/gallery/2016/16.jpg",
                "assets/mlx_assets/images/gallery/2016/17.jpg",
                "assets/mlx_assets/images/gallery/2016/18.jpg",
                "assets/mlx_assets/images/gallery/2016/19.jpg",
                "assets/mlx_assets/images/gallery/2016/20.jpg",
                "assets/mlx_assets/images/gallery/2016/21.jpg",
                "assets/mlx_assets/images/gallery/2016/22.jpg",
                "assets/mlx_assets/images/gallery/2016/23.jpg",
                "assets/mlx_assets/images/gallery/2016/24.jpg",
                "assets/mlx_assets/images/gallery/2016/25.jpg",
                "assets/mlx_assets/images/gallery/2016/26.jpg",
                "assets/mlx_assets/images/gallery/2016/27.jpg",
                "assets/mlx_assets/images/gallery/2016/28.jpg",
                "assets/mlx_assets/images/gallery/2016/29.jpg",
                "assets/mlx_assets/images/gallery/2016/30.jpg",
                "assets/mlx_assets/images/gallery/2016/31.jpg",
                "assets/mlx_assets/images/gallery/2016/32.jpg",
                "assets/mlx_assets/images/gallery/2016/33.jpg",
                "assets/mlx_assets/images/gallery/2016/34.jpg",
                "assets/mlx_assets/images/gallery/2016/35.jpg",
                "assets/mlx_assets/images/gallery/2016/36.jpg",
                "assets/mlx_assets/images/gallery/2016/37.jpg",
                "assets/mlx_assets/images/gallery/2016/38.jpg",
                "assets/mlx_assets/images/gallery/2016/39.jpg",
                "assets/mlx_assets/images/gallery/2016/40.jpg",
                "assets/mlx_assets/images/gallery/2016/41.jpg",
                "assets/mlx_assets/images/gallery/2016/42.jpg",
                "assets/mlx_assets/images/gallery/2016/43.jpg"
            ]
        },
        {
            year: 2015, images: [
                "assets/mlx_assets/images/gallery/2015/1.jpg",
                "assets/mlx_assets/images/gallery/2015/2.jpg",
                "assets/mlx_assets/images/gallery/2015/3.jpg",
                "assets/mlx_assets/images/gallery/2015/4.jpg",
                "assets/mlx_assets/images/gallery/2015/5.jpg",
                "assets/mlx_assets/images/gallery/2015/6.jpg",
                "assets/mlx_assets/images/gallery/2015/7.jpg",
                "assets/mlx_assets/images/gallery/2015/8.jpg",
                "assets/mlx_assets/images/gallery/2015/9.jpg",
                "assets/mlx_assets/images/gallery/2015/10.jpg"
            ]
        },
        {
            year: 2014, images: [
                "assets/mlx_assets/images/gallery/2014/1.jpg",
                "assets/mlx_assets/images/gallery/2014/2.jpg",
                "assets/mlx_assets/images/gallery/2014/3.jpg",
                "assets/mlx_assets/images/gallery/2014/4.jpg",
                "assets/mlx_assets/images/gallery/2014/5.jpg",
                "assets/mlx_assets/images/gallery/2014/6.jpg",
                "assets/mlx_assets/images/gallery/2014/7.jpg",
                "assets/mlx_assets/images/gallery/2014/8.jpg"
            ]
        },
        {
            year: 2013, images: [
                "assets/mlx_assets/images/gallery/2013/1.jpg",
                "assets/mlx_assets/images/gallery/2013/2.jpg",
                "assets/mlx_assets/images/gallery/2013/3.jpg",
                "assets/mlx_assets/images/gallery/2013/4.jpg",
                "assets/mlx_assets/images/gallery/2013/5.jpg",
                "assets/mlx_assets/images/gallery/2013/6.jpg"
            ]
        },
        {
            year: 2012, images: [
                "assets/mlx_assets/images/gallery/2012/1.jpg",
                "assets/mlx_assets/images/gallery/2012/2.jpg",
                "assets/mlx_assets/images/gallery/2012/3.jpg",
                "assets/mlx_assets/images/gallery/2012/4.jpg",
                "assets/mlx_assets/images/gallery/2012/5.jpg",
                "assets/mlx_assets/images/gallery/2012/6.jpg",
                "assets/mlx_assets/images/gallery/2012/7.jpg"
            ]
        },
        {
            year: 2011, images: [
                "assets/mlx_assets/images/gallery/2011/1.jpg",
                "assets/mlx_assets/images/gallery/2011/2.jpg",
                "assets/mlx_assets/images/gallery/2011/3.jpg"
            ]
        },
        {
            year: 2010, images: [
                "assets/mlx_assets/images/gallery/2010/1.jpg",
                "assets/mlx_assets/images/gallery/2010/2.jpg",
                "assets/mlx_assets/images/gallery/2010/3.jpg",
                "assets/mlx_assets/images/gallery/2010/4.jpg",
                "assets/mlx_assets/images/gallery/2010/5.jpg",
                "assets/mlx_assets/images/gallery/2010/6.jpg",
                "assets/mlx_assets/images/gallery/2010/7.jpg",
                "assets/mlx_assets/images/gallery/2010/8.jpg",
                "assets/mlx_assets/images/gallery/2010/9.jpg",
                "assets/mlx_assets/images/gallery/2010/10.jpg",
                "assets/mlx_assets/images/gallery/2010/11.jpg",
                "assets/mlx_assets/images/gallery/2010/12.jpg",
                "assets/mlx_assets/images/gallery/2010/13.jpg",
                "assets/mlx_assets/images/gallery/2010/14.jpg",
                "assets/mlx_assets/images/gallery/2010/15.jpg",

            ]
        },
        {
            year: 2009, images: [
                "assets/mlx_assets/images/gallery/2019/1.jpg",
                "assets/mlx_assets/images/gallery/2019/2.jpg",
                "assets/mlx_assets/images/gallery/2019/3.jpg",
                "assets/mlx_assets/images/gallery/2019/4.jpg",
                "assets/mlx_assets/images/gallery/2019/5.jpg",
                "assets/mlx_assets/images/gallery/2019/6.jpg",
                "assets/mlx_assets/images/gallery/2019/7.jpg",
                "assets/mlx_assets/images/gallery/2019/8.jpg",
                "assets/mlx_assets/images/gallery/2019/9.jpg",
                "assets/mlx_assets/images/gallery/2019/10.jpg"

            ]
        },
        {
            year: 2008, images: [
                "assets/mlx_assets/images/gallery/2008/1.jpg",
                "assets/mlx_assets/images/gallery/2008/2.jpg",
                "assets/mlx_assets/images/gallery/2008/3.jpg",
                "assets/mlx_assets/images/gallery/2008/4.jpg"
            ]
        },
        {
            year: 2007, images: [
                "assets/mlx_assets/images/gallery/2007/1.jpg",
                "assets/mlx_assets/images/gallery/2007/2.jpg",
                "assets/mlx_assets/images/gallery/2007/3.jpg",
                "assets/mlx_assets/images/gallery/2007/4.jpg",
                "assets/mlx_assets/images/gallery/2007/5.jpg"
            ]
        },
        {
            year: 2006, images: [
                "assets/mlx_assets/images/gallery/2006/1.jpg",
                "assets/mlx_assets/images/gallery/2006/2.jpg"
            ]
        },
        {
            year: 2005, images: [
                "assets/mlx_assets/images/gallery/2005/1.jpg",
                "assets/mlx_assets/images/gallery/2005/2.jpg",
                "assets/mlx_assets/images/gallery/2005/3.jpg",
                "assets/mlx_assets/images/gallery/2005/4.jpg",
                "assets/mlx_assets/images/gallery/2005/5.jpg"
            ]
        },
        {
            year: 2004, images: [
                "assets/mlx_assets/images/gallery/2004/1.jpg",
                "assets/mlx_assets/images/gallery/2004/2.jpg",
                "assets/mlx_assets/images/gallery/2004/3.jpg",
                "assets/mlx_assets/images/gallery/2004/4.jpg",
                "assets/mlx_assets/images/gallery/2004/5.jpg",
                "assets/mlx_assets/images/gallery/2004/6.jpg",
                "assets/mlx_assets/images/gallery/2004/7.jpg",
                "assets/mlx_assets/images/gallery/2004/8.jpg",
                "assets/mlx_assets/images/gallery/2004/9.jpg",
                "assets/mlx_assets/images/gallery/2004/10.jpg",
                "assets/mlx_assets/images/gallery/2004/11.jpg",
                "assets/mlx_assets/images/gallery/2004/12.jpg",
                "assets/mlx_assets/images/gallery/2004/13.jpg",
                "assets/mlx_assets/images/gallery/2004/14.jpg",
                "assets/mlx_assets/images/gallery/2004/15.jpg",

            ]
        },
        {
            year: 2003, images: [
                "assets/mlx_assets/images/gallery/2003/1.jpg"

            ]
        },
        {
            year: 2002, images: [
                "assets/mlx_assets/images/gallery/2002/1.jpg",
                "assets/mlx_assets/images/gallery/2002/2.jpg",
                "assets/mlx_assets/images/gallery/2002/3.jpg",
                "assets/mlx_assets/images/gallery/2002/4.jpg"
            ]
        },
        {
            year: 2001, images: [
                "assets/mlx_assets/images/gallery/2001/1.jpg"

            ]
        },
        {
            year: 1998, images: [
                "assets/mlx_assets/images/gallery/1998/1.jpg"
            ]
        },
        {
            year: 1994, images: [
                "assets/mlx_assets/images/gallery/1994/1.jpg"
            ]
        },
        {
            year: 1993, images: [
                "assets/mlx_assets/images/gallery/1993/1.jpg",
                "assets/mlx_assets/images/gallery/1993/2.jpg",
                "assets/mlx_assets/images/gallery/1993/3.jpg",
                "assets/mlx_assets/images/gallery/1993/4.jpg",
                "assets/mlx_assets/images/gallery/1993/5.jpg",
                "assets/mlx_assets/images/gallery/1993/6.jpg",
                "assets/mlx_assets/images/gallery/1993/7.jpg"
            ]
        },
        {
            year: 1991, images: [
                "assets/mlx_assets/images/gallery/1991/1.jpg",
                "assets/mlx_assets/images/gallery/1991/2.jpg"
            ]
        },
        {
            year: 1990, images: [
                "assets/mlx_assets/images/gallery/1990/1.jpg"
            ]
        },
        {
            year: 1987, images: [
                "assets/mlx_assets/images/gallery/1987/1.jpg",
                "assets/mlx_assets/images/gallery/1987/2.jpg",
                "assets/mlx_assets/images/gallery/1987/3.jpg",
                "assets/mlx_assets/images/gallery/1987/4.jpg",
                "assets/mlx_assets/images/gallery/1987/5.jpg"
            ]
        },
        {
            year: 1984, images: [
                "assets/mlx_assets/images/gallery/1984/1.jpg",
                "assets/mlx_assets/images/gallery/1984/2.jpg",
                "assets/mlx_assets/images/gallery/1984/3.jpg"
            ]
        },
        {
            year: 1982, images: [
                "assets/mlx_assets/images/gallery/1982/1.jpg",
                "assets/mlx_assets/images/gallery/1982/2.jpg",
                "assets/mlx_assets/images/gallery/1982/3.jpg"
            ]
        },
        {
            year: 1965, images: [
                "assets/mlx_assets/images/gallery/1965/1.jpg",
                "assets/mlx_assets/images/gallery/1965/2.jpg",
                "assets/mlx_assets/images/gallery/1965/3.jpg"
            ]
        },

        
    ];

    // --- STATE MANAGEMENT ---
    const state = {
        activeYearData: GALLERY_DATA[0], // Initially load the first year
        carousel: {
            isOpen: false,
            images: [],
            currentIndex: 0,
        }
    };

    // --- DOM ELEMENT REFERENCES ---
    const timelineContainer = document.getElementById('timeline-container');
    const galleryContainer = document.getElementById('gallery-container');
    const carouselModal = document.getElementById('carousel-modal');
    const carouselImage = document.getElementById('carousel-image');
    const carouselCounter = document.getElementById('carousel-counter');

    // --- RENDER FUNCTIONS ---

    /**
     * Renders the entire Timeline component.
     */
    function renderTimeline() {
        const activeYear = state.activeYearData.year;
        const timelineItems = GALLERY_DATA.map(yearData => {
            const isActive = yearData.year === activeYear;
            const imagesStack = yearData.images.slice(0, 3).map((img, index) => `
                <div class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out rounded-xl group-hover:scale-110" style="background-image: url(${img}); transform: rotate(${(index * 4) - 4}deg) translateY(${index * -10}px); z-index: ${3 - index};"></div>
            `).join('');

            return `
                <div class="snap-center flex-shrink-0" data-year="${yearData.year}">
                    <div class="group w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden cursor-pointer relative flex flex-col justify-end p-6 bg-gray-800 text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-2xl hover:scale-105 ${isActive ? 'scale-105 shadow-purple-500/40 shadow-2xl ring-2 ring-purple-500' : ''}">
                        ${imagesStack}
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 rounded-xl"></div>
                        <div class="relative z-20 transform group-hover:translate-y-[-10px] transition-transform duration-300">
                            <h3 class="text-5xl font-black tracking-tighter">${yearData.year}</h3>
                            <p class="text-lg text-gray-300 group-hover:text-white transition-colors">  </p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        timelineContainer.innerHTML = `
            <div class="relative">
                <h2 class="text-3xl font-bold mb-6 text-center text-gray-300">Select a Year</h2>
                <div id="scrollContainer" class="flex items-center space-x-6 md:space-x-8 overflow-x-auto p-4 snap-x snap-mandatory timeline-scroll-container" style="scrollbar-width: none; -ms-overflow-style: none;">
                    ${timelineItems}
                </div>
                <button id="scrollLeftBtn" class="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/80 transition-all duration-200 z-30 backdrop-blur-sm hidden md:block" aria-label="Scroll left"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>
                <button id="scrollRightBtn" class="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/80 transition-all duration-200 z-30 backdrop-blur-sm hidden md:block" aria-label="Scroll right"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>
            </div>
        `;
    }

    /**
     * Renders the entire Gallery component based on the active year.
     */
    function renderGallery() {
        const { year, images } = state.activeYearData;
        const galleryItems = images.map((src, index) => `
            <div class="aspect-square bg-gray-700 rounded-lg overflow-hidden cursor-pointer group relative" data-index="${index}">
                <img src="${src}" alt="Gallery image from ${year} #${index + 1}" class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
        `).join('');

        galleryContainer.innerHTML = `
            <div class="animate-fade-in-up">
                <div class="text-center mb-8">
                    <h2 class="text-4xl font-bold mb-2">${year}</h2>
                    <p class="text-lg text-gray-400"> </p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    ${galleryItems}
                </div>
            </div>
        `;
    }

    /**
     * Updates and shows/hides the carousel modal.
     */
    function renderCarousel() {
        if (state.carousel.isOpen) {
            const { images, currentIndex } = state.carousel;
            carouselImage.src = images[currentIndex];
            carouselCounter.textContent = `${currentIndex + 1} / ${images.length}`;
            carouselModal.classList.remove('hidden');
        } else {
            carouselModal.classList.add('hidden');
        }
    }

    // --- EVENT HANDLERS & LOGIC ---

    function handleYearSelect(year) {
        const selectedYearData = GALLERY_DATA.find(d => d.year === year);
        if (selectedYearData) {
            state.activeYearData = selectedYearData;
            renderAll(); // Re-render both components
        }
    }

    function openCarousel(images, startIndex) {
        state.carousel.isOpen = true;
        state.carousel.images = images;
        state.carousel.currentIndex = startIndex;
        renderCarousel();
    }

    function closeCarousel() {
        state.carousel.isOpen = false;
        renderCarousel();
    }

    function navigateCarousel(direction) {
        const { images, currentIndex } = state.carousel;
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        state.carousel.currentIndex = newIndex;
        renderCarousel();
    }

    /**
     * Sets up all event listeners for the page using event delegation.
     */
    function attachEventListeners() {
        // Timeline click handling
        timelineContainer.addEventListener('click', (e) => {
            const yearCard = e.target.closest('[data-year]');
            if (yearCard) {
                const year = parseInt(yearCard.dataset.year, 10);
                handleYearSelect(year);
            }

            // Scroll button handling
            const scrollLeftBtn = e.target.closest('#scrollLeftBtn');
            const scrollRightBtn = e.target.closest('#scrollRightBtn');
            const scrollContainer = document.getElementById('scrollContainer');
            if (scrollContainer && (scrollLeftBtn || scrollRightBtn)) {
                const scrollAmount = scrollContainer.clientWidth * 0.8;
                scrollContainer.scrollBy({
                    left: scrollLeftBtn ? -scrollAmount : scrollAmount,
                    behavior: 'smooth',
                });
            }
        });

        // Gallery click handling
        galleryContainer.addEventListener('click', (e) => {
            const imageWrapper = e.target.closest('[data-index]');
            if (imageWrapper) {
                const index = parseInt(imageWrapper.dataset.index, 10);
                openCarousel(state.activeYearData.images, index);
            }
        });

        // Carousel controls
        document.getElementById('carousel-close').addEventListener('click', closeCarousel);
        document.getElementById('carousel-prev').addEventListener('click', () => navigateCarousel(-1));
        document.getElementById('carousel-next').addEventListener('click', () => navigateCarousel(1));

        // Keyboard navigation for carousel
        document.addEventListener('keydown', (e) => {
            if (state.carousel.isOpen) {
                if (e.key === 'Escape') closeCarousel();
                if (e.key === 'ArrowLeft') navigateCarousel(-1);
                if (e.key === 'ArrowRight') navigateCarousel(1);
            }
        });
    }

    // --- INITIALIZATION ---
    function renderAll() {
        renderTimeline();
        renderGallery();
    }

    renderAll(); // Initial render on page load
    attachEventListeners(); // Set up event listeners once
});