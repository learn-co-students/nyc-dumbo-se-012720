import React from 'react';

const arrayOfPlaneteers = [
  {
    name: "Greta Thunberg",
    fromUSA: false,
    born: 2003,
    bio: "It could be argued that without Greta Thunberg, there would be no youth climate strike movement. The 16-year-old Swedish climate activist has been striking outside of the parliament building in Stockholm since last August, and is the founder of the Fridays for Future youth climate strike movement. Her impassioned speeches have left politicians speechless and millions of young people inspired around the world. “Our house is falling apart and our leaders need to start acting accordingly because at the moment they are not,” Greta demanded of Members of the European Parliament and EU officials in Strasbourg in April.",
    quote: "Yes, we are failing, but there is still time to turn everything around — we can still fix this. I want you to act as if the house was on fire. Because it is.",
    pictureUrl: "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/greta.jpg",
    twitter: "@GretaThunberg"
  },
  {
    name: "Thomas Tonatiuh Lopez",
    fromUSA: true,
    born: 1995,
    bio: "Thomas Tonatiuh Lopez, 24, was arrested at Standing Rock while praying. It was traumatic but helped him find his place as a leader, in the tradition of his father who is a Sundance Chief. Both of Lopez's parents were Indigenous civil rights leaders in the 1970s, both taking part in the occupation of Alcatraz in 1969 and Wounded Knee in 1973, which called attention to dismal living conditions and civil rights abuses that Native Americans continued to endure. He himself has been an LGBTQ rights advocate. He identifies as Chicano, with roots in the Mexica people of Mexico, and Sicangu Lakota Oyate from South Dakota, though he grew up in Denver. He talked about the inclusive community he found at Standing Rock that compelled him to join the camp for three months instead of his initial one-day plan.",
    quote: "Even though I had a lot of pain come out of the experience of the arrest, it inspired a lot of people. And those are the things sometimes you have to do as a leader. You have to take that pain for our people so that we can inspire others to stand up.",
    pictureUrl: "https://s.abcnews.com/images/US/abc-thomaslivingportrait-jc-170224_16x9_992.jpg",
    twitter: "@tomvslopez"
  },
  {
    name: "Haven Coleman",
    fromUSA: true,
    born: 2006,
    bio: "Sloths were the main motivator for Haven Coleman’s dive into environmental activism. At just 13, she is already a co-founder and co-executive director of the US Youth Climate Strike. Despite the backlash she has received from classmates, politicians, and even strangers, Haven remains determined to continue her activism and bring about meaningful change. It was a fifth grade lesson about deforestation was the catalyst for her commitment to ending climate change. Having participated in climate work since she was 10, Coleman’s transition to founding her own climate-focused organization was only natural.",
    quote: "I  was so mad that we were making the world so sick and hurting so many people, killing so many people. I knew that it was not about saving the sloths, it was about saving all the organisms that live on it.",
    pictureUrl: "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/haven.gif",
    twitter: "@havenruthie"
  },
  {
    name: "Howey Ou",
    fromUSA: false,
    born: 2003,
    bio: "Sixteen-year old Howey Ou is part of a small but growing minority of young Chinese determined to press their country towards more radical carbon-cutting action. Together with her friend, they are also China’s sole winners of carbon neutral “green tickets” the UN is providing to 100 young people around the world. She conducted a public climate strike in front of government offices in Guilin in southern China for several days in late May – Greta Thunberg called her a “true hero” – before the authorities said she had to stop because she did not have a permit.The 16-year-old, who spends her spare time planting trees around her hometown, was nominated to travel to this week’s United Nations climate summit in New York by the youth activist group Earth Uprising. ",
    quote: "I found something I could do for society.",
    pictureUrl: "https://i.guim.co.uk/img/media/013fcfb2fe5755aabbca1bde23ee0ac6c0e32048/71_0_1260_756/master/1260.jpg?width=1300&quality=45&auto=format&fit=max&dpr=2&s=86c8c4ef954d8790909379da1bf90baa",
    twitter: "@howey_ou"
  }
]


class RandomButton extends React.Component {

  handleClick = () => {
    const randomPlaneteer = arrayOfPlaneteers[Math.floor(Math.random() * arrayOfPlaneteers.length)]
    this.props.addOnePlaneteer(randomPlaneteer);
  }

  render() {
    return (
      <div className="centered">
        <button onClick={this.handleClick} id="random-planeteer">
          Click to Add a Random Planeteer
        </button>
      </div>
    );
  }

}

export default RandomButton;
