import React, { Component, Fragment } from 'react';

import { Tag } from '../Tag';

type Tags = {
  size: 'normal' | 'small';
  label: string;
};

type Props = {};
type States = {
  tags: Tags[];
};

class TagList extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      tags: [
        { size: 'normal', label: 'Red' },
        { size: 'normal', label: 'Blue' },
        { size: 'normal', label: 'Yellow' },
        { size: 'normal', label: 'Green' },
      ],
    };

    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleTagRemove = this.handleTagRemove.bind(this);
  }

  handleTagClick(index: number) {
    const { tags } = this.state;
    tags[index].size = tags[index].size === 'normal' ? 'small' : 'normal';

    this.setState(() => ({ tags }));
  }

  handleTagRemove(index: number) {
    const { tags } = this.state;
    tags.splice(index, 1);
    this.setState(() => ({ tags }));
  }

  render() {
    const { tags } = this.state;
    const tagItems = tags.length
      ? tags.map((tag, index) => (
          <Tag
            key={tag.label}
            size={tag.size}
            onClick={() => this.handleTagClick(index)}
            onRemove={() => this.handleTagRemove(index)}
            className="cr-mr-1"
          >
            {tag.label}
          </Tag>
        ))
      : 'No more tags.';

    return <Fragment>{tagItems}</Fragment>;
  }
}

export default TagList;
