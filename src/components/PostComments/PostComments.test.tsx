import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Testes do PostComments', () => {
  it('Adiciona 2 comentários', () => {
    render(<Post />);
    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Comentário 1' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Comentário 2' } });
    fireEvent.click(button);

    expect(screen.getByText('Comentário 1')).toBeInTheDocument();
    expect(screen.getByText('Comentário 2')).toBeInTheDocument();
  });
});