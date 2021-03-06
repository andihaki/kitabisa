import { string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import CampaignItem from './components/CampaignItem';
import { container } from './styles';
import normalizer from './utils/normalizer';

const Campaign = ({ sortBy }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState('false');

  useEffect(() => {
    // const url = 'https://www.storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json';
    // url changed, got CORS issue
    const url = 'https://raw.githubusercontent.com/andihaki/api/master/campaign.json';
    async function fetchCampaignList() {
      try {
        setLoading('true');
        const response = await fetch(
          url,
        );

        const json = await response.json();
        // console.log(json);
        setResult(normalizer(json.data));
        setLoading(false);
      } catch (error) {
        setLoading('null');
      }
    }

    fetchCampaignList();
  }, []);

  const sortedResult = (by) => result.sort((a, b) => (a[by] > b[by] ? 1 : -1));

  useEffect(() => {
    setResult(sortedResult(sortBy));
  }, [sortBy]);

  if (loading) return <div>Shimmer loading</div>;

  return (
    <div className={container}>
        {result.map((campaign) => <CampaignItem {...campaign} key={ campaign.id } />)}
    </div>
  );
};

Campaign.propTypes = {
  sortBy: string,
};

Campaign.defaultProps = {
  sortBy: '',
};

export default Campaign;
