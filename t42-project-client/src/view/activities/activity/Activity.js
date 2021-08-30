import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import CardComponent from 'components/cardcomponent/CardComponent';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Activity = ({ id }) => {
  const history = useHistory();
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    getActivity(id);

    return () => {};
  }, [id]);

  const getActivity = async (id) => {
    const ACTIVITY = await makeGET(`${ENDPOINT_ACTIVITIES}/${id}`);
    setActivity(ACTIVITY.Activity);
  };
  return activity ? (
    <Grid container justify="center">
      <CardComponent
        name={activity.name}
        image={activity.image}
        content={activity.content}
        activities={activity}
        botton={'Volver'}
        vermas={() => history.goBack()}
      ></CardComponent>
    </Grid>
  ) : (
    'Cargando...'
  );
};

export default Activity;
