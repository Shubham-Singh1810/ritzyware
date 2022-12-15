import React from "react";
import Card from "./Card";


function Home() {
  const cardInfo = [
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAbFBMVEX///8jHyAAAAAlHyEgHh+3tbbMzMwYGBgaGBlLS0v8/PzGx8YTEBE6Nzh4eHggGhwNCgyTkZKbm5vk4uMsKispJSYYExVGREX29PXBv8Dt7OxpaGkKAANBP0AlJSWFhIRTU1NdXV3Y2NimpqaTBpJcAAAC6klEQVR4nO2ai3LqIBCGIVkTSmmwGjCpt9S+/zseglbbaoD2dD3MnP06cXQC4Xf/5WKBMYIgCIIgCIIgCAILyaRj2c8Q6V98K66tSQmsWhe42PXStzWhQbKuFzXADjgaoDfbik3GwYlY7mDHnQg8DQbM/GE0Y8oL9lwAQAtQIsD9q+G6LGYhL1bKlIAUB+OMAF66d2ofCsST4NrwGmoURM3HTCtVE8gH9qRdzFRTYfDorsamaYBiMXH/b+nY83x0JaSBeQ0GSUPnLq8hGAevQWNpGHM+NQ4czQuWj4a4F/9HHHLQQF7ko4G8yEcDeUFxyE0DeZGPBvIiHw3kRT4ayIt8NJAXFIfcNJAX+WggL/LRQF5koEF+w4tnLAmpcTB8gxIH+Z3/V+PtHST3Cw6qecSgd5ffQ4nHQRsuahHm8wbR6YrVEVAD6JgGybY2aYeOnzZAgX/cCU3e4HMapsPAtspEdueObV9IKf4VtWcBEWub9JCfa/BejEk/7UWvkDX42mIZ2N6UXVPA97gpLIwLQ2iPVcq92GhhIzlurbBG+bfaY2M13uHz+W42nY/j7p/7q/bD6iHGsBq2w+XjajUM22glX/J1cQhJ8InSsel8+Wxbt/xEtM7HVhKeHy01+rkHY0zrMa3haSICR0DOBeTxPEoM95yqOOekbrnZrJNqdikxvryGy3WN+NAlDDf2kSUEMMWIRKTs5196vdjJ32whQQNrxddRvXi7qwTG3orriaU9+F51L5bb8noMVut7BOLcr5q5voqD0UX/fh8tNVzH6jyysjfmKs3FcDiVcGMdkga2cKPyOOI+KX5zwhTH26sBLz1nxXGO8u3fEOHssX4KU3WFJeLVmtNBK3FDRGncgtj4xRqMJ6BQJLw8uIb9cS/3lcWVhvFwmS5PGtZIGuQgTNK6CdzPAxQFbByYAJJWKqAqpHRwKz0ldMpqrV1EZuifa0imCywYf0FDWkk3RN13/iIIgiAIgiCIf8ofLM1W27yMxYMAAAAASUVORK5CYII=",
      title: "Web development",
      discription:
        "Our web application developers understand the importance of a strong information architecture design and integrated branding that draws customers in from the moment they land on your website.",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "Web development",
      discription:
        "Our web application developers understand the importance of a strong information architecture design and integrated branding that draws customers in from the moment they land on your website.",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "Web development",
      discription:
        "Our web application developers understand the importance of a strong information architecture design and integrated branding that draws customers in from the moment they land on your website.",
    },
    {
      image:
        "data:image/png;base64,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",
      title: "Web development",
      discription:
        "Our web application developers understand the importance of a strong information architecture design and integrated branding that draws customers in from the moment they land on your website.",
    },
  ];
  const clientSpeeksdata = [
    {
      author: "Raman",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe asperiores illo quae amet quidem iusto dolor nulla quibusdam, tempora assumenda voluptatum natus ullam magnam eveniet sequi voluptatibus nihil. Libero sunt dolorum nihil fuga!",
    },
    {
      author: "Vikash",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe asperiores illo quae amet quidem iusto dolor nulla quibusdam, tempora assumenda voluptatum natus ullam magnam eveniet sequi voluptatibus nihil. Libero sunt dolorum nihil fuga!",
    },
    {
      author: "Shubham",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe asperiores illo quae amet quidem iusto dolor nulla quibusdam, tempora assumenda voluptatum natus ullam magnam eveniet sequi voluptatibus nihil. Libero sunt dolorum nihil fuga!",
    },
    {
      author: "Jhon",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe asperiores illo quae amet quidem iusto dolor nulla quibusdam, tempora assumenda voluptatum natus ullam magnam eveniet sequi voluptatibus nihil. Libero sunt dolorum nihil fuga!",
    },
    {
      author: "Tina",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe asperiores illo quae amet quidem iusto dolor nulla quibusdam, tempora assumenda voluptatum natus ullam magnam eveniet sequi voluptatibus nihil. Libero sunt dolorum nihil fuga!",
    },
    {
      author: "Vijay",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe asperiores illo quae amet quidem iusto dolor nulla quibusdam, tempora assumenda voluptatum natus ullam magnam eveniet sequi voluptatibus nihil. Libero sunt dolorum nihil fuga!",
    },
  ];
  return (
    <section id="home">
      <div className="homeSlider"></div>
      <div className="cardlist">
        {cardInfo.map((v, i) => {
          return <Card v={v} />;
        })}
      </div>
      <h2
        style={{
          textAlign: "center",
          background: "navy",
          color: "white",
          padding: "10px",
        }}
      >
        <u>Why Choose Us</u>{" "}
      </h2>
      <div className="chooseSection">
        <div className="leftSection">
          <h3>We have Team Of Experienced Designers And Developers</h3>
          <p>
            Ritzyware is a fast growing IT Consulting that offers top notch
            business services and IT solutions for our respected clients. We{" "}
            <br />
            follow latest trends and enhancement in the IT world to make your
            application user-friendly, light weight and data-optimized. <br />
            <br />
            You maybe a start-up, stabilized organization or a big enterprise,
            we will support you to grow your customer base and their <br />
            experience. We will provide you round the clock support for your
            business and customers. “We Value Relationship”.
          </p>
        </div>
        <div className="rightSection">
          <details>
            <summary>Customer Satisfaction</summary>
            <p>
              Our goal is to establish a long-lasting relationship with our
              clients. Customer satisfaction is our top priority. We guarantee a
              prompt and efficient response to your inquiries and guarantee that
              our deliverables will meet your standards.
              <br />
              <br />
              We are dedicated to upholding a trustworthy relationship with our
              clients, offering the most innovative suggestions for their
              company's growth, and continuing to provide top-notch services in
              every project we do.
            </p>
          </details>
          <hr />
          <details>
            <summary>Quick Support and Maintenance</summary>
            <p>
              Our goal is to establish a long-lasting relationship with our
              clients. Customer satisfaction is our top priority. We guarantee a
              prompt and efficient response to your inquiries and guarantee that
              our deliverables will meet your standards.
              <br />
              <br />
              We are dedicated to upholding a trustworthy relationship with our
              clients, offering the most innovative suggestions for their
              company's growth, and continuing to provide top-notch services in
              every project we do.
            </p>
          </details>
          <hr />
          <details>
            <summary>Creative Team</summary>
            <p>
              Our goal is to establish a long-lasting relationship with our
              clients. Customer satisfaction is our top priority. We guarantee a
              prompt and efficient response to your inquiries and guarantee that
              our deliverables will meet your standards.
              <br />
              <br />
              We are dedicated to upholding a trustworthy relationship with our
              clients, offering the most innovative suggestions for their
              company's growth, and continuing to provide top-notch services in
              every project we do.
            </p>
          </details>
          <hr />
          <details>
            <summary>And Much More</summary>
            <p>
              Our goal is to establish a long-lasting relationship with our
              clients. Customer satisfaction is our top priority. We guarantee a
              prompt and efficient response to your inquiries and guarantee that
              our deliverables will meet your standards.
              <br />
              <br />
              We are dedicated to upholding a trustworthy relationship with our
              clients, offering the most innovative suggestions for their
              company's growth, and continuing to provide top-notch services in
              every project we do.
            </p>
          </details>
        </div>
      </div>

      <div className="productsSection">
        <h2>
          <u>Our clients and Products</u>{" "}
        </h2>
        <div className="ourClients">
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABOFBMVEX/AJr8Apr////8Apf/AJn7+/v/AJf7///6A5r//P//+P//AJz+//7/+v///v/6//37/vn3////9v/2AJPyAI7/8//1//v4AJLmAI7sAIzyAJf+ApLuAJL6+////Pn/8P/dAI3khcHnAIb8AaDeAIf0AIvw///YUqL+2/bjYrPyqdvuAIb5//biAIbSAIHXAInof8LmktTrjs3cAHz96P7khb71vuXQHYf53fDbVa3kL5zsqtL92PjXOpvjarjvoNPcjcjcOaHcgcTfk8LaiLrWZqzZRqLmX6/fd7/1l8zyrtrSXq31yePddbPgmcC/Lo3emtLIAHjKWaDwCJ/eNY7j2OX7xvXVOZ7EQI7jr9LJaaTtzuv5AIDWSJPOGJL4we7jOprfTqy6VY73ttrmY7zmg9LVJaHJTKW1LRUmAAAQLUlEQVR4nO2biXfaxtbA0TYaoWUkJLQihJFYbMC4hoAX4S2BuF763DgvTZrGTl/ea////+C7I2zH7WtP8p1vwX1nfif1sRFo+enemXsHtVRiMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPx5BBFcdWn8NcBIbTqU/jrwGR9LZCCIIvjRJaMXwYJiHPsGsaCIKz6XJ48AhL8g2+29mwm68sIYmOfd+V8xmR9mVCdVTXZsrYD1V71uTx5Qrwuu0R2N3zVW/W5PHk4bl0mikllsQLiS3jCgWYQQjaaKisdvgSVxTNZX4fnMVlfTURlyZp82FTxqs/lqaN6S1n8YZP7C8oSC1RVffzKn7358du+ftPjd3n2fWRx9sOnuP/OCa8SqKQ5jp7tw89lbb38c8nv3vC7PXAFD788vOGPfqeyeEPWyGGgevBKmqawFXO/3+EfHmjF4KKhLaCnDn/CT4QQ5vAfyvKKt/1uJ8sPRihafvzfZT2SWMji72TRo9MPc38mCz+pVIWrEzwnG2S9ngenlqZYFWq+7wc2TtPHsgRVFbHtNJs9T1DF4loebRU5wW42A78W0ii5lwUhWxK5sObXarUIwe5pfnv2KUQWkams0L87lCCIj/amcjQ3qVwc4qeykkMjJeplnaN3k8n+6XFGBTmD3ZP9/f3n8z3fDh8uGwuREDRm6yfPn7+YLxq9lsfdywo57DnNQefyxfOjrZcfh7XPEhEKQ7+xe3p0dHTZmTadiK40RCCLJ33tW78xO93eONtYW2R2JODHg4DnOFnWGGbNVgui9f9fzB9BM65xflGVKfF4Y9bCjd2Lqm4ohhF3T4b2I1nB6PIiqfCaZlaTi9Oh83AJXEn1pyfdctk0Tbkyvj0dhuLdp66RM13LY73My3wy3l8fXqNCFtRZivzd364S3dDqspLczjM7fZB1rTrT86vJxcX7yXfrwwAJT8AWhDeMGNOriiWZEmDJfHf9+41YNkzLskyNGO9ndnFbIQ1wcPxeMdv9vmEoRDOVi1cNDi/XOq+x/2MOedU36/266fb1i18cjFV65XbvdZfvy1q9DiI1Q85/9SBqlrKMvyeKReS47xLXqlxNYeyix4KPBdOrcVmDTxBNq3b3p71WSYUDrTQZEU2SzY2KbEBWEJnnjX47uYjrPAy/MvzJa3q+sOlUJQioN08IL9XrdSi9Dd5ox8l6ExIHizhMm5fj2JIkAy7PhDdI2rgTpCmCGHE+5CZP+0D4ID2K8mYTQQVPZcHuNc2A/+BYhqSVDzOhRIMLRc3zPCYaDzuDjyi6ka8PIjVCeKVdN8gSshe6qUsSD5eq8XC1LtxQ0FT8yROz3R3aMNKmQtAZ92nwFWiaJLkmGKGJw+Hey6TdNvlia9uSiaSQ7sxORRinB7dtunONwCa48rpbPfY4kAW3g6dIbcuSDAM+a1ZPg4gOW97madKm5xAbRnEDXDd5NoLbtVpZooiiTmJqZZPIeqUMd1kidUgPTeaVCgwmpkJi7XCARC61b7pSPyaSW+5OPk0qsEGqmzlkDq0UPoxhU53I5Xwy6VZlokl16yJToRhA83JdIkZdT5IEhi1NaY/3EI7uZZmyMu52q4pGiGLG+TCCsU4cnlYtuW7CvYKBU+bNOum71ZMhhPBKl1Xpnf8EN9zoly92Z4sXuQX3GM7RjSfzzqv9xIVN7viHlhByzjaMLpZr5OcwQQ3fXlXbUt9VjgJVSEvNM0uXiR5PXg0H2fTtWdltS279IAw5FJxZptmOu+c32d7uux3ZqD4bCGHkbWlFXNV3Tqab2XS+45qGplQWHhRVrU7SVwzFrFwc/Tifv3gvyxDQWvU8WHGBCkefjiHgtcrzzVpoN1/ny9TQn09bLSd71YVxRYq3AxSiRg6DWt96M/Ptmo1/Gj2rxJZudIdeJNqzBKYGwt9OA6gLotbwUI8ViUx8AaNhbvUhbH8M0prt9KYH36xnJcGOWlvFgfju28yJvF7vw1gjkmycBmoYjd7I8Gl3fJkFrZbdyuZ52+A1K78prVYWVKPzSh+y73YoqJyY9jplGOs1fjJCOAzV3imMGVJ7kiHsn+pEls3uDx5GIVbtaPSpXZbM8m7gCf5JDGWAXL3x0sjzBLv0fReCwa3MYJC5yeO6KVnzQeiBSDvotdLQ9pay4LiXTloScYoHZ21ekuWrQAyDLdALtcSvGXRB12FoZ4uc1GHm2WqtVlZa8k74er3Pn9S4lPNsPMxJbJj6KUz8GF/bN2MYmLTuEKHsDFKS1yAAgwBq8SDIXlVh+nOPBthuTFxCXP3F961a4LSCZrN5WYbpL76sCUIDZMFMN16b9iIVqVCmY0/AraUsM5mha1qkh+GlJsEr+z7yNi8gnOPq6QAc0j7MThvnMKbCANlc7QBfyNLqprzugSyo0JsTDWos/SOdlUrX3mgHpkat20DeIHfhYpT3V98UbG8ffZfAHEomA9Q6HhOZ1MvvjraPjmALbHtXBVnuRiAI/pnVB8um3r36mDWdonxH6jKyTDnfFMOio8GdCgxi2sRHqFOGaDZgrMd2UcqD4eHEgjKwchyuWJZdyIpfQpfDCVBBgiy4stceLQ5Ve7Qju6Y2bgje6zGVZRoKACIIT3TT5SXyPot+WlQhQ/uSESsGL1uwUTEgpeT+BGTZl7ELSeUaspx0rzq9WhhSWc5S1kZW8ormGv1cobUCyHKK1LeeB6IalYqyWcDOllGXXeM0XO1sWMKFLH0dym0O6oPerWzWzfJSFheOurJJZdnex4TKkgmBK6HCFFrwQyyM97jWOo0K6R7Y1jdpRablPhLE7Dbu991iu6lUJ7sBgh4wcp7B3oh22CyqfAifB1nBNoyaRJ/bDwtj0KJ3yoola0e1r1ks+z/jQdbLz7LIb2Rp5jKyFlUqyzBoLe4WwO9QfI/3sHOgF3WAtpQFb1hW//Xch6QLZxPLpS0BVPCm207OvvceZMnPeph2MI9lNQ8tmAurnc/NIAwIs0SXFf5q5bLWCllwbiBLxc1bGdrk8kevaGjtUZfcyepUXQgko1Itl8uVMoWqU/Q8Q0EhSyIVHV7VdYgso6jWlDNfFIQ0mr6rWhrRYj2GPHWtiyG8VsjS5K1WUWeCrN07WeJowwVZlUX4cJKYE2dVWZOMFcvCXLhmwNyuv/LoApwQ3snaC6ksTGW5ciHrw9iFxNr5R2fJq1fwDzjPHMHZhTQ03L+/7XQetgI/njeoCCgUBh+/ySsWzWCaetq3PpVF63N+rYWXaRjtlkGW/MlXIbJo3df5PDylJaGTQOGlXfkrHbOoLP63srRCFr6TtXMnC027MgRPd+qF93i2Hdg2DtXWcQKy2jkUEQK8Dq/ZgOeFxSQRheG1EEx3t/NKuxBEqsfhMrL+TZb2yeecLQXyWbn0HqIo5WpzvQ6yjp6ALIXKKtbguXBwL6tYgC/SEGQNBXF4YcE1xHOYy5AglOCn7fhZ0xZEHO2NoUvqJzMPqoKCKAr8hhPiCBq9UMSc10KtYWNxpRNN4QnZqkXO2p/J4narcCBy1iyJdzUoxv6+axJizO0VV/C1Nd5YygIwN5hoPAzw06Ki8cJBMWZ1h2raPKQdmn428AQ6FaCw5v/zTX7UiBAu+Z+sWHetq6ZYlFFRhLKT/P2LRpoiLKTYsTmhFqZh6H/Y6YMi8m0QOdtFt7PWKhaw6JhFZfGfAg5Nd2B4ssYLKJPBJJ12wpuxW4/dyhSlT0kWBlnGb2RBnFFZqtOJQZacdJpR8Y2G2Jsn/bq+PUBcWNuS24ZFxgu6JJ1CNmdr0BwmBzUVJsNscdDZdBBOIxtvvqNGfiuLeyRLA1lR85BI0MmfZd6dLCHbKBNDakOwrTgNqSzNVDqfZSlUVtFYCCBLLmSVUpzl0OkSedwZtUCWnZ1X4G63objnsD0ct6H3tfK3I6yqXM1/kbTrZnvSjDAKXozblcmrYdMOuetR3pZ4zVir3cvaapXuI0s3jUJW6B1XZNN19Y3NFgQqFrzRdmyQ2C13PLzSh7mWs6HRVzrFAJ9yo8eyYAjbIZpJoDdMOeeg3DfpUsl3nc3vNz8cViRFMs2ujzgVDbYtmqTt8fPZdDp9tVFua4okTwZCiGZjt902Kvnzy5cvDyZtne5hl7MLWTKUDsJnWRBZ+02M0eDI6MtwXybz6eYwm55PqrGl8PJhpq561QFkKXHf+K2syn1kwWxomhKVJXLZmUVoj8IngERMRXHd9lZAZUXDSUz7YmJUd3YS3WpbRLLiXccOvd2ySwsvl/ZJstG2DIncDh/JQo9l8SBLRd7wTKErHFq8czG56Oo8cQm0Azf2ytezwjVZil1lUUyGKqShrGhm5eZuNhzsuCaNLCEVOO/mTZnoCsxnJkQbkV2iVDYyG8Z7bNde55rh6parQZbBbKpLZvKsiSCJYKaUYCozDFnjCf0ugxjrPvacbRkKeG3LET6PWYZm7UP7gyLn7Xue9GXIWN6QDZdooH7npias+ttpsXYaG5Jb3ROKb/BrgwmRFTJuFC2rWhvlVt20cp8ulaBwdhu36UJN0fcopqUfjSI69XM4bf2wA82yUl8u6UFoJScD2CFC/rzbXnY/QL9v1qvPhyHXqv2LzivKPz2BhrAYCT9XNUWzNgIVC2LUm55V+mWFxpqm1S3Lqpz9TRBW/YwgNDmdxDStNwOxkCU4a4arybdBUcGnfu/QIDDUNtWQjv+OfzSOl8vBlmzEk4Msur6TFdY2vx0bUGZAaGm8qUx+9lMqS8DBx+2uQuj6C7xuxV2QyHl2+nNiadrOsXAni7vpysQtH9Q4TL+X8BonY1mq05rP1NzyeGuTTj+rliWWsrV8PFk4y2dDoFI/HCeTmVekIQ6dt5OkfPbag/tNC1FxMDvZGVdh+KnuXMyHDhLxUhayPTFbXOVjXS/DtrN5ZotUlsgJ2OvNTm53qkZZLyeTtb0BLuFISBsv8iSf+9xSFsT0PNfHh0NOpOEIjgd7R7ewN9hfcnvyQxOlq48sOC97kGWj5sNEkzZujocN8e7xdC7YfPshay07DxgyIicb3hxD9/d2Oup5j/taiD07G/6yWCx+/eGm2YoePeuArq+vh8eLDx/eTjcH18WDIdAEhL/8MvSdhz2HfmNx3Ajv/4ceJNSCzSnsrTObjpreiufBu3MCVIxF9HBtIYam5afl80Y4DOnTNPcPNMB7bA+VPKdWq4U4xWL0eFeQPZ5Qok2hoKZYeCQLmiAu8myo7ItvnIvpD4LHruH7J0Fo5ammdJH+QRZCGEN9i+nCPcarHtqX5yQiRJ+a+XxtHqJpUFo+nEVLdfXhSSC6/AsNm+BRwyAEeY9XTCCBrosnl5D4e1mq4EVIpY8K0BeLxR8RYteGFx/2zIn0wIJ4V6MLoggj4fL5ujTEK/5e53+D/+nq0kpXpxgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYjP8M/gt6QuQ+SF2v2AAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="clientSpeekSection">
        <h3>Clients Speeking</h3>
        <div className="clientReviewList">
          {clientSpeeksdata.map((v, i) => {
            return (
              <div className="reviewCard">
                <p>{v.discription}</p>
                <u>{v.author}</u>
              </div>
            );
          })}
        </div>
        <hr />
        <h3>Some Client Quotes</h3><hr />
        <div className="someClientReview">
          <div className="leftReview"><i>"
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            aperiam, numquam distinctio quisquam, beatae corrupti eaque unde
            nisi porro culpa harum animi iusto non. Doloribus explicabo
            temporibus, incidunt dolorem quas minus enim! Hic eum modi facilis
            suscipit mollitia asperiores ipsa repellendus fugit laudantium
            alias, inventore ratione amet soluta, sunt expedita, animi obcaecati
            dignissimos ab ut quae." </i><br />
            <u>Kisan</u>
          </div>
          <div className="leftReview"><i>"
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            aperiam, numquam distinctio quisquam, beatae corrupti eaque unde
            nisi porro culpa harum animi iusto non. Doloribus explicabo
            temporibus, incidunt dolorem quas minus enim! Hic eum modi facilis
            suscipit mollitia asperiores ipsa repellendus fugit laudantium
            alias, inventore ratione amet soluta, sunt expedita, animi obcaecati
            dignissimos ab ut quae."</i> <br />
            <u>Trupti</u><br /><i>"
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            aperiam, numquam distinctio quisquam, beatae corrupti eaque unde
            nisi porro culpa harum animi iusto non. Doloribus explicabo
            temporibus, incidunt dolorem quas minus enim! Hic eum modi facilis
            suscipit mollitia asperiores ipsa repellendus fugit laudantium
            alias, inventore ratione amet soluta, sunt expedita, animi obcaecati
            dignissimos ab ut quae." </i> <br />
            <u> Sangam</u>
          </div>
        </div>
          <hr /> <div style={{display:"flex", justifyContent:"space-evenly", background:"gray", color:"wheat", padding:"10px"}}>
            <p>All</p>
            <p>Web Development</p>
            <p>Hybrid Apps</p>
            <p>Lms</p>
          </div><hr />
      </div>
      <div className="imageGallery">
        <div>
            <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/301" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/302" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/303" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/304" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/305" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/306" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/307" alt="" />
        </div>
        <div>
            <img src="https://picsum.photos/200/308" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
