import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsWhatsapp,
  BsInfo,
} from "react-icons/bs";
import { FaMobileAlt, FaUniversity, FaShare } from "react-icons/fa";
import {
  AiOutlineArrowRight,
  AiOutlineUnorderedList,
  AiFillEye,
  AiOutlineLink,
} from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { BiSolidChevronRight } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import {
  HomeSection,
  ContactUsTopSection,
  ContactThroughSection,
  ContactThrough,
  ContactThroughIconBg,
  ContactThroughAnchorEl,
  ContactThroughButton,
  NavbarIconBg,
  TopSection,
  NavbarSection,
  NavbarWebsiteLogo,
  NavbarLinksContainer,
  NavbarLinkItem,
  NavbarLinksDropDown,
  NavbarLinksDropDownOption,
  NavbarLink,
  TopContentSection,
  TopContentImage,
  TopContentInfo,
  TopContentHeading,
  TopContentHeadingHighlight,
  TopContentLeftSection,
  TopContentText,
  TopContentCardsContainer,
  TopContentCard,
  TopContentCardTitle,
  BreakEl,
  TopContent,
  TopContentCardButton,
  TopContentLoginSection,
  LoginSectionImage,
  LoginFormSection,
  LoginSectionButtonContainer,
  TypeOfLoginButton,
  InputContainer,
  InputLabel,
  InputBox,
  LoginButton,
  ForgotContainer,
  LoginFormInteractionButton,
  WhyOnlineStudySection,
  WhyOnlineStudyContentSection,
  WhyOnlineStudyImage,
  WhyOnlineStudyCoursesContainer,
  WhyOnlineStudyCoursesList,
  WhyOnlineStudyCourseItem,
  WhyOnlineStudyInfo,
  WhyOnlineStudyInfoTitle,
  WhyOnlineStudyInfoText,
  WhyOnlineStudyInfoTextStrong,
  BenefitsSection,
  BenefitsSectionTitle,
  BenefitsSectionTitleHighlight,
  BenefitsLists,
  BenefitsListItem,
  BenefitsItemTitle,
  BenefitsItemText,
  MobileAppSection,
  MobileAppSectionImage,
  MobileAppSectionInfo,
  MobileAppSectionTitle,
  MobileAppSectionTitleHighlight,
  MobileAppSectionText,
  MobileAppSectionButton,
  OnlineBenefitsSection,
  OnlineBenefitsContent,
  OnlineBenefitsInfo,
  OnlineBenefitsTitle,
  OnlineBenefitsTitleHighlight,
  OnlineBenefitsHrLine,
  OnlineBenefitsText,
  OnlineBenefitsList,
  OnlineBenefitsListItem,
  OnlineBenefitsImage,
  OnlineBenefitsBanner,
  OnlineBenefitsBannerInfo,
  OnlineBenefitsBannerValue,
  OnlineBenefitsBannerText,
  WeAreAboutSection,
  WeAreAboutImgContainer,
  WeAreAboutImage,
  WeAreAboutList,
  WeAreAboutInfo,
  WeAreAboutTitle,
  WeAreAboutTitleHighlight,
  WeAreAboutHrLine,
  WeAreAboutListItem,
  WeAreAboutListItemImg,
  WeAreAboutListItemInfo,
  WeAreAboutListItemValue,
  WeAreAboutListItemText,
  SubscribeUsSection,
  SubscribeUsTitle,
  SubscribeUsTitleHighlight,
  SubscribeUsInputContainer,
  SubscribeUsInputEl,
  SubscribeUsButton,
  FooterSection,
  ContactUs,
  ContactUsInfoContainer,
  ContactUsCard,
  ContactUsCardTitle,
  ContactUsCardText,
  ContactUsNavLinksList,
  ContactUsNavLinkItem,
  ContactUsNavLinksImgList,
  ContactUsNavLinkLogo,
  ContactUsHrLine,
  ContactUsThroughSection,
  ContactUsThroughList,
  ContactUsThroughListItem,
  ContactUsThroughInfo,
  ContactUsThroughTitle,
  ContactUsThroughAnchorEl,
  ContactUsThroughIconContainer,
  ContactUsThroughText,
} from "./styledComponents";

