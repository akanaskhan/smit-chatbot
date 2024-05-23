// var userInput = document.getElementById("userInput").value.toLowerCase();

// function key(){
//     if(event.keyCode === 13){

//     }
// }
var userInput = document.getElementById("userText");
userInput.scrollTop = userInput.scrollHeight;

function respond() {
  let userInput = document.getElementById("userText").value.toLowerCase();
  document.getElementById("ali").innerHTML +=
    '<div class = "divv"> <h2>' + document.getElementById("userText").value + '</h2></div>';
  if (
    userInput.toLowerCase() === "hi" ||
    userInput.toLowerCase() === "hello" ||
    userInput.toLowerCase() === "helo" ||
    userInput.toLowerCase() === "hy"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Hello I am a chatbot of Saylani. I have all the information about Saylani Walfare Trust" +
        "</li>";
    }, 2000);

    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" + "what kind of information do you need?" + "</li>";
    }, 4000);

    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<ol>" +
        "<b>" +
        "<li><button id='about-education' value='About Education'  class='btn-education' onkeydown='enter()' onclick='forEducation()'>About Education</button></li>" +
        "<li><button id='molana-basheer' class='btn-molana' value='who is Molana Basheer Farooqi' onkeydown='enter()' onclick='molanaBasheer()'>About Molana Basheer Farooqi</button></li>" +
        "<li><button id='blood-bank' class='btn-blood-bank' value='Thalassemia Treatment' onkeydown='enter()' onclick='thalassemia()'>Blood Bank / Thalassemia Treatment</button></li>" +
        "<li><button id='medical' class='btn-medical' value='Medical' onkeydown='enter()' onclick='medical()'>Medical</button></li>" +
        "<li><button id='food' class='btn-food' value='saylani dastarkhwan' onkeydown='enter()' onclick='food()'>Saylani Dastarkhwan</button></li>" +
        "<li><button id='smit' class='btn-medical' value='Want admission in smit' onkeydown='enter()'  onclick='smit()'>Admission in SMIT</button></li>" +
        "</b></ol>";

      document.getElementById("userText").placeholder = "";
      // document.getElementById("userText").scrollTop = document.getElementById("userText").scrollHeight;
    }, 6000);
  } else if (
    userInput === "1" ||
    userInput.toLowerCase() === "education" ||
    userInput.toLowerCase() === "about education"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Services Education Technical Education SMIT" +
        "</li>" +
        "<b>" +
        "SMIT (Saylani IT ) " +
        "</b>" +
        "<p>" +
        "Today is the age of information technology and we aim to equip our youth with computer programming skills and prepare them for the development of the country. In this regard, our Saylani Mass IT Training Program providing vocational training to more than 75,000 students in Web and Mobile Application Development, CCNA, Graphics Designing, Computer Based Accounting in Karachi, Hyderabad, Faisalabad, Islamabad. Our goal is to develop more than 1 million software developers across the country, which will add about $100 billion annually to Pakistan's economy" +
        "</p>";
      document.getElementById("userText").placeholder = "";
    }, 4000);
  } else if (
    userInput === "2" ||
    userInput.toLowerCase() === "maulana bashir farooqi" ||
    userInput.toLowerCase() === "bashir farooqi" ||
    userInput.toLowerCase() === "chairman" ||
    userInput.toLowerCase() === "saylani chairman" ||
    userInput.toLowerCase() === "who is saylani chairman" ||
    userInput.toLowerCase() === "who is molana basheer farooqi"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Type...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Maulana Bashir Farooqi Qadri" +
        "</li>" +
        "<p>" +
        "is the Chairman of Saylani Welfare Trust, which is one of the biggest welfare organizations in Pakistan. But do you know the biography of the man who is behind this whole work and progressIn recent years Saylani Welfare Trust has steadily grown into one of the most active and renowned welfare organizations in the country. But many people are unaware from the life and profile of the Maulana Bashir who established the organization to help the people of Pakistan Bashir Ahmed Polani was born on March 3, 1963 in the month of Ramazan in the city of Shikarpur, Sindh. He belongs to a noble and religious family from the Bantawa Community and his father Abdul Ghaffar Polani was a successful businessmen.He completed his schooling from Islamia High School Shikarpur and then travelled to Karachi in 1975 to pursue college & Islamic studies. In Karachi he got admission in Abdullah Haroon College from where he completed his intermediate education.3 After completing college he pursued his Islamic studies from Darul-ul-Uloom Amjadia from where he successfully did his Dars-e-Nizami" +
        "</p>";
      document.getElementById("userText").placeholder = "";
    }, 7000);
  } else if (
    userInput === "3" ||
    userInput.toLowerCase() === "blood bank" ||
    userInput.toLowerCase() === "thalassemia" ||
    userInput.toLowerCase() === "blood Bank / thalassemia treatment" ||
    userInput.toLowerCase() === "thalassemia treatment"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Saylani Thalassemia Center" +
        "</li>" +
        "<b>" +
        "Thalassemia" +
        "</b>" +
        "<p>" +
        "Fight Against Thalassemia – A Patients & Parents Association conducted a Patients & Parents Session at Saylani Thalassemia Center on Thursday 28th January 2019 We briefed them about how can they take better care of themselves, how they can maintain their hemoglobin and ferritin, about prevention, about FAiTh Patient Support Group, how can they spread awareness & how can they help themselves & thalassemia center regarding blood donations & thalassemia screening." +
        "</p>" +
        "<li>" +
        "Blood Bank" +
        "</li>" +
        "<b>" +
        "Blood Bank" +
        "</b>" +
        "<p>" +
        "Saylani Blood Bank is an initiative by the Saylani Welfare International Trust, which is a well-known non-profit organization based in Pakistan. Saylani Welfare provides a variety of services to the needy, including healthcare, education, and food distribution. The blood bank project is one of their significant contributions to healthcare, aiming to ensure a reliable supply of safe blood for patients in need. lood Donation Drives The blood bank organizes regular blood donation camps to encourage voluntary blood donations and maintain a steady blood supply.Blood Storage and Processing They have modern facilities for the storage and processing of blood to ensure safety and availability. Testing and Screening All donated blood undergoes rigorous testing and screening for various diseases to ensure it is safe for transfusion. 24/7 Availability The blood bank operates round the clock to cater to emergencies and urgent requirements.Free Services In line with Saylani Welfare’s mission, the blood bank provides blood free of cost to those who need it, especially for the underprivileged.Awareness Campaigns They conduct awareness programs to educate the public about the importance of blood donation and how it can save lives.Collaboration with Hospitals Saylani Blood Bank works in collaboration with various hospitals and medical institutions to streamline the blood supply chain and ensure efficient distribution" +
        "</p>";

      document.getElementById("userText").placeholder = "";
    }, 7000);
  } else if (
    userInput === "4" ||
    userInput.toLowerCase() === "saylani medical" ||
    userInput.toLowerCase() === "medical" ||
    userInput.toLowerCase() === "hospital" ||
    userInput.toLowerCase() === "saylani hospital"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Saylani Medical" +
        "</li>" +
        "<ol class='orderlist'>" +
        "<li>" +
        "Diagnostic Services: Saylani Medical offers diagnostic services such as laboratory tests, X-rays, and ultrasounds to assist in accurate diagnosis and treatment." +
        "</li>" +
        "<li>" +
        "Pharmacy Services: Free or subsidized medicines are provided to patients who cannot afford them, ensuring that financial constraints do not hinder access to necessary medications." +
        "</li>" +
        "<li>" +
        "Health Camps and Awareness Programs: Regular health camps are organized to provide free check-ups, screenings, and health education. Awareness programs focus on various health issues, including preventive care, maternal and child health, and chronic disease management." +
        "</li>" +
        "<li>" +
        "Specialized Medical Services: The organization also offers specialized services such as cardiology, gynecology, pediatrics, and ophthalmology, among others." +
        "</li>" +
        "<li>" +
        "Partnerships with Healthcare Institutions: Saylani Medical collaborates with other healthcare institutions and professionals to expand its reach and enhance the quality of care provided." +
        "</li>" +
        "<li>" +
        "Medical Aid for Surgery and Treatment: Financial aid is provided for major surgeries and treatments that patients cannot afford, ensuring that everyone has access to necessary medical interventions." +
        "</li>" +
        "</ol>";
      document.getElementById("userText").placeholder = "";
    }, 7000);
  } else if (
    userInput === "5" ||
    userInput.toLowerCase() === "food" ||
    userInput.toLowerCase() === "saylani food" ||
    userInput.toLowerCase() === "saylani dastarkhwan" ||
    userInput.toLowerCase() === "dastarkhwan"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Saylani Dastarkhwan" +
        "</li>" +
        "<p>" +
        "Food shortage and hunger is a grim reality of the developing world. The food and beverages category is devastating for the common man as the price of monthly groceries soars. Even items that were once considered a poor man’s staple like vegetables have become expensive while meat and fish are almost affordable." +
        "<br>" +
        "In this scenario, Saylani Welfare International Trust stepped up to work like a bridge between the affluent and the needy , instead of just giving money , we have taken the time and effort to provide the most basic necessity in an accessible manner. Saylani Welfare International Trust is feeding more than 125,000 people daily. They are determined to provide the poor and needy across 4 provinces with fresh wholesome meals in a hygienic environment twice a day." +
        "</p>" +
        "<img class='dastars' src='image/dastar.jpg'>";

      document.getElementById("userText").placeholder = "";
    }, 5000);
  } else if (
    userInput === "admission" ||
    userInput.toLowerCase() === "admission in smit" ||
    userInput.toLowerCase() === "it admission" ||
    userInput.toLowerCase() === "want admission in smit" ||
    userInput.toLowerCase() === "saylani it course"
  ) {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML +=
        "<li>" +
        "Saylani It courses" +
        "</li>" +
        "<p>" +
        "Saylani Welfare Latest IT Course" +
        "</p>" +
        "<ol class='orderlist'>" +
        "<li>" +
        "Web & App Development" +
        "</li>" +
        "<li>" +
        "Generated Ai & Chatbot" +
        "</li>" +
        "<li>" +
        "Graphic Designing & Vedeion Animation" +
        "</li>" +
        "<li>" +
        "3D Animation" +
        "</li>" +
        "<li>" +
        "Certified Computer Operator" +
        "</li>" +
        "<li>" +
        "Certified Computer Accountancy" +
        "</li>" +
        "</li>" +
        "<li>" +
        "Flutter" +
        "</li>" +
        "<br>" +
        "<a class='form' href='https://forms.saylaniwelfare.com/en' target='_blank'>" +
        "SMIT Addmission form" +
        "</a>" +
        "</br>" +
        "</ol>";

      document.getElementById("userText").placeholder = "";
    }, 5000);
  } else {
    document.getElementById("userText").value = "";
    document.getElementById("userText").placeholder = "Typing...";
    setTimeout(function () {
      document.getElementById("ali").innerHTML += "<li>" + "Soryy " + "</li>";
      document.getElementById("userText").placeholder = "";
    }, 2000);
  }
}

// function abc(){
//     if(document.getElementById("userText").value==="hi"){
// document.getElementById("me").innerHTML=document.getElementById("userText").value;
// document.getElementById("chtai").innerHTML="helo";
// document.getElementById("content").style.display="block";
// }
// else if(document.getElementById("userText").value==="how"){
//     document.getElementById("me").innerHTML=document.getElementById("userText").value;
//     document.getElementById("chtai").innerHTML="helo";
//     document.getElementById("content").style.display="block";
//     }

// }
function forEducation() {
  document.getElementById("userText").value =
    document.getElementById("about-education").value;
}
function molanaBasheer() {
  document.getElementById("userText").value =
    document.getElementById("molana-basheer").value;
}
function thalassemia() {
  document.getElementById("userText").value =
    document.getElementById("blood-bank").value;
}
function medical() {
  document.getElementById("userText").value =
    document.getElementById("medical").value;
}
function food() {
  document.getElementById("userText").value =
    document.getElementById("food").value;
}
function smit() {
  document.getElementById("userText").value =
    document.getElementById("smit").value;
}

function key() {
  if (event.keyCode === 13) {
    respond();
  }
}
