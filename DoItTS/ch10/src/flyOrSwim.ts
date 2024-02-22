import {Bird, Fish} from "./BirdAndFish";

export const flyOrSwim = (o: Bird | Fish): void => {
    // if (o instanceof Bird) {
    //     (o as Bird).fly()
    // } else if (o instanceof Fish) {
    //     (<Fish>o).swim()
    // }
    if (o instanceof Bird) {
        o.fly()
    } else if (o instanceof Fish) {
        o.swim()
    }
}

