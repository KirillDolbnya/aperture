import './style.scss';
import { ButtonPicture } from "@/components/molecules/ButtonPicture/ButtonPicture";

export function Connection({title,text}){
    return(
      <div className="app-connection">
          <div className="container">
              <div className="app-connection__container">
                  <h2 className="app-connection__title">{title}</h2>
                  <p className="app-connection__text">{text}</p>
                  <ButtonPicture disabled={false} onClick={(e) => e.preventDefault()}>
                      Get in touch
                  </ButtonPicture>
              </div>
          </div>
      </div>
    );
}