const benefitsList = [
  {
    id: 1,
    icon: <AiOutlineUnorderedList size="36px" />,
    title: "Task Activities",
    description:
      "Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can  be submitted online which helps students to finish their tasks online.",
  },
  {
    id: 2,
    icon: <HiDocument size="36px" />,
    title: "Exam Results",
    description:
      "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.",
  },
  {
    id: 3,
    icon: <BsInfo size="36px" />,
    title: "Notice Updates",
    description:
      "The necessary announcements and updates will reach to the students and parents quickly.",
  },
  {
    id: 4,
    icon: <AiFillEye size="36px" />,
    title: "Monitoring",
    description:
      "All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc.",
  },
  {
    id: 5,
    icon: <AiOutlineLink size="36px" />,
    title: "Connectivity",
    description:
      "When all the information is available online, and is shared regularly with parents and students transparency will be maintained.",
  },
  {
    id: 6,
    icon: <FaShare size="30px" />,
    title: "Planning & Sharing",
    description:
      "It becomes important nowadays for students to share their thoughts and ideas, SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.",
  },
];

const weAreAboutUs = [
  {
    id: 1,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-1.png",
    value: "108+",
    text: "Happy School",
  },
  {
    id: 2,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-2.png",
    value: "58030+",
    text: "Students",
  },
  {
    id: 3,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-3.png",
    value: "5360+",
    text: "Happy parents",
  },
  {
    id: 4,
    imgUrl:
      "https://schoolaura.com/Content/new_assets/images/happy-clients/client-4.png",
    value: "10+",
    text: "Happy Tutors",
  },
];

