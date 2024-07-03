import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RatingSize = () => {
    return (
        <Stack spacing={1}>
            <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
    );
};
export default RatingSize;
