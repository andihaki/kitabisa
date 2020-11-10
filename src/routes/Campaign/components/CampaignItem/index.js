import React from 'react';
import { number, string } from 'prop-types';
import toIDR from '../../utils/toIDR';
import {
  container, imgContainer, titleCx, ProgressBar, flexBetween,
} from './styles';

const CampaignItem = ({
  title, image, daysRemaining, donationReceived, donationPercentage, order,
}) => (

  <div className={container}>
      <div className={imgContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={titleCx}>{title}</div>
      <div>{donationPercentage}</div>
      <ProgressBar width={donationPercentage * 100} />
      <div className={flexBetween}>
        <div>Terkumpul</div>
        <div>{daysRemaining} hari</div>
      </div>
      <div className={flexBetween}>
        <div>{toIDR(donationReceived)}</div>
        <div>{order}</div>
      </div>
    </div>
);

CampaignItem.propTypes = {
  daysRemaining: number,
  donationPercentage: number,
  donationReceived: number,
  id: number,
  image: string,
  order: number,
  title: string,
};

CampaignItem.defaultProps = {
  daysRemaining: 0,
  donationPercentage: 0,
  donationReceived: 0,
  id: 0,
  image: '',
  order: '',
  title: '',
};

export default CampaignItem;
