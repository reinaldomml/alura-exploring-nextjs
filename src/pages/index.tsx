import Link from '@/components/Link'

export default function Home() {
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Home online
            </h1>
            <Link href='/faq' className='mt-6 text-lg leading-8 text-blue-600'>
                Ir para o FAQ
            </Link>
        </div>
    )
}
