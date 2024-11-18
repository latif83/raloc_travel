import Image from "next/image";

export default function Listings() {

    // Sample list of opportunities
    const opportunities = [
        {
            image: 'https://i.pinimg.com/236x/25/30/04/25300440c5b32795f496a5f1e9425f7d.jpg',
            title: 'Internship in Paris',
            type: 'Work Abroad',
            deadline: '2024-12-15',
        },
        {
            image: 'https://i.pinimg.com/736x/2f/fa/c3/2ffac39acf2ae7a5793a9290b1d83a85.jpg',
            title: 'Cultural Exchange Program in Japan',
            type: 'Tour',
            deadline: '2024-11-30',
        },
        {
            image: 'https://i.pinimg.com/474x/f8/f7/2d/f8f72db32fb076c5cc99b9ef79381165.jpg',
            title: 'University Scholarship in Canada',
            type: 'Study Abroad',
            deadline: '2025-01-10',
        },
        {
            image: 'https://i.pinimg.com/474x/b7/f9/3f/b7f93ffbc3c6b594b9286bc688861bd0.jpg',
            title: 'Work and Travel USA',
            type: 'Work Abroad',
            deadline: '2025-03-01',
        },
        {
            image: 'https://i.pinimg.com/236x/bc/84/80/bc8480d1984b8c4a49d2a6c3a90efe1a.jpg',
            title: 'Volunteer Program in South Africa',
            type: 'Tour',
            deadline: '2024-12-20',
        },
    ];

    return (
        <div className="sm:py-8 sm:px-5 py-4 px-3">


            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold mb-5">Listings</h2>

                <button type="button" className="border border-black hover:text-white p-3 rounded-xl hover:bg-black transition duration-500 flex items-center justify-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                    <span>
                    New Listing
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                {opportunities.map((opp, index) => (
                    <div key={index} className="rounded overflow-hidden shadow">
                        <img src={opp.image} width={600} height={600} className="w-full h-32 object-cover" alt={opp.title} />
                        <div className="p-3 text-center">
                            <h2 className="font-bold">{opp.title}</h2>
                            <p className="flex flex-col items-center justify-center gap-1">
                                <span className="font-medium">
                                    Deadline:
                                </span>

                                <span>
                                    {new Date(opp.deadline).toDateString()}
                                </span>
                            </p>

                            <p className="flex gap-1.5 items-center justify-center">
                                <span className="font-medium">
                                    Applicants:
                                </span>

                                <span>
                                    5
                                </span>
                            </p>

                            <button type="button" className="p-3 flex mx-auto items-center justify-center gap-1.5 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-500 mt-2 rounded-xl">
                                <span>
                                    Manage
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>))}

            </div>

        </div>
    )
}