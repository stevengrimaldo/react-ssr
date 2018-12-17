// @flow
import React from 'react';

import PageWrapper from '../../global/template';

import type { PageProps } from '../../global/types';

const NoMatch = ({ bodyData }: PageProps) => (
  <PageWrapper className="no-match">
    <div dangerouslySetInnerHTML={{ __html: bodyData }} />
  </PageWrapper>
);

export default NoMatch;
