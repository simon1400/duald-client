import { FormControl } from "@mui/material"
import { InputS, SearchS } from "./styled"
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <SearchS>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputS startAdornment={<SearchIcon />} />
      </FormControl>
    </SearchS>
  )
}

export default Search