import styled from "styled-components";


export const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContactUsTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ContactThroughSection = styled.div`
  display: flex;
  column-gap: 7px;
  margin-right: ${(props) => (props.marginleft ? "" : "100px")};
  margin-left: ${(props) => props.marginleft && "100px"};
`;

export const ContactThrough = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const ContactThroughIconBg = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #ff5202;
  color: #fff;
`;

export const ContactThroughAnchorEl = styled.a``;

export const ContactThroughButton = styled.button`
  padding: 5px 7px;
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

export const TopSection = styled.div`
  padding-bottom: 30px;
  background-color: #ff5202;
  background-image: url("https://schoolaura.com/Content/new_assets/images/header/banner-bg.png");
  background-size: contain;
  display: flex;
  flex-direction: column;
  background-position: bottom;
`;

export const NavbarSection = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const NavbarIconBg = styled.div`
  background-image: url("https://schoolaura.com/Content/new_assets/images/header/logo-cloud.png");
  //   width: 180px;
  height: 90px;
  width: 250px;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;
export const NavbarWebsiteLogo = styled.img`
  width: 100px;
  margin-left: 100px;
`;
export const NavbarLinksContainer = styled.ul`
  display: flex;
  margin-right: 100px;
  column-gap: 15px;
  height: 40px;
  align-items: center;
`;

export const NavbarLinkItem = styled.li``;

export const NavbarLink = styled`
  color: #fff;
`;

export const NavbarLinksDropDown = styled.select`
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  color: #fff;
`;

export const NavbarLinksDropDownOption = styled.option`
  color: #000;
`;
const mobileMaxWidth = "768px";

export const TopContentSection = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-self: center;
  margin-top: 40px;

  @media (max-width: ${mobileMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TopContentLeftSection = styled.div`
  display: flex;
`;

export const TopContentImage = styled.img`
  height: 380px;
   @media (max-width: ${mobileMaxWidth}) {
    height: auto;
    max-width: 100%;
   }
`;

export const TopContent = styled.div``;

export const TopContentInfo = styled.div``;

export const TopContentHeading = styled.h1`
  color: #fff;
  font-size: 62px;
  @media (max-width: ${mobileMaxWidth}) {
    font-size: 36px;
    text-align: center;
  }
`;
export const TopContentHeadingHighlight = styled.span`
  color: #06091b;
  margin-left: 20px;
`;

export const TopContentText = styled.p`
  color: #fff;
  font-size: 28px;
  @media (max-width: ${mobileMaxWidth}) {
    font-size: 20px;
    text-align: center;
  }
`;

export const TopContentCardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  column-gap: 20px;
  row-gap: 20px;
`;

export const TopContentCard = styled.li`
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  box-shadow: 0px 0px 11px #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const TopContentCardTitle = styled.h4`
  font-size: 18px;
  text-align: center;

  margin-bottom: 20px;
`;
export const BreakEl = styled.br``;

export const TopContentCardButton = styled.button`
  width: 130px;
  height: 35px;
  color: ${(props) => (props.nobgcolor ? "#000" : "#fff")};
  background-color: ${(props) => (props.nobgcolor ? "transparent" : "#ff5205")};
  border-radius: 15px;
  margin-bottom: 15px;
  border: none;
  font-size: 18px;
  outline: none;
  display: flex;
  align-items: center;
  column-gap: 7px;
  justify-content: center;
`;
export const TopContentLoginSection = styled.div`
  width: 300px;
  height: 450px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 11px #000;
  display: flex;
  flex-direction: column;
`;

export const LoginSectionImage = styled.img`
  align-self: center;
  z-index: 1;
  margin-top: -60px;
  width: 100px;
  margin-bottom: 25px;
`;

export const LoginSectionButtonContainer = styled.div`
  display: flex;
`;
export const TypeOfLoginButton = styled.button`
  color: ${(props) => (props.isActive ? "#789c05" : "#9a9a9a")};
  border: none;
  outline: none;
  background: none;
  flex-grow: 1;
  font-size: 16px;
  border-bottom: ${(props) =>
    props.isActive ? "1px solid #ff5202" : "1px solid gray"};
