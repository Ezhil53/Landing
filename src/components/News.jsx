import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiClock, FiArrowRight, FiCalendar, FiEye } from "react-icons/fi";
import { BsNewspaper } from "react-icons/bs";

const NewsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Featured News - Large Card with Image
  const featuredNews = [{
    id: 1,
    title: "தமிழ் திரையுலகின் முதல் பேசும் திரைபடம் காளிதாஸ் வெளியான தினம் இன்று ",
    excerpt: "காளிதாஸ் (Kalidas) 1931 ஆம் ஆண்டு வெளிவந்த தமிழ்த் திரைப்படமாகும். எச். எம். ரெட்டி இயக்கத்தில் வெளிவந்த இத்திரைப்படத்தில் பி. ஜி. வெங்கடேசன், டி. பி. ராஜலட்சுமி உள்ளடங்கலாகப் பலர் நடித்திருந்தனர். இத்திரைப்படம் தமிழில் வெளிவந்த முதலாவது பேசும் படமாகும்.இந்தியாவின் முதல் பேசும் படமான ஆலம் ஆரா தயாரித்த அரங்கிலேயே இப்படம் தயாரிக்கப்பட்டது.இந்தப் படத்தின் பாடல்கள் மதுரகவி பாஸ்கரதாசால் எழுதி, நாடக மேடைகளில் பாடப்பட்டு வந்தவை. இப்படத்தின் மூலம் முதல் தமிழ்ப் படத்தின் பாடலாசிரியர் எனும் பெயர் பாஸ்கரதாசுக்கு கிடைத்தது",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kalidas_1931_Songbook.JPG/330px-Kalidas_1931_Songbook.JPG",
    img: "kalidas",
    category: "Box Office",
    date: "October 31, 2025"
  },
  {
    id: 2,
    title: "நடிகர் பிரகாஷ்ராஜ்க்கு கர்நாடக அரசு விருது ",
    excerpt: "நவம்பர் 1 ஆம் தேதி கன்னட ராஜ்யோத்சவ கொண்டாட்டங்களை முன்னிட்டு, பல்வேறு துறைகளில் பங்களித்த ஆளுமைகளுக்கு ஆண்டுதோறும் வழங்கப்படும். அதன்படி நடிகர் பிரகாஷ்ராஜ் உட்பட 70 சாதனையாளர்களுக்கு  ராஜ்யோத்சவ விருதுகளை அம்மாநில அரசு வியாழக்கிழமை அறிவித்தது. இந்த விருது ₹5 லட்சம் ரொக்கம், 25 கிராம் தங்கப் பதக்கம் மற்றும் பாராட்டுப் பத்திரம் ஆகியவற்றைக் கொண்டுள்ளது.சனிக்கிழமை நடைபெறும் விழாவில் முதலமைச்சர் சித்தராமையா விருதுகளை வழங்குவார்.",
    image: "https://m.media-amazon.com/images/M/MV5BMjQ2MjA4NjU0MF5BMl5BanBnXkFtZTgwMTgwMDMzOTE@._V1_.jpg",
    category: "Award",
     img: "prakashraj",
    date: "October 31, 2025"
},
 {
    id: 3,
    title: "'டூரிஸ்ட் ஃபேமிலி'  பட இயக்குநர்  அபிஷன் ஜீவிந்த் திருமணம் !! ",
    excerpt: "'டூரிஸ்ட் ஃபேமிலி'  படம் மூலம் அனைவரது கவனத்தையும் ஈர்த்த  இளம் இயக்குநர்  அபிஷன் ஜீவிந்த்,  அவரது காதலி அகிலாவை கரம்பிடித்துள்ளார். இவர்கள் இருவரது  திருமணம்,  இன்று  அக்டோபர் 31 ஆம் தேதி, இருவரது பெற்றோர்கள், உறவினர்கள் மற்றும் நண்பர்கள் புடைசூழ,  ஹனு ரெட்டி,  போயஸ் கார்டன், சென்னையில் கோலகலமாக  நடைபெற்றது. முன்னதாக நேற்று க்ரீன் பார்க் ஸ்டார் ஹோட்டலில்,  நடைபெற்ற திருமண வரவேற்பு நிகழ்ச்சியில், நடிகர்கள் சசிகுமார், சிவகார்த்திகேயன், எம் எஸ் பாஸ்கர் , ரமேஷ் திலக், நடிகைகள்  சிம்ரன்,அனஸ்வரா விஜயன், தயாரிப்பாளர்கள் 2D Entertainment ராஜசேகர் கற்பூர சுந்தரபாண்டியன், சௌந்தர்யா ரஜினிகாந்த், மகேஷ் ராஜ் பசிலியான், அருண் விஷ்வா, ஷினீஷ், இயக்குநர்கள் 'பூ' சசி, ரஞ்சித் ஜெயக்கொடி, சண்முகப்பிரியன் (லவ் மேரேஜ்), பிரபு ராம் வியாஸ் (லவ்வர்) , மதன் (அபிஷன் ஜீவிந்த் நாயகனாக நடிக்கும் படம்) இசையமைப்பாளர் ஷான் ரோல்டன், பாடலாசிரியர் மோகன்ராஜ், விநியோகஸ்தர் விர்தூஷ், எடிட்டர் பரத் ராம், திங் மியூசிக் சந்தோஷ், ஜியோ ஹாட்ஸ்டார் சபரி  ஆகியோர் கலந்துகொண்டு புதுமண தம்பதிகளை வாழ்த்தினர்.",
    image: "https://media.cinemaexpress.com/cinemaexpress%2F2025-10-31%2F49t4s3yk%2FAbishan.jpg?w=480&auto=format%2Ccompress&fit=max",
    category: "Marriage",
     img: "Abhisan Jeevith",
    date: "October 31, 2025"
},
 {
    id: 4,
    title: "'லோகா சாப்டர்1: சந்திரா' திரைப்படம் ஜியோஹாட்ஸ்டாரில் !! ",
    excerpt: "'லோகா சாப்டர்1: சந்திரா' திரைப்படம் பிரத்யேகமாக ஜியோஹாட்ஸ்டாரில் ஐந்து மொழிகளில் தற்போது ஸ்ட்ரீம் ஆகிறது!மலையாள சினிமாவில் ரெக்கார்ட் பிரேக்கிங் வெற்றி பெற்ற 'லோகா சாப்டர்1: சந்திரா' திரைப்படம் தற்போது ஜியோஹாட்ஸ்டாரில் பிரத்யேகமாக மலையாளம், தமிழ், தெலுங்கு, கன்னடம் மற்றும் இந்தி ஆகிய மொழிகளில் ஸ்ட்ரீம் ஆகிறது என்பதை ஜியோஹாட்ஸ்டார் அறிவித்துள்ளது. திரையரங்குகளில் மாபெரும் வெற்றி பெற்ற இந்தத் திரைப்ப்டம் மலையாள சினிமாவின் பிரம்மாண்ட கதை சொல்லல் முறையை மறுவரையறை செய்தது. மேலும், மலையாள சினிமா ஒன்று உலகளவில் ரூ. 300 கோடிக்கும் அதிக வசூல் செய்தது என்ற வரலாற்று சாதனையையும் இந்தத் திரைப்படம் படைத்துள்ளது. பாக்ஸ் ஆஃபிஸ் வெற்றி மற்றும் உலகளவில் கவனம் ஈர்த்தது மட்டுமல்லாது 2025 ஆம் ஆண்டில் அதிகம் கொண்டாடப்பட்ட இந்திய படம் என்ற பெருமையையும் பெற்றுள்ளது. டொமினிக் அருண் இயக்கி எழுதிய இப்படத்தில் கல்யாணி பிரியதர்ஷன் சந்திராவாக மாறுபட்ட நடிப்பைக் கொடுத்துள்ளார். அவருடன் நஸ்லென், அஞ்சு குரியன், சந்து குமார் மற்றும் சாண்டி ஆகியோர் முக்கிய கதாபாத்திரங்களில் நடித்துள்ளனர். படத்தில் துல்கர் சல்மான், டொவினோ தாமஸ் மற்றும் சௌபின் சாஹிர் ஆகியோரின் மறக்கமுடியாத சிறப்பு தோற்றங்கள் படத்தின் பிரம்மாண்டத்தை மேலும் அதிகமாக்கியது. இந்தப் படத்திற்கு நிமிஷ் ரவி ஒளிப்பதிவு செய்திருக்க, சம்மன் சாக்கோ படத்தொகுப்பை கையாண்டிருக்கிறார். படத்திற்கு இசை ஜேக்ஸ் பிஜோய். நடிகர் துல்கர் சல்மானின் வேஃபேரர் ஃபிலிம்ஸ் நிறுவனம் இந்தப் படத்தைத் தயாரித்துள்ளது. புராணம், கற்பனை மற்றும் ஆழமான மனித உணர்வுகளை பேசும் 'லோகா சாப்டர் 1: சந்திரா' திரைப்படம் பார்வையாளர்களுக்கு தைரியம், விதி மற்றும் தியாகம் போன்றவற்றையும் இதில் சொல்கிறது. திரையரங்குகளில் மாபெரும் வெற்றி பெற்றதைத் தொடர்ந்து, ஜியோஹாட்ஸ்டாரின் டிஜிட்டல் பிரீமியர் இந்தியா மற்றும் உலகம் முழுவதும் உள்ள பார்வையாளர்களை இணைக்கும் வகையில் ஐந்து மொழிகளில் மிக உயர்ந்த தரத்தில் ஒளிபரப்புகிறது. வித்தியாசமான, பான் இந்தியா கதை சொல்லலை பலதரப்பட்ட பார்வையாளர்களுக்கும் கொண்டு போய் சேர்க்க வேண்டும் என்ற நோக்கத்தோடு இயங்கி வரும் ஜியோஹாட்ஸ்டார் 'லோகோ சாப்டர்1: சந்திரா' படத்தை ஸ்ட்ரீம் செய்வதன் மூலம் இதனை மீண்டும் நிரூபித்துள்ளது. ஸ்ட்ரீமிங் விவரம்:ஜியோஹாட்ஸ்டாரில் மலையாளம், தமிழ், தெலுங்கு, கன்னடம் மற்றும் இந்தி ஆகிய மொழிகளில் தற்போது (அக்டோபர் 2025) ஸ்ட்ரீம் ஆகிறது.ஜியோஹாட்ஸ்டார் பற்றி:ஜியோஹாட்ஸ்டார் இந்தியாவின் முன்னணி ஸ்ட்ரீமிங் தளங்களில் ஒன்று. இது ஜியோசினிமா மற்றும் டிஸ்னி+ ஹாட்ஸ்டார் ஆகியவற்றின் இணைப்பின் மூலம் உருவாக்கப்பட்டது. நல்ல கதையம்சம், புதுமையான தொழில்நுட்பம் மற்றும் அர்ப்பணிப்புடன், ஜியோஹாட்ஸ்டார் இந்தியா முழுவதும் உள்ள அனைவருக்கும் பொழுதுபோக்கை மறுவரையறை செய்வதை நோக்கமாகக் கொண்டுள்ளது.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/111e14227838741.684823836fa85.jpg",
    category: "OTT",
     img: "lokha",
    date: "October 31, 2025"
},
 {
    id: 5,
    title: "அமரன் திரைப்படம் வெளியாகி ஓராண்டு நிறைவு  !! ",
    excerpt: "அமரன் (Amaran) இராஜ்குமார் பெரியசாமி எழுத்து, இயக்கத்தில், ராஜ்கமல் பிலிம்ஸ் இன்டர்நேசனல், சோனி பிக்சர்ஸ் பிலிம்ஸ் இந்தியா தயாரிப்பில், 31 அக்டோபர் 2024இல் வெளிவந்த தமிழ் அதிரடி போர்த் திரைப்படமாகும். இப்படத்தில் சிவகார்த்திகேயன் மேஜர் முகுந்த் வரதராஜனாகவும், சாய் பல்லவி, பவண் அரோரா, ராகுல் போஸ், லல்லு, அனுன் பாவ்ரா, அஜே நாக ராமன், மீர் சல்மான், கௌரவ் வெங்கடேசு, ஸ்ரீ குமார் ஆகியோரும் நடித்துள்ளனர். இது இராணுவ வீரர் முகுந்த் வரதராஜனை அடிப்படையாகக் கொண்ட சிவ் அரூர் மற்றும் இராகுல் சிங் எழுதிய இந்தியாஸ் மோஸ்ட் பியர்லெஸ் என்ற புத்தகத் தொடரின் தழுவலாகும். ",
    image: "https://upload.wikimedia.org/wikipedia/ta/5/54/Amaran_2024_poster.jpg",
    category: "Celebration",
     img: "amaran",
    date: "October 31, 2025"
}


];


  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="w-full px-6 md:w-[95%]  mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-white shadow-lg backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-4">
            <BsNewspaper className="text-amber-600" />
            <span className="text-amber-600 font-semibold text-sm">Latest Updates</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Cinema News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Updates</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings in Tamil cinema industry
          </p>
        </div>

        {/* Featured News - Large Card with Image */}
        <div className="mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="200">
             {featuredNews.map(news => (
          <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 mb-5" key={news.id}>
         
            <div className="grid md:grid-cols-3 grid-cols-1 " >
              {/* Content Section */}
              <div className="col-span-2 p-6 md:p-8 lg:p-10 flex flex-col justify-center " >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="text-xs" />
                      <span>{news.date}</span>
                    </div> 
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                  {news.excerpt}
                </p>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.img}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          
          </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;