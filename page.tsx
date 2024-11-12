import Link from "next/link";

export default function Home() {
  return <div>

  <h1><b>Hello World</b></h1>
  <p><u><i>This is some normal paragraph text,<em>and this is some emphasized text.</em></i></u></p><br />
<p>This is some normal paragraph text, and this <span className="bolded"> word</span> is bold for decoration.</p><br />
<Link href="/about"> Try to go to abouts us</Link><br />
<Link href="/footer"> Try to go to footer</Link><br />
<Link href="/about/contact"> Try to go to contact us</Link><br />
<Link href="/items">Please see details of items</Link><br/>
<Link href="/Details">list of Grocery</Link> 
</div>
};
