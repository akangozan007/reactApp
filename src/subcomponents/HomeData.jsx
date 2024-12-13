
import MyPicture from '../images/myPicture.png'
import anime from 'animejs';
import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";

useEffect(() => {
    const test = new Letterize({
      targets: "#animateMe"
    });

    var animation = anime.timeline({
      targets: test.listAll,
      delay: anime.stagger(50),
      loop: true
    });

    animation
      .add({
        translateY: -40
      })
      .add({
        translateY: 0
      });
    
  }, []); // Hanya dijalankan sekali saat komponen pertama kali di-mount
  
export const HomeData = {
    image:MyPicture ,
    content:`  <div className="kolom">
        <p id="animateMe" className="deskripsi">MUHAMMAD RAZAN RIZQULLAH <br> #Frontend Web Developer</p>
        <h2>Ngoding Ngopi, Ngoprek & Ngudud</h2>
        <p>Hai.. saya seorang mahasiswa Teknik Informatika yang bekerja sebagai laboran dan memiliki hobi ngoding <br> berusia 22 tahun.</p>
        <p><a href="" className="tbl-pink">Pelajari Lebih Lanjut</a></p>
    </div>`,
};