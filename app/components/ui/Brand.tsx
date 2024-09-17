import Image from 'next/image';

export default function Brand({ URL, name }: LinkProps) {
    return (
        <div>
            <a href={URL}>
                <Image
                    src={'/logo.svg'}
                    alt='Blog Logo'
                    width={50}
                    height={50}
                />
            </a>
            <p>{name}</p>
        </div>
    );
}
