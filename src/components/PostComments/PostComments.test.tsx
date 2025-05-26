import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './PostComments';

describe('Testes do PostComments', () => {
  it('Adiciona 2 comentários', () => {
    render(<PostComments />);
    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Comentário 1' } });
    fireEvent.click(button); // primeiro comentário

    fireEvent.change(input, { target: { value: 'Comentário 2' } });
    fireEvent.click(button); // segundo comentário

    expect(screen.getByText('Comentário 1')).toBeInTheDocument();
    expect(screen.getByText('Comentário 2')).toBeInTheDocument();
  });
});