const Home = () => {
  

  const topContactUsSection = () => (
    <ContactUsTopSection>
      <ContactThroughSection marginleft="true">
        <ContactThrough>
          <ContactThroughIconBg>
            <BsTelephoneFill size="14px" />
          </ContactThroughIconBg>
          <ContactThroughAnchorEl href="tel:9540349392">
            +91-9540349392
          </ContactThroughAnchorEl>
        </ContactThrough>
        <ContactThrough>
          <ContactThroughIconBg>
            <BsFillEnvelopeFill size="14px" />
          </ContactThroughIconBg>
          <ContactThroughAnchorEl href="mailto:contact@schoolaura.com">
            contact@schoolaura.com
          </ContactThroughAnchorEl>
        </ContactThrough>
      </ContactThroughSection>
      <ContactThroughSection>
        <ContactThroughButton bgColor="#1bd741">
          <BsWhatsapp />
          Whats App
        </ContactThroughButton>

        <ContactThroughButton bgColor="#a4c639">
          <FaMobileAlt />
          Mobile App
        </ContactThroughButton>

        
          <ContactThroughButton bgColor="#0d1028">Login</ContactThroughButton>
        
        
          <ContactThroughButton bgColor="#0d1028">
            Registration
          </ContactThroughButton>
        
      </ContactThroughSection>
    </ContactUsTopSection>
  );

  const navbarLinksSection = () => (
    <NavbarSection>
      <NavbarIconBg>
        <NavbarWebsiteLogo
          src="https://schoolaura.com/Content/assets/images/logo_school.png"
          alt="website logo"
        />
      </NavbarIconBg>
      <NavbarLinksContainer>
        <NavbarLinkItem>
          <NavbarLink >Home</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLinksDropDown>
            <NavbarLinksDropDownOption>
              Exam Solutions
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>
              1-st to 11th Exam
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>
              Competitive Exam
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Entrance Exam</NavbarLinksDropDownOption>
          </NavbarLinksDropDown>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLinksDropDown>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
          </NavbarLinksDropDown>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLinksDropDown>
            <NavbarLinksDropDownOption>
              Tutor Solution
            </NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
            <NavbarLinksDropDownOption>Online Study</NavbarLinksDropDownOption>
          </NavbarLinksDropDown>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLink >Blogs</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <NavbarLink >Contact Us</NavbarLink>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <ContactThroughButton bgColor="#0d1028">
            <FaUniversity />
            School Management
          </ContactThroughButton>
        </NavbarLinkItem>
      </NavbarLinksContainer>
    </NavbarSection>
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const topContentSection = () => (
    <TopContentSection>
      <TopContentLeftSection>
        <TopContentImage
          src="https://schoolaura.com/Content/new_assets/images/header/header-girl-icon.png"
          alt="school"
        />
        <TopContent>
          <TopContentInfo>
            <TopContentHeading>
              BE A
              <TopContentHeadingHighlight>
                SMART STUDENT
              </TopContentHeadingHighlight>
            </TopContentHeading>
            <TopContentText>
              SchoolAura Is A Smart Education Platform
            </TopContentText>
          </TopContentInfo>
          <TopContentCardsContainer>
            <TopContentCard>
              <TopContentCardTitle>
                ENTERANCE <BreakEl />
                Solution
              </TopContentCardTitle>
              <TopContentCardButton>Exam</TopContentCardButton>
              <NavbarLink to="/courses">
                <TopContentCardButton>Course</TopContentCardButton>
              </NavbarLink>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
            <TopContentCard>
              <TopContentCardTitle>
                COMPETITIVE <BreakEl />
                Solution
              </TopContentCardTitle>
              <TopContentCardButton>Exam</TopContentCardButton>
              <NavbarLink to="/courses">
                <TopContentCardButton>Course</TopContentCardButton>
              </NavbarLink>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
            <TopContentCard>
              <TopContentCardTitle>
                KG-12<sup>TH</sup> <BreakEl />
                SCHOOL
              </TopContentCardTitle>
              <TopContentCardButton>Exam</TopContentCardButton>
              <NavbarLink to="/courses">
                <TopContentCardButton>Course</TopContentCardButton>
              </NavbarLink>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
            <TopContentCard>
              <TopContentCardTitle>
                TUTOR <BreakEl />
                SOLUTION
              </TopContentCardTitle>
              <TopContentCardButton>Find Tutor</TopContentCardButton>
              <TopContentCardButton>Become Tutor</TopContentCardButton>
              <TopContentCardButton nobgColor="true">
                READ MORE
                <AiOutlineArrowRight />
              </TopContentCardButton>
            </TopContentCard>
          </TopContentCardsContainer>
        </TopContent>
      </TopContentLeftSection>
      <TopContentLoginSection>
        <LoginSectionImage
          src="https://schoolaura.com/Content/new_assets/images/header/user-img.png"
          alt="login image"
        />
        <LoginSectionButtonContainer>
          <TypeOfLoginButton>Student Login</TypeOfLoginButton>
          <TypeOfLoginButton>Parents Login</TypeOfLoginButton>
        </LoginSectionButtonContainer>
        <LoginFormSection onSubmit={onFormSubmit}>
          <InputContainer>
            <InputLabel htmlFor="mobileNumber">Mobile Number or Key</InputLabel>
            <InputBox type="text" id="mobileNumber" />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Student Password</InputLabel>
            <InputBox type="password" id="password" />
          </InputContainer>
          <LoginButton type="submit">Login</LoginButton>
        </LoginFormSection>
        <ForgotContainer>
          <LoginFormInteractionButton type="button">
            Forgot Password
          </LoginFormInteractionButton>
          <LoginFormInteractionButton type="button">
            Create Account
          </LoginFormInteractionButton>
        </ForgotContainer>
      </TopContentLoginSection>
    </TopContentSection>
  );

  const whyChooseOnlineStudy = () => (
    <WhyOnlineStudySection>
      <WhyOnlineStudyContentSection>
        <WhyOnlineStudyCoursesContainer>
          <WhyOnlineStudyCoursesList>
            <WhyOnlineStudyCourseItem>- 256 Courses</WhyOnlineStudyCourseItem>
            <WhyOnlineStudyCourseItem>
              - Expert Teachers
            </WhyOnlineStudyCourseItem>
            <WhyOnlineStudyCourseItem>
              - Online Education
            </WhyOnlineStudyCourseItem>
          </WhyOnlineStudyCoursesList>
        </WhyOnlineStudyCoursesContainer>
        <WhyOnlineStudyInfo>
          <WhyOnlineStudyInfoTitle>
            Why Online Study With SchoolAura
          </WhyOnlineStudyInfoTitle>
          <WhyOnlineStudyInfoText>
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, and
            carrying books, notebooks and how much to buy books?
          </WhyOnlineStudyInfoText>
          <BreakEl />
          <WhyOnlineStudyInfoText>
            <WhyOnlineStudyInfoTextStrong>
              Solution:
            </WhyOnlineStudyInfoTextStrong>
            Now you can find a simple solution with schoolaura. In these days
            almost everyone has a Smartphone, Tab or Laptop. So just open your
            device and start your study from anywhere anytime while you are
            travelling, sitting in the park, and etc.
          </WhyOnlineStudyInfoText>
          <BreakEl />
          <WhyOnlineStudyInfoText>
            Now Use your time and gain knowledge in every second and Use your
            device for right things not for waste your time
          </WhyOnlineStudyInfoText>
        </WhyOnlineStudyInfo>
      </WhyOnlineStudyContentSection>
      <WhyOnlineStudyImage
        src="https://schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
        alt="online study"
      />
    </WhyOnlineStudySection>
  );

  const benefitsSection = () => (
    <BenefitsSection>
      <BenefitsSectionTitle>
        BENEFITS OF SCHOOLAURA
        <BreakEl />
        <BenefitsSectionTitleHighlight>
          FOR STUDENT
        </BenefitsSectionTitleHighlight>
      </BenefitsSectionTitle>
      <BenefitsLists>
        {benefitsList.map((each) => {
          const { id, title, icon, description } = each;

          return (
            <BenefitsListItem key={id}>
              {icon}
              <BenefitsItemTitle>{title}</BenefitsItemTitle>
              <BenefitsItemText>{description}</BenefitsItemText>
            </BenefitsListItem>
          );
        })}
      </BenefitsLists>
    </BenefitsSection>
  );

  const mobileAppSection = () => (
    <MobileAppSection>
      <MobileAppSectionImage
        src="https://schoolaura.com/Content/new_assets/images/school_aura_app.jpg"
        alt="mobile app"
      />
      <MobileAppSectionInfo>
        <MobileAppSectionTitle>
          Easy to Access with
          <MobileAppSectionTitleHighlight>
            Mobile App
          </MobileAppSectionTitleHighlight>
        </MobileAppSectionTitle>
        <MobileAppSectionText>
          If you&#39;re looking for easily accessible resources for your
          classroom, then you&#39;re in the right place. Online learning with
          the Android app is very easy to access. That&#39;s why we&#39;ve
          hand-curated the School Aura free app and website. Easy to use and
          learn!
        </MobileAppSectionText>
        <BreakEl />
        <MobileAppSectionText>
          To learn online, you need to be reasonably comfortable with Smart
          Mobile Phone, Tab, Laptops, and the internet. The advantage of
          learning online via an android app is that you can pause the
          video/audio whenever you need to take notes or simply absorb what has
          been said. Another fantastic feature of online learning is that you
          can re-listen to different parts as needed, which is something you
          can&#39;t do in a live lecture!
        </MobileAppSectionText>
        <NavbarLink to="/">
          <MobileAppSectionButton>Download Now</MobileAppSectionButton>
        </NavbarLink>
      </MobileAppSectionInfo>
    </MobileAppSection>
  );

  const onlineBenefitsSection = () => (
    <OnlineBenefitsSection>
      <OnlineBenefitsContent>
        <OnlineBenefitsInfo>
          <OnlineBenefitsTitle>
            Benefits of <BreakEl />
            <OnlineBenefitsTitleHighlight>
              Online Education
            </OnlineBenefitsTitleHighlight>
          </OnlineBenefitsTitle>
          <OnlineBenefitsHrLine />
          <BreakEl />
          <OnlineBenefitsText>
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It&#39;s especially
            beneficial for students who aren&#39;t as self-sufficient or who are
            used to the traditional educational model of &apos;teacher and
            class.&apos;
          </OnlineBenefitsText>
          <OnlineBenefitsList>
            <OnlineBenefitsListItem>
              Time and Location Flexibility
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Find Unlimited Course Category
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              No Need to Carry Books
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Get Access in any mobile, Tab, Laptop with your credential
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Use your time when you are traveling, Outing and free time
            </OnlineBenefitsListItem>
            <OnlineBenefitsListItem>
              Exam Practice before exam
            </OnlineBenefitsListItem>
          </OnlineBenefitsList>
        </OnlineBenefitsInfo>
        <OnlineBenefitsImage
          src="https://schoolaura.com/Content/new_assets/images/spreading/spreading.png"
          alt="online benefits image"
        />
      </OnlineBenefitsContent>
      <OnlineBenefitsBanner>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>10000+</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Total Exams</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>600+</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Courses</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>3000+</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Success Stories</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
        <OnlineBenefitsBannerInfo>
          <OnlineBenefitsBannerValue>4.5/5</OnlineBenefitsBannerValue>
          <OnlineBenefitsBannerText>Rating</OnlineBenefitsBannerText>
        </OnlineBenefitsBannerInfo>
      </OnlineBenefitsBanner>
    </OnlineBenefitsSection>
  );

  const weAreAboutUsSection = () => (
    <WeAreAboutSection>
      <WeAreAboutImgContainer>
        <WeAreAboutImage
          src="https://schoolaura.com/Content/new_assets/images/happy-clients/client.png"
          alt="we are image"
        />
      </WeAreAboutImgContainer>
      <WeAreAboutInfo>
        <WeAreAboutTitle>
          WE <BreakEl />
          <WeAreAboutTitleHighlight>ARE SPREADING</WeAreAboutTitleHighlight>
        </WeAreAboutTitle>
        <WeAreAboutHrLine />
        <WeAreAboutList>
          {weAreAboutUs.map((each) => {
            const { id, imgUrl, value, text } = each;

            return (
              <WeAreAboutListItem key={id}>
                <WeAreAboutListItemImg src={imgUrl} alt="happy clients" />
                <WeAreAboutListItemInfo>
                  <WeAreAboutListItemValue>{value}</WeAreAboutListItemValue>
                  <WeAreAboutListItemText>{text}</WeAreAboutListItemText>
                </WeAreAboutListItemInfo>
              </WeAreAboutListItem>
            );
          })}
        </WeAreAboutList>
      </WeAreAboutInfo>
    </WeAreAboutSection>
  );

  const subscribeUsSection = () => (
    <SubscribeUsSection>
      <SubscribeUsTitle>
        SUBSCRIBE OUR
        <BreakEl />
        <SubscribeUsTitleHighlight>NEWSLETTER</SubscribeUsTitleHighlight>
      </SubscribeUsTitle>
      <SubscribeUsInputContainer>
        <SubscribeUsInputEl type="email" placeholder="Email Address" />
        <SubscribeUsButton type="button">Subscribe</SubscribeUsButton>
      </SubscribeUsInputContainer>
    </SubscribeUsSection>
  );

  const footerSection = () => (
    <FooterSection>
      <ContactUs>
        <ContactUsInfoContainer>
          <ContactUsCard>
            <ContactUsCardTitle>About Us</ContactUsCardTitle>
            <ContactUsCardText>
              SchoolAura Smart Education Platform is a step towards making
              learning better and effective for the students and help to
              acheiving their goals.
            </ContactUsCardText>
          </ContactUsCard>
          <ContactUsCard>
            <ContactUsCardTitle>Quick Links</ContactUsCardTitle>
            <ContactUsNavLinksList>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                About Us
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Benefits
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Blogs
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Testimonials
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Features
              </ContactUsNavLinkItem>
            </ContactUsNavLinksList>
          </ContactUsCard>
          <ContactUsCard>
            <ContactUsCardTitle>Help & Support</ContactUsCardTitle>
            <ContactUsNavLinksList>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Services
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Support
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Terms & Condition
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Privacy Policy
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <BiSolidChevronRight color="#ff5202" />
                Sitemap
              </ContactUsNavLinkItem>
            </ContactUsNavLinksList>
          </ContactUsCard>
          <ContactUsCard>
            <ContactUsCardTitle>Follow Us</ContactUsCardTitle>
            <ContactUsNavLinksImgList>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/fb.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/insta.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/twitter.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
              <ContactUsNavLinkItem>
                <NavbarLink to="/">
                  <ContactUsNavLinkLogo
                    src="	https://schoolaura.com/Content/new_assets/images/footer-icon/whatsapp.png"
                    alt="facebook logo"
                  />
                </NavbarLink>
              </ContactUsNavLinkItem>
            </ContactUsNavLinksImgList>
          </ContactUsCard>
        </ContactUsInfoContainer>
        <ContactUsHrLine />
        <ContactUsThroughSection>
          <ContactUsThroughList>
            <ContactUsThroughListItem>
              <ContactUsThroughIconContainer>
                <BsTelephoneFill size="22px" />
              </ContactUsThroughIconContainer>
              <ContactUsThroughInfo>
                <ContactUsThroughTitle>CALL US</ContactUsThroughTitle>
                <ContactUsThroughAnchorEl href="tel:9540349392">
                  +91-9540349392
                </ContactUsThroughAnchorEl>
              </ContactUsThroughInfo>
            </ContactUsThroughListItem>
            <ContactUsThroughListItem>
              <ContactUsThroughIconContainer>
                <BsFillEnvelopeFill size="22px" />
              </ContactUsThroughIconContainer>
              <ContactUsThroughInfo>
                <ContactUsThroughTitle>MAIL US</ContactUsThroughTitle>
                <ContactUsThroughAnchorEl href="mailto:contact@schoolaura.com">
                  contact@schoolaura.com
                </ContactUsThroughAnchorEl>
              </ContactUsThroughInfo>
            </ContactUsThroughListItem>
            <ContactUsThroughListItem>
              <ContactUsThroughIconContainer>
                <MdLocationOn size="22px" />
              </ContactUsThroughIconContainer>
              <ContactUsThroughInfo>
                <ContactUsThroughTitle>OFFICE ADDRESS</ContactUsThroughTitle>
                <ContactUsThroughText>
                  E 44/3, Pocket D, Okhla Phase II,
                  <BreakEl /> Okhla Industrial Area, New Delhi,
                  <BreakEl /> Delhi 110020, India
                </ContactUsThroughText>
              </ContactUsThroughInfo>
            </ContactUsThroughListItem>
          </ContactUsThroughList>
        </ContactUsThroughSection>
      </ContactUs>
    </FooterSection>
  );

  return (
    <HomeSection>
      {topContactUsSection()}
      <TopSection>
        {navbarLinksSection()}
        {topContentSection()}
      </TopSection>
      {whyChooseOnlineStudy()}
      {benefitsSection()}
      {mobileAppSection()}
      {onlineBenefitsSection()}
      {weAreAboutUsSection()}
      {subscribeUsSection()}
      {footerSection()}
    </HomeSection>
  );
};

export default Home;
