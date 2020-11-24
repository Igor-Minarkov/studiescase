import React, { createContext, useState } from "react";

export const Context = createContext({});

const filters = [
  { name: "Front-end", status: false },
  { name: "Marketing", status: false },
  { name: "Design", status: false },
  { name: "Ui-ux", status: false },
  { name: "Data-science", status: false },
  { name: "Business", status: false },
];

const imgs = [
  {
    id: 1,
    tag: "Front-end",
    src:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",

        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 2,
    tag: "Ui-ux",
    src:
      "https://xdfile.com/wp-content/uploads/2019/10/pets-friends-app-ui-ux-design-free-to-download.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },

  {
    id: 3,
    tag: "Marketing",
    src:
      "https://thumbs.dreamstime.com/b/digital-marketing-media-virtual-screen-business-working-team-meeting-concept-using-laptop-smart-phone-tablet-computer-133532447.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#5",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 4,
    tag: "Design",
    src:
      "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 5,
    tag: "Design",
    src:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/e15e80504811e6bcaf7158d37ab7ca/LightBulb.jpg?auto=format%2Ccompress&dpr=1",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#5",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#6",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 6,
    tag: "Front-end",
    src:
      "https://images.unsplash.com/photo-1529603992250-a55acb77d146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#5",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#6",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 7,
    tag: "Ui-ux",
    src:
      "https://imgproxy.epicpxls.com/sqNACvDmzx4ieWXqcMfbmTz-uiXYlTHHnLUgVfdZuAw/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by80YWMzYTdi/ZGE5NWIzZjBlMDVl/MWI3Y2RkYzc4NmJl/Yi5qcGc.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#5",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#6",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 8,
    tag: "Marketing",
    src:
      "https://beintheknow.co/wp-content/uploads/2016/01/Marketing-Tools.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 9,
    tag: "Data-science",
    src: "https://wallpaperaccess.com/full/1704443.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 10,
    tag: "Data-science",
    src:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e535e1dd378190007f41e88%2F0x0.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
  {
    id: 11,
    tag: "Business",
    src:
      "https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed inventore aspernatur doloremque recusandae quibusdam eaque iste neque iusto repellendus, asperiores laudantium exercitationem harum hic repellat beatae magni voluptatem? Non, quibusdam!",
    lectures: [
      {
        number: "#1",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#2",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#3",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#4",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#5",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
      {
        number: "#6",
        heading: "Learning from lorem ipsus yeah baby",
        emoji:
          "https://w7.pngwing.com/pngs/1014/853/png-transparent-emoji-olympic-weightlifting-weight-training-crossfit-activity-sport-smiley-sticker-thumbnail.png",
        date: "01.09.2020",
        p:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium aut debitis sunt eos quas! Adipisci optio labore provident consectetur, expedita ipsam perspiciatis. Atque perspiciatis, necessitatibus delectus quibusdam illum veniam.",
      },
    ],
  },
];

export const Provider = (props) => {
  const [myImg, setMyImg] = useState(imgs);
  const [all, setAllyeah] = useState(true);
  const [SwitchOn, setSwitchOn] = useState(false);

  const setFilter = (e) => {
    e.preventDefault();
    const { index } = e.currentTarget.dataset;
    filters[index].status = !filters[index].status;
    updateFilters();
    updateImgs();
  };

  const setAll = () => {
    filters.forEach((filter) => {
      filter.status = false;
    });
    setAllyeah(true);
  };

  const updateFilters = () => {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      setAll();
    } else {
      setAllyeah(false);
    }
  };

  const updateImgs = () => {
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if (img.tag === filter.name && filter.status === true) {
          newImgs[a] = img;
          a++;
        }
      });
    });

    setMyImg(newImgs);
  };

  const userContext = {
    myImg,
    all,
    setFilter,
    setAll,
    SwitchOn,
    setSwitchOn,
    updateFilters,
    updateImgs,
    filters,
    imgs,
  };
  return (
    <Context.Provider value={userContext}>{props.children}</Context.Provider>
  );
};

export const UsersContextProvider = Provider;
export const UsersContext = Context;
