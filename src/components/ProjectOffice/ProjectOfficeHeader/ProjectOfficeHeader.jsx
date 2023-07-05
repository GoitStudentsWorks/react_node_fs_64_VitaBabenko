import React, { useState } from 'react';
import { Wrapper } from '../Project/ProjectOfficeStyle';
import { BtnFilter, Title, SvgIcons, FilterText } from './ProjectOfficeHeader.styled';
import sprite from '../../../images/sprite.svg';
import { PopUpFilter } from 'components/PopUpFilter/PopUpFilter';

const ProjectOfficeHeader = ({boardTitle}) => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };
  console.log(boardTitle)

  return (
    <>
      <Wrapper>
        {boardTitle && <Title>{boardTitle}</Title>}

        <BtnFilter type="button" onClick={togglePopUp}>
          <SvgIcons aria-label="filter icon" width={18} height={18}>
            <svg>
              <use xlinkHref={`${sprite}#icon-filter`} />
            </svg>
          </SvgIcons>
          <FilterText>Filters</FilterText>
        </BtnFilter>
        {isPopUpVisible && <PopUpFilter onClose={handleClosePopUp} />}
      </Wrapper>
    </>
  );
};

export default ProjectOfficeHeader;
