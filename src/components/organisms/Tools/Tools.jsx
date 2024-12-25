import "./style.scss";
import { ButtonPicture } from "@/components/molecules/ButtonPicture/ButtonPicture";
import { Tag } from "@/components/molecules/Tag/Tag";

export function Tools({title,text,image}){
    return(
      <div className="app-tools">
          <div className="app-tools__left">

          </div>
          <div className="app-tools__right">
              <div className="app-tools__tags">
                  <Tag/>
                  <Tag/>
                  <Tag/>
                  <Tag/>
              </div>
          </div>
      </div>
    );
}