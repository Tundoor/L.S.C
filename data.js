import { createServer } from "miragejs"

let server = createServer()
server.get("/api/resources", { 
                                 resources: [
                                   
                                  { 
       id: 1,
       fileName: "Maths Past Paper 2020 March (FET)",
       fileURL: "https://stanmorephysics.com/wp-content/uploads/2020/03/Maths-grade-12-March-2020-1.pdf",
       grade: "12",
       type: "past papaer",
       file: ""
     },

      { 
       id: 1,
       fileName: "Maths Past Paper 2020 March P2 (FET)",
       fileURL: "https://stanmorephysics.com/wp-content/uploads/2020/03/Maths-grade-12-March-2020-1.pdf",
       grade: "12",
       type: "past papaer",
       file: ""
     },

      { 
       id: 1,
       fileName: "Maths Past Paper 2020 June P1 (FET)",
       fileURL: "https://stanmorephysics.com/wp-content/uploads/2020/03/Maths-grade-12-March-2020-1.pdf",
       grade: "12",
       type: "past papaer",
       file: ""
     },

      { 
       id: 1,
       fileName: "Maths Past Paper 2020 June P2(FET)",
       fileURL: "https://stanmorephysics.com/wp-content/uploads/2020/03/Maths-grade-12-March-2020-1.pdf",
       grade: "12",
       type: "past papaer",
       file: ""
     },

      { 
       id: 1,
       fileName: "Maths Past Paper 2020 Sept P1(FET)",
       fileURL: "https://stanmorephysics.com/wp-content/uploads/2020/03/Maths-grade-12-March-2020-1.pdf",
       grade: "12",
       type: "past papaer",
       file: ""
     }
                                
                                
                                ] 
                                })


let data = [
     { 
       id: "",
       file: "",
       fileName: "",
       fileLink: "",
       grade: ""
     }
]

let studyData = {
  start : "The Pomodoro technique is highly effective for studying because it helps improve focus and productivity while preventing burnout. By breaking study time into short, timed intervals you train your brain to concentrate deeply without distractions.",
  deepFocus : "Best for complex or creative tasks that require long, uninterrupted focus. You work for about 90 minutes and then take a 20–30 minute break.",
  balanced : "A middle-ground approach—great for studying, reading, or assignments. You focus for 45 minutes and rest for 10–15 minutes.",
  classic : "Ideal for quick tasks or when motivation is low. You study for 20–25 minutes and take a 5-minute break, repeating this cycle several times before a longer rest."
}