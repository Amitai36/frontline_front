import { useRef } from "react";
import { Cancel } from "@mui/icons-material";
import { Box, Stack, TextField, Typography } from "@mui/material";


interface InputTagsProps {
    setTags: React.Dispatch<React.SetStateAction<string[]>>
    tags: string[]
}

const InputTags = (props: InputTagsProps) => {
    const { setTags, tags } = props
    const tagRef = useRef<HTMLInputElement>();

    const handleDelete = (value: string) => {
        const newtags = tags.filter((val) => val !== value);
        setTags(newtags);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <TextField
                onKeyDown={(e) => {
                    if (e.code === "Enter" && tagRef?.current?.value && tags.length < 6) {
                        setTags([...tags, tagRef.current.value])
                        tagRef.current.value = ''
                    }
                    else if (e.code === 'Backspace') {
                        handleDelete(tags[tags.length - 1])
                    }
                }}
                inputRef={tagRef}
                fullWidth
                variant='standard'
                size='small'
                sx={{ margin: "1rem 0" }}
                margin='none'
                placeholder={"Enter tags"}
                InputProps={{
                    startAdornment: (
                        <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                            {tags.map((data, index) => {
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            padding: "0.3rem",
                                            height: "100%",
                                            justifyContent: "center",
                                            background: "gray",
                                            alignContent: "center",
                                            color: "#ffffff",
                                            margin: "0.5rem ",
                                        }}
                                    >
                                        <Stack direction='row' gap={1}>
                                            <Typography>{data}</Typography>
                                            <Cancel
                                                onClick={() => {
                                                    handleDelete(data);
                                                }}
                                                sx={{ cursor: "pointer" }}
                                            />
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </Box>
                    ),
                }}
            />
        </Box>
    );
}

export default InputTags