`;

export const LoginFormSection = styled.form`
  margin-top: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #212529;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  color: #495057;
  outline: none;
  font-size: 16px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 18px;
  color: #fff;
  background-color: #06091b;
`;

export const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const LoginFormInteractionButton = styled.button`
  border: none;
  outline: none;
  color: #373737;
  background: none;
  font-size: 16px;
`;
export const WhyOnlineStudySection = styled.div`
  width: 60%;
  margin-top: 35px;
  align-self: center;
`;

export const WhyOnlineStudyContentSection = styled.div`
  display: flex;
`;
export const WhyOnlineStudyCoursesContainer = styled.div`
  background-image: url("https://schoolaura.com/Content/new_assets/images/banner-2/Clip.png");
  background-color: #0d1028;
  width: 30%;
  flex-shrink: 0;
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WhyOnlineStudyCoursesList = styled.ul``;

export const WhyOnlineStudyCourseItem = styled.li`
  font-size: 26px;
  margin-bottom: 5px;
  color: #fff;
`;

export const WhyOnlineStudyInfo = styled.div`
  flex-grow: 1;
  margin-left: 30px;
`;

export const WhyOnlineStudyInfoTitle = styled.h1`
  font-size: 36px;
  color: #0d1028;
`;
export const WhyOnlineStudyInfoText = styled.p`
  color: #212529;
  font-size: 16px;
`;

export const WhyOnlineStudyInfoTextStrong = styled.strong`
  color: #0d1028;
`;

export const WhyOnlineStudyImage = styled.img`
  width: 100%;
  margin-top: -50px;
`;

export const BenefitsSection = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 60%;
  align-self: center;
`;

export const BenefitsSectionTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #0d1028;
  margin-bottom: 20px;
`;
export const BenefitsSectionTitleHighlight = styled.span`
  color: #ff5202;
  font-size: 36px;
`;

export const BenefitsLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
export const BenefitsListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  overflow-y: auto;
  height: 250px;
  width: 320px;
  box-shadow: 0px 0px 11px #000;
  text-align: center;
  border-radius: 20px;
`;

export const BenefitsItemTitle = styled.h1`
  color: #212529;
  font-size: 28px;
`;

export const BenefitsItemText = styled.p`
  color: #212529;
  font-size: 14px;
`;

export const MobileAppSection = styled.div`
  display: flex;
  background-color: lightgrey;
`;
export const MobileAppSectionImage = styled.img`
  width: 320px;
  height: 320px;
`;
export const MobileAppSectionInfo = styled.div`
  padding: 25px;
`;

export const MobileAppSectionTitle = styled.h1`
  font-size: 28px;
  color: #0d1028;
`;

export const MobileAppSectionTitleHighlight = styled.span`
  color: #ff5202;
  font-size: 28px;
`;
export const MobileAppSectionText = styled.p`
  font-size: 16px;
  color: #212529;
`;
export const MobileAppSectionButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 25px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
`;
export const OnlineBenefitsSection = styled.div`
  padding: 20px;
  width: 60%;
  margin-bottom: 50px;
  margin-top: 50px;
  align-self: center;
`;

export const OnlineBenefitsContent = styled.div`
  display: flex;
`;

export const OnlineBenefitsInfo = styled.div``;

export const OnlineBenefitsTitle = styled.h1`
  color: #0d1028;
  font-size: 34px;
`;
export const OnlineBenefitsTitleHighlight = styled.span`
  color: #ff5202;
  font-size: 34px;
`;
export const OnlineBenefitsHrLine = styled.hr`
  width: 100px;
`;
export const OnlineBenefitsText = styled.p`
  font-size: 16px;
  color: #212529;
`;
export const OnlineBenefitsList = styled.ul`
  padding: 20px;
`;

export const OnlineBenefitsListItem = styled.li`
  list-style-type: disc;
`;

export const OnlineBenefitsImage = styled.img`
  height: 350px;
  margin-left: 40px;
`;
export const OnlineBenefitsBanner = styled.div`
  background-image: url("https://schoolaura.com/Content/new_assets/images/spreading/Clip.png");
  background-size: cover;
  background-position: center;
  background-color: #0d1028;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const OnlineBenefitsBannerInfo = styled.div`
  text-align: center;
