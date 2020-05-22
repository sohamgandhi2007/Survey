Cbfootprint = 0
q1value = 0
q2value = 0
q3value = 0
answer1value=0
answer2value=0
answer3value=0

function setup() {
  background("white");
  createCanvas(windowWidth, windowHeight)
  question1 = createP(" Q1 Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? A. Yes, B.No")
  question1.position(0, 20)
  input1 = createInput()
  input1.position(200, 70)

  answer1 = createP(" Ans1 richard@whitehatjr.com,No, gandhidineshca@gmail.com.Yes, sohamdineshgandhi@gmail.com.Yes ")
  answer1.position(0,100)
  input1 = createInput()
  input1.position(70, 70)

  question2 = createP("Q2. Would you be willing to contribute a small amount every month for such a program? A.Yes,B.No")
  input2 = createInput()
  input2.position(0,180)
  
  answer2 = createP(" Ans2 richard@whitehatjr.com,Yes, gandhidineshca@gmail.com.Yes, sohamdineshgandhi@gmail.com.No ")
  answer2.position(0,260)
  input1 = createInput()
  input1.position(70, 70)

  question3 = createP(". How much per month would you be willing to pay? A.500,B. 1000,C. more")
  input3 = createInput()
  input3.position(60, 340)
  
  answer3 = createP(" Ans3 richard@whitehatjr.com,More, gandhidineshca@gmail.com.500, sohamdineshgandhi@gmail.com.1000 ")
  answer3.position(0,420)
  input1 = createInput()
  input1.position(70, 70)

 
}

function draw() {
    canvas=createCanvas(300,500)

}


