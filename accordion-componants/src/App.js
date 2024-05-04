import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      <ul>
        {data.map((item, i) => (
          <AccordionItem num={i + 1} title={item.title} text={item.text} />
        ))}
      </ul>
    </div>
  );
}
function AccordionItem({ num, title, text }) {
  return (
    <div className="item">
      <h2 className="number">{num < 9 ? `0${num}` : { num }}</h2>
      <h2 className="title">{title}</h2>
      <icon className="icon">-</icon>
      <p className="content-box">{text}</p>
    </div>
  );
}
