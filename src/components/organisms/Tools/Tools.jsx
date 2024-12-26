import "./style.scss";
import { ButtonPicture } from "@/components/molecules/ButtonPicture/ButtonPicture";
import { Tag } from "@/components/molecules/Tag/Tag";

export function Tools({slag,title,text,image}){
    const tagsData = [
        {
            title: '0,8"',
            type: 'time',
        },
        {
            title: 'f/5,6',
            type: 'social',
        },
        {
            title: '100',
            type: 'iso',
        },
        {
            title: 'Sweden',
            type: 'location',
        },
    ]

    return(
      <div className="app-tools">
          <div className="app-tools__left">
              <p className="app-tools__slag">{slag}</p>
              <p className="app-tools__title">{title}</p>
              <p className="app-tools__desc">{text}</p>
              <ButtonPicture disabled={false} onClick={(e) => e.preventDefault()}>
                  Check it out
              </ButtonPicture>
          </div>
          <div className="app-tools__right" style={{ backgroundImage: `url(${image})` }}>
              <div className="app-tools__tags">
                  {
                      tagsData.map(tag =>
                          <Tag title={tag.title} type={tag.type} />
                      )
                  }
              </div>
          </div>
      </div>
    );
}