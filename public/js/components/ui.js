
export function upcomingEventCard(event_details) {
    let card = document.createElement('div');
    const cardClass = [
        "w-full", "flex", "flex-col", "bg-neutral-900", "rounded-md", "hover:shadow", "shadow-text/15", "p-2",
        "transition-all", "ease-in-out", "duration-100", "cursor-pointer", "gap-2", "relative"
    ];
    card.classList.add(...cardClass)

    let title = document.createElement('p');
    const titleClass = ["text-text", "text-sm", "font-bold", "w-full", "text-left"];
    title.innerText = event_details.title
    title.classList.add(...titleClass);
    card.appendChild(title)

    let desc = document.createElement('p');
    const descClass = ["text-text", "text-xs", "w-full", "text-left"];
    desc.innerHTML = event_details.description;
    desc.classList.add(...descClass);
    card.appendChild(desc)

    let time = document.createElement('p');
    const timeClass = ["absolute", "top-2", "right-2", "w-fit", "bg-accent", "py-1", "px-2", "text-[6pt]",
    "text-text", "rounded-sm", "flex", "items-center", "justify-center"]
    let t = new Date(event_details.start_time)
    time.innerText = `${t.getHours()}:${t.getMinutes()}`;
    time.classList.add(...timeClass);
    card.appendChild(time)

    console.log(event_details)
    return card;
}