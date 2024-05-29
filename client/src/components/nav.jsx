export default function Nav() {
    return (
        <div className="flex gap-12 bg-transparent ml-8 lg:items-left lg:ml-44">
            <h1 className="text-indigo-600 font-bold text-6xl">G</h1>
            <a href="/about" className="text-white ml-48 lg:ml-98 pt-4">Me contacter <span aria-hidden="true">→</span></a>
        </div>
    )
}