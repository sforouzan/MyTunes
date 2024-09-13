import { createElement } from "react";

function App() {

  const heading = 'MyTunes';
  const avril = "https://pngimg.com/d/avril_lavigne_PNG7.png";
  const firstAlbum = "https://upload.wikimedia.org/wikipedia/en/2/27/Let_Go_cover.png";
  const secondAlbum = "https://upload.wikimedia.org/wikipedia/en/0/07/Under_My_Skin_%28Avril_Lavigne_album%29_cover.png";

  const content = (
    <>
      <div class="mainContent">
          <img src={avril} alt="artist image" class="artistImage" />
          <div class="discography">
            <h1 class="appName">{heading}</h1> 
            <h3 class="artistName">Avril Lavigne's albums</h3>

            <div class="albumContainer">
                <div class="albumOne">
                  <img src={firstAlbum} alt="album image" class="albumImage" />
                  <div class="tracklist">
                    <details class="details">
                      <summary>Let Go</summary>
                      <ol>
                        <li>Losing Grip</li>
                        <li>Complicated</li>
                        <li>Sk8er Boi</li>
                        <li>I'm with You</li>
                        <li>Mobile</li>
                        <li>...</li>
                      </ol>
                    </details>
                  </div>
                </div>
                <div class="albumTwo">
                  <img src={secondAlbum} alt="album image" class="albumImage" />
                  <div class="tracklist">
                    <details class="details">
                      <summary>Under My Skin</summary>
                      <ol>
                        <li>Take Me Away</li>
                        <li>Together</li>
                        <li>Don't Tell Me</li>
                        <li>He Wasn't</li>
                        <li>How Does It Feel</li>
                        <li>...</li>
                      </ol>
                    </details>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </>
    );

  return content;
}



export default App
