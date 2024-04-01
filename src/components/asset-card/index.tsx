import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { fetchCryptoData } from "../../utils/fetch-crypto-data";
import { Card } from "../card";
import bitcoinIcon from "../../public/bitcoin.svg";
import arrowDownIcon from "../../public/arrow-down.svg";
import cautionIcon from "../../public/caution.svg";
import { AssetData } from "../../types";
import { assetImage } from "../../utils/asset-image";

export const AssetCard = ({
  styleProps,
  showCaution,
}: {
  styleProps?: React.CSSProperties;
  showCaution: boolean;
}) => {
  const [assetData, setAssetData] = useState<AssetData | null>(null);
  const [moreDetails, setMoreDetails] = useState<boolean>(false);

  useEffect(() => {
    fetchCryptoData(setAssetData);
  }, []);

  return (
    <div>
      {assetData && (
        <div
          className={style["card-container"]}
          style={styleProps ? { ...styleProps } : {}}
        >
          <Card
            style={{ width: "40%", background: "rgba(255,255,255,0.1)" }}
            leftImage={bitcoinIcon}
            heading={assetData.chartName}
            subheading={`Last updated on: ${assetData.time.updated}`}
            onClick={() => setMoreDetails(!moreDetails)}
            rightContent={<img src={arrowDownIcon} alt="" />}
          />
          <div style={{ display: "flex" }}>
            {moreDetails &&
              Object.keys(assetData.bpi).map((currency) => (
                <div className={style.card} key={currency}>
                  <div className={style["card-heading"]}>
                    <img
                      className={style["image"]}
                      src={assetImage(assetData.bpi[currency].code)}
                      alt="x"
                    />
                    <div>{assetData.bpi[currency].description}</div>
                  </div>
                  <span className={style["amount"]}>
                    {`Price in ${assetData.bpi[currency].code} : ${assetData.bpi[currency].rate}`}
                  </span>
                </div>
              ))}
          </div>
          {moreDetails && showCaution && (
            <Card
              leftImage={cautionIcon}
              style={{ width: "55%", color: "orange" }}
              heading={assetData.disclaimer}
            />
          )}
        </div>
      )}
    </div>
  );
};
