import { SearchOff } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";

interface SearchButtonProps {
    value: string;
    handleSearch: () => void
    setValue: React.Dispatch<React.SetStateAction<string>>
    disabled: boolean
}

const SearchButton = (props: SearchButtonProps) => {
    const { disabled, value, handleSearch, setValue } = props
    return <>
        <TextField
            disabled={disabled}
            onKeyDown={(e) => {
                if (e.code === "Enter") {
                    console.log("search")
                    handleSearch()
                }
            }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position={"end"}>
                        <Button onClick={handleSearch} disabled={!value} size="small">
                            <SearchOff />
                        </Button>
                    </InputAdornment>
                ),
            }}
        />
    </>
}

export default SearchButton