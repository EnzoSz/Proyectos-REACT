import { useCatImage } from "../hooks/useCatImage";
export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'milei' });
    return (
        <div>
            {imageUrl && <img src={imageUrl} />}
        </div>
    );
}