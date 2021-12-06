import { FC } from "react";
import { RxInput } from '../../UI/rx-input/RxInput';
import RxSelect from "../../UI/rx-select/RxSelect";

import './PostFilter.scss';

interface PostFilterProps {
  filter: any;
  setFilter: any;
  children?: React.ReactNode;
}

const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }: PostFilterProps): JSX.Element => {

  return (
    <div className="post-filter">
      <RxInput
        value={filter.query}
        onChange={event => setFilter({ ...filter, query: event.target.value })}
        placeholder="Search by title..."
      />
      <div className="post-filter__select">
        <RxSelect
          value={filter.sort}
          defaultValue="Sorting"
          onChange={sort => setFilter({ ...filter, sort })}
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By description' },
            { value: 'author', name: 'By author' },
            { value: 'createdAt', name: 'By date' },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;