import React, { useContext } from "react";
import { ContexStore } from "../../ContexStore/ContexStore";
import style from "../../Styles/StoreCSS/ShowStoreData.module.css";
import Card from "../../Utilities/Card/Card";

export const SortingRatingDocument = () => {
  const { apiData } = useContext(ContexStore);

  // DocumentRatingFilter
  const forDocumentRating = apiData.filter(
    (data) => data.cat_title === "Documents"
  );
  const DocumentRating = [...new Set(forDocumentRating)];

  const DocumentFilter = DocumentRating.sort(
    (a, b) => parseFloat(b.pro_rating) - parseFloat(a.pro_rating)
  );

  // DocumentRatingFilter

  return (
    <div>
      <div className={style.exceptWrapper}>
        <div className={style.exceptHeading}>
          <span>Top Rated Documents</span>
        </div>
        <div id={style.exceptWrapper} className={style.holder}>
          {DocumentFilter.slice(0, 4).map((data, key) => {
            const {
              cat_title,
              pro_id,
              pro_img1,
              pro_title,
              owner_name,
              pro_rating,
              pro_desc,
            } = data;
            return (
              <Card
                key={key}
                img={pro_img1}
                title={pro_title}
                owner={owner_name}
                rating={pro_rating}
                desc={pro_desc}
                cat_title={cat_title}
                pro_id={pro_id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const SortingRatingVideo = () => {
  const { apiData } = useContext(ContexStore);
  //VideoratingFilter
  const forVideoRating = apiData.filter((data) => data.cat_title === "Videos");
  const VideoRating = [...new Set(forVideoRating)];
  const VideoFilter = VideoRating.sort(
    (a, b) => parseFloat(b.pro_rating) - parseFloat(a.pro_rating)
  );

  //VideoratingFilter

  return (
    <>
      {VideoFilter ? (
        <div className={style.exceptWrapper}>
          <div className={style.exceptHeading}>
            <span>Top Rated Videos</span>
          </div>
          <div id={style.exceptWrapper} className={style.holder}>
            {VideoFilter.slice(0, 4).map((data, key) => {
              const {
                cat_title,
                pro_id,
                pro_img1,
                pro_title,
                owner_name,
                pro_rating,
                pro_desc,
              } = data;
              return (
                <Card
                  key={key}
                  img={pro_img1}
                  title={pro_title}
                  owner={owner_name}
                  rating={pro_rating}
                  desc={pro_desc}
                  cat_title={cat_title}
                  pro_id={pro_id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export const SortingRatingAudio = () => {
  const { apiData } = useContext(ContexStore);
  // AudioratingFilter
  const forAudioRating = apiData.filter((data) => data.cat_title === "Audios");
  const AudioRating = [...new Set(forAudioRating)];
  const AudioFilter = AudioRating.sort(
    (a, b) => parseFloat(b.pro_rating) - parseFloat(a.pro_rating)
  );

  // AudioratingFilter

  return (
    <>
      {AudioFilter ? (
        <div className={style.exceptWrapper}>
          <div className={style.exceptHeading}>
            <span>Top Rated Audios</span>
          </div>
          <div id={style.exceptWrapper} className={style.holder}>
            {AudioFilter.slice(0, 4).map((data, key) => {
              const {
                cat_title,
                pro_id,
                pro_img1,
                pro_title,
                owner_name,
                pro_rating,
                pro_desc,
              } = data;
              return (
                <Card
                  key={key}
                  img={pro_img1}
                  title={pro_title}
                  owner={owner_name}
                  rating={pro_rating}
                  desc={pro_desc}
                  cat_title={cat_title}
                  pro_id={pro_id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
