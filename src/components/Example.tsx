import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export function Example() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });

        // Tự động chuyển ảnh
        const interval = setInterval(() => {
            const nextIndex = api.selectedScrollSnap() + 1;
            if (nextIndex < count) {
                api.scrollTo(nextIndex);
            } else {
                api.scrollTo(0); // Quay lại ảnh đầu tiên
            }
        }, 3000); // Chuyển ảnh mỗi 3 giây

        // Dọn dẹp khi component unmount
        return () => clearInterval(interval);
    }, [api, count]);

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                <CarouselItem>
                    <Image 
                        src='https://img.freepik.com/free-psd/skin-care-horizontal-banner-template_23-2149090191.jpg?w=1060&t=st=1725682139~exp=1725682739~hmac=056e3a5a83eb8ac5bd739aeffeaab1e482123262947e6777f3bc1805c72db959'
                        alt="Image 1" 
                        width={1600} 
                        height={584} 
                        style={{ width: '100%', height: 'auto' }}
                        quality={100}
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image 
                        src="/images/banner1.jpg" 
                        alt="Image 2" 
                        width={1600} 
                        height={584} 
                        style={{ width: '100%', height: 'auto' }}
                        quality={100}
                    />
                </CarouselItem>
                <CarouselItem>
                    <Image 
                        src="/images/banner3.jpg" 
                        alt="Image 3" 
                        width={1600} 
                        height={584} 
                        style={{ width: '100%', height: 'auto' }}
                        quality={100}
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}
