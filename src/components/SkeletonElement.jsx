import React from 'react';
import { Skeleton } from '@mantine/core';
import ButtonAction from './ButtonAction';

const SkeletonElement = () => {
  return (
    <div className="card">
      <header className="card__header">
        <div className="card__video">
          <Skeleton height="100%" />
        </div>
      </header>
      <div className="card__body">
        <div className="avatar__img">
          <Skeleton height={50} circle mb="xl" />
        </div>
        <div className="card__text">
          <h3>
            <Skeleton height={15} radius="xl" />
          </h3>
          <div className="card__name">
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </div>
          <span>
            <Skeleton height={10} width="40%" radius="xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonElement;