`;

export const OnlineBenefitsBannerValue = styled.h1`
  color: #fff;
`;

export const OnlineBenefitsBannerText = styled.p`
  color: #ff5202;
  font-size: 22px;
`;
export const WeAreAboutSection = styled.div`
  display: flex;
  background-color: lightgray;
  justify-content: center;
  padding: 25px;
`;
export const WeAreAboutImgContainer = styled.div`
  display: flex;
`;

export const WeAreAboutImage = styled.img`
  height: 300px;
`;

export const WeAreAboutInfo = styled.div`
  width: 60%;
  margin-left: 150px;
`;

export const WeAreAboutTitle = styled.h1`
  color: #0d1028;
  font-size: 36px;
`;

export const WeAreAboutTitleHighlight = styled.span`
  color: #ff5202;
  font-size: 36px;
`;

export const WeAreAboutHrLine = styled.hr`
  width: 160px;
  margin-top: 10px;
  margin-bottom: 15px;
  background-color: #000;
  height: 4px;
`;

export const WeAreAboutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const WeAreAboutListItem = styled.li`
  display: flex;
  width: 250px;
`;

export const WeAreAboutListItemImg = styled.img`
  height: 60px;
  margin-right: 10px;
`;

export const WeAreAboutListItemInfo = styled.div``;

export const WeAreAboutListItemValue = styled.h1`
  color: #0d1028;
`;

export const WeAreAboutListItemText = styled.p`
  color: #ff5202;
  font-size: 22px;
`;

export const SubscribeUsSection = styled.div`
  display: flex;
  padding: 20px;
  background-image: url("https://schoolaura.com/Content/new_assets/images/subscribe/Clip.png");
  background-size: cover;
  background-position: center;
  align-items: center;
  margin-top: 50px;
  width: 90%;
  align-self: center;
  justify-content: space-around;
`;
export const SubscribeUsTitle = styled.h1`
  color: #0d1028;
  font-size: 32px;
`;
export const SubscribeUsTitleHighlight = styled.span`
  color: #ff5202;
`;
export const SubscribeUsInputContainer = styled.div``;

export const SubscribeUsInputEl = styled.input`
  height: 45px;
  background-color: #fff;
  padding: 15px;
  width: 250px;
  font-size: 16px;
  border: none;
  outline: none;
`;
export const SubscribeUsButton = styled.button`
  height: 45px;
  width: 120px;
  background-color: #ff5202;
  color: #fff;
  font-size: 16px;
  margin-left: 5px;
  border: none;
  outline: none;
`;

export const FooterSection = styled.footer`
  background-color: #0d1028;
  min-height: 60vh;
  padding-top: 50px;
  margin-top: -50px;
  z-index: -1;
`;

export const ContactUs = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
`;
export const ContactUsInfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ContactUsCard = styled.div`
  width: 250px;
`;

export const ContactUsCardTitle = styled.h1`
  color: #ff5202;
  margin-bottom: 25px;
  font-size: 28px;
`;
export const ContactUsCardText = styled.p`
  color: #fff;
  font-size: 16px;
`;
export const ContactUsNavLinksList = styled.ul``;

export const ContactUsNavLinksImgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 140px;
`;

export const ContactUsNavLinkItem = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
`;
export const ContactUsNavLinkLogo = styled.img`
  height: 40px;
`;
export const ContactUsHrLine = styled.hr`
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const ContactUsThroughSection = styled.div``;

export const ContactUsThroughList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-evenly;
`;

export const ContactUsThroughListItem = styled.li`
  display: flex;
  align-items: center;
`;
export const ContactUsThroughIconContainer = styled.div`
  background-color: lightgray;
  padding: 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin-right: 15px;
  justify-content: center;
`;

export const ContactUsThroughInfo = styled.div``;

export const ContactUsThroughTitle = styled.h3`
  color: #ff5202;
`;
export const ContactUsThroughAnchorEl = styled.a``;

export const ContactUsThroughText = styled.p`
  color: #fff;
  font-size: 16px;
`;
