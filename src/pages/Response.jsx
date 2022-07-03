/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Response = () => {
  const [resp, setResp] = useState({});
  const query = window.location.search;
  const res = {};
  query
    .replace('?', '')
    .split('&')
    .forEach((q) => {
      const [key, value] = q.split('=');
      res[key] = value;
    });
  const params = res.ref_payco;

  const getEpayInfo = async () => {
    try {
      const dataTransaction = await axios.get(
        `https://secure.epayco.co/validation/v1/reference/${params}`,
        {
          transformRequest: [
            (data, headers) => {
              delete headers.common.Authorization;
              delete headers.common['Access-Control-Allow-Origin'];
              return data;
            },
          ],
        }
      );
      setResp(dataTransaction.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEpayInfo();
  }, []);

  const moreData = resp.data;

  return (
    <div className="response__container">
      {moreData ? (
        <>
          <h3 className="response__title">
            TRANSACCION: {moreData.x_response}
          </h3>
          <p>
            Factura
            <strong> # {moreData.x_id_invoice}</strong>
          </p>
          <p>
            Valor:
            <strong> ${moreData.x_amount} COP </strong>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Response;
