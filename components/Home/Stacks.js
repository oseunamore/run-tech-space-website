import React from "react";
import Button from "../Button";

function Stacks() {
  const data = [
    {
      title: "Frontend development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join Frontend Development",
      image: "/images/fd.png",
    },
    {
      title: "UI & UX Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join UI & UX Design",
      image: "/images/ui-ux.png",
    },
    {
      title: "Artificial Intelligence & Data Science",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join AI & Data Science",
      image: "/images/ai.png",
    },
  ];
  return (
    <section className='container py-20' id='stacks'>
      <h2 className='heading2'>Community Stacks</h2>

      <div className='mt-20 flex flex-col  space-y-20 md:grid-cols-2'>
        {data.map((item, index) => (
          <div key={index} className='stacks grid gap-12 md:grid-cols-2 '>
            <img
              src={item.image}
              alt=''
              className='w-full self-end justify-self-end md:order-2'
            />

            <div key={index} className='item-center self-center '>
              <h3 className='mb-3 font-semibold md:text-3xl'>{item.title}</h3>
              <p className='text-lg font-normal'>{item.text}</p>

              <Button className='mt-5'>{item.btn}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stacks;