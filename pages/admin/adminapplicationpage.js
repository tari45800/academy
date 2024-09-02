import React from 'react';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import CategoryLayout from '@/components/DetailLayout/CategoryLayout';
import PageLayout from '@/components/DetailLayout/PageLayout';
import { winterSchoolForm } from '@/components/formobjects/winterSchoolForm';
// import { SATForm } from '@/components/formobjects/SATForm';
import { SATForm } from '@/components/formobjects/SATFormcopy';
import { ssnForm } from '@/components/formobjects/ssnForm';
import { ssnRegularForm } from '@/components/formobjects/ssnRegularForm';
import { consultingForm } from '@/components/formobjects/consultingForm';
import { infosessionForm } from '@/components/formobjects/infosessionForm';

const AdminApplicationPage = () => {
  const title = '접수 관리 페이지';
  const text_1 = '';
  const currentPage = 6;
  const pageName = 'applicationBox';
  const link = '/admin/applicationlistpage';

  // const formArray = [winterSchoolForm, finalForm, regularForm, onlineForm, absorbedForm, selfStudyForm];
  const formArray = [SATForm];

  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} />
      <CategoryLayout
        pageName={pageName}
        rightContentItems={formArray}
        currentPage={6}
        mode={'page'}
        link={link}
        admin={true}
      />
    </PageLayout>
  );
};

export default AdminApplicationPage;
