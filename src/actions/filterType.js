export const ALL_POLLS = -1
export const ANSWERED_POLLS = 0
export const UNANSWERED_POLLS = 1

export default function updateFilterType (filterType) {
    switch (filterType) {
        case 0:
            return 1;
        default:
            return 0;
    }
}

export function filterTitle(filterType) {
    switch (filterType) {
        case 0:
            return "Your Answered Polls";
        default:
            return "Unanswered Polls";
    }
}